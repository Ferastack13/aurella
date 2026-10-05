"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";
import { roleLabels, type AppRole } from "@/lib/profiles";

type Mode = "login" | "signup";

const signupRoles: { value: AppRole; description: string }[] = [
  {
    value: "member",
    description: "Browse the shop and manage your own profile image.",
  },
  {
    value: "admin",
    description: "Member access, plus view other member profile images.",
  },
  {
    value: "super_admin",
    description: "Full access, including every profile image.",
  },
];

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.5-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.3 35.3 26.8 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.6 39.6 16.3 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.5 5.6-6.5 7.1l.1.1 6.2 5.2C36.8 41.4 44 36 44 24c0-1.3-.1-2.5-.4-3.5z"
      />
    </svg>
  );
}

export function AuthForm({ mode }: { mode: Mode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/";
  const authError = searchParams.get("error");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [role, setRole] = useState<AppRole>("member");
  const [error, setError] = useState<string | null>(
    authError === "auth"
      ? "Google sign-in failed. Please try again."
      : null
  );
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  async function signInWithGoogle() {
    setError(null);
    setMessage(null);
    setGoogleLoading(true);

    const supabase = createClient();
    const redirect = new URL("/auth/callback", window.location.origin);
    redirect.searchParams.set("next", next);
    if (mode === "signup") {
      redirect.searchParams.set("role", role);
    }

    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: redirect.toString(),
        queryParams: {
          access_type: "offline",
          prompt: "select_account",
        },
      },
    });

    if (oauthError) {
      setError(oauthError.message);
      setGoogleLoading(false);
    }
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true);

    const supabase = createClient();

    try {
      if (mode === "signup") {
        if (password.length < 6) {
          setError("Password must be at least 6 characters.");
          return;
        }
        if (password !== confirm) {
          setError("Passwords do not match.");
          return;
        }

        const { data, error: signUpError } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: {
              full_name: email.trim().split("@")[0],
              role,
            },
          },
        });

        if (signUpError) {
          setError(signUpError.message);
          return;
        }

        if (data.session && data.user) {
          const { error: roleError } = await supabase.rpc("apply_signup_role", {
            selected_role: role,
          });
          if (roleError) {
            setError(
              `Account created, but role could not be saved: ${roleError.message}`
            );
            router.replace(next);
            router.refresh();
            return;
          }
          router.replace(next);
          router.refresh();
          return;
        }

        setMessage(
          `Account created as ${roleLabels[role]}. Check your email to confirm, then sign in.`
        );
        return;
      }

      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (signInError) {
        setError(signInError.message);
        return;
      }

      router.replace(next);
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const busy = loading || googleLoading;

  return (
    <div className="space-y-5">
      <button
        type="button"
        onClick={() => void signInWithGoogle()}
        disabled={busy}
        className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-charcoal/10 bg-white px-7 py-3.5 text-[13px] font-medium tracking-[0.04em] text-charcoal transition hover:bg-white/90 disabled:opacity-60"
      >
        <GoogleIcon />
        {googleLoading
          ? "Redirecting to Google…"
          : mode === "signup"
            ? "Continue with Google"
            : "Sign in with Google"}
      </button>

      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-charcoal/10" />
        <span className="text-[11px] uppercase tracking-[0.16em] text-charcoal/40">
          or with email
        </span>
        <div className="h-px flex-1 bg-charcoal/10" />
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-[11px] tracking-[0.16em] uppercase text-charcoal/50"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border border-charcoal/10 bg-white/70 px-4 py-3.5 text-sm outline-none transition focus:border-accent focus:bg-white"
            placeholder="you@email.com"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-[11px] tracking-[0.16em] uppercase text-charcoal/50"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete={mode === "signup" ? "new-password" : "current-password"}
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-2xl border border-charcoal/10 bg-white/70 px-4 py-3.5 text-sm outline-none transition focus:border-accent focus:bg-white"
            placeholder="••••••••"
          />
        </div>

        {mode === "signup" && (
          <>
            <div>
              <label
                htmlFor="confirm"
                className="mb-2 block text-[11px] tracking-[0.16em] uppercase text-charcoal/50"
              >
                Confirm password
              </label>
              <input
                id="confirm"
                type="password"
                autoComplete="new-password"
                required
                minLength={6}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full rounded-2xl border border-charcoal/10 bg-white/70 px-4 py-3.5 text-sm outline-none transition focus:border-accent focus:bg-white"
                placeholder="••••••••"
              />
            </div>

            <fieldset>
              <legend className="mb-3 block text-[11px] tracking-[0.16em] uppercase text-charcoal/50">
                Choose your role
              </legend>
              <div className="space-y-2.5">
                {signupRoles.map((option) => {
                  const selected = role === option.value;
                  return (
                    <label
                      key={option.value}
                      className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3.5 transition ${
                        selected
                          ? "border-charcoal/25 bg-white shadow-[0_8px_24px_rgba(34,34,34,0.06)]"
                          : "border-charcoal/10 bg-white/50 hover:bg-white/80"
                      }`}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={option.value}
                        checked={selected}
                        onChange={() => setRole(option.value)}
                        className="mt-1 accent-charcoal"
                      />
                      <span>
                        <span className="block text-sm font-medium text-charcoal">
                          {roleLabels[option.value]}
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-charcoal/55">
                          {option.description}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-charcoal/45">
                This role also applies if you continue with Google.
              </p>
            </fieldset>
          </>
        )}

        {error && (
          <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </p>
        )}
        {message && (
          <p className="rounded-2xl bg-ice/60 px-4 py-3 text-sm text-charcoal/80">
            {message}
          </p>
        )}

        <Button type="submit" className="w-full" disabled={busy}>
          {loading
            ? mode === "signup"
              ? "Creating account…"
              : "Signing in…"
            : mode === "signup"
              ? "Create account with email"
              : "Sign in with email"}
        </Button>

        <p className="text-center text-sm text-charcoal/55">
          {mode === "signup" ? (
            <>
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-charcoal underline-offset-4 hover:underline"
              >
                Sign in
              </Link>
            </>
          ) : (
            <>
              New to AURELIA?{" "}
              <Link
                href="/signup"
                className="text-charcoal underline-offset-4 hover:underline"
              >
                Sign up
              </Link>
            </>
          )}
        </p>
      </form>
    </div>
  );
}
