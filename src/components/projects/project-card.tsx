"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import SpotlightCard from "@/components/reactbits/spotlight-card";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
    >
      <SpotlightCard className="border border-border rounded-sm bg-background transition-all duration-200 hover:border-copper/40 hover:-translate-y-1">
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-6 md:p-8"
        >
          <Badge
            variant="secondary"
            className="mb-4 bg-copper-subtle text-copper border-0 text-xs"
          >
            {project.category}
          </Badge>

          <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-copper transition-colors duration-200">
            {project.title}
          </h3>

          <p className="text-sm text-text-secondary leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex items-center gap-2 text-sm text-text-secondary group-hover:text-copper transition-colors duration-200">
            <span>לפרויקט</span>
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          </div>
        </a>
      </SpotlightCard>
    </motion.div>
  );
}
