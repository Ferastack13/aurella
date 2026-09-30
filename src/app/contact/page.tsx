import { ContactForm } from "@/components/contact/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";
import { Glass } from "@/components/ui/Glass";

export const metadata = {
  title: "Contact",
  description:
    "AURELIA concierge — customer support, partnerships, wholesale, press, and showroom visits.",
};

const channels = [
  {
    id: "support",
    title: "Customer Support",
    text: "Product guidance, orders, and care. We reply within one business day.",
    detail: "concierge@aurelia.studio",
  },
  {
    id: "partnerships",
    title: "Partnerships",
    text: "Collaborations with designers, hotels, and cultural institutions.",
    detail: "partners@aurelia.studio",
  },
  {
    id: "wholesale",
    title: "Wholesale",
    text: "Trade accounts for concept stores and hospitality projects.",
    detail: "trade@aurelia.studio",
  },
  {
    id: "press",
    title: "Press",
    text: "Media kits, imagery, and interview requests.",
    detail: "press@aurelia.studio",
  },
  {
    id: "showroom",
    title: "Showroom Visits",
    text: "Private appointments in our flagship sensory gallery.",
    detail: "By invitation · Request below",
  },
];

const faqs = [
  {
    q: "How long do candles burn?",
    a: "Our standard vessels offer approximately 50 hours of clean burn when cared for properly.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes. We ship to most regions with climate-conscious packaging and tracked delivery.",
  },
  {
    q: "Can I visit a showroom?",
    a: "Showroom visits are available by appointment. Select Showroom Visits in the contact form.",
  },
  {
    q: "Are your oils skin-safe?",
    a: "Our blends are formulated for diffusion. Do not apply undiluted essential oils to skin.",
  },
];

export default function ContactPage() {
  return (
    <div className="px-4 pb-20 pt-28 md:px-8 md:pt-36">
      <div className="mx-auto max-w-[1280px] space-y-16">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="mb-3 text-[11px] tracking-[0.22em] uppercase text-charcoal/40">
              Concierge
            </p>
            <h1 className="font-display text-4xl md:text-6xl text-charcoal leading-[1.05]">
              Contact
            </h1>
            <p className="mt-4 text-lg text-charcoal/55 leading-relaxed">
              An elevated, personal channel for support, trade, press, and
              private showroom experiences.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-4">
            {channels.map((c, i) => (
              <FadeIn key={c.id} delay={i * 50}>
                <Glass
                  id={c.id}
                  className="p-5 scroll-mt-32"
                  as="aside"
                >
                  <h2 className="font-display text-lg text-charcoal mb-1">
                    {c.title}
                  </h2>
                  <p className="text-sm text-charcoal/55 mb-2">{c.text}</p>
                  <p className="text-xs tracking-[0.06em] text-charcoal/70">
                    {c.detail}
                  </p>
                </Glass>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="lg:col-span-7" delay={100}>
            <ContactForm />
          </FadeIn>
        </div>

        <section id="faq" className="scroll-mt-32">
          <FadeIn>
            <h2 className="font-display text-3xl text-charcoal mb-8">FAQ</h2>
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((f, i) => (
              <FadeIn key={f.q} delay={i * 40}>
                <Glass className="p-6 h-full">
                  <h3 className="font-display text-lg text-charcoal mb-2">
                    {f.q}
                  </h3>
                  <p className="text-sm text-charcoal/55 leading-relaxed">
                    {f.a}
                  </p>
                </Glass>
              </FadeIn>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
