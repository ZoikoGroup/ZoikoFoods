import HeroSection from "./components/HeroSection";
import ESGAtAGlanceSection from "./components/ESGAtAGlanceSection";
import ESGFrameworkSection from "./components/ESGFrameworkSection";
import CommitmentsTimelineSection from "./components/CommitmentsTimelineSection";
import ESGROISection from "./components/ESGROISection";
import DivisionDeepDiveSection from "./components/DivisionDeepDiveSection";
import ESGScorecardsSection from "./components/ESGScorecardsSection";
import ESGInActionSection from "./components/ESGInActionSection";
import CertificationsPartnershipsSection from "./components/CertificationsPartnershipsSection";
import CallToActionSection from "./components/CallToActionSection";

export default function Page() {
  return (
    <main>
      <HeroSection />

      <ESGAtAGlanceSection />

      <ESGFrameworkSection />

      <CommitmentsTimelineSection />

      <ESGROISection />

      <DivisionDeepDiveSection />

      <ESGScorecardsSection />

      <ESGInActionSection />

      <CertificationsPartnershipsSection />

      <CallToActionSection />
    </main>
  );
}