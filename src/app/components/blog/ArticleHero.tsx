type Props = {
  category: string;
  title: string;
  description: string;
  centered?: boolean;
};

export default function ArticleHero({ category, title, description, centered = false }: Props) {
  return (
    <section className={`bg-[#111] text-white pt-30 pb-20 ${centered ? "text-center" : ""}`}>
      <div className="mx-auto w-[90%] max-w-[1150px]">
        <span className="inline-block bg-red text-white text-sm px-[18px] py-2.5 rounded-full mb-6 uppercase">
          {category}
        </span>
        <h1
          className={`font-serif font-bold text-[46px] sm:text-[60px] lg:text-[62px] leading-[1.2] mb-7 ${centered ? "mx-auto" : "max-w-[1000px]"}`}
        >
          {title}
        </h1>
        <p className={`text-[#ccc] text-lg leading-loose max-w-[850px] ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      </div>
    </section>
  );
}
