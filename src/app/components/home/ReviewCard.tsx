import { useState } from "react";
import { Star } from "lucide-react";

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
}

export function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const maxChars = 200;
  const safeText = review.text?.trim() || "";
  const isLong = safeText.length > maxChars;
  const displayedText =
    expanded || !isLong ? safeText : safeText.slice(0, maxChars) + "...";

  return (
    <div
      className={`w-80 shrink-0 rounded-[20px] border border-black/50 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-500 ${expanded ? "h-full lg:w-[22rem]" : "h-[28rem] lg:w-[22rem]"}`}
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < review.rating ? "fill-red text-red" : "text-black/12"}`}
          />
        ))}
      </div>
      {displayedText.length === 0 ? (
        <p className="text-lg text-gray-500">No review message.</p>
      ) : (
        <p className="text-black text-base leading-relaxed mb-2">
          {displayedText}
        </p>
      )}
      {isLong && (
        <button
          className="text-primary text-sm underline mb-6"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
      <div className="flex items-center gap-4 mt-4">
        <div>
          <h4 className="font-semibold text-black capitalize">
            {review.name.toLowerCase()}
          </h4>
        </div>
      </div>
    </div>
  );
}
