export default function WhyWorkSection() {
  const benefits = [
    {
      title: "Global Reach",
      description:
        "Offices and operations across USA, UK, EU, Caribbean, and Asia with opportunities for international mobility.",
    },
    {
      title: "Startup Growth",
      description:
        "Early-stage scale-up environment with rapid career acceleration and significant impact opportunities.",
    },
    {
      title: "Innovation at the Core",
      description:
        "Culinary labs, digital-first operations, and cutting-edge food technology development.",
    },
    {
      title: "Culture of Belonging",
      description:
        "Inclusive, diverse, people-first culture that celebrates different perspectives and backgrounds.",
    },
    {
      title: "Purpose-Driven",
      description:
        "Sustainability and community impact built into our growth strategy and daily operations.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1360px] px-5">
        {/* Heading */}
        <h2 className="text-center text-[26px] font-semibold leading-10 text-[#333333] md:text-3xl">
          Why Work at Zoiko Foods?
        </h2>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {benefits.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="rounded-xl border-t-4 border-[#315C3E] bg-white px-5 py-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.10)] md:px-8 md:py-12"
            >
              <h3 className="text-xl font-bold leading-8 text-[#265335] md:text-2xl">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#4F4F4F] md:mt-6 md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {benefits.slice(3).map((item, index) => (
            <div
              key={index}
              className="w-full max-w-[410px] rounded-xl border-t-4 border-[#315C3E] bg-white px-5 py-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.10)] md:px-8 md:py-12"
            >
              <h3 className="text-xl font-bold leading-8 text-[#265335] md:text-2xl">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#4F4F4F] md:mt-6 md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}