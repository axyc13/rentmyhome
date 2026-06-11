import type { Metadata } from "next";
import { Header } from "@/src/app/components/common/Header";
import { Footer } from "@/src/app/components/common/Footer";
import { posts } from "@/src/app/components/blog/posts";
import BlogCard from "@/src/app/components/blog/BlogCard";

export const metadata: Metadata = {
  title: "Blog | Rent My Home",
  description:
    "Expert landlord advice, rental growth strategies, property management insights, and New Zealand market updates.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="bg-[#111] text-white pt-30 pb-20 text-center">
        <div className="mx-auto w-[90%] max-w-325">
          <h4 className="text-[15px] text-red tracking-[2px] mb-5 uppercase">
            RMH Insights
          </h4>
          <h1 className="font-serif font-bold text-[52px] sm:text-[62px] lg:text-[70px] leading-[1.1] mb-6">
            Property Management
            <br />
            Insights &amp; Guides
          </h1>
          <p className="text-[#ccc] text-lg leading-loose max-w-212.5 mx-auto mb-10">
            Expert landlord advice, rental growth strategies, property
            management insights, and New Zealand market updates designed to help
            landlords maximise returns and simplify ownership.
          </p>
          <input
            type="text"
            placeholder="Search articles, tips, guides..."
            className="bg-white w-full max-w-175 px-6 py-5 rounded-[14px] text-base text-black outline-none border-none"
          />
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-30">
        <div className="mx-auto w-[90%] max-w-325">
          <div className="text-center mb-15">
            <h4 className="text-[15px] text-red tracking-[2px] mb-4 uppercase">
              Latest Articles
            </h4>
            <h2 className="font-serif font-bold text-[46px] leading-[1.2]">
              Recently Published
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5">
            {posts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
