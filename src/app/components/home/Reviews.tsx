"use client";

import Link from "next/link";
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
    name: "Mary Bridgette Babu",
    rating: 5,
    text: "Very happy with the service from Rent My Home property management. They have been easy to deal with, communicate well, and take great care of my rental property. Would happily recommend them.",
  },
] as const;

const AUCKLAND_REVIEW_URL =
  "https://www.google.com/maps/place/Rent+My+Home+(A+Cube+Rentals+Ltd)+-+Residential+Property+Management/@-36.8791947,174.7760694,17z/data=!4m8!3m7!1s0x6d0d4da3579c05cf:0xfac8890e0cc4c1a6!8m2!3d-36.8791947!4d174.7760694!9m1!1b1!16s%2Fg%2F11khsq2cb6?entry=ttu";

const WAIKATO_REVIEW_URL =
  "https://www.google.com/maps/place/Rentmyhome/@-37.7844256,175.2806003,15z/data=!4m15!1m8!3m7!1s0xa1165f09cdcd46e5:0x2618d7db17924dcd!2sRentmyhome!8m2!3d-37.7844256!4d175.2806003!10e5!16s%2Fg%2F11wnls_710!3m5!1s0xa1165f09cdcd46e5:0x2618d7db17924dcd!8m2!3d-37.7844256!4d175.2806003!16s%2Fg%2F11wnls_710?entry=ttu";

export function Reviews({ location }: ReviewsProps) {
  const reviewUrl =
    location === "waikato" ? WAIKATO_REVIEW_URL : AUCKLAND_REVIEW_URL;

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
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

        <div className="grid gap-6 lg:grid-cols-3">
          {STATIC_REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} href={reviewUrl} />
          ))}
        </div>
      </div>
    </section>
  );
}
