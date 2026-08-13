import React from "react";

export type Badge = {
  text: string;
  type: "flag" | "flag-alt" | "descriptor" | "special";
};

export type BulletItem = {
  label?: string;
  text: string;
};

const badgeStyles: Record<Badge["type"], string> = {
  flag: "bg-[rgba(59,130,246,0.1)] border-[#3B82F6] text-[#1E40AF]",
  "flag-alt": "bg-[rgba(59,130,246,0.1)] border-[#3B82F6] text-[#2D5A3D]",
  descriptor: "bg-[rgba(16,185,129,0.1)] border-[#10B981] text-[#047857]",
  special: "bg-[rgba(59,130,246,0.1)] border-[#2D5A3D] text-[#2D5A3D]",
};

export default function BrandCard({
  name,
  tagline,
  description,
  listLabel,
  items,
  badges,
  emoji,
}: {
  name: string;
  tagline: string;
  description: string;
  listLabel: string;
  items: BulletItem[];
  badges: Badge[];
  emoji: string;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[rgba(212,175,55,0.2)] bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.05)]">
      <div
        className="relative flex h-[220px] items-center justify-center overflow-hidden bg-[linear-gradient(135deg,rgb(74,124,46)_0%,rgb(244,228,193)_100%)] text-[64px] text-[#2C2C2C] lg:bg-[linear-gradient(131.6deg,rgb(34,139,34)_0%,rgb(45,90,61)_50%,rgb(212,165,116)_100%),linear-gradient(135deg,rgb(74,124,46)_0%,rgb(244,228,193)_100%)]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-1/2"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent 0%, transparent 1.1014%, rgba(255,255,255,0.1) 1.1014%, rgba(255,255,255,0.1) 2.2028%)",
          }}
        />
        <span className="relative flex items-center justify-center leading-none">{emoji}</span>
      </div>

      <div className="flex flex-1 flex-col justify-between px-8 pb-8 pt-9">
        <div>
          <h4 className="mb-3 text-2xl font-bold leading-[38.4px] text-[#2D5016]">{name}</h4>
          <p className="mb-4 text-[15.2px] italic leading-[24.32px] text-[#8B8B8B]">
            &ldquo;{tagline}&rdquo;
          </p>
          <p className="mb-6 text-base leading-[27.2px] text-[#2C2C2C]">{description}</p>

          <p className="mb-4 text-[13.6px] font-semibold uppercase leading-[21.76px] tracking-wide text-[#2D5016]">
            {listLabel}
          </p>
          <ul className="mb-6 space-y-3">
            {items.map((item) => (
              <li key={item.label ?? item.text} className="flex items-start gap-2">
                <span className="text-[19.2px] font-bold leading-[23.04px] text-[#D4AF37]">•</span>
                <span className="text-[14.4px] leading-[23.04px] text-[#2C2C2C]">
                  {item.label ? <span className="font-bold">{item.label}</span> : null}{" "}
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-x-2 gap-y-3">
          {badges.map((badge) => (
            <span
              key={badge.text}
              className={`rounded-full border px-3.5 py-1.5 text-[12.8px] font-semibold leading-[20.48px] ${badgeStyles[badge.type]}`}
            >
              {badge.text}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
