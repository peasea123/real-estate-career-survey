// src/components/LandingPage.jsx

export default function LandingPage({ onStart }) {
  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 py-12 text-slate-800 dark:text-slate-200">
        <div className="flex justify-center mb-8">
          <img
            src="https://mtsurealestate.com/images/Artboard%201.png"
            alt="MTSU Logo"
            className="h-16 w-auto object-contain"
          />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center">
          Discover Your Path in Real Estate
        </h1>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 text-center">
          Most people only think of "real estate agents."  
          In reality, the industry includes dozens of high-impact careers.
        </p>

        <p className="mb-3 text-sm leading-relaxed dark:text-slate-300">
          This short interest survey is designed to help you see which parts of the
          real estate world might fit you best. Your answers will be compared to
          patterns we see in successful professionals across areas like:
        </p>

        <ul className="mb-4 text-sm leading-relaxed list-disc pl-6 dark:text-slate-300">
          <li>Residential and commercial sales &amp; brokerage</li>
          <li>Mortgage lending and banking</li>
          <li>Investment, private equity, and asset management</li>
          <li>Development and construction</li>
          <li>Property management and operations</li>
          <li>Valuation, appraisal, and consulting</li>
          <li>Real estate technology (PropTech) and data roles</li>
        </ul>

        <p className="mb-3 text-sm leading-relaxed">
          When you finish, you’ll receive a personalized report explaining several
          career paths that align with your interests, plus concrete next steps you
          can take at Middle Tennessee State University to explore them further.
        </p>

        <p className="text-sm leading-relaxed text-slate-900 dark:text-slate-100 font-medium">
          This isn’t a test and there are no wrong answers. It’s a conversation
          starter to help you think more strategically about your future.
        </p>

        <div className="text-center mt-8">
          <button
            onClick={onStart}
            className="px-6 py-3 rounded-full bg-sky-600 hover:bg-sky-700 
                       text-white text-sm font-semibold shadow"
          >
            Begin the Real Estate Career Interest Survey
          </button>
        </div>
      </div>
    </main>
  );
}
