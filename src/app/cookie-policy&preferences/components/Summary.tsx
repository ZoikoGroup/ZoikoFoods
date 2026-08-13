import {
  CookieIcon,
  CheckIcon,
  GearIcon,
  TapIcon,
  RefreshIcon,
  BuildingIcon,
  TimerIcon,
} from "../../../components/icons";

const iconGradient =
  "linear-gradient(114.83deg, rgb(34,139,34) 0%, rgb(45,90,61) 50%, rgb(212,165,116) 100%), linear-gradient(135deg, rgb(212,175,55) 0%, rgb(184,148,30) 100%)";

const items = [
  {
    icon: CookieIcon,
    text: "Cookies help websites work and remember your preferences",
  },
  {
    icon: CheckIcon,
    text: "Some cookies are essential and always active",
  },
  {
    icon: GearIcon,
    text: "Analytics and marketing cookies are optional",
  },
  {
    icon: TapIcon,
    text: "You can accept or reject non-essential cookies",
  },
  {
    icon: RefreshIcon,
    text: "You can change your choices at any time",
  },
  {
    icon: BuildingIcon,
    text: "Vendor details are available below",
  },
  {
    icon: TimerIcon,
    text: "Your preferences are stored for up to 12 months",
  },
];

export default function Summary() {
  return (
    <section id="at-a-glance" className="scroll-mt-24 px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-[28.8px] font-bold text-[#2d5016]">Cookies, Simplified</h2>
        <ul className="space-y-6">
          {items.map((item) => (
            <li key={item.text} className="flex items-center gap-4">
              <span
                className="flex size-8 shrink-0 items-center justify-center rounded-lg text-white"
                style={{ backgroundImage: iconGradient }}
              >
                <item.icon className="size-4" />
              </span>
              <p className="text-base leading-relaxed text-[#2c2c2c]">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
