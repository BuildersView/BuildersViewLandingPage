"use client";

import { motion } from "framer-motion";
import type { Review } from "@/lib/types";

const BODY_COLORS = [
  "#232B35", "#2A333D", "#1E2730", "#283038",
  "#252D37", "#202832", "#2C3440", "#1C242E",
];
const HEAD_COLORS = [
  "#2C3640", "#283038", "#303A44", "#252D37",
  "#1E2730", "#2A333D", "#343E48", "#222A34",
];
const HEIGHT_OFFSETS = [0, -4, 3, -2, 5, -3, 2, -5, 4, -1, 3, -6, 1, -3, 5, -2, 0, -4, 2, -5, 6, -1, 3, -3];

interface PersonSilhouetteProps {
  review: Review;
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
  index: number;
}

export function PersonSilhouette({
  review,
  isActive,
  onActivate,
  onDeactivate,
  index,
}: PersonSilhouetteProps) {
  const bodyColor = BODY_COLORS[index % BODY_COLORS.length];
  const headColor = HEAD_COLORS[index % HEAD_COLORS.length];
  const heightOffset = HEIGHT_OFFSETS[index % HEIGHT_OFFSETS.length];

  return (
    <motion.div
      animate={{
        y: isActive ? -20 : 0,
        scale: isActive ? 1.08 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 24,
      }}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onClick={onActivate}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onActivate();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={review.name}
      className="cursor-pointer relative shrink-0 mx-[2px] md:mx-1"
      style={{
        zIndex: isActive ? 20 : 5,
        marginBottom: heightOffset,
      }}
    >
      <svg
        width="60"
        height="90"
        viewBox="0 0 60 90"
        fill="none"
        className="w-12 h-auto md:w-14 lg:w-16"
      >
        {/* Head */}
        <motion.circle
          cx="30"
          cy="22"
          r="14"
          animate={{
            fill: isActive ? "#C8956C" : headColor,
          }}
          transition={{ duration: 0.25 }}
        />

        {/* Copper ring when active */}
        {isActive && (
          <circle
            cx="30"
            cy="22"
            r="16"
            fill="none"
            stroke="#C8956C"
            strokeWidth="1.5"
            opacity="0.4"
          />
        )}

        {/* Body */}
        <motion.path
          d="M8,90 C8,66 16,54 22,48 Q26,44 30,43 Q34,44 38,48 C44,54 52,66 52,90 Z"
          animate={{
            fill: isActive ? "#3A4450" : bodyColor,
          }}
          transition={{ duration: 0.25 }}
        />
      </svg>
    </motion.div>
  );
}
