"use client";

export function SignOutButton({ className = "" }: { className?: string }) {
  return (
    <form action="/auth/signout" method="post">
      <button
        type="submit"
        className={`rounded-full px-3.5 py-2 text-[12px] tracking-[0.08em] uppercase text-charcoal/75 transition-colors hover:bg-white/50 hover:text-charcoal ${className}`}
      >
        Sign out
      </button>
    </form>
  );
}
