// src/components/results/HeaderBlock.jsx

export default function HeaderBlock({ studentName, isSharedView }) {
  return (
    <header className="mb-10 mt-6 print:my-4 text-slate-900">
      <h1 className="text-4xl font-bold leading-tight text-slate-900 print:text-black text-center mb-6">
        Real Estate Career Exploration Report
      </h1>

      <p className="mt-2 text-sm text-center text-slate-700 print:text-black">
        Prepared for{" "}
        <span className="font-semibold text-slate-900 print:text-black">
          {isSharedView ? "a prospective student" : studentName}
        </span>
        <br />
        Middle Tennessee State University
      </p>

      <div className="mt-6 text-xs text-slate-600 leading-relaxed print:text-black max-w-3xl mx-auto">
        <p className="mb-3">
          Real estate is one of the most dynamic and opportunity-rich industries in the
          world—spanning sales, finance, development, investment, operations, valuation,
          marketing, and PropTech. This personalized report highlights the paths that best
          align with your interests based on your survey responses.
        </p>

        <p className="mb-3">
          As you explore, remember this:{" "}
          <span className="font-semibold text-sky-700 print:text-black">
            real estate rewards people who understand people, markets, money, and strategy.
          </span>{" "}
          A strong educational foundation gives you a tremendous advantage—opening doors
          to higher-level roles, better long-term earnings, and the ability to pivot as
          the industry evolves.
        </p>

        <p className="mb-3">
          At Middle Tennessee State University, our Real Estate Studies Program equips
          students with the analytical, financial, and professional skills that employers
          value most.
        </p>

        <p className="font-medium text-slate-800 print:text-black mb-4">
          I encourage you to review your recommended career paths carefully and reach out
          if you’d like guidance on courses, internships, certifications, or job opportunities.
        </p>

        {/* Signature image */}
        <div className="mt-6 mb-2 text-center">
          <img
            src="/PSsig.gif"
            alt="Signature of Dr. Philip Seagraves"
            className="mx-auto w-48 opacity-90 print:opacity-100"
          />
        </div>

        <p className="text-center text-slate-700 print:text-black">
          — Dr. Philip Seagraves <br />
          Professor &amp; Director, MTSU Real Estate Studies Program
        </p>
      </div>
    </header>
  );
}
