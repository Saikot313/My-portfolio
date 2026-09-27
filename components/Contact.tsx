import FadeUp from "./FadeUp";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <FadeUp>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[2px] text-accent">
            Contact
          </p>
          <h2 className="mb-4 text-4xl font-bold">Let&apos;s work together</h2>
          <p className="mx-auto max-w-lg text-muted">
            Open to Software Engineer roles and freelance development work.
          </p>
        </FadeUp>

        <FadeUp>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:your.email@example.com"
              className="rounded-xl border border-border bg-card px-6 py-3.5 text-sm transition hover:border-accent hover:text-accent"
            >
              ✉ Email
            </a>
            <a
              href="https://github.com/sakendersaikot313"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-border bg-card px-6 py-3.5 text-sm transition hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/md-sakender-saikot-2016423a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-border bg-card px-6 py-3.5 text-sm transition hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
