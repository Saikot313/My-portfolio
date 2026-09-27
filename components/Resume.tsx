import FadeUp from "./FadeUp";

export default function Resume() {
  return (
    <section id="resume" className="border-b border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <FadeUp>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[2px] text-accent">
            Resume
          </p>
          <h2 className="mb-2 text-3xl font-bold">Curriculum Vitae</h2>
          <p className="mb-10 text-muted">
            My full CV here - summary, education, and technical expertise, in
            one document.
          </p>
        </FadeUp>

        <FadeUp>
          <div className="grid grid-cols-1 gap-8 rounded-2xl border border-border bg-card p-8 sm:grid-cols-[260px_1fr]">
            <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-border bg-bg2 p-8 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-12 w-12 text-accent"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
                <path d="M9 13h6" />
                <path d="M9 17h6" />
              </svg>
              <div>
                <div className="font-semibold">
                  Md. Sakender Saikot - Software Engineer
                </div>
                <div className="mt-1 text-xs text-muted">
                  Last updated: 2026
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4">
              <p className="text-sm text-muted">
                Download or preview my complete resume, education at AIUB and
                Varendra University, and core technical skills across React,
                Next.js, TypeScript and Flutter.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-bg transition hover:-translate-y-0.5"
                >
                  👁 View CV
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent"
                >
                  ⬇ Download CV
                </a>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
