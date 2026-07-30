export default function EmployeeVoicesSection() {
  const testimonials = [
    {
      quote:
        "I joined as a trainee in Noxx Chicken operations — now I help run supply chain for Zoiko Foods Corp. across two regions. The growth opportunities here are incredible.",
      initials: "KP",
      name: "Keisha Patterson",
      role: "Supply Chain Manager",
      location: "Jamaica → UK Operations",
    },
    {
      quote:
        "I chose Zoiko because I wanted to grow fast — within 18 months, I was leading projects bigger than anything I'd touch in a legacy food giant.",
      initials: "MS",
      name: "Michael Smith",
      role: "Digital Innovation Lead",
      location: "London HQ",
    },
    {
      quote:
        "The culinary innovation lab gives me freedom to experiment with flavors from my heritage while creating products for global markets.",
      initials: "AR",
      name: "Ananya Reddy",
      role: "R&D Food Scientist",
      location: "Bangalore Innovation Center",
    },
  ];

  return (
    <section className="bg-[#F8F9FA] py-20">
      <div className="mx-auto max-w-[1360px] px-5">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[26px] font-semibold leading-10 text-[#333333] md:text-4xl">
            Employee Voices
          </h2>

          <p className="mt-4 px-2 text-sm leading-6 text-[#666666] md:px-0 md:text-lg md:leading-7">
            Hear from team members about their journey with Zoiko Foods
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border-l-4 border-[#2D5A3D] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.10)] md:p-8"
            >
              <p className="text-sm italic leading-6 text-[#666666] md:text-base">
                "{item.quote}"
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-800 text-base font-bold text-white">
                  {item.initials}
                </div>

                <div>
                  <h4 className="text-base font-bold text-[#333333]">
                    {item.name}
                  </h4>

                  <p className="text-sm text-[#666666]">
                    {item.role}
                  </p>

                  <p className="mt-1 text-xs text-[#999999]">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}