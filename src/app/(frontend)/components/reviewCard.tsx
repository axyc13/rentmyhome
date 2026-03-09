import { useState } from "react";
import { Star, Quote } from "lucide-react";
import "../global.css";

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
}

export function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const maxChars = 200;
  const isLong = review.text.length > maxChars;
  const displayedText =
    expanded || !isLong ? review.text : review.text.slice(0, maxChars) + "...";

  return (
    <div
      className={`bg-white rounded-2xl p-8 border transition-all duration-500 overflow-auto opacity-100 scale-100 ${expanded ? "h-full" : "h-[54vh]"}`}
    >
      {" "}
      <Quote className="h-10 w-10 text-red mb-4" />
      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < review.rating ? "text-black" : "text-white"}`}
          />
        ))}
      </div>
      {/* Review Text */}
      <p className="text-black text-base leading-relaxed mb-2">
        "{displayedText}"
      </p>
      {isLong && (
        <button
          className="text-primary text-sm underline mb-6"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
      {/* Author */}
      <div className="flex items-center gap-4 mt-4">
        <div>
          <h4 className="font-semibold text-black">{review.name}</h4>
        </div>
      </div>
    </div>
  );
}
