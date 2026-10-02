import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { ProfilesDirectory } from "@/components/profiles/ProfilesDirectory";
import type { AppRole, Profile } from "@/lib/profiles";

export const metadata: Metadata = {
  title: "Profiles",
  description: "AURELIA member directory with role-based profile image visibility.",
};

export default async function ProfilesPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data: me } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  const { data: directory, error } = await supabase
    .from("profiles_directory")
    .select("id, email, full_name, role, avatar_path, created_at, updated_at")
    .order("created_at", { ascending: true });

  const profiles = (directory ?? []) as Profile[];
  const paths = profiles
    .map((profile) => profile.avatar_path)
    .filter((path): path is string => Boolean(path));

  const signedMap = new Map<string, string>();
  if (paths.length > 0) {
    const { data: signed } = await supabase.storage
      .from("avatars")
      .createSignedUrls(paths, 60 * 60);

    for (const item of signed ?? []) {
      if (item.path && item.signedUrl) {
        signedMap.set(item.path, item.signedUrl);
      }
    }
  }

  const withUrls = profiles.map((profile) => ({
    ...profile,
    avatar_url: profile.avatar_path
      ? signedMap.get(profile.avatar_path) ?? null
      : null,
  }));

  return (
    <main className="mx-auto w-full max-w-[1100px] px-5 pb-24 pt-28 md:px-8 md:pt-32">
      <div className="mb-10 max-w-2xl">
        <p className="text-[11px] uppercase tracking-[0.18em] text-charcoal/45">
          Community
        </p>
        <h1 className="font-display mt-3 text-4xl text-charcoal md:text-5xl">
          Profiles
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-charcoal/55 md:text-base">
          Browse every AURELIA account. Upload and manage your own image anytime.
          Higher roles stay protected from lower-role viewers.
        </p>
      </div>

      {error ? (
        <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
          Could not load profiles: {error.message}
        </p>
      ) : (
        <ProfilesDirectory
          profiles={withUrls}
          currentUserId={user.id}
          currentRole={(me?.role as AppRole) || "member"}
        />
      )}
    </main>
  );
}
