import React from 'react';

const AuthorBio = () => {
  return (
    <div className="bg-[#F8F9FA] rounded-[20px] p-6 lg:p-12 my-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 text-center lg:text-left">
        <div className="w-[100px] h-[100px] rounded-full bg-[linear-gradient(115deg,#228B22_0%,#2D5A3D_50%,#D4A574_100%)] flex items-center justify-center shrink-0">
          <span className="text-white text-4xl font-bold font-inter">CM</span>
        </div>
        <div>
          <h3 className="text-zinc-900 text-2xl font-bold font-inter mb-1">
            Chef Maria Rodriguez
          </h3>
          <p className="text-gray-500 text-base font-normal font-inter mb-5">
            Executive Chef &amp; Culinary Director
          </p>
          <p className="text-zinc-600 text-base lg:text-lg font-normal font-inter leading-relaxed">
            Chef Maria has over 20 years of culinary experience, training under master chefs in Italy and France.
            She specializes in traditional Italian cuisine and has been featured in numerous culinary publications.
            When she&apos;s not in the kitchen, she teaches cooking classes and writes about the art of simple, delicious food.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
