import {
  GlobeMeridiansIcon,
  DocumentIcon,
  LockIcon,
  HandshakeIcon,
} from "../../../components/icons";

const iconGradient =
  "linear-gradient(114.83deg, rgb(34,139,34) 0%, rgb(45,90,61) 50%, rgb(212,165,116) 100%), linear-gradient(135deg, rgb(184,148,30) 0%, rgb(212,175,55) 100%)";

const trustItems = [
  {
    icon: GlobeMeridiansIcon,
    key: "Multi-Region Footprint",
    title: "Multi-Region Footprint",
    description:
      "Operational presence across North America, Caribbean, and UK markets with established sourcing networks.",
    descriptionWidth: "max-w-[211px] lg:max-w-[187px]",
  },
  {
    icon: DocumentIcon,
    key: "Documentation Readiness",
    title: (
      <>
        Documentation
        <br className="hidden lg:block" />
        Readiness
      </>
    ),
    description:
      "Retail-ready spec sheets, case pack details, labeling files, and technical documentation maintained for all products.",
    descriptionWidth: "max-w-[210px] lg:max-w-[182px]",
  },
  {
    icon: LockIcon,
    key: "Controlled Engagement",
    title: "Controlled Engagement",
    description:
      "Structured commercial evaluation process with capacity review and compliance assessment before commitment.",
    descriptionWidth: "max-w-[220px] lg:max-w-[164px]",
  },
  {
    icon: HandshakeIcon,
    key: "Partnership Approach",
    title: "Partnership Approach",
    description:
      "Collaborative development process with transparent communication and realistic timeline management.",
    descriptionWidth: "max-w-[191px] lg:max-w-[183px]",
  },
];

export default function TrustStrip() {
  return (
    <section
      className="font-inter rounded-xl border p-8 lg:p-10"
      style={{
        borderColor: "rgba(212,175,55,0.2)",
        backgroundImage:
          "linear-gradient(135deg, rgba(45,80,22,0.05) 0%, rgba(212,175,55,0.05) 100%)",
      }}
    >
      <h2 className="text-center text-2xl font-bold leading-[1.6] text-[#2d5016]">
        Operational Trust &amp;
        <br className="lg:hidden" /> Capability Signals
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-4">
        {trustItems.map((item) => (
          <div key={item.key} className="flex gap-4">
            <div
              className="flex size-10 shrink-0 items-center justify-center rounded-lg text-white"
              style={{ backgroundImage: iconGradient }}
            >
              <item.icon className="size-5" />
            </div>
            <div>
              <p className="text-base font-bold leading-[1.6] text-[#2d5016]">
                {item.title}
              </p>
              <p
                className={`mt-2 text-[14.4px] leading-[1.4] text-[#2c2c2c] ${item.descriptionWidth}`}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
