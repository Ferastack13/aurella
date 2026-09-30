import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 20, ...props }: IconProps) {
  return { width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: 1.5, ...props };
}

export function IconSearch(props: IconProps) {
  return (
    <svg {...base(props)} viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconHeart(props: IconProps) {
  return (
    <svg {...base(props)} viewBox="0 0 24 24">
      <path
        d="M12 20s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.5-7 10-7 10z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconBag(props: IconProps) {
  return (
    <svg {...base(props)} viewBox="0 0 24 24">
      <path d="M4 6h2l1.5 10h9L19 8H7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="20" r="1.25" fill="currentColor" stroke="none" />
      <circle cx="16" cy="20" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base(props)} viewBox="0 0 24 24">
      <path d="M4 7h16M4 12h16M4 17h12" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base(props)} viewBox="0 0 24 24">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export function IconChevron(props: IconProps) {
  return (
    <svg {...base({ size: 14, ...props })} viewBox="0 0 24 24">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrow(props: IconProps) {
  return (
    <svg {...base(props)} viewBox="0 0 24 24">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSpark(props: IconProps) {
  return (
    <svg {...base(props)} viewBox="0 0 24 24">
      <path
        d="M12 3l1.2 5.2L18 9l-4.8 1.8L12 16l-1.2-5.2L6 9l4.8-.8L12 3z"
        strokeLinejoin="round"
      />
    </svg>
  );
}
