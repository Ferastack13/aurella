import type { ReactNode, HTMLAttributes } from "react";

type GlassProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  className?: string;
  variant?: "default" | "strong" | "soft";
  as?: "div" | "section" | "article" | "aside";
};

const variants = {
  default: "glass",
  strong: "glass-strong",
  soft: "glass-soft",
};

export function Glass({
  children,
  className = "",
  variant = "default",
  as: Tag = "div",
  ...rest
}: GlassProps) {
  return (
    <Tag className={`${variants[variant]} glass-panel ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
