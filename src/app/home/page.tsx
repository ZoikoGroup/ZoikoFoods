import TopBanner from "./components/TopBanner";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Brand from "./components/Brand";
import Purpose from "./components/Purpose";
import Stories from "./components/Stories";
import Newsletter from "./components/Newsletter";


export default function Home() {
  return (
    <>
      <div className="lg:[zoom:80%]">
        <TopBanner />
        <Hero />
        <AboutSection />
      </div>

      <Brand />

      <Purpose />

      <Stories />

      <Newsletter />
    </>
  );
}
