import React from 'react';

const relatedPosts = [
  {
    image: '/images/related-post-1.png',
    title: 'Authentic Italian Pizza: A Complete Guide',
    description: "Master the art of making pizza at home with techniques from Naples' best pizzerias.",
  },
  {
    image: '/images/related-post-2.png',
    title: 'Classic Italian Sauces You Need to Know',
    description: "From marinara to carbonara, learn to make Italy's most beloved pasta sauces.",
  },
  {
    image: '/images/related-post-3.png',
    title: 'The Ultimate Guide to Italian Cheeses',
    description: 'Discover the rich world of Italian cheeses and how to use them in cooking.',
  },
];

const RelatedPosts = () => {
  return (
    <section className="w-full bg-[#F0FDF4] py-16 lg:py-20">
      <div className="max-w-[1296px] mx-auto px-6">
        <h2 className="text-center text-zinc-900 text-3xl lg:text-[40px] font-extrabold font-inter tracking-tight mb-10 lg:mb-14">
          You Might Also Like
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-[25px]">
          {relatedPosts.map((post, idx) => (
            <a
              key={idx}
              href="#"
              className="bg-white rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col hover:shadow-[0px_8px_30px_0px_rgba(0,0,0,0.1)] transition-shadow"
            >
              <div className="h-[200px] w-full overflow-hidden bg-gray-100">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-zinc-900 text-xl font-bold font-inter leading-tight mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm lg:text-base font-normal font-inter leading-relaxed">
                  {post.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
