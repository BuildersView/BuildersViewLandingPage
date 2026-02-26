import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { AboutProcessSection } from "@/components/sections/about-process";
import { ProjectsSection } from "@/components/sections/projects";
import { ReviewsSection } from "@/components/sections/reviews";
import { FAQSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact-form";
import { IntroScreen } from "@/components/intro/intro-screen";

export default function HomePage() {
  return (
    <IntroScreen>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutProcessSection />
        <ProjectsSection />
        <ReviewsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </IntroScreen>
  );
}
