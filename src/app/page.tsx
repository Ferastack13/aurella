import { Hero } from "@/components/home/Hero";
import { CollectionShowcase } from "@/components/home/CollectionShowcase";
import { ExploreByMood } from "@/components/home/ExploreByMood";
import { ScentDiscovery } from "@/components/home/ScentDiscovery";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { AtmosphereBuilder } from "@/components/home/AtmosphereBuilder";
import { SignatureCollections } from "@/components/home/SignatureCollections";
import { CustomerExperiences } from "@/components/home/CustomerExperiences";
import { DigitalJournal } from "@/components/home/DigitalJournal";
import { Newsletter } from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CollectionShowcase />
      <ExploreByMood />
      <ScentDiscovery />
      <FeaturedProducts />
      <AtmosphereBuilder />
      <SignatureCollections />
      <CustomerExperiences />
      <DigitalJournal />
      <Newsletter />
    </>
  );
}
