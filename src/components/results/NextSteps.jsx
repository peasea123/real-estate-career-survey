// src/components/results/NextSteps.jsx

import QR from "@/components/QR";

export default function NextSteps() {
  return (
    <section className="mt-10 border-t border-slate-300 pt-5 print:break-before-page">
      <h2 className="text-xl font-semibold text-slate-900 print:text-black">
        Your Next Steps at MTSU
      </h2>

      <p className="mt-2 text-sm text-slate-700 print:text-black">
        Here are practical ways to explore—or begin—your real estate career path at MTSU:
      </p>

      <ul className="mt-3 text-sm text-slate-700 space-y-2 print:text-black">
        <li>• Enroll in <strong>FIN 3030 – Real Estate Principles</strong></li>
        <li>• Join the <strong>MTSU Real Estate Club</strong> for events and networking</li>
        <li>• Attend the <strong>Real Estate Mini-Career Fair</strong></li>
        <li>• Ask about <strong>Mortgage Banking Bound</strong> for lending career exposure</li>
        <li>• Explore internships with brokers, lenders, appraisers, and investment firms</li>
        <li>• Meet with your advisor—or Dr. Seagraves—for guidance on your path</li>
      </ul>

      {/* QR codes with clickable links underneath */}
      <div className="mt-6 grid gap-6 sm:grid-cols-3 print:gap-4">
        {/* MTSU Real Estate Program */}
        <div className="flex flex-col items-center text-center">
          <QR
            value="https://www.mtsu.edu/programs/real-estate"
            label="MTSU Real Estate Program"
          />
          <a
            href="https://www.mtsu.edu/programs/real-estate"
            target="_blank"
            className="mt-1 text-xs text-sky-700 underline print:text-black"
          >
            mtsu.edu/programs/real-estate
          </a>
        </div>

        {/* MTSU Homepage */}
        <div className="flex flex-col items-center text-center">
          <QR
            value="https://www.mtsu.edu"
            label="MTSU Homepage"
          />
          <a
            href="https://www.mtsu.edu"
            target="_blank"
            className="mt-1 text-xs text-sky-700 underline print:text-black"
          >
            mtsu.edu
          </a>
        </div>

        {/* MBA Mortgage Banking Bound */}
        <div className="flex flex-col items-center text-center">
          <QR
            value="https://www.mba.org/conferences-and-education/industry-careers/mortgage-banking-bound"
            label="Mortgage Banking Bound"
          />
          <a
            href="https://www.mba.org/conferences-and-education/industry-careers/mortgage-banking-bound"
            target="_blank"
            className="mt-1 text-xs text-sky-700 underline print:text-black"
          >
            mba.org / Mortgage Banking Bound
          </a>
        </div>

        {/* Raider Realty */}
        <div className="flex flex-col items-center text-center">
          <QR
            value="https://raiderrealtyllc.com/"
            label="Raider Realty"
          />
          <a
            href="https://raiderrealtyllc.com/"
            target="_blank"
            className="mt-1 text-xs text-sky-700 underline print:text-black"
          >
            raiderrealtyllc.com
          </a>
        </div>

        {/* MTSU Real Estate Studies LinkedIn */}
        <div className="flex flex-col items-center text-center">
          <QR
            value="https://www.linkedin.com/company/mtsu-real-estate-studies"
            label="MTSU Real Estate Studies (LinkedIn)"
          />
          <a
            href="https://www.linkedin.com/company/mtsu-real-estate-studies"
            target="_blank"
            className="mt-1 text-xs text-sky-700 underline print:text-black"
          >
            LinkedIn: MTSU Real Estate Studies
          </a>
        </div>
      </div>
    </section>
  );
}
