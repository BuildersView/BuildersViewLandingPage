import type { Review } from "@/lib/types";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-bg-secondary border border-border rounded-sm p-8 md:p-10">
      <blockquote className="text-foreground text-base md:text-lg leading-relaxed mb-6">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <div>
        <p className="font-heading font-medium text-foreground text-sm">
          {review.name}
        </p>
        <p className="text-text-secondary text-xs mt-1">{review.role}</p>
      </div>
    </div>
  );
}
