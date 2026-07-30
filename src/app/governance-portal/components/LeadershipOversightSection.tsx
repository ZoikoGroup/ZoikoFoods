export default function LeadershipOversightSection() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        <h2 className="text-center text-[#2D5A3D] text-2xl md:text-3xl font-bold font-[Georgia] leading-9 md:leading-tight">
          Leadership &amp; Oversight
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Executive Leadership */}
          <div className="bg-[#F8F9FA] rounded-lg p-6 md:p-7">
            <h3 className="text-[#2D5A3D] text-xl font-bold font-[Georgia] leading-10">
              Executive Leadership
            </h3>

            <p className="mt-5 text-[#333333] text-base font-normal font-['Inter'] leading-7">
              Founder &amp; Executive Chairman leading
              <br />
              with vision and accountability
            </p>
          </div>

          {/* Governance Committees */}
          <div className="bg-[#F8F9FA] rounded-lg p-6 md:p-7">
            <h3 className="text-[#2D5A3D] text-xl font-bold font-[Georgia] leading-10">
              Governance
              <br />
              Committees
            </h3>

            <ul className="mt-5 space-y-3">
              <li className="flex items-start">
                <span className="text-[#333333] text-base font-normal mr-2 leading-7">
                  •
                </span>
                <span className="text-[#333333] text-base font-normal font-['Inter'] leading-7">
                  Audit Committee
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-[#333333] text-base font-normal mr-2 leading-7">
                  •
                </span>
                <span className="text-[#333333] text-base font-normal font-['Inter'] leading-7">
                  Risk &amp; Ethics Committee
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-[#333333] text-base font-normal mr-2 leading-7">
                  •
                </span>
                <span className="text-[#333333] text-base font-normal font-['Inter'] leading-7">
                  ESG Oversight Committee
                </span>
              </li>
            </ul>
          </div>

          {/* Independent Advisors */}
          <div className="bg-[#F8F9FA] rounded-lg p-6 md:p-7">
            <h3 className="text-[#2D5A3D] text-xl font-bold font-[Georgia] leading-10">
              Independent Advisors
            </h3>

            <p className="mt-5 text-[#333333] text-base font-normal font-['Inter'] leading-7">
              Credibility anchors providing strategic
              <br />
              guidance and oversight
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}