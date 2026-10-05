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

export function AuthForm({ mode }: { mode: Mode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [role, setRole] = useState<AppRole>("member");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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

  return (
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

      <Button type="submit" className="w-full" disabled={loading}>
        {loading
          ? mode === "signup"
            ? "Creating account…"
            : "Signing in…"
          : mode === "signup"
            ? "Create account"
            : "Sign in"}
      </Button>

      <p className="text-center text-sm text-charcoal/55">
        {mode === "signup" ? (
          <>
            Already have an account?{" "}
            <Link href="/login" className="text-charcoal underline-offset-4 hover:underline">
              Sign in
            </Link>
          </>
        ) : (
          <>
            New to AURELIA?{" "}
            <Link href="/signup" className="text-charcoal underline-offset-4 hover:underline">
              Sign up
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
