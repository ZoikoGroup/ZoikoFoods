export default function CommercialEntryPoints() {
  const cards = [
    { 
      text: "Partner With Zoiko Foods",
      mobileText: "Partner With Zoiko Foods"
    },
    { 
      text: "Retail & Distribution\nEnquiries",
      mobileText: "Retail & Distribution Enquiries"
    },
    { 
      text: "Foodservice Supply\nDiscussions",
      mobileText: "Foodservice Supply Discussions"
    },
    { 
      text: "Private-Label Manufacturing\nEnquiries",
      mobileText: "Private-Label Manufacturing<br />Enquiries"
    },
  ];

  return (
    <>
      <style>{`
        .cep-card-bg {
          background: #345C41; /* Solid green for mobile */
        }
        @media (min-width: 768px) {
          .cep-card-bg {
            background: linear-gradient(135deg, #228B22 0%, #2D5A3D 50%, #D4A574 100%);
          }
        }
      `}</style>
      <section className="w-full bg-gray-50 flex justify-center py-12 md:py-16 px-6">
        <div className="w-full max-w-[1200px] flex flex-col items-center gap-8 md:gap-12">
          <h2
            className="text-[#2D5A3D] text-[26px] leading-[34px] md:text-4xl font-bold md:leading-[56.32px] text-center"
            style={{ fontFamily: "Segoe UI" }}
          >
            <span className="hidden md:inline">Commercial Entry Points</span>
            <span className="md:hidden">Commercial Entry<br />Points</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[18px] w-full">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="w-full h-24 md:h-28 rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] flex items-center justify-center p-4 cep-card-bg"
              >
                <h3
                  className="text-[#F8F9FA] text-[15px] md:text-base font-bold leading-5 md:leading-6 text-center whitespace-pre-line"
                  style={{ fontFamily: "Segoe UI" }}
                >
                  <span className="hidden md:inline">{card.text}</span>
                  <span 
                    className="md:hidden" 
                    dangerouslySetInnerHTML={{ __html: card.mobileText }} 
                  />
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
