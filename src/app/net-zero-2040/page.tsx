import NetZeroRoadmapCTA from "./components/NetZeroRoadmapCTA";
import NetZeroBenefits from "./components/NetZeroBenefits";
import GlobalMilestones from "./components/GlobalMilestones";
import RegionalComplianceRoadmaps from "./components/RegionalComplianceRoadmaps";
import ScopeOfEmissions from "./components/ScopeOfEmissions";
import ActionPillars from "./components/ActionPillars";
import CompetitiveBenchmarking from "./components/CompetitiveBenchmarking";
import ROINetZero from "./components/ROINetZero";
import CaseStudies from "./components/CaseStudies";
import CertificationsVerification from "./components/CertificationsVerification";

export default function NetZero2040Page() {
  return (
    <main>
      <NetZeroRoadmapCTA />
      <NetZeroBenefits />
      <GlobalMilestones />
      <RegionalComplianceRoadmaps />
      <ScopeOfEmissions />
      <ActionPillars />
      <CompetitiveBenchmarking />
      <ROINetZero />
      <CaseStudies />
      <CertificationsVerification />
    </main>
  );
}