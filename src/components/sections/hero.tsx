"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import BlurText from "@/components/reactbits/blur-text";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-start justify-end pb-24 md:pb-32 lg:pb-40 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Architectural grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200, 149, 108, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200, 149, 108, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 70%, rgba(200, 149, 108, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl w-full">
        {/* Main headline — blur reveal by letters */}
        <h1 className="font-heading font-bold leading-[0.9] tracking-tight mb-6" dir="ltr">
          <BlurText
            text="BuildersView"
            delay={60}
            animateBy="letters"
            direction="bottom"
            className="text-5xl md:text-7xl lg:text-[8rem] xl:text-[9rem] font-bold"
            stepDuration={0.4}
          />
        </h1>

        {/* Subtitle — blur reveal by words */}
        <BlurText
          text="יש לך רעיון? אנחנו נהפוך אותו למציאות — ונישאר איתך לאורך כל הדרך."
          delay={80}
          animateBy="words"
          direction="bottom"
          className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-xl leading-relaxed mb-10 font-light"
          stepDuration={0.35}
        />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.4, type: "spring", stiffness: 200 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-copper-hover text-base px-8 py-6 rounded-md font-medium"
          >
            <a href="#contact">בואו נבנה ביחד</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
