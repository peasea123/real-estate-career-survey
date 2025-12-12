// src/app/page.js
"use client";

import { useState, useEffect } from "react";
import { QUESTIONS, CATEGORIES } from "@/data/questions";
import ResultsPanel from "@/components/ResultsPanel";
import SurveyHeader from "@/components/SurveyHeader";
import LandingPage from "@/components/LandingPage";
import TransitionPage from "@/components/TransitionPage";

/* ------------------------------ */
/* Encode / Decode Helpers        */
/* ------------------------------ */
function encodeData(obj) {
  return btoa(JSON.stringify(obj));
}

function decodeData(str) {
  try {
    return JSON.parse(atob(str));
  } catch {
    return null;
  }
}

export default function Home() {
  /* ---------------------------------------------------------- */
  /* STATE                                                      */
  /* ---------------------------------------------------------- */
  const [showLanding, setShowLanding] = useState(true);
  const [showTransition, setShowTransition] = useState(false);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  const [studentName, setStudentName] = useState("");
  const [saveStatus, setSaveStatus] = useState("");
  const [isSharedView, setIsSharedView] = useState(false);

  /* ---------------------------------------------------------- */
  /* LOAD SAVED / SHARED DATA (runs once on mount)              */
  /* ---------------------------------------------------------- */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);

    // detect "?results=..." shared view
    const shared = params.has("results");
    setIsSharedView(shared);

    // load saved local progress (only if not viewing a shared link)
    if (!shared) {
      const saved = localStorage.getItem("careerSurveyData");
      if (saved) {
        const parsed = JSON.parse(saved);
        setStudentName(parsed.studentName || "");
        setAnswers(parsed.answers || {});
      }
    }

    // load shared results link
    if (params.has("results")) {
      const decoded = decodeData(params.get("results") || "");
      if (decoded?.results) {
        setResults(decoded.results);
      }
      setShowLanding(false);
      setShowTransition(false);
    }
  }, []);

  /* ---------------------------------------------------------- */
  /* AUTOSAVE name + answers                                    */
  /* ---------------------------------------------------------- */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const data = { studentName, answers };
    localStorage.setItem("careerSurveyData", JSON.stringify(data));

    setSaveStatus("saved");
    const timer = setTimeout(() => setSaveStatus(""), 1200);
    return () => clearTimeout(timer);
  }, [studentName, answers]);

  /* ---------------------------------------------------------- */
  /* SURVEY HANDLERS                                            */
  /* ---------------------------------------------------------- */
  const handleSelect = (qid, cid) => {
    setAnswers((prev) => ({ ...prev, [qid]: cid }));
    setResults(null); // changing an answer clears old results
  };

  const allAnswered =
    studentName.trim().length > 0 &&
    QUESTIONS.every((q) => answers[q.id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!allAnswered) return;

    // compute match scores
    const scores = {};
    Object.keys(CATEGORIES).forEach((id) => {
      scores[id] = 0;
    });

    Object.values(answers).forEach((cid) => {
      if (scores[cid] !== undefined) {
        scores[cid] += 1;
      }
    });

    const sorted = Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .map(([id, score]) => ({ id, score }))
      .filter((x) => x.score > 0);

    setResults(sorted.slice(0, 3));
    setShowTransition(true); // show the “explanation” screen first
  };

  const showResults = () => {
    setShowTransition(false);
    setTimeout(() => {
      const el = document.getElementById("results-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const generateResultsLink = () => {
    if (!results) return "";
    const encoded = encodeData({ results });
    if (typeof window === "undefined") return "";
    return `${window.location.origin}?results=${encoded}`;
  };

  /* ---------------------------------------------------------- */
  /* LANDING PAGE                                               */
  /* ---------------------------------------------------------- */
  if (showLanding && !results) {
    return <LandingPage onStart={() => setShowLanding(false)} />;
  }

  /* ---------------------------------------------------------- */
  /* TRANSITION PAGE (after survey, before results)             */
  /* ---------------------------------------------------------- */
  if (showTransition && results) {
    return <TransitionPage onContinue={showResults} />;
  }

  /* ---------------------------------------------------------- */
  /* SURVEY + RESULTS LAYOUT                                    */
  /* ---------------------------------------------------------- */
  return (
    <main className="min-h-screen bg-slate-100">
      {/* Branded header only when filling out survey */}
      {!results && <SurveyHeader />}

      <div className="mx-auto max-w-4xl px-4 py-10">
        {/* ---------------- SURVEY VIEW ---------------- */}
        {!results && (
          <>
            <header className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                Real Estate Career Interest Survey
              </h1>

              <p className="mt-2 max-w-2xl text-sm text-slate-700">
                Your answers will help match your interests with several possible
                real estate career paths.
              </p>
            </header>

            <section className="rounded-2xl bg-white/80 p-6 shadow-sm border border-slate-200">
              <form onSubmit={handleSubmit}>
                {/* NAME FIELD */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-800 mb-1">
                    Your Name (required)
                  </label>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm 
                               focus:border-sky-500 focus:ring-sky-500"
                    required
                  />
                </div>

                {/* QUESTIONS */}
                <ol className="space-y-6">
                  {QUESTIONS.map((q, index) => (
                    <li
                      key={q.id}
                      className="rounded-xl border border-slate-100 bg-slate-50/60 p-4"
                    >
                      <p className="text-sm font-medium text-slate-900 mb-3">
                        <span className="mr-2 text-slate-500">{index + 1}.</span>
                        {q.text}
                      </p>

                      <div className="space-y-2">
                        {q.options.map((opt) => (
                          <label
                            key={opt.id}
                            className={`flex cursor-pointer items-start gap-2 rounded-lg border p-2 text-sm 
                                        transition hover:border-sky-300 hover:bg-white
                                        ${
                                          answers[q.id] === opt.category
                                            ? "border-sky-500 bg-white shadow-xs animate-popSelect"
                                            : "border-slate-200"
                                        }`}
                          >
                            <input
                              type="radio"
                              name={q.id}
                              value={opt.category}
                              checked={answers[q.id] === opt.category}
                              onChange={() => handleSelect(q.id, opt.category)}
                              className="mt-1 h-4 w-4 cursor-pointer accent-sky-600"
                            />

                            <span className="text-slate-800">{opt.label}</span>
                          </label>
                        ))}
                      </div>
                    </li>
                  ))}
                </ol>

                {/* AUTOSAVE MESSAGE */}
                {saveStatus === "saved" && (
                  <div className="text-xs text-emerald-600 font-medium mb-2 animate-fade">
                    Progress saved ✓
                  </div>
                )}

                <div className="mt-6 flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={!allAnswered}
                    className={`inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition
                      ${
                        allAnswered
                          ? "bg-sky-600 text-white hover:bg-sky-700"
                          : "bg-slate-300 text-slate-600 cursor-not-allowed"
                      }`}
                  >
                    See My Suggested Career Paths
                  </button>
                </div>
              </form>
            </section>
          </>
        )}

        {/* ---------------- RESULTS VIEW ---------------- */}
        {results && !showTransition && (
          <div id="results-section">
            {/* no “Back” button on shared view */}
            {!isSharedView && (
              <button
                onClick={() => setResults(null)}
                className="mb-4 inline-flex items-center rounded-full bg-slate-200 px-4 py-1 
                           text-xs font-medium text-slate-700 hover:bg-slate-300 print:hidden"
              >
                ← Back to my answers
              </button>
            )}

            <ResultsPanel
              results={results}
              categories={CATEGORIES}
              answers={answers}
              questions={QUESTIONS}
              studentName={studentName}
              resultsLink={generateResultsLink()}
            />
          </div>
        )}
      </div>
    </main>
  );
}
