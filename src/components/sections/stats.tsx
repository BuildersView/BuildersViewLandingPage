"use client";

import CountUp from "@/components/reactbits/count-up";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

const stats = [
  { value: 50, suffix: "+", label: "פרויקטים שהושקו" },
  { value: 98, suffix: "%", label: "לקוחות מרוצים" },
  { value: 4, suffix: " שנים", label: "ניסיון בתעשייה" },
  { value: 12, suffix: "", label: "אנשי צוות" },
];

export function StatsSection() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 border-t border-b border-border">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-copper mb-2" dir="ltr">
                  <CountUp
                    to={stat.value}
                    duration={2.5}
                    delay={0.2}
                    suffix={stat.suffix}
                    separator=","
                  />
                </div>
                <p className="text-sm text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
