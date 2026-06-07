"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Review, ReviewCard } from "./ReviewCard";

interface ReviewsProps {
  location?: string;
}

const STATIC_REVIEWS: Review[] = [
  {
    id: 1,
    name: "Anjana Hariharan",
    rating: 5,
    text: "Very good customer service by Aman Khattri. Very helpful and prompt response throughout until we moved in. Thank you for your excellent service appreciate your efforts and your help.",
  },
  {
    id: 2,
    name: "Gurpreet Dhillon",
    rating: 5,
    text: "Outstanding service and communication. Prashant and Aman easy to deal with. Always go over and above to give 100%.",
  },
  {
    id: 3,
    name: "Sanya Bajaj",
    rating: 5,
    text: "Prashant and Anuj were quick, friendly, and transparent throughout the process of renting a home. They secured great tenants at a competitive rental rate in no time. Truly professional and attentive to both tenant and homeowner’s needs—highly recommended!",
  },
  {
    id: 4,
    name: "Mary Bridgette Babu",
    rating: 5,
    text: "Very happy with the service from Rent My Home property management. They have been easy to deal with, communicate well, and take great care of my rental property. Would happily recommend them.",
  },
  {
    id: 5,
    name: "Bhupender Singh",
    rating: 5,
    text: "I had a great experience with Rent My Home. Their service was excellent and very efficient — it only took 2 days to get my property rented out!",
  },
  {
    id: 6,
    name: "James Certeza",
    rating: 5,
    text: "5 star experience. Easy transaction and they will walk you throughout the process.",
  },
  {
    id: 7,
    name: "Dee Arora",
    rating: 5,
    text: "We are absolutely thrilled with the outstanding service provided by Rent my home.",
  },
];

const AUCKLAND_REVIEW_URL =
  "https://www.google.com/maps/place/Rent+My+Home+(A+Cube+Rentals+Ltd)+-+Residential+Property+Management/@-36.8791947,174.7760694,17z/data=!4m8!3m7!1s0x6d0d4da3579c05cf:0xfac8890e0cc4c1a6!8m2!3d-36.8791947!4d174.7760694!9m1!1b1!16s%2Fg%2F11khsq2cb6?entry=ttu";

const WAIKATO_REVIEW_URL =
  "https://www.google.com/maps/place/Rentmyhome/@-37.7844256,175.2806003,15z/data=!4m15!1m8!3m7!1s0xa1165f09cdcd46e5:0x2618d7db17924dcd!2sRentmyhome!8m2!3d-37.7844256!4d175.2806003!10e5!16s%2Fg%2F11wnls_710!3m5!1s0xa1165f09cdcd46e5:0x2618d7db17924dcd!8m2!3d-37.7844256!4d175.2806003!16s%2Fg%2F11wnls_710?entry=ttu";

const AUTOPLAY_INTERVAL = 4000;

export function Reviews({ location }: ReviewsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const reviewUrl =
    location === "waikato" ? WAIKATO_REVIEW_URL : AUCKLAND_REVIEW_URL;

  const visibleReviews = useMemo(() => {
    return Array.from({ length: 3 }, (_, i) => {
      return STATIC_REVIEWS[(activeIndex + i) % STATIC_REVIEWS.length];
    });
  }, [activeIndex]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % STATIC_REVIEWS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + STATIC_REVIEWS.length) % STATIC_REVIEWS.length,
    );
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(handleNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [paused, handleNext]);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-red">
              Testimonials
            </p>

            <h2 className="mt-3 text-3xl font-serif font-bold text-foreground lg:text-[2.875rem]">
              What Our Clients Say
            </h2>

            <p className="mt-4 max-w-2xl text-black/60">
              A few recent Google reviews from landlords and tenants who have
              worked with Rent My Home.
            </p>
          </div>

          <Link
            href={reviewUrl}
            target="_blank"
            className="text-sm font-semibold text-red transition-colors hover:underline"
          >
            View all Google reviews
          </Link>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous reviews"
            className="absolute -left-5 top-1/2 z-10 -translate-y-1/2 rounded-full border border-black/10 bg-white p-3 shadow-lg transition hover:bg-gray-50"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="overflow-hidden rounded-3xl p-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {visibleReviews.map((review, index) => (
                <div
                  key={`${review.id}-${activeIndex}`}
                  className={index > 0 ? "hidden lg:block" : ""}
                >
                  <ReviewCard review={review} href={reviewUrl} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next reviews"
            className="absolute -right-5 top-1/2 z-10 -translate-y-1/2 rounded-full border border-black/10 bg-white p-3 shadow-lg transition hover:bg-gray-50"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
