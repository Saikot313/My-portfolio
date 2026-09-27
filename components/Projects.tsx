import FadeUp from "./FadeUp";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[2px] text-accent">
            Projects
          </p>
          <h2 className="mb-10 text-3xl font-bold">Selected work</h2>
        </FadeUp>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <FadeUp key={project.title}>
              <div className="flex h-full min-h-[220px] flex-col gap-4 rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-accent">
                <div className="flex flex-col items-start gap-2">
                  <span className="text-xs font-semibold uppercase leading-relaxed tracking-wide text-accent-dim">
                    {project.meta}
                  </span>

                  <div className="flex flex-wrap items-center gap-2">
                    {project.aiAssisted && (
                      <span className="whitespace-nowrap rounded-full bg-accent/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-accent">
                        ⚡ AI-Assisted
                      </span>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 whitespace-nowrap rounded-full border border-border px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-muted transition hover:border-accent hover:text-accent"
                      >
                        GitHub
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whitespace-nowrap rounded-full border border-border px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-muted transition hover:border-accent hover:text-accent"
                      >
                        Live Site
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}