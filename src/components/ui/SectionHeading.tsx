import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 md:mb-14 max-w-2xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow && (
        <p className="mb-3 text-[11px] tracking-[0.22em] uppercase text-charcoal/40">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-5xl lg:text-[3.25rem] leading-[1.05] text-charcoal">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-charcoal/55 leading-relaxed font-body">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
