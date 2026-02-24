"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReviewCard } from "./review-card";
import type { Review } from "@/lib/types";
import { cn } from "@/lib/utils";

const reviews: Review[] = [
  {
    id: 1,
    quote:
      "BuildersView לקחו רעיון שהיה רק בראש שלי והפכו אותו למערכת שלמה. מקצועיות ברמה אחרת.",
    name: "יוסי כהן",
    role: "מייסד, TechFlow",
  },
  {
    id: 2,
    quote:
      "מה שהכי הפתיע אותי זה הליווי אחרי ההשקה. הם לא נעלמו — ממשיכים לתחזק, לשפר, ולהיות שם.",
    name: "נועה לוי",
    role: "סמנכ״לית מוצר, EduSpark",
  },
  {
    id: 3,
    quote:
      "עבדנו עם כמה חברות פיתוח לפני כן. BuildersView הם הראשונים שבאמת הבינו את הצורך העסקי ולא רק את הטכנולוגיה.",
    name: "דני אברהם",
    role: "CEO, FinanceHub",
  },
  {
    id: 4,
    quote:
      "התהליך היה שקוף מהרגע הראשון. ידענו בדיוק מה קורה, מתי, ולמה. ככה צריך לעבוד.",
    name: "מיכל שטרן",
    role: "מנהלת פרויקטים, GreenTech",
  },
];

export function ReviewCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div>
      <div className="relative overflow-hidden min-h-[220px] md:min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <ReviewCard review={reviews[current]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === current
                ? "bg-copper w-6"
                : "bg-border hover:bg-text-secondary"
            )}
            aria-label={`ביקורת ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
