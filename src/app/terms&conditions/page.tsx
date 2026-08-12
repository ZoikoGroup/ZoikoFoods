import HeroSection from "./components/HeroSection";
import TableOfContents from "./components/TableOfContents";
import KeyTermsSummary from "./components/KeyTermsSummary";
import Acceptance from "./components/Acceptance";
import Eligibility from "./components/Eligibility";
import Accounts from "./components/Accounts";
import AcceptableUse from "./components/AcceptableUse";
import UserContent from "./components/UserContent";
import IntellectualProperty from "./components/IntellectualProperty";
import Disclaimers from "./components/Disclaimers";
import ThirdPartyLinks from "./components/ThirdPartyLinks";
import WarrantyDisclaimer from "./components/WarrantyDisclaimer";
import LimitationOfLiability from "./components/LimitationOfLiability";
import Indemnification from "./components/Indemnification";
import PrivacyData from "./components/PrivacyData";
import Termination from "./components/Termination";
import DisputeResolution from "./components/DisputeResolution";
import GoverningLaw from "./components/GoverningLaw";
import ChangesToTerms from "./components/ChangesToTerms";
import GeneralProvisions from "./components/GeneralProvisions";
import ContactInformation from "./components/ContactInformation";
import ClosingNotice from "./components/ClosingNotice";

export const metadata = {
  title: "Terms & Conditions | Zoiko Foods Corp",
  description:
    "These terms govern your use of Zoiko Foods Corp websites, services, and content.",
};

export default function TermsAndConditionsPage() {
  return (
    <main id="top" className="min-h-screen bg-[#FAF8F5]">
      <HeroSection />

      <div className="mx-auto max-w-[1440px] py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          <aside className="px-6 sm:px-10 lg:sticky lg:top-24 lg:w-[320px] lg:shrink-0 lg:px-10">
            <TableOfContents />
          </aside>

          <div className="min-w-0 flex-1 mx-6 sm:mx-10 lg:mx-0 lg:mr-10 rounded-2xl border border-[rgba(212,175,55,0.2)] bg-white shadow-sm overflow-hidden">
            <KeyTermsSummary />
            <Acceptance />
            <Eligibility />
            <Accounts />
            <AcceptableUse />
            <UserContent />
            <IntellectualProperty />
            <Disclaimers />
            <ThirdPartyLinks />
            <WarrantyDisclaimer />
            <LimitationOfLiability />
            <Indemnification />
            <PrivacyData />
            <Termination />
            <DisputeResolution />
            <GoverningLaw />
            <ChangesToTerms />
            <GeneralProvisions />
            <ContactInformation />
            <ClosingNotice />
          </div>
        </div>
      </div>
    </main>
  );
}
