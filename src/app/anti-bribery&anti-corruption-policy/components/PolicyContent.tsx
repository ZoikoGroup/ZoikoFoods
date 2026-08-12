import React from "react";

function GoldInfoBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[8px] border-l-4 border-[#D4AF37] bg-[rgba(212,175,55,0.1)] p-6">
      <h4 className="mb-2 text-[17.6px] font-semibold text-[#2D5016]">{title}</h4>
      <div className="text-[16px] leading-[28.8px] text-[#2C2C2C]">{children}</div>
    </div>
  );
}

function RedInfoBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[8px] border-l-4 border-[#C41E3A] bg-[#FFE5E9] p-6">
      <h4 className="mb-2 text-[17.6px] font-semibold text-[#C41E3A]">{title}</h4>
      <div className="text-[16px] leading-[28.8px] text-[#2C2C2C]">{children}</div>
    </div>
  );
}

function RedFlagsList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[8px] border border-[#C41E3A] bg-[#FFE5E9] p-6">
      <h4 className="mb-4 text-[17.6px] font-semibold text-[#C41E3A]">🚨 {title}</h4>
      <ul className="list-disc space-y-2 pl-5 text-[16px] leading-[28.8px] text-[#2C2C2C]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

const decisionColumns = [
  {
    heading: "✓ Allowed (No Pre-Approval)",
    bg: "rgba(45,80,22,0.05)",
    border: "#2D5016",
    titleColor: "#2D5016",
    items: [
      "Nominal branded promotional items",
      "Modest refreshments during meetings",
      "Gifts below threshold",
      "Reasonable business meals",
    ],
  },
  {
    heading: "⚠️ Requires Pre-Approval",
    bg: "rgba(212,175,55,0.08)",
    border: "#D4AF37",
    titleColor: "#B8941E",
    items: [
      "Travel and lodging expenses",
      "Expensive meals or entertainment",
      "Gifts above threshold",
      "Anything involving government officials",
      "Hospitality during negotiations",
    ],
  },
  {
    heading: "✕ Prohibited",
    bg: "#FFE5E9",
    border: "#C41E3A",
    titleColor: "#C41E3A",
    items: [
      "Cash or cash equivalents",
      "Lavish or excessive hospitality",
      "Gifts tied to pending decisions",
      "Gifts to secure advantage",
      "Anything violating local law",
    ],
  },
];

const governanceRows: [string, string][] = [
  ["Board of Directors", "Approves policy, provides oversight"],
  ["Executive Management", "Ensures implementation and resources"],
  ["Legal & Compliance", "Policy owner, maintains framework"],
  ["Procurement", "Implements third-party due diligence"],
  ["Finance", "Maintains books & records controls"],
  ["Internal Audit", "Independent assurance and testing"],
  ["All Employees", "Compliance with policy, reporting concerns"],
];

export default function PolicyContent() {
  const commitmentItems = [
    { icon: "🚫", bold: "Zero tolerance", normal: " for bribery, corruption, kickbacks, facilitation payments" },
    { icon: "⚖️", bold: "Compliance", normal: " with FCPA, UK Bribery Act, and local laws" },
    { icon: "🎁", bold: "Clear rules", normal: " on gifts, hospitality, travel, expenses" },
    { icon: "🔍", bold: "Risk-based due diligence", normal: " for third parties" },
    { icon: "📚", bold: "Accurate books & records", normal: " with financial controls" },
    { icon: "🔒", bold: "Confidential reporting", normal: " with non-retaliation" },
    { icon: "⚠️", bold: "Serious consequences", normal: " including termination" },
  ];

  const gradientCircle = (
    <span className="mt-0.5 size-8 shrink-0 rounded-full bg-[linear-gradient(135deg,rgb(212,175,55)_0%,rgb(184,148,30)_100%)] lg:bg-[linear-gradient(115deg,rgb(34,139,34)_0%,rgb(45,90,61)_50%,rgb(212,165,116)_100%),linear-gradient(135deg,rgb(212,175,55)_0%,rgb(184,148,30)_100%)]" />
  );

  return (
    <div className="font-inter text-[#2c2c2c] bg-white rounded-2xl p-6 sm:p-10">

      {/* Zero Tolerance Alert */}
      <div className="bg-[#ffe5e9] border-2 border-[#c41e3a] p-6 rounded-[12px] flex items-start gap-4 mb-10">
        <div className="bg-[#c41e3a] rounded-[20px] w-[40px] h-[40px] shrink-0 flex items-center justify-center">
          <span className="font-inter font-bold text-[24px] text-white">!</span>
        </div>
        <div>
          <h2 className="font-inter font-bold text-[#c41e3a] text-[19.2px] leading-[32.64px]">
            Zero Tolerance
          </h2>
          <div className="mt-1 font-inter text-[16px] leading-[27.2px] text-[#2c2c2c]">
            <p className="mb-0">
              <span>Zoiko Foods Corp maintains a </span>
              <span className="font-bold">zero-tolerance policy</span>
              <span> for bribery, corruption, kickbacks, and facilitation</span>
            </p>
            <p>payments.</p>
          </div>
        </div>
      </div>

      <div className="space-y-16">
        {/* Our Commitment */}
        <section id="commitment" className="scroll-mt-32">
          <div className="border-2 border-[#d4af37] rounded-[12px] p-8" style={{ backgroundImage: "linear-gradient(134.87deg, rgba(212, 175, 55, 0.08) 0%, rgba(45, 80, 22, 0.05) 100%)" }}>
            <h2 className="font-inter font-bold text-[#2d5016] text-[24px] mb-6">
              Our Commitment
            </h2>
            <div className="flex flex-col gap-6">
              {commitmentItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center shrink-0 bg-[linear-gradient(135deg,rgb(212,175,55)_0%,rgb(184,148,30)_100%)] lg:bg-[linear-gradient(114.83deg,rgb(34,139,34)_0%,rgb(45,90,61)_50%,rgb(212,165,116)_100%),linear-gradient(135deg,rgb(212,175,55)_0%,rgb(184,148,30)_100%)]"
                  >
                    <span className="text-[17.6px]">{item.icon}</span>
                  </div>
                  <p className="font-inter text-[16px] leading-[27.2px] pt-0.5">
                    <span className="font-bold">{item.bold}</span>
                    <span className="font-normal">{item.normal}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scope & Applicability */}
        <section id="scope" className="space-y-6 scroll-mt-32">
          <div className="border-b-2 border-[rgba(212,175,55,0.3)] pb-4">
            <h2 className="font-inter font-bold text-[#2d5016] text-[28.8px]">1. Scope & Applicability</h2>
          </div>

          <div className="text-[16px] leading-[28.8px] space-y-6">
            <div>
              <h3 className="font-bold text-[#2d5016] text-[19.2px] mb-3">Who This Policy Applies To</h3>
              <p className="mb-4">This policy applies to all individuals and entities acting on behalf of Zoiko Foods Corp, including:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Employees:</strong> All employees, regardless of position or location</li>
                <li><strong>Directors and Officers:</strong> Board members and executive management</li>
                <li><strong>Interns and Temporary Workers:</strong> All temporary staff and interns</li>
                <li><strong>Contractors and Consultants:</strong> Independent contractors performing services</li>
                <li><strong>Agents and Intermediaries:</strong> Sales agents, brokers, distributors, customs agents, lobbyists</li>
                <li><strong>Suppliers and Partners:</strong> Expected to maintain similar standards</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#2d5016] text-[19.2px] mb-3">Geographic Scope</h3>
              <p>This policy applies to all business activities in all geographies and jurisdictions where Zoiko Foods Corp operates, including North America, the Caribbean, Europe, Africa, and Asia.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#2d5016] text-[19.2px] mb-3">Situations Covered</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Procurement and supplier relationships</li>
                <li>Sales and customer relationships</li>
                <li>Logistics, customs, and regulatory interactions</li>
                <li>Government permits, licenses, inspections</li>
                <li>Marketing, sponsorships, charitable contributions</li>
              </ul>
            </div>
            <GoldInfoBox title="Stricter Standard Applies">
              <p>If local law is more restrictive than this policy, the stricter standard applies.</p>
            </GoldInfoBox>
          </div>
        </section>

        {/* Definitions & Examples */}
        <section id="definitions" className="space-y-6 scroll-mt-32">
          <div className="border-b-2 border-[rgba(212,175,55,0.3)] pb-4">
            <h2 className="font-inter font-bold text-[#2d5016] text-[28.8px]">2. Definitions & Examples</h2>
          </div>
          <div className="text-[16px] leading-[28.8px] space-y-6">
            <div>
              <h3 className="font-bold text-[#2d5016] text-[19.2px]">Bribery</h3>
              <p>Offering, giving, soliciting, or receiving anything of value to influence a business decision or gain improper advantage.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#2d5016] text-[19.2px]">Corruption</h3>
              <p>The abuse of entrusted power or position for private gain.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#2d5016] text-[19.2px]">Kickback</h3>
              <p>An undisclosed payment given in exchange for securing business or favorable treatment.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#2d5016] text-[19.2px]">Facilitation Payment</h3>
              <p>A small payment to a government official to expedite routine action. These are prohibited.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#2d5016] text-[19.2px] mb-2">Anything of Value</h3>
              <p className="mb-2">Includes but is not limited to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Cash, checks, wire transfers, cash equivalents</li>
                <li>Gifts (items, gift cards, vouchers)</li>
                <li>Meals, entertainment, hospitality</li>
                <li>Travel, accommodation, transportation</li>
                <li>Services, favors, business opportunities</li>
                <li>Employment offers or internships</li>
                <li>Charitable donations or sponsorships</li>
                <li>Loans, guarantees, debt forgiveness</li>
              </ul>
            </div>

            <RedInfoBox title="Prohibited Examples">
              <ul className="list-disc space-y-2 pl-5">
                <li>Payment to a retailer&rsquo;s buyer to secure shelf placement</li>
                <li>Cash to customs official to expedite clearance</li>
                <li>Lavish hospitality tied to contract renewal</li>
                <li>&ldquo;Consulting fee&rdquo; without documented services</li>
                <li>Donation requested by official for a permit</li>
                <li>Gift to inspector during inspection</li>
              </ul>
            </RedInfoBox>
          </div>
        </section>

        {/* Prohibited Conduct */}
        <section id="prohibited" className="space-y-6 scroll-mt-32">
          <div className="border-b-2 border-[rgba(212,175,55,0.3)] pb-4">
            <h2 className="font-inter font-bold text-[#2d5016] text-[28.8px]">3. Prohibited Conduct</h2>
          </div>
          <div className="text-[16px] leading-[28.8px] space-y-6">
            <p>The following activities are <span className="font-bold">strictly prohibited:</span></p>
            <ul className="list-disc pl-5 space-y-4">
              <li><strong>Bribes:</strong> Offering, promising, giving, or accepting bribes</li>
              <li><strong>Kickbacks:</strong> Undisclosed payments, side deals, secret commissions</li>
              <li><strong>Facilitation Payments:</strong> Payments to speed routine government actions</li>
              <li><strong>Indirect Bribery:</strong> Using third parties to do what we cannot do directly</li>
              <li><strong>False Documentation:</strong> Creating false invoices, sham contracts, off-book transactions</li>
              <li><strong>Improper Influence:</strong> Any attempt to improperly influence decisions</li>
              <li><strong>Retaliation:</strong> Against those who report concerns in good faith</li>
            </ul>

            <RedInfoBox title="When in Doubt">
              <p>
                If unsure whether an action is permissible, <strong>do not proceed</strong>. Contact Legal or Compliance at{" "}
                <a href="mailto:compliance@zoikofoods.com" className="font-semibold text-[#2D5016] underline">
                  compliance@zoikofoods.com
                </a>
              </p>
            </RedInfoBox>
          </div>
        </section>

        {/* Gifts, Hospitality */}
        <section id="gifts" className="space-y-6 scroll-mt-32">
          <div className="border-b-2 border-[rgba(212,175,55,0.3)] pb-4">
            <h2 className="font-inter font-bold text-[#2d5016] text-[28.8px]">4. Gifts, Hospitality, Travel & Expenses</h2>
          </div>
          <div className="text-[16px] leading-[28.8px] space-y-6">
            <div>
              <h3 className="font-bold text-[#2d5016] text-[19.2px] mb-3">Core Principles</h3>
              <p className="mb-2">Gifts and hospitality must be:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Reasonable:</strong> Modest in value and appropriate</li>
                <li><strong>Proportionate:</strong> Not excessive or lavish</li>
                <li><strong>Infrequent:</strong> Not a pattern of repeated gifts</li>
                <li><strong>Transparent:</strong> Properly documented and disclosed</li>
                <li><strong>Not Intended to Influence:</strong> Never tied to decisions</li>
                <li><strong>Compliant:</strong> Must comply with policy and local law</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-[20.8px] font-semibold text-[#1A3309]">Decision Table</h3>
              <div className="grid gap-6 md:grid-cols-3">
                {decisionColumns.map((col) => (
                  <div
                    key={col.heading}
                    className="rounded-[12px] p-6"
                    style={{ backgroundColor: col.bg, borderTop: `4px solid ${col.border}` }}
                  >
                    <h4 className="mb-4 text-[17.6px] font-semibold" style={{ color: col.titleColor }}>
                      {col.heading}
                    </h4>
                    <ul className="list-disc space-y-2 pl-5 text-[14.4px] leading-[25.92px] text-[#2C2C2C]">
                      {col.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <RedFlagsList
              title="Special Rules for Government Officials"
              items={[
                "Customs and border officials",
                "Health and food safety inspectors",
                "Tax and revenue authorities",
                "Licensing and permit officials",
                "State-owned enterprise employees",
                "Politicians and political candidates",
              ]}
            />
            <p className="text-[16px] leading-[28.8px] text-[#2C2C2C]">
              Any gift, meal, travel involving a government official requires <strong>pre-approval</strong> from
              Legal/Compliance, regardless of value. This includes the categories above.
            </p>
          </div>
        </section>

        {/* Facilitation Payments */}
        <section id="facilitation" className="space-y-6 scroll-mt-32">
          <div className="border-b-2 border-[rgba(212,175,55,0.3)] pb-4">
            <h2 className="font-inter font-bold text-[#2d5016] text-[28.8px]">5. Facilitation Payments</h2>
          </div>
          <div className="text-[16px] leading-[28.8px] space-y-6">
            <RedInfoBox title="Bright-Line Prohibition">
              <p><strong>Facilitation payments are prohibited</strong> under this policy, even where customary or permitted under local law.</p>
            </RedInfoBox>

            <div>
              <h3 className="font-bold text-[#2d5016] text-[19.2px] mb-3">What Are Facilitation Payments?</h3>
              <p className="mb-2">Small payments made to government officials to expedite routine actions such as:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Processing visas, work permits, licenses</li>
                <li>Clearing goods through customs</li>
                <li>Providing utility services or inspections</li>
                <li>Issuing permits or certificates</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#2d5016] text-[19.2px] mb-4">If You Are Faced with a Demand</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  {gradientCircle}
                  <p><strong>Prioritize Safety:</strong> Your personal safety is paramount</p>
                </div>
                <div className="flex gap-4">
                  {gradientCircle}
                  <p><strong>Refuse Politely:</strong> Where safe, refuse and explain policy prohibits it</p>
                </div>
                <div className="flex gap-4">
                  {gradientCircle}
                  <p><strong>Escalate Immediately:</strong> Contact manager and Legal/Compliance</p>
                </div>
                <div className="flex gap-4">
                  {gradientCircle}
                  <p><strong>Document:</strong> Record all details (who, what, when, where, how much)</p>
                </div>
                <div className="flex gap-4">
                  {gradientCircle}
                  <p><strong>Report:</strong> If paid due to safety, report immediately with documentation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Charitable Donations & Sponsorships */}
        <section id="donations" className="space-y-6 scroll-mt-32">
          <div className="border-b-2 border-[rgba(212,175,55,0.3)] pb-4">
            <h2 className="font-inter font-bold text-[#2d5016] text-[28.8px]">6. Charitable Donations & Sponsorships</h2>
          </div>
          <div className="text-[16px] leading-[28.8px] space-y-6">
            <div>
              <h3 className="font-bold text-[#2d5016] text-[19.2px] mb-3">Core Principles</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Legitimate Purpose:</strong> For genuine charitable or community benefit</li>
                <li><strong>No Improper Influence:</strong> Never to influence business or government</li>
                <li><strong>Transparent:</strong> Properly approved, documented, disclosed</li>
                <li><strong>Due Diligence:</strong> Recipients vetted for legitimacy</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#2d5016] text-[19.2px] mb-3">Pre-Approval Requirements</h3>
              <p className="mb-2">Require Legal/Compliance approval:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Donations above threshold</li>
                <li>Requested by government officials</li>
                <li>Sponsorships connected to business partners</li>
                <li>Donations where conflicts of interest exist</li>
              </ul>
            </div>

            <RedFlagsList
              title="Red Flags"
              items={[
                "Donation requested by government official",
                "Timing coincides with pending contract",
                "Recipient has unclear governance",
                "Request to donate to individual not organization",
                "Lack of proper documentation",
              ]}
            />
          </div>
        </section>

        {/* Third-Party Due Diligence */}
        <section id="third-parties" className="space-y-6 scroll-mt-32">
          <div className="border-b-2 border-[rgba(212,175,55,0.3)] pb-4">
            <h2 className="font-inter font-bold text-[#2d5016] text-[28.8px]">7. Third-Party Due Diligence</h2>
          </div>
          <div className="text-[16px] leading-[28.8px] space-y-6">
            <div>
              <h3 className="font-bold text-[#2d5016] text-[19.2px] mb-3">Who Counts as a Third Party?</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Agents and Representatives:</strong> Sales agents, distributors, brokers</li>
                <li><strong>Consultants and Advisors:</strong> Business consultants, lobbyists, government relations</li>
                <li><strong>Customs and Logistics:</strong> Customs brokers, freight forwarders</li>
                <li><strong>High-Risk Vendors:</strong> Suppliers with government touchpoints</li>
                <li><strong>Joint Venture Partners:</strong> Strategic alliance partners</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#2d5016] text-[19.2px] mb-4">Due Diligence Workflow (Pre-Engagement)</h3>
              <div className="space-y-4">
                {[
                  { title: "Business Justification:", desc: "Sponsor submits request with business case" },
                  { title: "Risk Screening:", desc: "Assess jurisdiction, role, government touchpoints" },
                  { title: "Background Checks:", desc: "Sanctions screening, adverse media, ownership review" },
                  { title: "Questionnaire:", desc: "Third party completes anti-corruption questionnaire" },
                  { title: "Contract Clauses:", desc: "Include audit rights, warranties, termination rights" },
                  { title: "Approval:", desc: "Compliance/Legal approval for medium/high-risk" },
                  { title: "Monitoring Schedule:", desc: "Set frequency based on risk tier" },
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    {gradientCircle}
                    <p><strong>{step.title}</strong> {step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <RedFlagsList
              title="Warning Signs"
              items={[
                "Refusal to disclose ownership structure",
                "Request for cash payments or third-country payments",
                "Unusually high commissions without justification",
                "Vague or generic service descriptions",
                "Close relationships with government officials",
                'Claims of "special access" or "inside connections"',
                "Poor documentation or resistance to audit clauses",
                "Requests to falsify invoices or split payments",
              ]}
            />
          </div>
        </section>

        {/* Conflicts of Interest */}
        <section id="conflicts" className="space-y-6 scroll-mt-32">
          <div className="border-b-2 border-[rgba(212,175,55,0.3)] pb-4">
            <h2 className="font-inter font-bold text-[#2d5016] text-[28.8px]">8. Conflicts of Interest</h2>
          </div>
          <div className="text-[16px] leading-[28.8px] space-y-6">
            <div>
              <h3 className="font-bold text-[#2d5016] text-[19.2px] mb-3">Disclosure Requirements</h3>
              <p className="mb-2">Employees must disclose:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Personal Interests:</strong> Financial interests in suppliers, customers, competitors</li>
                <li><strong>Family Relationships:</strong> Family employed by or having interests in business partners</li>
                <li><strong>Outside Employment:</strong> Secondary employment that may conflict</li>
                <li><strong>Gifts and Hospitality:</strong> Significant gifts creating obligations</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#2d5016] text-[19.2px] mb-4">Disclosure Process</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-[8px] border border-[rgba(212,175,55,0.2)] p-5">
                  <h4 className="mb-2 font-semibold text-[#2D5016]">1. Disclose:</h4>
                  <p className="text-[#2c2c2c]">Immediately inform manager and Compliance team</p>
                </div>
                <div className="rounded-[8px] border border-[rgba(212,175,55,0.2)] p-5">
                  <h4 className="mb-2 font-semibold text-[#2D5016]">2. Document:</h4>
                  <p className="text-[#2c2c2c]">Provide written disclosure with full details</p>
                </div>
                <div className="rounded-[8px] border border-[rgba(212,175,55,0.2)] p-5">
                  <h4 className="mb-2 font-semibold text-[#2D5016]">3. Await Approval:</h4>
                  <p className="text-[#2c2c2c]">Do not proceed until reviewed</p>
                </div>
                <div className="rounded-[8px] border border-[rgba(212,175,55,0.2)] p-5">
                  <h4 className="mb-2 font-semibold text-[#2D5016]">4. Recuse if Needed:</h4>
                  <p className="text-[#2c2c2c]">Remove yourself from decision-making</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Books, Records */}
        <section id="books" className="space-y-6 scroll-mt-32">
          <div className="border-b-2 border-[rgba(212,175,55,0.3)] pb-4">
            <h2 className="font-inter font-bold text-[#2d5016] text-[28.8px]">9. Books, Records & Financial Controls</h2>
          </div>
          <div className="text-[16px] leading-[28.8px] space-y-6">
            <div>
              <h3 className="font-bold text-[#2d5016] text-[19.2px] mb-3">Accurate Record-Keeping (FCPA Principle)</h3>
              <p className="mb-2">All business transactions must be:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Accurately Recorded:</strong> Reflect true nature and purpose</li>
                <li><strong>Properly Authorized:</strong> Follow approval workflows</li>
                <li><strong>Completely Documented:</strong> Maintain supporting documentation</li>
                <li><strong>Transparently Maintained:</strong> No off-book accounts or hidden funds</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#2d5016] text-[19.2px] mb-3">Prohibited Practices</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>False Invoices:</strong> For services not rendered</li>
                <li><strong>Sham Contracts:</strong> With no legitimate business purpose</li>
                <li><strong>Off-Book Accounts:</strong> Maintaining secret funds</li>
                <li><strong>Misclassification:</strong> Recording under false categories</li>
                <li><strong>Lack of Documentation:</strong> Payments without proper support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Training */}
        <section id="training" className="space-y-6 scroll-mt-32">
          <div className="border-b-2 border-[rgba(212,175,55,0.3)] pb-4">
            <h2 className="font-inter font-bold text-[#2d5016] text-[28.8px]">10. Training & Awareness</h2>
          </div>
          <div className="text-[16px] leading-[28.8px] space-y-6">
            <div>
              <h3 className="font-bold text-[#2d5016] text-[19.2px] mb-3">Mandatory Training</h3>
              <p className="mb-2">All employees must complete anti-bribery training:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Upon Onboarding:</strong> Within first 30 days</li>
                <li><strong>Periodic Refreshers:</strong> At least every 2 years</li>
                <li><strong>Role-Specific Training:</strong> Enhanced for high-risk roles</li>
                <li><strong>Updates:</strong> When material policy changes occur</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#2d5016] text-[19.2px] mb-3">High-Risk Roles</h3>
              <p className="mb-2">Enhanced training for:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Procurement and sourcing teams</li>
                <li>Sales and business development</li>
                <li>Logistics and customs operations</li>
                <li>Government relations and regulatory affairs</li>
                <li>Finance and accounting</li>
                <li>Senior management and executives</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Reporting */}
        <section id="reporting" className="scroll-mt-32">
          <div
            className="relative overflow-hidden rounded-[16px] p-8 text-white sm:p-12"
            style={{
              backgroundImage:
                "linear-gradient(116.73deg, rgb(34,139,34) 0%, rgb(45,90,61) 50%, rgb(212,165,116) 100%), linear-gradient(135deg, rgb(26,51,9) 0%, rgb(45,80,22) 100%)",
            }}
          >
            <div
              className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] rounded-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at center, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0) 70%)",
              }}
            />

            <h2 className="relative font-inter font-bold text-[32px] mb-4 text-white">Report a Concern</h2>
            <p className="relative text-white mb-10 font-inter text-[16px] leading-[28.8px]">
              If you suspect or become aware of bribery or corruption, you have a <strong>duty to report</strong>.
            </p>

            <div className="relative space-y-4 mb-10">
              <h3 className="font-inter font-bold text-white mb-4 text-[20.8px]">How to Report</h3>
              <div className="bg-white/10 p-5 rounded-[8px]">
                <p className="font-bold flex items-center gap-2 mb-2 text-[16px]">📧 Email</p>
                <a
                  href="mailto:ethics@zoikofoods.com"
                  className="text-[16px] font-semibold text-white underline"
                >
                  ethics@zoikofoods.com
                </a>
              </div>
              <div className="bg-white/10 p-5 rounded-[8px]">
                <p className="font-bold flex items-center gap-2 mb-2 text-[16px]">📋 Online Report Form</p>
                <a href="#" className="text-[16px] font-semibold text-white underline">
                  Submit a confidential report
                </a>
              </div>
            </div>

            <div className="relative space-y-8">
              <div>
                <h3 className="font-inter font-bold text-white mb-3 text-[20.8px]">Non-Retaliation</h3>
                <p className="text-white text-[16px] leading-[28.8px]">
                  We <strong>prohibit retaliation</strong> against anyone who reports concerns in good faith.
                </p>
              </div>
              <div>
                <h3 className="font-inter font-bold text-white mb-4 text-[20.8px]">What Happens Next</h3>
                <ol className="list-decimal space-y-3 pl-5 text-[16px] text-white/95">
                  <li>Report received and triaged by Compliance</li>
                  <li>Investigation conducted confidentially</li>
                  <li>Findings reviewed and action taken</li>
                  <li>Response provided if contact info given</li>
                  <li>Controls improved to prevent recurrence</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Enforcement */}
        <section id="enforcement" className="space-y-6 scroll-mt-32">
          <div className="border-b-2 border-[rgba(212,175,55,0.3)] pb-4">
            <h2 className="font-inter font-bold text-[#2d5016] text-[28.8px]">12. Investigations, Enforcement & Consequences</h2>
          </div>
          <div className="text-[16px] leading-[28.8px] space-y-6">
            <div>
              <h3 className="font-bold text-[#2d5016] text-[19.2px] mb-5">Investigation Process</h3>
              <div className="space-y-4">
                {[
                  { t: "Intake & Triage:", d: "Reports assessed for severity" },
                  { t: "Assign Investigator:", d: "Compliance or Legal conducts investigation" },
                  { t: "Preserve Evidence:", d: "Secure documents and records" },
                  { t: "Fact-Finding:", d: "Interview witnesses, review evidence" },
                  { t: "Decision:", d: "Determine if policy violation occurred" },
                  { t: "Remediation:", d: "Implement disciplinary action" },
                  { t: "Control Improvements:", d: "Address systemic weaknesses" }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    {gradientCircle}
                    <p><strong>{step.t}</strong> {step.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-bold text-[#2d5016] text-[19.2px] mb-5">Consequences for Violations</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="rounded-[8px] border-l-4 border-[#C41E3A] bg-[#FFE5E9] p-6">
                  <h4 className="mb-4 text-[17.6px] font-semibold text-[#C41E3A]">For Employees</h4>
                  <ul className="list-disc space-y-3 pl-5 text-[16px] text-[#2C2C2C]">
                    <li>Disciplinary action up to termination</li>
                    <li>Recovery of financial losses</li>
                    <li>Referral to law enforcement</li>
                    <li>Loss of bonuses or compensation</li>
                  </ul>
                </div>
                <div className="rounded-[8px] border-l-4 border-[#C41E3A] bg-[#FFE5E9] p-6">
                  <h4 className="mb-4 text-[17.6px] font-semibold text-[#C41E3A]">For Third Parties</h4>
                  <ul className="list-disc space-y-3 pl-5 text-[16px] text-[#2C2C2C]">
                    <li>Contract termination</li>
                    <li>Blacklisting from future business</li>
                    <li>Pursuit of damages</li>
                    <li>Reporting to authorities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Governance */}
        <section id="governance" className="space-y-6 scroll-mt-32">
          <div className="border-b-2 border-[rgba(212,175,55,0.3)] pb-4">
            <h2 className="font-inter font-bold text-[#2d5016] text-[28.8px]">13. Governance, Ownership & Review</h2>
          </div>
          <div className="text-[16px] leading-[28.8px] space-y-6">
            <div>
              <h3 className="font-bold text-[#2d5016] text-[19.2px] mb-5">Policy Ownership</h3>
              <div className="overflow-hidden rounded-[8px] border border-[rgba(212,175,55,0.2)] bg-white">
                <table className="w-full min-w-[560px] border-collapse text-left">
                  <thead>
                    <tr className="bg-[linear-gradient(135deg,rgb(45,80,22)_0%,rgb(74,124,46)_100%)] lg:bg-[linear-gradient(172.95deg,rgb(34,139,34)_0%,rgb(45,90,61)_50%,rgb(212,165,116)_100%),linear-gradient(135deg,rgb(45,80,22)_0%,rgb(74,124,46)_100%)]">
                      <th className="px-4 py-3 text-[15.2px] font-semibold text-white lg:px-5">Function</th>
                      <th className="px-4 py-3 text-[15.2px] font-semibold text-white lg:px-5">Responsibility</th>
                    </tr>
                  </thead>
                  <tbody>
                    {governanceRows.map((row) => (
                      <tr key={row[0]} className="border-t border-[rgba(212,175,55,0.15)]">
                        <td className="px-4 py-4 align-top text-[16px] font-bold text-[#2C2C2C] lg:px-5">{row[0]}</td>
                        <td className="px-4 py-4 align-top text-[16px] text-[#2C2C2C] lg:px-5">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mt-10">
              <div>
                <h3 className="font-bold text-[#2d5016] text-[19.2px] mb-4">Version Control</h3>
                <ul className="text-[16px] text-[#2c2c2c] space-y-3">
                  <li><span className="font-bold">Effective Date:</span> January 1, 2025</li>
                  <li><span className="font-bold">Last Reviewed:</span> January 30, 2026</li>
                  <li><span className="font-bold">Next Review:</span> January 2027</li>
                  <li><span className="font-bold">Approved By:</span> Board of Directors</li>
                </ul>
              </div>

              <GoldInfoBox title="Questions or Guidance">
                <p className="mb-2">
                  Contact:{" "}
                  <a href="mailto:compliance@zoikofoods.com" className="font-semibold text-[#2D5016] underline">
                    compliance@zoikofoods.com
                  </a>
                </p>
                <p>When in doubt, <strong>ask first</strong>. It is always better to seek guidance than to risk a violation.</p>
              </GoldInfoBox>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
