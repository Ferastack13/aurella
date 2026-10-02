import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

export function AuthShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="relative flex min-h-[100svh] items-center justify-center px-5 py-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-lavender/40 blur-3xl" />
        <div className="absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-champagne/50 blur-3xl" />
        <div className="absolute left-1/3 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-ice/40 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="mb-10 text-center">
          <Link
            href="/login"
            className="inline-flex items-center gap-3 font-display text-2xl tracking-[0.28em] text-charcoal"
            aria-label="AURELIA"
          >
            <Image
              src="/brand/aurelia-mark.jpg"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover ring-1 ring-charcoal/10"
              priority
            />
            AURELIA
          </Link>
          <h1 className="font-display mt-8 text-3xl text-charcoal md:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/55">
            {subtitle}
          </p>
        </div>

        <div className="glass-strong rounded-[28px] p-7 md:p-9">{children}</div>
      </div>
    </div>
  );
}
