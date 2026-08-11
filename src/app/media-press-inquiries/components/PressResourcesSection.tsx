import React from "react";

interface ResourceCardProps {
  icon: string;
  title: string;
  desc: string;
  format: string;   // e.g. "PDF"
  size: string;     // e.g. "245 KB"
  updated: string;  // e.g. "Jan 2026"
  version: string;  // e.g. "1.3"
  tag: string;
}

function ResourceCard({ icon, title, desc, format, size, updated, version, tag }: ResourceCardProps) {
  return (
    <div className="flex flex-col rounded-lg border border-[#E0E0E0] bg-white p-6">
      <div className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#F8F9FA]">
        <img src={icon} alt="" className="h-7 w-7 object-contain" />
      </div>
      <h3 className="mb-1.5 text-lg font-bold text-[#0F2818]">{title}</h3>
      <p className="mb-4 flex-1 text-base leading-relaxed text-[#2D2D2D]">{desc}</p>

      <div className="mb-3.5 flex items-center gap-3.5 text-[13px] font-normal text-[#666]">
        <span>{format} • {size}</span>
        <span>Updated: {updated}</span>
        <span>v{version}</span>
      </div>

      <span className="inline-flex w-fit items-center rounded bg-[#F8F9FA] px-2.5 py-1.5 text-xs font-semibold text-[#2D2D2D]">
        {tag}
      </span>
    </div>
  );
}

export default function PressResourcesSection() {
  return (
    <section className="bg-[#F8F9FA] px-6 py-16 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-[36px] font-bold text-[#0F2818]">Press Resources</h2>
        <p className="mb-8 text-lg text-[#666]">
          Official brand assets and corporate information for media use
        </p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="flex flex-col gap-5 md:col-span-2 md:grid md:grid-cols-2">
            <ResourceCard
              icon="/images/document-icon.png"
              title="Corporate Overview"
              desc="One-page factsheet with company background and key information."
              format="PDF"
              size="245 KB"
              updated="Jan 2026"
              version="1.3"
              tag="Approved for editorial use"
            />
            <ResourceCard
              icon="/images/building-icon.png"
              title="Brand Portfolio Overview"
              desc="House of brands structure and product categories."
              format="PDF"
              size="380 KB"
              updated="Jan 2026"
              version="2.1"
              tag="Approved for editorial use"
            />
            <ResourceCard
              icon="/images/pen-icon.png"
              title="Corporate Boilerplate"
              desc="Approved company description for media use."
              format="PDF"
              size="95 KB"
              updated="Jan 2026"
              version="1.2"
              tag="Approved for editorial use"
            />
            <ResourceCard
              icon="/images/person-icon.png"
              title="Leadership Attribution"
              desc="Official titles and roles for proper attribution."
              format="PDF"
              size="120 KB"
              updated="Dec 2025"
              version="1.1"
              tag="Approved for editorial use"
            />
            <ResourceCard
              icon="/images/palette-icon.png"
              title="Logos & Brand Assets"
              desc="Official logos in various formats with usage guidelines."
              format="ZIP"
              size="2.4 MB"
              updated="Nov 2025"
              version="3.0"
              tag="Restricted"
            />
            <ResourceCard
              icon="/images/camera-icon.png"
              title="Photography"
              desc="Approved corporate and product imagery."
              format="ZIP"
              size="8.2 MB"
              updated="Dec 2025"
              version="1.4"
              tag="Approved for editorial use"
            />
          </div>

          {/* USAGE RULES */}
          <div className="flex flex-col rounded-lg border border-[#E0E0E0] bg-white p-6">
            <h3 className="mb-4 text-lg font-bold text-[#0F2818]">Usage Rules</h3>
            <div className="divide-y divide-[#F8F9FA]">
              <p className="py-4 first:pt-0 text-sm leading-relaxed text-[#2D2D2D]">
                Assets may not be altered beyond resizing or cropping without written permission
              </p>
              <p className="py-4 text-sm leading-relaxed text-[#2D2D2D]">
                No implied endorsement or partnership claims
              </p>
              <p className="py-4 text-sm leading-relaxed text-[#2D2D2D]">
                Use must reflect official context; do not combine marks with other logos
              </p>
              <p className="pt-4 text-sm text-[#2D2D2D]">© Zoiko Foods Corp. All rights reserved</p>
            </div>
            <a
              href="#"
              className="mt-6 flex items-center gap-1.5 text-base font-semibold text-[#1A472A]"
            >
              Full Press Asset Usage Terms →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
