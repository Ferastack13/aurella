import type { Metadata } from "next";
import { Suspense } from "react";
import { AuthForm } from "@/components/auth/AuthForm";
import { AuthShell } from "@/components/auth/AuthShell";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to AURELIA with your email.",
};

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in with your email to continue exploring AURELIA."
    >
      <Suspense fallback={<p className="text-sm text-charcoal/50">Loading…</p>}>
        <AuthForm mode="login" />
      </Suspense>
    </AuthShell>
  );
}
