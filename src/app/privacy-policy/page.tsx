import HeroSection from "./components/HeroSection";
import TableOfContents from "./components/TableOfContents";
import AtAGlanceSummary from "./components/AtAGlanceSummary";
import WhoWeAre from "./components/WhoWeAre";
import Scope from "./components/Scope";
import InformationWeCollect from "./components/InformationWeCollect";
import HowWeUseInformation from "./components/HowWeUseInformation";
import LegalBases from "./components/LegalBases";
import CookiesTracking from "./components/CookiesTracking";
import DataSharing from "./components/DataSharing";
import InternationalTransfers from "./components/InternationalTransfers";
import DataRetention from "./components/DataRetention";
import YourRights from "./components/YourRights";
import Security from "./components/Security";
import ChildrensPrivacy from "./components/ChildrensPrivacy";
import AutomatedDecisionMaking from "./components/AutomatedDecisionMaking";
import PolicyUpdates from "./components/PolicyUpdates";
import ContactComplaints from "./components/ContactComplaints";

export const metadata = {
  title: "Privacy Policy | Zoiko Foods Corp",
  description:
    "How Zoiko Foods Corp collects, uses, protects, and respects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main id="top" className="min-h-screen bg-white">
      <HeroSection />

      <div className="mx-auto max-w-[1440px] py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          <aside className="px-6 sm:px-10 lg:sticky lg:top-24 lg:w-[280px] lg:shrink-0 lg:px-10">
            <TableOfContents />
          </aside>

          <div className="min-w-0 flex-1">
            <AtAGlanceSummary />
            <WhoWeAre />
            <Scope />
            <InformationWeCollect />
            <HowWeUseInformation />
            <LegalBases />
            <CookiesTracking />
            <DataSharing />
            <InternationalTransfers />
            <DataRetention />
            <YourRights />
            <Security />
            <ChildrensPrivacy />
            <AutomatedDecisionMaking />
            <PolicyUpdates />
            <ContactComplaints />
          </div>
        </div>
      </div>
    </main>
  );
}
