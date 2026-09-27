import FadeUp from "./FadeUp";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-border pt-36 pb-24"
    >
      <div className="pointer-events-none absolute -right-52 -top-52 h-[600px] w-[600px] rounded-full bg-accent opacity-10 blur-3xl" />

      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <FadeUp>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[2px] text-accent">
              Portfolio
            </p>
          </FadeUp>
          <FadeUp>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Md. Sakender <span className="text-accent">Saikot</span>
            </h1>
          </FadeUp>
          <FadeUp>
            <p className="mt-5 max-w-lg text-lg text-muted">
              <strong className="text-text">Software Engineer</strong>{" "}
              building scalable web and mobile applications - clean
              architecture, reusable components, and reliable APIs from
              frontend to backend.
            </p>
          </FadeUp>
          <FadeUp>
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-bg transition hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-border px-6 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent"
              >
                Get in Touch
              </a>
            </div>
          </FadeUp>
        </div>

        <FadeUp>
          <div className="group relative rounded-2xl border border-border bg-card p-7 animate-glow">
            <img
              src="/profile.png"
              alt="Md. Sakender Saikot"
              className="mb-4 h-24 w-24 rounded-2xl object-cover"
            />
            <dl className="mt-2 text-sm">
              <div className="flex justify-between border-t border-border py-2.5">
                <dt>Location</dt>
                <dd className="font-bold text-accent">Dhaka, Bangladesh</dd>
              </div>
              <div className="flex justify-between border-t border-border py-2.5">
                <dt>Stack</dt>
                <dd className="font-bold text-accent">Next.js · React · TypeScript</dd>
              </div>
              <div className="flex justify-between border-t border-border py-2.5">
                <dt>Focus</dt>
                <dd className="font-bold text-accent">UI Components · REST APIs · Performance</dd>
              </div>
            </dl>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
