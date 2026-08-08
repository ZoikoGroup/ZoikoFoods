import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Purpose from "./components/Purpose";
import WhyZoiko from "./components/WhyZoiko";
import Portfolio from "./components/Portfolio";
import WhereWeOperate from "./components/WhereWeOperate";
import Responsibility from "./components/Responsibility";
import LookingAhead from "./components/LookingAhead";

export default function AboutPage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Purpose />
      <WhyZoiko />
      <Portfolio />
      <WhereWeOperate />
      <Responsibility />
      <LookingAhead />
    </main>
  );
}