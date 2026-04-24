import Hero from "@/src/components/Hero";
import FilterPills from "@/src/components/FilterPills";
import PopularDestinations from "@/src/components/PopularDestinations";
import FlashDeals from "@/src/components/FlashDeals";
import TrustBar from "@/src/components/TrustBar";
import AIAssistant from "@/src/components/AIAssistant";
import HowItWorks from "@/src/components/HowItWorks";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <Hero />
      <FilterPills />
      <PopularDestinations />
      <FlashDeals />
      <TrustBar />
      <AIAssistant />
      <HowItWorks />
    </main>
  );
}
