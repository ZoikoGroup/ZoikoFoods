import React from "react";
import HeroSection from "./components/HeroSection";
import TargetAudienceSection from "./components/TargetAudienceSection";
import PressResourcesSection from "./components/PressResourcesSection";
import OfficialStatementsSection from "./components/OfficialStatementsSection";

export default function MediaPressInquiries() {
  return (
    <div className="min-h-screen bg-white font-sans text-stone-800">
      <HeroSection />
      <TargetAudienceSection />
      <PressResourcesSection />
      <OfficialStatementsSection />
    </div>
  );
}
