export default function GraduateProgramSection() {
    const programBenefits = [
        {
            title: "Multi-Brand Rotations",
            description:
                "Experience across Noxx Chicken and Zoiko Foods corporate functions",
        },
        {
            title: "Mentorship Program",
            description:
                "Direct access to senior leadership and structured career development",
        },
        {
            title: "Global Opportunities",
            description:
                "Potential assignments across our USA, UK, Caribbean, and Asia operations",
        },
    ];

    const stages = [
        {
            number: "1",
            title: "Operations",
            duration: "6 months",
        },
        {
            number: "2",
            title: "Digital",
            duration: "6 months",
        },
        {
            number: "3",
            title: "Marketing",
            duration: "6 months",
        },
    ];

    return (
        <section className="bg-[#F8F9FA] py-20">
            <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-5 lg:flex-row md:px-20">

                {/* Left Content */}
                <div className="w-full lg:w-[60%] lg:pt-12">
                    <h2 className="text-[22px] font-semibold leading-[1.2] text-[#333333] md:text-4xl md:leading-[1.3]">
                        Graduate & Early Career Program
                    </h2>

                    <h3 className="mt-2 text-sm font-bold leading-7 text-[#2D5A3D] md:text-base">
                        Start your career where growth never stops
                    </h3>

                    <p className="mt-4 text-xs leading-6 text-[#333333] md:mt-6 md:text-base md:leading-7">
                        Our 18-month rotational program gives you exposure across
                        Operations, Digital, and Marketing functions while working on real
                        projects that impact our global expansion.
                    </p>

                    <div className="mt-8 space-y-5">
                        {programBenefits.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-lg bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.10)]"
                            >
                        <h4 className="text-sm font-semibold text-[#2D5A3D] md:text-base">
                                    {item.title}
                                </h4>

                                <p className="mt-2 text-xs leading-5 text-[#666666] md:text-sm md:leading-6">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <button className="mx-auto block mt-6 w-full max-w-[280px] rounded-md bg-[#2D5A3D] px-4 py-3 text-xs font-semibold text-white md:mx-0 md:inline-block md:mt-8 md:w-auto md:px-6 md:text-base">
                        Apply to Graduate Program
                    </button>
                </div>


                {/* Right Timeline */}
                <div className="mt-10 flex w-full flex-row items-center justify-center gap-2 self-stretch lg:mt-0 lg:w-[40%] lg:flex-col lg:items-start lg:gap-0">
                    {stages.map((stage, index) => (
                        <div key={index} className={`flex flex-row items-center lg:w-40 lg:flex-col ${index !== stages.length - 1 ? 'flex-1' : ''}`}>
                            <div className="flex h-[110px] w-[80px] shrink-0 flex-col items-center justify-center rounded-xl bg-[#315C3E] text-white lg:h-40 lg:w-full">
                                <span className="text-xl font-bold lg:text-4xl">
                                    {stage.number}
                                </span>

                                <span className="mt-1 text-xs font-semibold lg:mt-2 lg:text-lg">
                                    {stage.title}
                                </span>

                                <span className="mt-1 px-1 text-center text-[9px] opacity-90 lg:text-sm">
                                    {stage.duration}
                                </span>
                            </div>

                            {index !== stages.length - 1 && (
                                <div className="flex flex-1 items-center justify-center min-w-[20px] text-xl font-bold text-[#2D5A3D] lg:min-h-[48px] lg:text-4xl">
                                    <span className="lg:hidden">→</span>
                                    <span className="hidden lg:block">↓</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}