const certifications = [
  "ISO 14001",
  "FSC",
  "Cradle-to-Cradle",
  "UN SDG 12",
  "EU Packaging Directive",
];

export default function CertificationsVerificationSection() {
  return (
    <section className="w-full bg-[#F8F9FA] py-12 md:py-20">

      <div className="max-w-[1200px] mx-auto px-5 md:px-0">

        <h2
          className="
          text-center
          text-[#2D5A3D]
          text-2xl
          font-bold
          font-['Georgia']
          leading-8
          md:leading-[52px]
        "
        >
          Certifications & Independent Verification
        </h2>


        <div
          className="
          flex
          flex-wrap
          justify-center
          gap-3
          mt-6
          md:gap-5
          md:mt-10
        "
        >

          {certifications.map((item, index) => (

            <div
              key={index}
              className="
              h-11
              md:h-14
              bg-[#2D5A3D]
              rounded-lg
              px-4
              md:px-6
              flex
              items-center
              justify-center
              text-white
              text-sm
              md:text-base
              font-bold
              font-['Inter']
              "
            >
              {item}
            </div>

          ))}

        </div>


        <p
          className="
          mt-8
          md:mt-13
          text-center
          text-[#666666]
          text-base
          md:text-lg
          font-normal
          font-['Inter']
          leading-7
          md:leading-8
        "
        >
          <i>Our roadmap is aligned with international packaging legislation and
          verified by independent partners.</i>
        </p>


        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          mt-10
          md:gap-12
          md:mt-20
          md:px-5
        "
        >

          {/* Consumer Card */}

          <div
            className="
            h-auto
            py-10
            md:h-72
            md:py-0
            bg-white
            rounded-lg
            flex
            flex-col
            items-center
            justify-center
            text-center
            px-6
            "
          >

            <h3
              className="
              text-[#2D5A3D]
              text-lg
              md:text-xl
              font-bold
              font-['Georgia']
              leading-8
              md:leading-10
              "
            >
              For Consumers
            </h3>


            <p
              className="
              mt-4
              md:mt-8
              text-[#666666]
              text-sm
              md:text-base
              font-normal
              font-['Inter']
              leading-6
              "
            >
              Learn about our sustainable packaging journey
            </p>


            <button
              className="
              mt-6
              md:mt-10
              py-3
              md:py-0
              md:h-14
              px-5
              md:px-8
              rounded-lg
              border-2
              border-[#2D5A3D]
              text-[#2D5A3D]
              text-center
              text-sm
              md:text-lg
              font-bold
              font-['Arial']
              "
            >
              Learn About Zoiko Eco-Packaging
            </button>

          </div>



          {/* Partner Card */}

          <div
            className="
            h-auto
            py-10
            md:h-72
            md:py-0
            bg-white
            rounded-lg
            flex
            flex-col
            items-center
            justify-center
            text-center
            px-6
            "
          >

            <h3
              className="
              text-[#2D5A3D]
              text-lg
              md:text-xl
              font-bold
              font-['Georgia']
              leading-8
              md:leading-10
              "
            >
              For Partners/Investors
            </h3>


            <p
              className="
              mt-4
              md:mt-8
              text-[#666666]
              text-sm
              md:text-base
              font-normal
              font-['Inter']
              leading-6
              "
            >
              Detailed packaging innovation briefing available
            </p>


            <button
              className="
              mt-6
              md:mt-10
              py-3
              md:py-0
              md:h-14
              px-5
              md:px-8
              rounded-lg
              border-2
              border-[#2D5A3D]
              text-[#2D5A3D]
              text-center
              text-sm
              md:text-lg
              font-bold
              font-['Arial']
              "
            >
              Request Packaging Innovation Briefing
            </button>


          </div>


        </div>

      </div>

    </section>
  );
}