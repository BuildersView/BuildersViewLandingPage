import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { ContactFormClient } from "@/components/contact/contact-form-client";

export function ContactSection() {
  return (
    <SectionWrapper id="contact" alternate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Left side - message */}
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-6">
            בואו נבנה ביחד
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            יש לכם רעיון, צורך, או חלום? ספרו לנו ונחזור אליכם תוך 24 שעות עם
            תשובה אמיתית — לא תבנית אוטומטית.
          </p>
          <div className="flex flex-col gap-3 text-sm text-text-secondary">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-copper rounded-full shrink-0" />
              <span>שיחת היכרות ללא התחייבות</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-copper rounded-full shrink-0" />
              <span>הצעת מחיר מפורטת תוך ימים</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-copper rounded-full shrink-0" />
              <span>ליווי מלא מהרגע הראשון</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Right side - form */}
        <ScrollReveal delay={0.2}>
          <ContactFormClient />
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
