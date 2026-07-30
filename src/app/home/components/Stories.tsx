import StoryCard from "./StoryCard";

export default function Stories() {
  const stories = [
    {
      image: "/images/story-1.jpg",
      title: "The Journey of Rice from Africa to the World",
      description:
        "Discover how ancient African rice cultivation techniques continue to nourish families globally.",
    },
    {
      image: "/images/story-2.jpg",
      title: "Caribbean Spice, Global Tables",
      description:
        "Explore the vibrant flavors that bring warmth and tradition to every meal.",
    },
    {
      image: "/images/story-3.jpg",
      title: "Wellness Meets Tradition: GingerNoxx Recipes",
      description:
        "Traditional ginger remedies reimagined for modern wellness journeys.",
    },
  ];

  return (
    <section className="bg-[#F9FFF8] py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        <h2
          className="text-center text-[24px] md:text-[30px] font-bold leading-[36px] md:leading-[52px] text-[#2D5A3D]"
          style={{ fontFamily: "Georgia" }}
        >
          Latest Stories &amp; Culinary Inspiration
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
          {stories.map((story) => (
            <StoryCard
              key={story.title}
              image={story.image}
              title={story.title}
              description={story.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
