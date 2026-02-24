import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutProcessSection } from "@/components/sections/about-process";
import { ProjectsSection } from "@/components/sections/projects";
import { ReviewsSection } from "@/components/sections/reviews";
import { FAQSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact-form";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutProcessSection />
        <ProjectsSection />
        <ReviewsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
