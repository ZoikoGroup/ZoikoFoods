import Image from "next/image";

type BrandCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function BrandCard({
  image,
  title,
  description,
}: BrandCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="w-full h-[200px] object-cover"
      />

      <div className="p-6 text-center">
        <h3
          className="text-[20px] text-[#2D5A3D] leading-[36px]"
          style={{ fontFamily: "Georgia" }}
        >
          {title}
        </h3>

        <p className="mt-2 text-[14px] leading-[24px] text-[#666666]">
          {description}
        </p>
      </div>
    </div>
  );
}
