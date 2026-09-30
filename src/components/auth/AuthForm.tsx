"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";

type Mode = "login" | "signup";

export function AuthForm({ mode }: { mode: Mode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
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
        });

        if (signUpError) {
          setError(signUpError.message);
          return;
        }

        if (data.session) {
          router.replace(next);
          router.refresh();
          return;
        }

        setMessage(
          "Account created. Check your email to confirm, then sign in."
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
