"use client";

import { useState, useEffect } from "react";
import { ReviewCard } from "./ReviewCard";
import Link from "next/link";

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
          <div className="hidden lg:flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          <div className="lg:hidden flex flex-col items-center justify-center gap-6 pb-4 scrollbar-hide">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-8 hover:cursor-pointer hover:underline">
          <Link
            target="_blank"
            href="https://www.google.com/maps/place/Rent+My+Home+(A+Cube+Rentals+Ltd)+-+Residential+Property+Management/@-36.8792352,174.7758868,17.76z/data=!4m8!3m7!1s0x6d0d4da3579c05cf:0xfac8890e0cc4c1a6!8m2!3d-36.8791947!4d174.7760694!9m1!1b1!16s%2Fg%2F11khsq2cb6?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
          >
            See more reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
