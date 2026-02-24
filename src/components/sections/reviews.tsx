import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { ReviewCarousel } from "@/components/reviews/review-carousel";

export function ReviewsSection() {
  return (
    <SectionWrapper id="reviews" alternate>
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-4 text-center">
          מה אומרים עלינו
        </h2>
        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-16 text-lg">
          הלקוחות שלנו הם השותפים שלנו. ככה הם מתארים את העבודה איתנו.
        </p>
      </ScrollReveal>

      <div className="max-w-3xl mx-auto">
        <ReviewCarousel />
      </div>
    </SectionWrapper>
  );
}
