import { ExternalLink, Star } from "lucide-react";

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
}

type ReviewCardProps = {
  review: Review;
  href: string;
};

export function ReviewCard({ review, href }: ReviewCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full min-h-60 lg:min-h-80 flex-col rounded-3xl border border-black/8 bg-white p-7 shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1.5"
      aria-label={`Read ${review.name}'s Google review`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f1f3f4] text-base font-bold text-black">
            {review.name.charAt(0)}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">{review.name}</h3>
            <p className="text-sm text-black/50">Google review</p>
          </div>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f9fa] text-black/55 transition-colors group-hover:text-red">
          <ExternalLink className="h-4 w-4" />
        </div>
      </div>

      <div className="mt-5 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${
              index < review.rating ? "fill-red text-red" : "text-black/10"
            }`}
          />
        ))}
        <span className="ml-2 text-sm font-medium text-black/55">
          {review.rating}.0
        </span>
      </div>

      <p className="mt-5 line-clamp-6 text-xs lg:text-base leading-7 text-black/72">
        {review.text}
      </p>
    </a>
  );
}
