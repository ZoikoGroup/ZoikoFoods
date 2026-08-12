import React from 'react';
import RecipeCard from './RecipeCard';
import SocialShare from './SocialShare';
import AuthorBio from './AuthorBio';

const essentialIngredients = [
  { name: 'Flour', detail: 'Use "00" flour (doppio zero) for the silkiest texture, or all-purpose flour for a more rustic pasta' },
  { name: 'Eggs', detail: 'Fresh, room-temperature eggs with bright orange yolks produce the best color and flavor' },
  { name: 'Salt', detail: 'Just a pinch to enhance the flavor' },
  { name: 'Olive Oil', detail: 'Optional, but adds richness and helps with elasticity' },
];

const commonMistakes = [
  'Not kneading enough—this results in brittle pasta that breaks when cooked',
  'Skipping the resting time—your dough will be tough and difficult to roll',
  'Rolling too thick—fresh pasta should be translucent',
  'Overcooking—fresh pasta needs only 2-4 minutes, not 10',
  'Not salting the water enough—it should taste like the sea',
];

const Callout = ({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-[#F0FDF4] border-l-4 border-[#059669] rounded-xl px-6 lg:px-8 py-6 lg:py-8 my-10">
    <p className="text-[#059669] text-lg font-bold font-inter mb-3">
      {icon} {title}
    </p>
    <p className="text-zinc-900 text-base lg:text-lg font-normal font-inter leading-relaxed">
      {children}
    </p>
  </div>
);

const ArticleContent = () => {
  return (
    <section className="w-full bg-white pb-16 lg:pb-20">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-zinc-900 text-base lg:text-lg font-normal font-inter leading-loose lg:leading-[33.44px] space-y-6">
          <p>
            There&apos;s something magical about fresh homemade pasta. The silky texture, the delicate bite, and the
            way it perfectly cradles your favorite sauce—nothing quite compares to pasta made from scratch. While it
            might seem intimidating at first, making pasta at home is actually surprisingly simple once you
            understand the basics.
          </p>
          <p>
            Today, I&apos;m going to share with you the techniques I&apos;ve learned over 20 years of pasta-making,
            from my grandmother&apos;s kitchen in Italy to professional restaurant kitchens around the world. Whether
            you&apos;re a complete beginner or looking to refine your skills, this guide will help you create pasta
            that rivals anything you&apos;d find in a fine Italian restaurant.
          </p>
        </div>

        <h2 className="text-zinc-900 text-2xl lg:text-[32px] font-bold font-inter tracking-tight mt-12 mb-6">
          Understanding the Fundamentals
        </h2>
        <p className="text-zinc-900 text-base lg:text-lg font-normal font-inter leading-relaxed lg:leading-[33.44px]">
          The beauty of pasta lies in its simplicity. At its core, pasta is just flour and eggs. But like all simple
          things done well, the magic is in the details—the quality of your ingredients, your technique, and your
          patience.
        </p>

        <Callout icon="💡" title="Pro Tip">
          The key to perfect pasta dough is achieving the right consistency. It should be smooth, elastic, and
          slightly tacky but not sticky. If it sticks to your hands, add a bit more flour. If it&apos;s too dry and
          cracking, add a tiny bit of water or another egg yolk.
        </Callout>

        <h2 className="text-zinc-900 text-2xl lg:text-[32px] font-bold font-inter tracking-tight mt-12 mb-6">
          Essential Ingredients
        </h2>
        <p className="text-zinc-900 text-base lg:text-lg font-normal font-inter leading-relaxed lg:leading-[33.44px] mb-6">
          Quality ingredients make all the difference. Here&apos;s what you&apos;ll need:
        </p>
        <ul className="space-y-4 pl-2">
          {essentialIngredients.map((item) => (
            <li key={item.name} className="flex gap-3 text-zinc-900 text-base lg:text-lg font-normal font-inter leading-relaxed lg:leading-[33.44px]">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-3 shrink-0" />
              <span>
                <span className="font-bold">{item.name}:</span> {item.detail}
              </span>
            </li>
          ))}
        </ul>

        <RecipeCard />

        <h2 className="text-zinc-900 text-2xl lg:text-[32px] font-bold font-inter tracking-tight mt-12 mb-6">
          The Kneading Process
        </h2>
        <p className="text-zinc-900 text-base lg:text-lg font-normal font-inter leading-relaxed lg:leading-[33.44px]">
          Kneading develops the gluten in the flour, which gives pasta its characteristic texture and bite. Don&apos;t
          rush this step—proper kneading is what separates good pasta from great pasta.
        </p>

        <blockquote className="bg-[#F0FDF4] border-l-[5px] border-[#059669] rounded-r-xl px-6 lg:px-10 py-8 lg:py-10 my-10">
          <p className="text-zinc-900 text-lg lg:text-xl italic font-normal font-inter leading-relaxed">
            &ldquo;Pasta-making is meditation. The rhythm of kneading, the feel of the dough under your hands—it
            connects you to centuries of Italian tradition.&rdquo; — Nonna Rosa
          </p>
        </blockquote>

        <p className="text-zinc-900 text-base lg:text-lg font-normal font-inter leading-relaxed lg:leading-[33.44px]">
          As you knead, you&apos;ll feel the dough transform. It will start rough and shaggy but gradually become
          silky smooth. This transformation usually takes about 10 minutes of consistent kneading. Your arms might
          get tired, but push through—this is where the magic happens.
        </p>

        <h2 className="text-zinc-900 text-2xl lg:text-[32px] font-bold font-inter tracking-tight mt-12 mb-6">
          Resting: The Secret Step
        </h2>
        <p className="text-zinc-900 text-base lg:text-lg font-normal font-inter leading-relaxed lg:leading-[33.44px]">
          After kneading, your dough needs to rest. This resting period allows the gluten to relax, making the dough
          easier to roll out and giving you a more tender final product. Wrap your dough tightly in plastic wrap to
          prevent it from drying out, and let it rest for at least 30 minutes at room temperature.
        </p>

        <div className="bg-[linear-gradient(115deg,#228B22_0%,#2D5A3D_50%,#D4A574_100%)] rounded-2xl px-6 lg:px-10 py-8 lg:py-10 my-10 text-white">
          <p className="text-2xl font-bold font-inter mb-4">🌟 Chef&apos;s Secret</p>
          <p className="text-base lg:text-lg font-normal font-inter leading-relaxed opacity-95">
            For even better results, let your dough rest for up to 2 hours. Some chefs even rest it overnight in the
            refrigerator. The longer rest allows the flour to fully hydrate and the gluten network to develop even
            more, resulting in superior texture.
          </p>
        </div>

        <h2 className="text-zinc-900 text-2xl lg:text-[32px] font-bold font-inter tracking-tight mt-12 mb-6">
          Rolling and Shaping
        </h2>
        <p className="text-zinc-900 text-base lg:text-lg font-normal font-inter leading-relaxed lg:leading-[33.44px] mb-8">
          Now comes the fun part—transforming your dough into pasta. You can use a pasta machine or roll it by hand
          with a rolling pin. Each method has its merits:
        </p>

        <h3 className="text-zinc-900 text-xl lg:text-2xl font-bold font-inter mb-4">
          Using a Pasta Machine
        </h3>
        <p className="text-zinc-900 text-base lg:text-lg font-normal font-inter leading-relaxed lg:leading-[33.44px] mb-8">
          Start with the widest setting and run your dough through several times, folding it in half each time.
          Gradually decrease the thickness until you reach your desired thinness. For most shapes, you want the dough
          thin enough to see your hand through it.
        </p>

        <h3 className="text-zinc-900 text-xl lg:text-2xl font-bold font-inter mb-4">
          Rolling by Hand
        </h3>
        <p className="text-zinc-900 text-base lg:text-lg font-normal font-inter leading-relaxed lg:leading-[33.44px]">
          If you&apos;re going old-school with a rolling pin, work from the center outward in all directions,
          rotating the dough frequently. It takes more effort and time, but there&apos;s something deeply satisfying
          about rolling pasta by hand the way it&apos;s been done for generations.
        </p>

        <h2 className="text-zinc-900 text-2xl lg:text-[32px] font-bold font-inter tracking-tight mt-12 mb-6">
          Cooking Your Fresh Pasta
        </h2>
        <p className="text-zinc-900 text-base lg:text-lg font-normal font-inter leading-relaxed lg:leading-[33.44px]">
          Fresh pasta cooks much faster than dried—usually just 2-4 minutes in well-salted boiling water. The pasta
          is done when it floats to the surface and is tender but still has a slight bite (al dente).
        </p>

        <Callout icon="🔥" title="Cooking Tip">
          Reserve a cup of pasta cooking water before draining. The starchy water is perfect for adjusting the
          consistency of your sauce and helps it cling to the pasta beautifully.
        </Callout>

        <h2 className="text-zinc-900 text-2xl lg:text-[32px] font-bold font-inter tracking-tight mt-12 mb-6">
          Common Mistakes to Avoid
        </h2>
        <p className="text-zinc-900 text-base lg:text-lg font-normal font-inter leading-relaxed lg:leading-[33.44px] mb-6">
          Even experienced cooks can make mistakes with pasta. Here are the most common ones:
        </p>
        <ul className="space-y-3 pl-2">
          {commonMistakes.map((mistake, idx) => (
            <li key={idx} className="flex gap-3 text-zinc-900 text-base lg:text-lg font-normal font-inter leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-3 shrink-0" />
              {mistake}
            </li>
          ))}
        </ul>

        <h2 className="text-zinc-900 text-2xl lg:text-[32px] font-bold font-inter tracking-tight mt-12 mb-6">
          Taking It Further
        </h2>
        <div className="text-zinc-900 text-base lg:text-lg font-normal font-inter leading-relaxed lg:leading-[33.44px] space-y-6">
          <p>
            Once you&apos;ve mastered basic pasta, a whole world of variations opens up. Try adding spinach puree for
            green pasta, squid ink for dramatic black pasta, or beetroot for vibrant pink pasta. Experiment with
            different shapes—from delicate angel hair to hearty pappardelle to stuffed ravioli.
          </p>
          <p>
            The best part about homemade pasta is that it gets easier with practice. Each time you make it,
            you&apos;ll develop a better feel for the dough, and before long, you&apos;ll be able to make perfect
            pasta without even thinking about it. It becomes muscle memory, a skill you&apos;ll have for life.
          </p>
          <p>
            So gather your ingredients, clear your counter, and dive in. Your first batch might not be perfect, but
            it will be delicious. And with each batch, you&apos;ll get better. Before you know it, you&apos;ll be the
            person everyone asks to bring the pasta to dinner parties. Welcome to the wonderful world of
            pasta-making!
          </p>
        </div>

        <SocialShare />
        <AuthorBio />
      </div>
    </section>
  );
};

export default ArticleContent;
