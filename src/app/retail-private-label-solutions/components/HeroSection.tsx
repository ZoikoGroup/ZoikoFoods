import { BoxIcon, TagIcon, GlobeIcon } from "../../../components/icons";

const iconGradient =
  "linear-gradient(114.83deg, rgb(34,139,34) 0%, rgb(45,90,61) 50%, rgb(212,165,116) 100%), linear-gradient(135deg, rgb(212,175,55) 0%, rgb(184,148,30) 100%)";

const snapshotItems = [
  {
    icon: BoxIcon,
    label: "Product Categories",
    description:
      "Caribbean condiments, sauces, seasonings, beverages, snacks, and prepared foods",
    descriptionWidth: "max-w-[247px]",
  },
  {
    icon: TagIcon,
    label: "Formats Available",
    description:
      "Branded products, white label, private label, custom formulations",
    descriptionWidth: "max-w-[259px]",
  },
  {
    icon: GlobeIcon,
    label: "Markets Served",
    description:
      "USA, Canada, UK, Caribbean, Latin America — multi-region distribution ready",
    descriptionWidth: "max-w-[242px] lg:max-w-[285px]",
  },
];

export default function HeroSection() {
  return (
    <section
      className="font-inter border-b"
      style={{
        borderColor: "rgba(212,175,55,0.2)",
        backgroundImage:
          "linear-gradient(135deg, rgba(45,80,22,0.03) 0%, rgba(212,175,55,0.03) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 py-12 lg:px-[170px] lg:py-16">
        <h1 className="text-[35.2px] font-extrabold leading-[1.2] tracking-[-0.5px] text-[#2d5016] lg:text-[51.2px]">
          Retail &amp; Private-
          <br className="lg:hidden" />
          Label Solutions
        </h1>

        <p className="mt-6 max-w-[341px] text-[20.8px] font-medium leading-[1.5] text-[#2c2c2c] lg:mt-5 lg:max-w-[981px]">
          Retail-ready food products and private-label manufacturing
          engineered for consistency, scale, and compliance.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:mt-11 lg:grid-cols-3 lg:gap-8">
          {snapshotItems.map((item) => (
            <div key={item.label} className="flex gap-4">
              <div
                className="flex size-12 shrink-0 items-center justify-center rounded-[10px] text-white"
                style={{ backgroundImage: iconGradient }}
              >
                <item.icon className="size-6" />
              </div>
              <div>
                <p className="text-base font-bold leading-[1.6] text-[#2d5016]">
                  {item.label}
                </p>
                <p
                  className={`mt-1 text-[14.4px] leading-[1.4] text-[#8b8b8b] ${item.descriptionWidth}`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
