// src/components/ResultsPanel.jsx
"use client";

import { useState } from "react";
import ResultsLogo from "@/components/ResultsLogo";
import HeaderBlock from "@/components/results/HeaderBlock";
import CareerCard from "@/components/results/CareerCard";
import NextSteps from "@/components/results/NextSteps";
import SignatureBlock from "@/components/results/SignatureBlock";

export default function ResultsPanel({
  results,
  categories,
  answers,
  questions,
  studentName,
  resultsLink,
}) {
  if (!results || results.length === 0) return null;

  const [copied, setCopied] = useState(false);

  const isSharedView =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).has("results");

  const handleCopyLink = () => {
    if (!resultsLink) return;
    navigator.clipboard.writeText(resultsLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handlePrint = () => window.print();

  const timestamp = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <section
      id="career-report"
      className="mt-10 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm 
                 print:border-none print:shadow-none print:p-4"
    >
      {/* Top blue logo bar */}
      <ResultsLogo />

      {/* Letter-style header (includes signature image) */}
      <HeaderBlock studentName={studentName} isSharedView={isSharedView} />

      {/* Shareable link button (only online, not in print) */}
      <div className="mb-6 print:hidden">
        <button
          onClick={handleCopyLink}
          className="rounded-full bg-sky-600 text-white px-4 py-2 text-xs font-semibold 
                     shadow-sm hover:bg-sky-700"
        >
          Copy Shareable Link to Results
        </button>

        {copied && (
          <span className="ml-3 text-xs text-emerald-600 font-medium">
            Link copied ✓
          </span>
        )}
      </div>

      {/* Career cards for each top match */}
      <div className="space-y-8 mt-4">
        {results.map(({ id, score }) => {
          const cat = categories[id];
          if (!cat) return null;

          return (
            <CareerCard
              key={id}
              category={cat}
              score={score}
            />
          );
        })}
      </div>

      {/* Next steps section with QR codes and links */}
      <NextSteps />

      {/* Print-only footer with program line + timestamp */}
      <SignatureBlock timestamp={timestamp} />

      {/* Bottom print/save button for on-screen use */}
      <div className="mt-6 print:hidden">
        <button
          onClick={handlePrint}
          className="rounded-full bg-sky-600 text-white px-5 py-2 text-sm font-semibold 
                     shadow-sm hover:bg-sky-700"
        >
          Print / Save as PDF
        </button>
      </div>
    </section>
  );
}
