const aucklandTags = [
  "Auckland Central","North Shore","East Auckland","South Auckland","West Auckland",
  "Rodney","Franklin","Manukau","Papakura","Henderson","Albany","Flat Bush",
  "Epsom","Remuera","Howick","Mt Wellington","Botany","Takapuna","+ Surrounding Suburbs",
];

const waikatoTags = [
  "Hamilton","Hamilton East","Rototuna","Chartwell","Te Rapa","Cambridge",
  "Te Awamutu","Taupō","Tokoroa","Morrinsville","Matamata","Huntly",
  "Ngaruawahia","Thames","Whitianga","+ Surrounding Areas",
];

export default function AreasWeService() {
  return (
    <section className="bg-[#111] text-white py-30">
      <div className="mx-auto w-[90%] max-w-325">

        <div className="text-center mb-15">
          <h4 className="text-[13px] text-red tracking-[2px] uppercase mb-3.5 font-semibold">
            Coverage
          </h4>
          <h2 className="font-serif font-bold text-[44px] leading-[1.2] text-white">
            Areas We Service
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7.5">

          {[
            { city: "Auckland", subtitle: "All Auckland Regions", tags: aucklandTags },
            { city: "Waikato", subtitle: "All Waikato Regions", tags: waikatoTags },
          ].map((area) => (
            <div
              key={area.city}
              className="bg-white/5 rounded-[22px] p-10 border border-white/10"
            >
              <h3 className="font-serif font-bold text-[22px] text-white mb-1.5">
                {area.city}
              </h3>
              <p className="text-red text-[13px] font-semibold tracking-[1px] uppercase mb-5">
                {area.subtitle}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-red/[0.12] text-[#ff7b7c] text-[13px] px-3.5 py-1.5 rounded-full border border-red/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
