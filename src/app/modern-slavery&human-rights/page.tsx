import HeroSection from "./components/HeroSection";
import TableOfContents from "./components/TableOfContents";
import Commitment from "./components/Commitment";
import OurBusiness from "./components/OurBusiness";
import PoliciesGovernance from "./components/PoliciesGovernance";
import RiskAssessment from "./components/RiskAssessment";
import DueDiligence from "./components/DueDiligence";
import SupplierStandards from "./components/SupplierStandards";
import Remediation from "./components/Remediation";
import Training from "./components/Training";
import Reporting from "./components/Reporting";
import KPIs from "./components/KPIs";
import Approval from "./components/Approval";
import ClosingNote from "./components/ClosingNote";

export const metadata = {
  title: "Modern Slavery & Human Rights Statement | Zoiko Foods Corp",
  description:
    "We are committed to preventing modern slavery, forced labor, and human trafficking in our operations and supply chains.",
};

export default function ModernSlaveryHumanRightsPage() {
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
            <OurBusiness />
            <PoliciesGovernance />
            <RiskAssessment />
            <DueDiligence />
            <SupplierStandards />
            <Remediation />
            <Training />
            <Reporting />
            <KPIs />
            <Approval />
            <ClosingNote />
          </div>
        </div>
      </div>
    </main>
  );
}
