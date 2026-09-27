import FadeUp from "./FadeUp";
import { publications } from "@/lib/data";

export default function Research() {
  return (
    <section id="research" className="border-b border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <FadeUp>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[2px] text-accent">
            Research / Publications
          </p>
          <h2 className="mb-8 text-3xl font-bold">Papers &amp; ongoing work</h2>
        </FadeUp>

        <div className="flex flex-col gap-5">
          {publications.map((pub) => (
            <FadeUp key={pub.title}>
              <div className="rounded-xl border border-border border-l-4 border-l-accent bg-card p-6">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent-dim">
                    {pub.meta}
                  </span>
                  {pub.status && (
                    <span className="whitespace-nowrap rounded-full bg-accent/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-accent">
                      {pub.status}
                    </span>
                  )}
                </div>
                <h3 className="mb-1.5 text-base font-semibold">{pub.title}</h3>
                <p className="text-sm text-muted">{pub.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}