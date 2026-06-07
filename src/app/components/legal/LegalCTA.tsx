type Props = {
  title: string;
  description: string;
  buttonLabel: string;
};

export default function LegalCTA({ title, description, buttonLabel }: Props) {
  return (
    <section
      className="py-27.5 text-white text-center"
      style={{
        background:
          "linear-gradient(rgba(239,43,45,0.92),rgba(239,43,45,0.92)), url('/building.jpg') center/cover no-repeat",
      }}
    >
      <div className="mx-auto w-[90%] max-w-312.5">
        <h2 className="font-serif font-bold text-[40px] sm:text-[58px] leading-[1.15] mb-5.5">
          {title}
        </h2>
        <p className="max-w-187.5 mx-auto leading-[1.9] text-lg mb-8.75">
          {description}
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-red font-bold px-9 py-4.5 rounded-[14px] hover:bg-black hover:text-white transition-colors"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}
