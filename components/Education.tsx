import FadeUp from "./FadeUp";
import { education, certifications } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="border-b border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <FadeUp>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[2px] text-accent">
            Education
          </p>
          <h2 className="mb-8 text-3xl font-bold">Academic background</h2>
        </FadeUp>

        <div className="flex flex-col gap-5">
          {education.map((item) => (
            <FadeUp key={item.degree}>
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{item.degree}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent-dim">
                    {item.period}
                  </span>
                </div>
                <div className="mb-3 text-sm font-medium text-accent">
                  {item.institution}
                </div>
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
                  {item.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}

          <FadeUp>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-3 text-lg font-semibold">Certifications</h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {certifications.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
