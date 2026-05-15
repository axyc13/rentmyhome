const stats = [
  {
    value: "300+",
    label: "Happy landlords",
  },
  {
    value: "6+",
    label: "Years local know-how",
  },
  {
    value: "4.9/5",
    label: "Average client rating",
  },
  {
    value: "100%",
    label: "Healthy Homes focus",
  },
] as const;

export function Stats() {
  return (
    <section className="relative z-20 bg-white py-16 mt--12 px-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[20px] border border-black/5 bg-white px-6 py-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.07)]"
            >
              <p className="text-[2.625rem] font-serif font-bold text-red">
                {stat.value}
              </p>
              <p className="mt-3 text-base text-black/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
