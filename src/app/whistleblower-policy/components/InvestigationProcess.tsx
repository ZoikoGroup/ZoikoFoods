import { Fragment } from "react";

export default function InvestigationProcess() {
  const steps = [
    {
      number: "1",
      title: <>Report <br></br> Submitted</>,
      description: (
        <>
          Via
          <br />
          portal/hotline/<br></br>ombudsman
        </>
      ),
    },
    {
      number: "2",
      title: (
        <>
          Independent
          <br />
          Review
        </>
      ),
      description: <>Panel validates<br></br> report</>,
    },
    {
      number: "3",
      title: (
        <>
          Investigation
          <br />
          Launched
        </>
      ),
      description: (
        <>
          Confidential
          <br />
          investigation begins
        </>
      ),
    },
    {
      number: "4",
      title: <>Action Taken</>,
      description: (
        <>
          Corrective action or
          <br />
          regulatory escalation
        </>
      ),
    },
    {
      number: "5",
      title: <>Update Provided</>,
      description: (
        <>
          Whistleblower
          <br />
          updated (if not
          <br />
          anonymous)
        </>
      ),
    },
  ];

  return (
    <section className="bg-[#F8F9FA] py-12 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="mb-10 text-center font-[Georgia] text-2xl font-bold text-[#2D5A3D] md:mb-16">
          Investigation Process
        </h2>

        <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:gap-0">
          {steps.map((step, index) => (
            <Fragment key={step.number}>
              {/* Card — flex-1 so all 5 always fill the full row width evenly */}
              <div className="relative z-10 flex min-h-56 w-full min-w-0 flex-1 flex-col items-center rounded-lg bg-white px-4 pb-8 text-center shadow-[0px_4px_6px_rgba(0,0,0,0.10)]">
                <div className="mt-8 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2D5A3D]">
                  <span className="font-[Inter] text-base font-bold text-white">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-5 font-[Georgia] text-base font-bold leading-5 text-[#2D5A3D]">
                  {step.title}
                </h3>

                <p className="mt-4 font-[Inter] text-sm font-normal leading-6 text-[#333333]">
                  {step.description}
                </p>
              </div>

              {/* Fixed-width divider gap — never grows or shrinks */}
              {index !== steps.length - 1 && (
                <div className="relative hidden w-11 flex-shrink-0 lg:block">
                  <div
                    className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2"
                    style={{ backgroundColor: "#C9C9C9" }}
                  />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <p className="mt-10 text-center font-[Inter] text-lg font-normal leading-8 text-[#666666] md:mt-16">
          Swift, transparent handling reduces reputational damage and legal
          exposure.
        </p>
      </div>
    </section>
  );
}