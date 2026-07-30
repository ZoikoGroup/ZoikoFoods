import HeroSection from "./components/HeroSection";
import PolicyHighlights from "./components/PolicyHighlights";
import WhatCanBeReported from "./components/WhatCanBeReported";
import ReportingChannels from "./components/ReportingChannels";
import WhistleblowerProtections from "./components/WhistleblowerProtections";
import RegionalEnforcement from "./components/RegionalEnforcement";
import ROIRiskMitigation from "./components/ROIRiskMitigation";
import InvestigationProcess from "./components/InvestigationProcess";
import CaseApplications from "./components/CaseApplications";
import IntegritySection from "./components/IntegritySection";
import AssuranceLayer from "./components/AssuranceLayer";

export default function WhistleblowerPolicyPage() {
  return (
    <main>
      <HeroSection />
      <PolicyHighlights />
      <WhatCanBeReported />
      <ReportingChannels />
      <WhistleblowerProtections />
      <RegionalEnforcement />
      <ROIRiskMitigation />
      <InvestigationProcess />
      <CaseApplications />
      <IntegritySection />
      <AssuranceLayer />
    </main>
  );
}
