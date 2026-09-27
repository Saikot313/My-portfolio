import FadeUp from "./FadeUp";

const facts = [
  { label: "Role", value: "Software Engineer" },
  { label: "Location", value: "Mirpur DOHS, Dhaka, Bangladesh" },
  { label: "Stack", value: "React, Next.js, TypeScript, Flutter, REST APIs" },
];

export default function About() {
  return (
    <section id="about" className="border-b border-border py-24">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
        <FadeUp>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[2px] text-accent">
            About
          </p>
          <h2 className="mb-4 text-3xl font-bold">Who I am</h2>
          <p className="max-w-lg text-muted">
            I&apos;m a Software Engineer to
            building scalable web and mobile applications with React,
            Next.js, TypeScript and Flutter. I care about clean architecture,
            reusable components, and reliable API integrations - alongside
            an ongoing MSc in Computer Science (Major in Software Engineering).
          </p>
        </FadeUp>

        <FadeUp>
          <ul className="grid gap-3">
            {facts.map((fact) => (
              <li key={fact.label} className="flex gap-2 text-sm text-muted">
                <b className="min-w-[110px] text-text">{fact.label}</b>
                <span>{fact.value}</span>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
