"use client";

import Image from "next/image";
import { FormEvent, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";
import {
  initialsFromProfile,
  roleLabels,
  type AppRole,
  type Profile,
} from "@/lib/profiles";

type DirectoryProfile = Profile & { avatar_url: string | null };

export function ProfilesDirectory({
  profiles: initialProfiles,
  currentUserId,
  currentRole,
}: {
  profiles: DirectoryProfile[];
  currentUserId: string;
  currentRole: AppRole;
}) {
  const [profiles, setProfiles] = useState(initialProfiles);
  const [fullName, setFullName] = useState(
    () =>
      initialProfiles.find((profile) => profile.id === currentUserId)
        ?.full_name ?? ""
  );
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const me = profiles.find((profile) => profile.id === currentUserId);

  async function refreshSignedUrl(path: string) {
    const supabase = createClient();
    const { data } = await supabase.storage
      .from("avatars")
      .createSignedUrl(path, 60 * 60);
    return data?.signedUrl ?? null;
  }

  async function onSaveProfile(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setMessage(null);

    const supabase = createClient();
    const { error: updateError } = await supabase
      .from("profiles")
      .update({ full_name: fullName.trim() || null })
      .eq("id", currentUserId);

    setBusy(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setProfiles((prev) =>
      prev.map((profile) =>
        profile.id === currentUserId
          ? { ...profile, full_name: fullName.trim() || null }
          : profile
      )
    );
    setMessage("Profile updated.");
  }

  async function onUploadAvatar(file: File) {
    if (!file.type.startsWith("image/")) {
      setError("Please choose an image file.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("Image must be under 5MB.");
      return;
    }

    setBusy(true);
    setError(null);
    setMessage(null);

    const supabase = createClient();
    const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const path = `${currentUserId}/avatar.${extension}`;

    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(path, file, { upsert: true, contentType: file.type });

    if (uploadError) {
      setBusy(false);
      setError(uploadError.message);
      return;
    }

    const { error: updateError } = await supabase
      .from("profiles")
      .update({ avatar_path: path })
      .eq("id", currentUserId);

    if (updateError) {
      setBusy(false);
      setError(updateError.message);
      return;
    }

    const avatarUrl = await refreshSignedUrl(path);
    setProfiles((prev) =>
      prev.map((profile) =>
        profile.id === currentUserId
          ? { ...profile, avatar_path: path, avatar_url: avatarUrl }
          : profile
      )
    );
    setBusy(false);
    setMessage("Profile image updated.");
  }

  return (
    <div className="space-y-10">
      <section className="glass-strong rounded-[2rem] p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <AvatarBubble profile={me} size="lg" />
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-charcoal/45">
                Your profile
              </p>
              <h2 className="font-display mt-1 text-2xl text-charcoal">
                {me?.full_name || me?.email || "You"}
              </h2>
              <p className="mt-1 text-sm text-charcoal/55">
                Role: {roleLabels[currentRole]}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <input
              ref={fileRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) void onUploadAvatar(file);
                e.target.value = "";
              }}
            />
            <Button
              type="button"
              variant="glass"
              disabled={busy}
              onClick={() => fileRef.current?.click()}
            >
              {busy ? "Saving…" : "Upload image"}
            </Button>
          </div>
        </div>

        <form onSubmit={onSaveProfile} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Display name"
            className="flex-1 rounded-2xl border border-charcoal/10 bg-white/70 px-4 py-3.5 text-sm outline-none transition focus:border-accent focus:bg-white"
          />
          <Button type="submit" disabled={busy}>
            Save name
          </Button>
        </form>

        {error && (
          <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </p>
        )}
        {message && (
          <p className="mt-4 rounded-2xl bg-ice/60 px-4 py-3 text-sm text-charcoal/80">
            {message}
          </p>
        )}
      </section>

      <section>
        <div className="mb-6">
          <p className="text-[11px] uppercase tracking-[0.18em] text-charcoal/45">
            Directory
          </p>
          <h2 className="font-display mt-2 text-3xl text-charcoal">
            All members
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-charcoal/55">
            Everyone can browse profiles. Profile images follow role rules:
            members see member images only, admins see member images (not
            super admins), and super admins see all.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {profiles.map((profile) => (
            <article
              key={profile.id}
              className="glass-soft rounded-[1.75rem] p-5"
            >
              <div className="flex items-center gap-4">
                <AvatarBubble profile={profile} />
                <div className="min-w-0">
                  <h3 className="truncate font-display text-lg text-charcoal">
                    {profile.full_name || profile.email}
                  </h3>
                  <p className="truncate text-sm text-charcoal/50">
                    {profile.email}
                  </p>
                  <p className="mt-2 inline-flex rounded-full bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-charcoal/65">
                    {roleLabels[profile.role]}
                    {profile.id === currentUserId ? " · you" : ""}
                  </p>
                  {!profile.avatar_url && profile.id !== currentUserId && (
                    <p className="mt-2 text-xs text-charcoal/40">
                      Image hidden for your role
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function AvatarBubble({
  profile,
  size = "md",
}: {
  profile?: DirectoryProfile | null;
  size?: "md" | "lg";
}) {
  const dim = size === "lg" ? "h-16 w-16 text-lg" : "h-14 w-14 text-base";

  if (profile?.avatar_url) {
    return (
      <Image
        src={profile.avatar_url}
        alt={profile.full_name || profile.email}
        width={size === "lg" ? 64 : 56}
        height={size === "lg" ? 64 : 56}
        className={`${dim} rounded-full object-cover ring-1 ring-charcoal/10`}
        unoptimized
      />
    );
  }

  return (
    <div
      className={`${dim} flex items-center justify-center rounded-full bg-champagne/80 font-display text-charcoal/70 ring-1 ring-charcoal/10`}
      aria-hidden
    >
      {profile ? initialsFromProfile(profile) : "?"}
    </div>
  );
}
