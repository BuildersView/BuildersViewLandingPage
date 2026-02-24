"use client";

import { motion } from "framer-motion";
import type { ProcessStep } from "@/lib/types";

interface ProcessStepCardProps {
  step: ProcessStep;
  index: number;
}

export function ProcessStepCard({ step, index }: ProcessStepCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`
        flex items-start gap-6 md:gap-8
        ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
        md:text-${isEven ? "end" : "start"}
      `}
    >
      {/* Content */}
      <div className="flex-1">
        <div className="text-5xl mb-4">{step.icon}</div>
        <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-2">
          {step.title}
        </h3>
        <p className="text-text-secondary leading-relaxed text-sm md:text-base">
          {step.description}
        </p>
      </div>

      {/* Step number indicator */}
      <div className="hidden md:flex flex-col items-center shrink-0">
        <div className="w-10 h-10 rounded-full bg-copper-subtle border border-copper/30 flex items-center justify-center">
          <span className="text-sm font-medium text-copper">{step.id}</span>
        </div>
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}
