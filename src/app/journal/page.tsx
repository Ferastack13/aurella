import { JournalClient } from "@/components/journal/JournalClient";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
  title: "Journal",
  description:
    "AURELIA Journal — immersive editorial on lifestyle, design, wellness, fragrance, and creative living.",
};

export default function JournalPage() {
  return (
    <div className="px-4 pb-20 pt-28 md:px-8 md:pt-36">
      <div className="mx-auto max-w-[1280px]">
        <FadeIn>
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-[11px] tracking-[0.22em] uppercase text-charcoal/40">
              Digital publication
            </p>
            <h1 className="font-display text-4xl md:text-6xl text-charcoal leading-[1.05]">
              Journal
            </h1>
            <p className="mt-4 text-lg text-charcoal/55 leading-relaxed">
              Future-focused editorial — large immersive layouts on atmosphere,
              wellness, and the craft of living well.
            </p>
          </div>
        </FadeIn>
        <JournalClient />
      </div>
    </div>
  );
}
