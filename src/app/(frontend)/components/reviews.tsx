"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReviewCard } from "./reviewCard";

interface Review {
  id: number;
  name: string;
  source: string;
  rating: number;
  text: string;
}

export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/reviews");

        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }

        const data = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        const fetchedReviews: Review[] = (data.reviews || []).map(
          (review: any, index: number) => ({
            id: index + 1,
            name: review.author_name,
            rating: review.rating,
            text: review.text,
          }),
        );

        setReviews(fetchedReviews);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg">Loading reviews...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-red-500">
              Error loading reviews: {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (reviews.length === 0) {
    return (
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg">No reviews available.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground">
              Real stories from landlords and tenants who've experienced Rent My
              Home.
            </p>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-6">
              {(showAll ? reviews : reviews.slice(0, 3)).map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
            {reviews.length > 3 && (
              <div className="text-center mt-6">
                <button
                  className="text-primary underline text-sm"
                  onClick={() => setShowAll((prev) => !prev)}
                >
                  {showAll ? "Show fewer reviews" : "Show more reviews"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
