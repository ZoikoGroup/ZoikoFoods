import React from "react";

export default function CategoryHeader({
  icon,
  title,
  mobileTitle,
}: {
  icon: string;
  title: string;
  mobileTitle?: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex items-center gap-4 border-b-[3px] border-[#2D5A3D] pb-[17px]">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#2D5A3D] text-2xl text-white">
        {icon}
      </div>
      <h3 className="text-[28.8px] font-bold leading-[46.08px] text-[#2D5A3D]">
        {mobileTitle ? (
          <>
            <span className="lg:hidden">{mobileTitle}</span>
            <span className="hidden lg:inline">{title}</span>
          </>
        ) : (
          title
        )}
      </h3>
    </div>
  );
}
