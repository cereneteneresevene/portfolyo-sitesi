import { projects } from '../data/projects'
import { GithubIcon } from './icons'
import { Reveal } from './Reveal'

export function Projects() {
  return (
    <section id="projeler" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)] dark:text-[var(--color-accent-2)]">
            Projeler
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl dark:text-white">
            Üzerinde Çalıştığım Projeler
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 80}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--color-accent)]/50 hover:shadow-xl hover:shadow-[var(--color-accent)]/10 dark:border-white/10 dark:bg-[var(--color-navy-900)] dark:hover:border-[var(--color-accent-2)]/40">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] transition-transform duration-300 group-hover:scale-x-100" />
                <h3 className="text-lg font-semibold text-[var(--color-text)] dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)] dark:text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--color-surface-2)] px-2.5 py-1 text-xs font-medium text-[var(--color-text-muted)] dark:bg-white/5 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] transition-all group-hover:gap-3 dark:text-[var(--color-accent-2)]"
                >
                  <GithubIcon size={16} />
                  GitHub&apos;da Görüntüle
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
