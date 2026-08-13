import HeroSection from "./components/HeroSection";
import TableOfContents from "./components/TableOfContents";
import Commitment from "./components/Commitment";
import Scope from "./components/Scope";
import StandardsGuidelines from "./components/StandardsGuidelines";
import AccessibilityFeatures from "./components/AccessibilityFeatures";
import OngoingEfforts from "./components/OngoingEfforts";
import KnownLimitations from "./components/KnownLimitations";
import Support from "./components/Support";
import Compatibility from "./components/Compatibility";
import Updates from "./components/Updates";
import ClosingNote from "./components/ClosingNote";

export const metadata = {
  title: "Accessibility Statement | Zoiko Foods Corp",
  description:
    "We are committed to providing a website experience that is accessible to everyone, including people with disabilities.",
};

export default function AccessibilityStatementPage() {
  return (
    <main id="top" className="min-h-screen bg-[#FAF8F5]">
      <HeroSection />

      <div className="mx-auto max-w-[1440px] py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          <aside className="px-6 sm:px-10 lg:sticky lg:top-24 lg:w-[320px] lg:shrink-0 lg:px-10">
            <TableOfContents />
          </aside>

          <div className="min-w-0 flex-1 mx-6 sm:mx-10 lg:mx-0 lg:mr-10 rounded-2xl border border-[rgba(212,175,55,0.2)] bg-white shadow-sm overflow-hidden">
            <Commitment />
            <Scope />
            <StandardsGuidelines />
            <AccessibilityFeatures />
            <OngoingEfforts />
            <KnownLimitations />
            <Support />
            <Compatibility />
            <Updates />
            <ClosingNote />
          </div>
        </div>
      </div>
    </main>
  );
}
