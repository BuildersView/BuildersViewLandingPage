import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  alternate?: boolean;
}

export function SectionWrapper({
  children,
  className,
  id,
  alternate = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20",
        alternate && "bg-bg-secondary",
        className
      )}
    >
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}
