"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RotatingText, {
  type RotatingTextRef,
} from "@/components/reactbits/rotating-text";

const PHRASES = [
  "הרעיון שלך",
  "העבודה שלנו",
  "BuildersView",
];

// Per-phrase display durations (ms)
const PHRASE_DURATIONS = [1400, 1800, 2200];
const TOTAL_DURATION_MS = PHRASE_DURATIONS.reduce((a, b) => a + b, 0);

export function IntroScreen({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textDir, setTextDir] = useState<"rtl" | "ltr">("rtl");
  const dismissed = useRef(false);
  const rotatingRef = useRef<RotatingTextRef>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dismiss = useCallback(() => {
    if (dismissed.current) return;
    dismissed.current = true;
    setShowIntro(false);
  }, []);

  // Drive rotation manually with per-phrase timing
  useEffect(() => {
    if (!mounted || dismissed.current) return;

    // For phrases before the last one, advance after their duration
    if (currentIndex < PHRASES.length - 1) {
      const timer = setTimeout(() => {
        rotatingRef.current?.next();
        setCurrentIndex((i) => i + 1);
      }, PHRASE_DURATIONS[currentIndex]);
      return () => clearTimeout(timer);
    }

    // Last phrase — hold then dismiss
    const timer = setTimeout(dismiss, PHRASE_DURATIONS[currentIndex]);
    return () => clearTimeout(timer);
  }, [mounted, currentIndex, dismiss]);

  // Delay dir switch so the Hebrew exit animation finishes before LTR kicks in
  useEffect(() => {
    if (currentIndex === PHRASES.length - 1) {
      const timer = setTimeout(() => setTextDir("ltr"), 450);
      return () => clearTimeout(timer);
    } else {
      setTextDir("rtl");
    }
  }, [currentIndex]);

  // Scroll to skip
  useEffect(() => {
    if (!showIntro) return;

    const handleWheel = () => dismiss();
    const handleTouch = () => dismiss();

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchmove", handleTouch, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouch);
    };
  }, [showIntro, dismiss]);

  return (
    <>
      {mounted && (
        <AnimatePresence>
          {showIntro && (
            <motion.div
              key="intro-overlay"
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Subtle grid background matching hero */}
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

              {/* Radial glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(200, 149, 108, 0.08) 0%, transparent 70%)",
                }}
              />

              {/* Copper accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: TOTAL_DURATION_MS / 1000,
                  ease: "linear",
                }}
              />

              {/* Rotating text — driven manually via ref, auto disabled */}
              <div className="relative text-center" dir={textDir}>
                <RotatingText
                  ref={rotatingRef}
                  texts={PHRASES}
                  loop={false}
                  auto={false}
                  splitBy="characters"
                  staggerDuration={0.03}
                  staggerFrom="first"
                  initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: "-100%", opacity: 0, filter: "blur(8px)" }}
                  transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 200,
                  }}
                  mainClassName="intro-rotating-main"
                  elementLevelClassName="intro-rotating-char"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Page content — always in the DOM for SSR/SEO */}
      <motion.div
        initial={false}
        animate={{ opacity: showIntro && mounted ? 0 : 1 }}
        transition={{ duration: 0.6, delay: showIntro ? 0 : 0.2 }}
        style={{ opacity: mounted ? undefined : 1 }}
      >
        {children}
      </motion.div>
    </>
  );
}
