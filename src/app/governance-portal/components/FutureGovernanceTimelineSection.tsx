const timeline = [
  {
    year: "2025",
    description: (
      <>
        Governance portal
        <br />
        launched with live
        <br />
        dashboards
      </>
    ),
  },
  {
    year: "2026",
    description: (
      <>
        External assurance
        <br />
        partners onboarded for
        <br />
        ESG &amp; ethics verification
      </>
    ),
  },
  {
    year: "2027",
    description: (
      <>
        ESG rating upgrade to
        <br />
        AAA target
      </>
    ),
  },
  {
    year: "2028",
    description: (
      <>
        100% recyclable
        <br />
        packaging milestone
      </>
    ),
  },
  {
    year: "2030",
    description: (
      <>
        Full renewable energy
        <br />
        adoption + 100,000
        <br />
        farmers empowered
      </>
    ),
  },
];

interface TimelineItemProps {
  year: string;
  description: React.ReactNode;
}

function TimelineItem({ year, description }: TimelineItemProps) {
  return (
    <div className="flex flex-col items-center w-full max-w-[320px] shrink-0">
      <div className="w-16 h-16 rounded-full bg-[#2D5A3D] flex items-center justify-center shrink-0">
        <span className="text-white text-base font-bold font-['Inter']">
          {year}
        </span>
      </div>

      <div className="mt-6 w-full min-h-[100px] md:h-[112px] bg-[#F8F9FA] rounded-lg flex items-center justify-center px-6 text-center">
        <p className="text-base text-[#333333] font-medium font-['Inter'] leading-6">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function FutureGovernanceTimelineSection() {
  return (
    <section className="w-full bg-white border-t-4 border-[#2D5A3D] py-12 md:py-14">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        <h2 className="text-center text-[#2D5A3D] text-xl md:text-2xl font-bold font-[Georgia] leading-7 md:leading-tight">
          Future-Focused Governance Timeline
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-10 mt-10">
          {timeline.slice(0, 3).map((item) => (
            <TimelineItem key={item.year} {...item} />
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-10 mt-6 md:mt-10">
          {timeline.slice(3).map((item) => (
            <TimelineItem key={item.year} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}