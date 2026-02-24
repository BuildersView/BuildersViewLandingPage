import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { ProcessTimeline } from "@/components/process/process-timeline";

export function AboutProcessSection() {
  return (
    <SectionWrapper id="process">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-4 text-center">
          איך אנחנו עובדים
        </h2>
        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-16 md:mb-24 text-lg">
          תהליך מובנה שמתחיל מהבנה עמוקה של הרעיון — ומסתיים במוצר שעובד, מתוחזק,
          ומתפתח.
        </p>
      </ScrollReveal>

      <ProcessTimeline />
    </SectionWrapper>
  );
}
