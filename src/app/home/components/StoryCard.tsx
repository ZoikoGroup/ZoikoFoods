import Image from "next/image";

type StoryCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function StoryCard({
  image,
  title,
  description,
}: StoryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={357}
        height={200}
        className="w-full h-[200px] object-cover"
      />

      <div className="p-8">
        <h3
          className="text-[16px] font-bold text-[#2D5A3D] leading-6"
          style={{ fontFamily: "Georgia" }}
        >
          {title}
        </h3>

        <p className="mt-6 text-[14px] leading-6 text-[#666666]">
          {description}
        </p>

        <button className="mt-8 text-[#D4A574] text-[16px] font-medium hover:underline">
          Read More
        </button>
      </div>
    </div>
  );
}
