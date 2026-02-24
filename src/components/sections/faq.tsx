"use client";

import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import type { FAQItem } from "@/lib/types";

const faqItems: FAQItem[] = [
  {
    question: "כמה זמן לוקח לפתח מוצר מאפס?",
    answer:
      "זה תלוי בהיקף הפרויקט. מוצר MVP בסיסי יכול להיות מוכן תוך 4-8 שבועות. מערכת מורכבת יותר יכולה לקחת 3-6 חודשים. בשיחה הראשונית נאפיין יחד את הפרויקט ונתן הערכה מדויקת.",
  },
  {
    question: "מה קורה אחרי ההשקה?",
    answer:
      "אנחנו לא נעלמים. אחרי ההשקה אנחנו ממשיכים ללוות — תחזוקה שוטפת, תיקוני באגים, שיפורים מתמידים, והתאמות לצרכים שמשתנים. אנחנו שותפים לטווח ארוך.",
  },
  {
    question: "באילו טכנולוגיות אתם עובדים?",
    answer:
      "אנחנו עובדים עם הטכנולוגיות המתקדמות ביותר — Next.js, React, TypeScript, Node.js, PostgreSQL, ועוד. הבחירה תמיד תלויה בצרכי הפרויקט ולא בהעדפה אישית.",
  },
  {
    question: "אפשר להתחיל בלי אפיון מוכן?",
    answer:
      "בהחלט. רוב הלקוחות שלנו מגיעים עם רעיון כללי, ואנחנו עוזרים להפוך אותו לאפיון מסודר. זה חלק מהתהליך שלנו.",
  },
  {
    question: "כמה עולה לפתח מוצר?",
    answer:
      "העלות תלויה בהיקף, במורכבות, ובלוחות הזמנים. אנחנו נותנים הצעת מחיר מפורטת אחרי שיחת אפיון ראשונית — בלי הפתעות.",
  },
  {
    question: "אתם עובדים גם עם סטארטאפים?",
    answer:
      "בהחלט. אנחנו עובדים עם סטארטאפים, חברות בצמיחה, ועסקים מבוססים. לכל אחד יש גישה שמותאמת לשלב שבו הוא נמצא.",
  },
];

export function FAQSection() {
  return (
    <SectionWrapper id="faq">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-4 text-center">
          שאלות נפוצות
        </h2>
        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-16 text-lg">
          תשובות לשאלות שאנחנו שומעים הכי הרבה.
        </p>
      </ScrollReveal>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible>
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <AccordionItem value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-base text-start hover:no-underline hover:text-copper">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
