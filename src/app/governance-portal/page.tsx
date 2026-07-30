import HeroSection from "./components/HeroSection";
import GovernanceAtAGlanceSection from "./components/GovernanceAtAGlanceSection";
import GovernanceFrameworkSection from "./components/GovernanceFrameworkSection";
import GovernanceROISection from "./components/GovernanceROISection";
import LeadershipOversightSection from "./components/LeadershipOversightSection";
import GovernancePoliciesLibrarySection from "./components/GovernancePoliciesLibrarySection";
import GovernanceScorecardsSection from "./components/GovernanceScorecardsSection";
import GovernanceInActionSection from "./components/GovernanceInActionSection";
import GlobalCertificationsMapSection from "./components/GlobalCertificationsMapSection";
import WhistleblowerEthicsHubSection from "./components/WhistleblowerEthicsHubSection";
import FutureGovernanceTimelineSection from "./components/FutureGovernanceTimelineSection";
import CallToActionSection from "./components/CallToActionSection";

export default function Page() {
  return (
    <main>
      <HeroSection />

      <GovernanceAtAGlanceSection />

      <GovernanceFrameworkSection />

      <GovernanceROISection />

      <LeadershipOversightSection />

      <GovernancePoliciesLibrarySection />

      <GovernanceScorecardsSection />

      <GovernanceInActionSection />

      <GlobalCertificationsMapSection />

      <WhistleblowerEthicsHubSection />


      <CallToActionSection />

      <FutureGovernanceTimelineSection />
    </main>
  );
}