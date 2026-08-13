import React from "react";

type Item = { bold?: string; text: string };

const siteDesign: Item[] = [
  { bold: "Clear heading structure:", text: " Logical H1-H6 hierarchy and semantic HTML markup" },
  { bold: "Consistent navigation:", text: " Predictable layouts and navigation patterns across pages" },
  {
    bold: "Sufficient color contrast:",
    text: " Text and interactive elements meet WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text)",
  },
  { bold: "Resizable text:", text: " Text can be enlarged up to 200% without loss of functionality or content" },
  {
    bold: "Alternative text:",
    text: " Meaningful images include descriptive alt text; decorative images are marked as such",
  },
  {
    bold: "Accessible link labeling:",
    text: ' Links have descriptive text; generic labels like "click here" are avoided or contextualized',
  },
  {
    bold: "Skip navigation links:",
    text: ' "Skip to main content" links allow keyboard users to bypass repetitive navigation',
  },
];

const forms: Item[] = [
  { bold: "Form labels:", text: " All form inputs have associated labels and clear instructions" },
  {
    bold: "Error identification:",
    text: " Errors are communicated with text, not color alone, and include suggestions for correction",
  },
  {
    bold: "Keyboard operability:",
    text: " All interactive elements can be accessed and operated using only a keyboard",
  },
  {
    bold: "Visible focus indicators:",
    text: " Keyboard focus is clearly visible and never removed with CSS",
  },
  {
    bold: "Modal focus management:",
    text: " Modals and drawers trap focus correctly and can be closed with the Escape key",
  },
  {
    bold: "ARIA landmarks and labels:",
    text: " Appropriate ARIA attributes enhance screen reader navigation",
  },
];

const media: Item[] = [
  { bold: "Video captions:", text: " Videos include captions or transcripts where applicable" },
  {
    bold: "Accessible PDFs:",
    text: " New PDFs are created with accessibility in mind (tagged structure, proper reading order)",
  },
  { bold: "Text alternatives:", text: " Critical information is not presented solely within images" },
];

const additional: Item[] = [
  { bold: "No motion-only content:", text: " We avoid content that relies solely on motion or timing" },
  { bold: "Reduced motion support:", text: " We respect user preferences for reduced motion" },
  {
    bold: "High contrast mode compatibility:",
    text: " Our site works with browser and OS high contrast modes",
  },
];

function ItemList({ items }: { items: Item[] }) {
  return (
    <ul className="mb-6 list-disc space-y-3 pl-5">
      {items.map((item) => (
        <li key={item.bold ?? item.text} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">
          {item.bold ? <span className="font-bold">{item.bold}</span> : null}
          {item.text}
        </li>
      ))}
    </ul>
  );
}

export default function AccessibilityFeatures() {
  return (
    <section
      id="accessibility-features"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          Accessibility Features &amp; Practices
        </h2>
        <p className="mb-6 text-base leading-relaxed text-[#2C2C2C]">
          We implement the following accessibility practices across our website:
        </p>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Site Design &amp; Content</h3>
        <ItemList items={siteDesign} />

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">
          Forms &amp; Interactive Elements
        </h3>
        <ItemList items={forms} />

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Media &amp; Documents</h3>
        <ItemList items={media} />

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Additional Considerations</h3>
        <ul className="list-disc space-y-3 pl-5">
          {additional.map((item) => (
            <li key={item.bold} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">
              <span className="font-bold">{item.bold}</span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
