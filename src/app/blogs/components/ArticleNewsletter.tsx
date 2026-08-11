import React from 'react';

const ArticleNewsletter = () => {
  return (
    <section className="w-full bg-[linear-gradient(115deg,#228B22_0%,#2D5A3D_50%,#D4A574_100%)]">
      <div className="max-w-[900px] h-[428px] mx-auto px-6 py-16 lg:py-24 text-center">
        <h2 className="text-white text-3xl lg:text-5xl mb-12 font-extrabold font-inter tracking-tight ">
          Never Miss a Recipe
        </h2>
        <p className="text-white text-lg lg:text-xl font-normal font-inter opacity-95 mb-15">
          Get our latest recipes, tips, and stories delivered straight to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-[600px] mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="w-full h-[58px] bg-white rounded-full px-6 text-zinc-900 text-base font-normal font-inter placeholder:text-[#757575] outline-none"
          />
          <button
            type="submit"
            className="w-full sm:w-auto shrink-0 h-[58px] px-8 bg-[#2D3142] rounded-full text-white text-sm font-bold font-inter hover:opacity-90 transition-opacity"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default ArticleNewsletter;
