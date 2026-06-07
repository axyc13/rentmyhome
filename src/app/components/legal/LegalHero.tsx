type Props = {
  label: string;
  title: string;
  description: string;
};

export default function LegalHero({ label, title, description }: Props) {
  return (
    <section className="bg-black text-white text-center pt-32.5 pb-22.5">
      <div className="mx-auto w-[90%] max-w-312.5">
        <h4 className="text-red tracking-[2px] mb-4.5 text-[15px] font-medium">
          {label}
        </h4>
        <h1 className="font-serif font-bold text-[42px] sm:text-[72px] leading-[1.1] mb-6.25">
          {title}
        </h1>
        <p className="max-w-212.5 mx-auto leading-[1.9] text-lg text-[#ccc]">
          {description}
        </p>
      </div>
    </section>
  );
}
