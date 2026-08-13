import HeroSection from "./components/HeroSection";
import TableOfContents from "./components/TableOfContents";
import Summary from "./components/Summary";
import WhatAreCookies from "./components/WhatAreCookies";
import CookieCategories from "./components/CookieCategories";
import VendorsCookieDetails from "./components/VendorsCookieDetails";
import ConsentStorage from "./components/ConsentStorage";
import DoNotSellShare from "./components/DoNotSellShare";
import ChildrensPrivacy from "./components/ChildrensPrivacy";
import Contact from "./components/Contact";
import MobileFooter from "./components/MobileFooter";

export const metadata = {
  title: "Cookie Policy & Preferences | Zoiko Foods Corp",
  description:
    "How we use cookies and similar technologies — and how you control them.",
};

export default function CookiePolicyPreferencesPage() {
  return (
    <main id="top" className="min-h-screen bg-[#FAF8F5] font-inter">
      <HeroSection />

      <div className="mx-auto max-w-[1440px] py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          <aside className="px-6 sm:px-10 lg:sticky lg:top-24 lg:w-[320px] lg:shrink-0 lg:px-10">
            <TableOfContents />
          </aside>

          <div className="min-w-0 flex-1 mx-6 sm:mx-10 lg:mx-0 lg:mr-10 rounded-2xl border border-[rgba(212,175,55,0.2)] bg-white shadow-sm overflow-hidden">
            <Summary />
            <WhatAreCookies />
            <CookieCategories />
            <VendorsCookieDetails />
            <ConsentStorage />
            <DoNotSellShare />
            <ChildrensPrivacy />
            <Contact />
          </div>
        </div>
      </div>

      <MobileFooter />
    </main>
  );
}
