// src/components/results/CareerCard.jsx

function Section({ title, content }) {
  return (
    <section className="mt-3 print:break-inside-avoid">
      <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 print:text-black">{title}</h4>
      <p className="mt-1 text-sm text-slate-700 dark:text-slate-300 print:text-black break-words">
        {content}
      </p>
    </section>
  );
}

function ListSection({ title, items, color }) {
  const colorClass = color === "emerald" ? "text-emerald-700" : "text-rose-700";
  const bgClass = color === "emerald" ? "bg-emerald-50 border-emerald-200" : "bg-rose-50 border-rose-200";

  return (
    <div className={`print:break-inside-avoid rounded-lg border p-3 ${bgClass}`}>
      <h4 className={`text-sm font-semibold ${colorClass} print:text-black`}>
        {title}
      </h4>
      <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1 print:text-black">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function CareerCard({ category, score }) {
  const cat = category;

  return (
    <article
      className="rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800/50 p-4 
                 print:break-inside-avoid print:bg-white overflow-hidden"
    >
      <header className="flex items-baseline justify-between gap-4 mb-2">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 print:text-black">
            {cat.name}
          </h3>
          {cat.tagline && (
            <p className="text-sm text-sky-700 dark:text-sky-400 mt-1 print:text-black">
              {cat.tagline}
            </p>
          )}
        </div>

        <span className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400 print:text-black">
          Match score: {score}
        </span>
      </header>

      <Section title="What this career is about" content={cat.overview} />
      <Section title="How to get started" content={cat.howToGetStarted} />
      <Section title="Income potential" content={cat.incomePotential} />
      <Section title="A day in the life" content={cat.dayInLife} />
      <Section title="Who this is a good fit for" content={cat.fitForYou} />

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <ListSection
          title="Reasons to be excited"
          color="emerald"
          items={cat.prosCons.pros}
        />
        <ListSection
          title="Things to be aware of"
          color="rose"
          items={cat.prosCons.cons}
        />
      </div>

      <Section
        title="How a real estate degree helps"
        content={cat.degreeBenefits}
      />

      {cat.jobLinks && (
        <div className="mt-3">
          <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 print:text-black">
            Explore real job postings
          </h4>
          <ul className="mt-1 text-sm text-sky-700 dark:text-sky-400 space-y-1 print:text-black">
            {cat.jobLinks.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank" className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
