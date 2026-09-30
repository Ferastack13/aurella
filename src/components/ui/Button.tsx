import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "glass";

const styles: Record<Variant, string> = {
  primary:
    "bg-charcoal text-frost hover:bg-midnight shadow-[0_12px_32px_rgba(34,34,34,0.18)]",
  secondary:
    "bg-frost/80 text-charcoal border border-white/70 hover:bg-frost shadow-[0_8px_24px_rgba(34,34,34,0.06)]",
  ghost: "bg-transparent text-charcoal hover:bg-white/40",
  glass:
    "glass text-charcoal hover:bg-white/70 shadow-[0_8px_28px_rgba(184,197,255,0.25)]",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  href?: string;
  children: ReactNode;
  className?: string;
};

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[13px] font-medium tracking-[0.04em] transition-all duration-400 ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={cls} {...props}>
      {children}
    </button>
  );
}
