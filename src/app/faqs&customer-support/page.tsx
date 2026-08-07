import React from "react";
import FaqHeroSection from "./components/FaqHeroSection";
import FaqSearchSection from "./components/FaqSearchSection";
import FaqCategoriesSection from "./components/FaqCategoriesSection";
import FaqAccordionSection from "./components/FaqAccordionSection";
import FaqHelpSection from "./components/FaqHelpSection";
import FaqQualitySection from "./components/FaqQualitySection";

export default function FaqsCustomerSupportPage() {
    return (
        <main className="w-full bg-white">
            <FaqHeroSection />
            <FaqSearchSection />
            <FaqCategoriesSection />
            <FaqAccordionSection />
            <FaqHelpSection />
            <FaqQualitySection />
        </main>
    );
}
