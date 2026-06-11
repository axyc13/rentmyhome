import Image from "next/image";
import Link from "next/link";
import type { Post } from "./posts";

export default function BlogCard({ slug, category, title, description, image }: Post) {
  return (
    <article className="bg-white rounded-[25px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-2.5">
      <div className="relative h-[250px] w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-7.5">
        <span className="text-red text-sm font-semibold">{category}</span>
        <h3 className="font-serif font-bold text-[1.15rem] leading-[1.5] my-4">
          {title}
        </h3>
        <p className="text-[#666] leading-loose text-sm mb-6">{description}</p>
        <Link
          href={`/blog/${slug}`}
          className="inline-block bg-red text-white px-6 py-3.5 rounded-[12px] text-sm font-semibold hover:bg-black transition-colors"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
