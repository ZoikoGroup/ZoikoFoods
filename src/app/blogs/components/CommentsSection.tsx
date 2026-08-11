import React from 'react';

const comments = [
  {
    initials: 'SJ',
    name: 'Sarah Johnson',
    time: '2 days ago',
    text: "This is the best pasta recipe I've tried! The tips about kneading and resting made all the difference. My family loved it!",
  },
  {
    initials: 'MT',
    name: 'Mike Thompson',
    time: '3 days ago',
    text: "Finally, a recipe that explains WHY each step matters. I've been making pasta wrong for years. Thank you, Chef Maria!",
  },
  {
    initials: 'EC',
    name: 'Emma Chen',
    time: '5 days ago',
    text: "The step-by-step instructions are so clear. Even as a beginner, I was able to make beautiful pasta. Can't wait to try the variations!",
  },
];

const inputClasses =
  "w-full h-14 bg-white border-2 border-white rounded-xl px-4 text-zinc-900 text-base font-normal font-inter outline-none focus:border-[#059669] transition-colors";

const CommentsSection = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-[800px] mx-auto px-6">
        {/* Leave a Comment */}
        <div className="bg-[#F8F9FA] rounded-[20px] p-6 lg:p-12 mb-12">
          <h3 className="text-zinc-900 text-2xl lg:text-[28.8px] font-bold font-inter mb-8">
            Leave a Comment
          </h3>
          <form className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block text-zinc-900 text-base font-semibold font-inter mb-2">
                Name *
              </label>
              <input id="name" type="text" required className={inputClasses} />
            </div>
            <div>
              <label htmlFor="email" className="block text-zinc-900 text-base font-semibold font-inter mb-2">
                Email *
              </label>
              <input id="email" type="email" required className={inputClasses} />
            </div>
            <div>
              <label htmlFor="comment" className="block text-zinc-900 text-base font-semibold font-inter mb-2">
                Your Comment *
              </label>
              <textarea
                id="comment"
                required
                rows={5}
                className="w-full bg-white border-2 border-white rounded-xl p-4 text-zinc-900 text-base font-normal font-inter outline-none focus:border-[#059669] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-fit px-8 py-4 bg-[linear-gradient(115deg,#228B22_0%,#2D5A3D_50%,#D4A574_100%)] rounded-full text-white text-base font-bold font-inter hover:opacity-90 transition-opacity"
            >
              Post Comment
            </button>
          </form>
        </div>

        {/* Comments List */}
        <h3 className="text-zinc-900 text-2xl lg:text-[28.8px] font-bold font-inter mb-6">
          Comments (24)
        </h3>
        <div className="flex flex-col gap-4">
          {comments.map((comment) => (
            <div key={comment.name} className="bg-[#F8F9FA] rounded-2xl p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-[45px] h-[45px] rounded-full bg-[linear-gradient(115deg,#228B22_0%,#2D5A3D_50%,#D4A574_100%)] flex items-center justify-center shrink-0">
                  <span className="text-white text-sm font-bold font-inter">{comment.initials}</span>
                </div>
                <div>
                  <p className="text-zinc-900 text-base font-bold font-inter leading-[27.2px]">
                    {comment.name}
                  </p>
                  <p className="text-gray-500 text-sm font-normal font-inter leading-[23.12px]">
                    {comment.time}
                  </p>
                </div>
              </div>
              <p className="text-zinc-900 text-base font-normal font-inter leading-[27.2px]">
                {comment.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommentsSection;
