import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Review } from "@/lib/types";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-bg-secondary border border-border rounded-sm p-8 md:p-10">
      <blockquote className="text-foreground text-base md:text-lg leading-relaxed mb-8">
        &ldquo;{review.quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-4">
        <Image
          src={review.image}
          alt={review.name}
          width={48}
          height={48}
          className="rounded-full object-cover w-12 h-12"
        />

        <div className="flex-1 min-w-0">
          <p className="font-heading font-medium text-foreground text-sm">
            {review.name}
          </p>
          <p className="text-text-secondary text-xs mt-0.5">
            {review.role}, {review.company}
          </p>
        </div>

        <a
          href={review.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-copper transition-colors duration-200 shrink-0"
          aria-label={`לאתר של ${review.company}`}
        >
          <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
        </a>
      </div>
    </div>
  );
}
