import Link from "next/link";
import { posts, type Post } from "./posts";

type Props = {
  currentSlug: string;
};

export default function ArticleSidebar({ currentSlug }: Props) {
  const related = posts.filter((p: Post) => p.slug !== currentSlug);

  return (
    <div className="sticky top-30 h-fit space-y-7.5">
      <div className="bg-[#f8f8f8] p-8 rounded-[25px]">
        <h3 className="font-serif font-bold text-2xl mb-6">Recent Articles</h3>
        {related.map((post: Post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block text-sm leading-loose text-black/70 hover:text-red transition-colors mb-4 last:mb-0"
          >
            {post.title}
          </Link>
        ))}
      </div>

      <div className="bg-red text-white p-10 rounded-[25px]">
        <h3 className="font-serif font-bold text-[28px] mb-5">
          Need Professional Property Management?
        </h3>
        <p className="leading-loose text-sm mb-7">
          Speak with RMH today and discover how proactive management can protect
          and grow your investment.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-black font-semibold px-6 py-3.5 rounded-[12px] text-sm hover:bg-black hover:text-white transition-colors"
        >
          Talk To Our Team
        </Link>
      </div>
    </div>
  );
}
