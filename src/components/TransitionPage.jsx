// src/components/TransitionPage.jsx

export default function TransitionPage({ onContinue }) {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="max-w-3xl mx-auto px-4 py-12 text-slate-800 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Your Personalized Career Matches Are Ready
        </h2>

        <p className="text-sm leading-relaxed mb-4">
          Based on your responses, we’ve identified several real estate career paths
          that align strongly with your interests, work style, and motivations.
        </p>

        <p className="text-sm leading-relaxed mb-4">
          The results are not a label or a limit. Instead, they highlight places
          where people with similar interests have often found success—across sales,
          lending, investment, development, property management, valuation, tech,
          and other roles you may not have heard about yet.
        </p>

        <p className="text-sm leading-relaxed font-medium text-slate-900 mb-6">
          On the next page, you’ll see a full written report for your top matches,
          along with ideas for how to explore those paths during your time at MTSU.
        </p>

        <button
          onClick={onContinue}
          className="px-6 py-3 rounded-full bg-sky-600 hover:bg-sky-700 
                     text-white text-sm font-semibold shadow"
        >
          View My Career Recommendations
        </button>
      </div>
    </main>
  );
}
