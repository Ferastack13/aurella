import type { Metadata } from "next";
import { Suspense } from "react";
import { AuthForm } from "@/components/auth/AuthForm";
import { AuthShell } from "@/components/auth/AuthShell";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Create your AURELIA account with email.",
};

export default function SignupPage() {
  return (
    <AuthShell
      title="Create your account"
      subtitle="Join AURELIA with your email to access the full experience."
    >
      <Suspense fallback={<p className="text-sm text-charcoal/50">Loading…</p>}>
        <AuthForm mode="signup" />
      </Suspense>
    </AuthShell>
  );
}
