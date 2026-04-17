"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ReviewCard } from "./ReviewCard";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  id: number;
  name: string;
  source: string;
  rating: number;
  text: string;
}

const TIMER_DURATION = 15000;

export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/reviews");
        if (!response.ok) throw new Error("Failed to fetch reviews");
        const data = await response.json();
        if (data.error) throw new Error(data.error);
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

  const resetTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    setProgress(0);

    const startTime = Date.now();
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min((elapsed / TIMER_DURATION) * 100, 100));
    }, 30);

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
      resetTimer();
    }, TIMER_DURATION);
  }, [reviews.length]);

  useEffect(() => {
    if (reviews.length > 1) resetTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [reviews.length, resetTimer]);

  const go = (dir: 1 | -1) => {
    setCurrent((prev) => (prev + dir + reviews.length) % reviews.length);
    resetTimer();
  };

  const getIndex = (offset: number) =>
    (current + offset + reviews.length) % reviews.length;

  if (loading) {
    return (
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-lg">Loading reviews...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-lg text-red-500">Error loading reviews: {error}</p>
        </div>
      </section>
    );
  }

  if (reviews.length === 0) {
    return (
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-lg">No reviews available.</p>
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

        {/* Carousel */}
        <div className="relative flex items-center justify-center gap-4">
          {/* Left arrow */}
          <button
            onClick={() => go(-1)}
            className="z-10 shrink-0 w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center hover:border-black transition-colors hover:cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>

          {/* Cards */}
          <div className="flex items-center justify-center gap-4 w-full overflow-hidden">
            {/* Left ghost card — hidden on mobile */}
            <div
              onClick={() => go(-1)}
              className="hidden md:flex justify-start w-64 shrink-0 opacity-40 scale-85 transition-all duration-500"
            >
              <ReviewCard review={reviews[getIndex(-1)]} />
            </div>

            {/* Centre card */}
            <div className="scale-70 lg:scale-100 flex justify-center shrink-0 w-full max-w-xl transition-all duration-500">
              <ReviewCard review={reviews[current]} />
            </div>

            {/* Right ghost card — hidden on mobile */}
            <div
              onClick={() => go(1)}
              className="hidden md:flex justify-end w-64 shrink-0 opacity-40 scale-85 transition-all duration-500"
            >
              <ReviewCard review={reviews[getIndex(1)]} />
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={() => go(1)}
            className="z-10 shrink-0 w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center hover:border-black transition-colors hover:cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Progress bar + dots */}
        <div className="mt-8 flex flex-col items-center gap-3">
          {/* Dots */}
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrent(i);
                  resetTimer();
                }}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 h-2 bg-black"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
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
