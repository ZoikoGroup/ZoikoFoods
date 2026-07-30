const stories = [
  {
    region: "India, Rice",
    name: "Ravi",
    quote:
      "A 3-year Zoiko contract stabilized my family income during volatile markets.",
  },
  {
    region: "Jamaica, Spices",
    name: "Marcia",
    quote: "From my pepper farm to Zoiko patties on global tables.",
  },
  {
    region: "Europe, Wines",
    name: "Sofia",
    quote: "Zoiko brought my family vineyard into new global markets.",
  },
  {
    region: "Africa, Coffee",
    name: "Kwame",
    quote: "Agritech training increased my yield by 20% in 2 years.",
  },
];

export default function FarmerStories() {
  return (
    <section className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <h2 className="mb-8 sm:mb-12 text-center font-[Georgia] text-2xl sm:text-3xl font-bold leading-8 sm:leading-[52px] text-[#2D5A3D]">
          Farmer Stories
        </h2>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {stories.map((story) => (
            <div
              key={story.name}
              className="rounded-lg bg-white p-6 sm:p-8 shadow-[0px_4px_6px_rgba(0,0,0,0.10)] transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="font-[Inter] text-sm font-bold uppercase leading-6 tracking-wide text-[#D4A574]">
                {story.region}
              </p>

              <h3 className="mt-3 font-[Inter] text-2xl sm:text-3xl font-bold leading-8 sm:leading-10 text-[#2D5A3D]">
                {story.name}
              </h3>

              <div className="mt-6 sm:mt-8 border-l-4 border-[#2D5A3D] pl-4 sm:pl-5">
                <p className="font-[Inter] text-sm sm:text-base leading-6 text-[#666666]">
                  "{story.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}