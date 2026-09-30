import Link from "next/link";
import { Glass } from "@/components/ui/Glass";

const footerLinks = {
  Explore: [
    { href: "/shop", label: "Shop" },
    { href: "/collections", label: "Collections" },
    { href: "/experiences", label: "Experiences" },
    { href: "/journal", label: "Journal" },
  ],
  House: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/contact#wholesale", label: "Wholesale" },
    { href: "/contact#press", label: "Press" },
  ],
  Care: [
    { href: "/contact#support", label: "Customer Support" },
    { href: "/contact#faq", label: "FAQ" },
    { href: "/contact#showroom", label: "Showroom Visits" },
    { href: "/shop?category=gift-sets", label: "Gift Concierge" },
  ],
};

export function Footer() {
  return (
    <footer className="relative px-4 pb-8 pt-20 md:px-8 md:pb-10">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 mesh-glow opacity-60" />

      <Glass
        variant="strong"
        className="relative mx-auto max-w-[1280px] overflow-hidden p-8 md:p-12 lg:p-14"
      >
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-champagne/50 blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-5">
            <Link
              href="/"
              className="font-display text-3xl tracking-[0.28em] text-charcoal"
            >
              AURELIA
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-charcoal/60 font-body">
              Transforming everyday spaces into immersive sensory experiences.
              A digital flagship for scent, design, and atmosphere.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2 space-y-4">
              <p className="text-[11px] tracking-[0.18em] uppercase text-charcoal/40">
                {title}
              </p>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-charcoal/70 hover:text-charcoal transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative mt-12 flex flex-col gap-4 border-t border-charcoal/8 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-charcoal/40">
            © {new Date().getFullYear()} AURELIA. Immersive living, crafted.
          </p>
          <p className="text-xs tracking-[0.12em] uppercase text-charcoal/35">
            Future luxury · Sensory design
          </p>
        </div>
      </Glass>
    </footer>
  );
}
