"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.05,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const brandName = "BuildersView";

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
        {/* Main headline — each letter animated */}
        <h1 className="font-heading font-bold leading-[0.9] tracking-tight mb-6">
          <span dir="ltr" className="block text-5xl md:text-7xl lg:text-[8rem] xl:text-[9rem]">
            {brandName.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className="inline-block"
                style={
                  letter === "V"
                    ? { color: "var(--primary)" }
                    : undefined
                }
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
          className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-xl leading-relaxed mb-10 font-light"
        >
          יש לך רעיון? אנחנו נהפוך אותו למציאות —
          <br className="hidden md:block" />
          ונישאר איתך לאורך כל הדרך.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.4, type: "spring", stiffness: 200 }}
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
