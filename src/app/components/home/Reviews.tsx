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

interface ReviewsProps {
  location?: string;
}

const TIMER_DURATION = 15000;

export function Reviews({ location }: ReviewsProps) {
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
        const resolvedLocation = location ?? "auckland";
        const url = `/api/reviews?location=${resolvedLocation}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch reviews");
        const data = await response.json();
        if (data.error) throw new Error(data.error);
        const fetchedReviews: Review[] = (data.reviews || []).map(
          (review: any, index: number) => ({
            id: index + 1,
            name: review.author_name ?? "Anonymous",
            source: review.relative_time_description ?? "Google review",
            rating:
              typeof review.rating === "number"
                ? Math.max(0, Math.min(5, review.rating))
                : 5,
            text: review.text ?? "",
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
  }, [location]);

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
          <p className="text-lg text-red">Error loading reviews: {error}</p>
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
    <section className="bg-[#f5f1ee] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-red">
              Testimonials
            </p>
            <h2 className="mt-3 mb-4 text-3xl font-serif font-bold text-foreground lg:text-[2.875rem]">
              What Our Landlords Say
            </h2>
            <p className="max-w-2xl text-black/60">
              Real stories from landlords who have experienced Rent My Home.
            </p>
          </div>
        </div>

        <div className="relative flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm transition-colors hover:cursor-pointer hover:border-red"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>

          <div className="flex items-center justify-center gap-4 w-full overflow-hidden">
            <div
              onClick={() => go(-1)}
              className="hidden w-64 shrink-0 justify-start opacity-40 transition-all duration-500 md:flex md:scale-[0.88]"
            >
              <ReviewCard review={reviews[getIndex(-1)]} />
            </div>

            <div className="flex w-full max-w-xl shrink-0 justify-center transition-all duration-500 md:scale-[0.92] lg:scale-100">
              <ReviewCard review={reviews[current]} />
            </div>

            <div
              onClick={() => go(1)}
              className="hidden w-64 shrink-0 justify-end opacity-40 transition-all duration-500 md:flex md:scale-[0.88]"
            >
              <ReviewCard review={reviews[getIndex(1)]} />
            </div>
          </div>

          <button
            onClick={() => go(1)}
            className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm transition-colors hover:cursor-pointer hover:border-red"
            aria-label="Next review"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
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

        <div className="mt-8 flex w-full items-center justify-center hover:cursor-pointer hover:underline">
          <Link
            target="_blank"
            href={
              location === "waikato"
                ? "https://www.google.com/maps/place/Rentmyhome/@-37.7844029,175.2804463,15z/data=!4m15!1m8!3m7!1s0xa1165f09cdcd46e5:0x2618d7db17924dcd!2sRentmyhome!8m2!3d-37.7844256!4d175.2806003!10e5!16s%2Fg%2F11wnls_710!3m5!1s0xa1165f09cdcd46e5:0x2618d7db17924dcd!8m2!3d-37.7844256!4d175.2806003!16s%2Fg%2F11wnls_710?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D"
                : "https://www.google.com/maps/place/Rent+My+Home+(A+Cube+Rentals+Ltd)+-+Residential+Property+Management/@-36.8792352,174.7758868,17.76z/data=!4m8!3m7!1s0x6d0d4da3579c05cf:0xfac8890e0cc4c1a6!8m2!3d-36.8791947!4d174.7760694!9m1!1b1!16s%2Fg%2F11khsq2cb6?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
            }
          >
            See more reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
