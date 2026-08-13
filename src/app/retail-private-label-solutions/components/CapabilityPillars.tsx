import { ScaleIcon, CheckIcon, ClipboardIcon, BoxIcon } from "../../../components/icons";

const iconGradient =
  "linear-gradient(114.83deg, rgb(34,139,34) 0%, rgb(45,90,61) 50%, rgb(212,165,116) 100%), linear-gradient(135deg, rgb(45,80,22) 0%, rgb(74,124,46) 100%)";

const pillars = [
  {
    icon: ScaleIcon,
    key: "Scale & Reliability",
    title: "Scale & Reliability",
    description:
      "Production planning aligned with your demand cycles and capacity requirements.",
    items: [
      "Capacity alignment and production planning",
      "Continuity protocols and supply assurance",
      "Flexible batch sizes and scaling options",
      "Lead time management and forecasting support",
      "Multi-location sourcing for resilience",
    ],
  },
  {
    icon: CheckIcon,
    key: "Quality & Consistency",
    title: "Quality & Consistency",
    description:
      "QA/QC systems designed to deliver batch-to-batch consistency.",
    items: [
      "Documented quality management systems",
      "Batch consistency protocols and testing",
      "Recipe standardization and controls",
      "Ingredient traceability and sourcing standards",
      "Sensory evaluation and shelf-life testing",
    ],
  },
  {
    icon: ClipboardIcon,
    key: "Compliance & Labeling",
    title: "Compliance & Labeling",
    description:
      "Market-aligned labeling, documentation, and regulatory readiness.",
    items: [
      "FDA, CFIA, UKCA regulatory alignment",
      "Nutritional analysis and allergen management",
      "Label design, proofing, and approval workflow",
      "Specification sheets and technical documentation",
      "Halal, Kosher, and organic certification support",
    ],
  },
  {
    icon: BoxIcon,
    title: (
      <>
        Packaging &amp;
        <br className="lg:hidden" />
        Customization
      </>
    ),
    key: "Packaging & Customization",
    description:
      "Flexible packaging options with branding and barcode integration.",
    items: [
      "Multiple pack sizes and formats available",
      "Custom branding and artwork application",
      "UPC/EAN barcode assignment and GTIN workflow",
      "Case pack configuration and retail-ready pallets",
      "Sustainable packaging options where feasible",
    ],
  },
];

export default function CapabilityPillars() {
  return (
    <section className="font-inter">
      <h2 className="text-[32px] font-bold leading-[1.6] text-[#2d5016]">
        Private-Label
        <br className="lg:hidden" /> Capability Pillars
      </h2>
      <p className="mt-3 max-w-[333px] text-[16.8px] leading-[1.6] text-[#8b8b8b] lg:max-w-[900px]">
        Our operational approach ensures reliable supply, consistent quality,
        and full compliance across all engagements.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.key}
            className="rounded-xl border-2 bg-white p-8"
            style={{ borderColor: "rgba(212,175,55,0.2)" }}
          >
            <div
              className="flex size-14 items-center justify-center rounded-xl text-white"
              style={{ backgroundImage: iconGradient }}
            >
              <pillar.icon className="size-7" />
            </div>
            <h3 className="mt-6 text-[20.8px] font-bold leading-[1.6] text-[#2d5016]">
              {pillar.title}
            </h3>
            <p className="mt-3 text-base leading-[1.6] text-[#2c2c2c]">
              {pillar.description}
            </p>
            <ul className="mt-6 flex flex-col gap-4">
              {pillar.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="shrink-0 text-[15.2px] font-bold leading-[1.5] text-[#d4af37]">
                    ✓
                  </span>
                  <span className="text-[15.2px] leading-[1.5] text-[#2c2c2c]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
