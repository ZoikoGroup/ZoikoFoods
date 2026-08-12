import React from "react";
import { HeroSection } from "./components/HeroSection";
import { WhyHeritageMatters } from "./components/WhyHeritageMatters";
import { GlobalRoots } from "./components/GlobalRoots";
import { FromKitchensToCommunities } from "./components/FromKitchensToCommunities";
import { HeritageWithDiscipline } from "./components/HeritageWithDiscipline";
import { OurPeopleAndPhilosophy } from "./components/OurPeopleAndPhilosophy";
import { ResponsibleRespect } from "./components/ResponsibleRespect";
import { FromRootsToBrands } from "./components/FromRootsToBrands";
import { ReadyToPartner } from "./components/ReadyToPartner";

export default function HeritageAndRoots() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <WhyHeritageMatters />
      <GlobalRoots />
      <FromKitchensToCommunities />
      <HeritageWithDiscipline />
      <OurPeopleAndPhilosophy />
      <ResponsibleRespect />
      <FromRootsToBrands />
      <ReadyToPartner />
    </main>
  );
}
