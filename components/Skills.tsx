import FadeUp from "./FadeUp";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <FadeUp>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[2px] text-accent">
            Skills
          </p>
          <h2 className="mb-8 text-3xl font-bold">What I work with</h2>
        </FadeUp>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <FadeUp key={group.title}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-accent">
                <h3 className="mb-3 text-base font-semibold text-accent">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-bg2 px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
