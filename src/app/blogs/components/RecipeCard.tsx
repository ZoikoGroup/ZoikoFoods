import React from 'react';

const stats = [
  { value: '4', label: 'Servings' },
  { value: '45m', label: 'Prep Time' },
  { value: '3m', label: 'Cook Time' },
];

const ingredients = [
  '2 cups (250g) "00" flour or all-purpose flour',
  '3 large eggs, room temperature',
  '1/2 teaspoon salt',
  '1 tablespoon olive oil (optional)',
  'Extra flour for dusting',
];

const instructions = [
  'Mound the flour on a clean work surface and create a well in the center',
  'Crack the eggs into the well and add salt (and olive oil if using)',
  'Using a fork, gradually incorporate the flour into the eggs, starting from the inner rim',
  'Once the mixture becomes too thick to mix with a fork, use your hands to knead',
  'Knead for 8-10 minutes until the dough is smooth and elastic',
  'Wrap in plastic wrap and rest for 30 minutes at room temperature',
];

const RecipeCard = () => {
  return (
    <div className="bg-[#F8F9FA] rounded-[20px] p-6 lg:p-12 my-10">
      <h3 className="text-zinc-900 text-2xl font-bold font-inter mb-8 lg:mb-10">
        Basic Pasta Dough Recipe
      </h3>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-10 lg:mb-12 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="bg-[linear-gradient(115deg,#228B22_0%,#2D5A3D_50%,#D4A574_100%)] bg-clip-text text-transparent text-3xl lg:text-4xl font-bold font-inter mb-1">
              {stat.value}
            </p>
            <p className="text-gray-500 text-xs lg:text-sm font-normal font-inter uppercase tracking-[1px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Ingredients */}
      <h4 className="text-zinc-900 text-xl font-bold font-inter mb-5">Ingredients</h4>
      <ul className="space-y-3 mb-10 lg:mb-12">
        {ingredients.map((item, idx) => (
          <li
            key={idx}
            className="bg-white rounded-lg px-4 py-4 flex items-start gap-3 text-zinc-900 text-base lg:text-lg font-normal font-inter"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-3 shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      {/* Instructions */}
      <h4 className="text-zinc-900 text-xl font-bold font-inter mb-5">Instructions</h4>
      <ol className="space-y-3">
        {instructions.map((step, idx) => (
          <li
            key={idx}
            className="bg-white rounded-lg px-4 py-4 flex items-start gap-3 text-zinc-900 text-base lg:text-lg font-normal font-inter"
          >
            <span className="text-gray-500 font-inter font-semibold shrink-0">
              {idx + 1}.
            </span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeCard;
