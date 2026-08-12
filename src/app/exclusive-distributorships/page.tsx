import HeroSection from "./components/HeroSection";
import IntroSection from "./components/Introsection";
import WhoThisIsFor from "./components/Whothisisfor";
import PartnerRequirements from "./components/Partnerrequirements";
import WhatZoikoProvides from "./components/Whatzoikoprovides";
import ExclusivityStructure from "./components/Exclusivitystructure";
import BrandProtectionRules from "./components/Brandprotectionrules";

export const metadata = {
  title: 'Exclusive Distributorships | Zoiko Foods',
  description: 'Zoiko Foods Corp partners with select distributors to represent our brands with discipline, integrity, and long-term commitment.',
};

export default function ExclusiveDistributorshipsPage() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <WhoThisIsFor />
      <PartnerRequirements />
      <WhatZoikoProvides />
      <ExclusivityStructure />
      <BrandProtectionRules />
    </main>
  );
}
