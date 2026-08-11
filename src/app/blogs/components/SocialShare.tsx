import React from 'react';

const shareLinks = [
  { label: '📱 Facebook', href: '#' },
  { label: '🐦 Twitter', href: '#' },
  { label: '📌 Pinterest', href: '#' },
  { label: '📧 Email', href: '#' },
];

const SocialShare = () => {
  return (
    <div className="bg-[#F0FDF4] rounded-2xl px-6 py-10 lg:py-12 my-10 text-center">
      <h3 className="text-zinc-900 text-xl lg:text-2xl font-bold font-inter mb-8">
        Love this recipe? Share it!
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {shareLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="bg-white border-2 border-[#059669] rounded-full px-6 py-3 text-zinc-900 text-sm lg:text-base font-semibold font-inter hover:bg-[#F0FDF4] transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialShare;
