"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Ear,
  PencilRuler,
  Code,
  ShieldCheck,
  Rocket,
  Handshake,
} from "lucide-react";
import { ProcessStepCard } from "./process-step";
import type { ProcessStep } from "@/lib/types";

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "מקשיבים",
    description:
      "יושבים איתך, מבינים את הרעיון, את הכאב, את החלום. שום דבר לא מתחיל בלי הבנה עמוקה.",
    icon: Ear,
  },
  {
    id: 2,
    title: "מאפיינים",
    description:
      "מתרגמים את הרעיון לאפיון מדויק — UX, לוגיקה עסקית, טכנולוגיה, סקיילביליות. הכל על הנייר לפני שורת קוד אחת.",
    icon: PencilRuler,
  },
  {
    id: 3,
    title: "בונים",
    description:
      "פיתוח מקצועי ומודולרי עם הטכנולוגיות הנכונות. קוד נקי, ארכיטקטורה יציבה, ביצועים גבוהים.",
    icon: Code,
  },
  {
    id: 4,
    title: "בודקים",
    description:
      "בדיקות מלאות — פונקציונליות, אבטחה, חוויית משתמש. כל פינה עוברת ביקורת לפני שעולים לאוויר.",
    icon: ShieldCheck,
  },
  {
    id: 5,
    title: "משיקים",
    description:
      "השקה מלווה ומבוקרת. מוודאים שהכל עובד, עוזרים עם ההגדרות, ומלווים את הרגעים הראשונים.",
    icon: Rocket,
  },
  {
    id: 6,
    title: "מלווים",
    description:
      "אנחנו לא נעלמים אחרי ההשקה. תחזוקה, שיפורים, עדכונים — נישאר איתך לאורך כל הדרך.",
    icon: Handshake,
  },
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Vertical timeline line - center on desktop */}
      <div className="hidden md:block absolute start-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2">
        <motion.div
          className="absolute top-0 start-0 w-full bg-copper/40"
          style={{ height: lineHeight }}
        />
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-16 md:gap-20">
        {processSteps.map((step, index) => (
          <ProcessStepCard key={step.id} step={step} index={index} />
        ))}
      </div>
    </div>
  );
}
