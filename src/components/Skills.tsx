import { skillCategories } from '../data/skills'
import { Reveal } from './Reveal'

export function Skills() {
  return (
    <section
      id="yetenekler"
      className="bg-[var(--color-surface-2)]/60 py-24 dark:bg-white/[0.02]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)] dark:text-[var(--color-accent-2)]">
            Yetenekler
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl dark:text-white">
            Teknoloji Yığınım
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--color-accent)]/50 hover:shadow-lg hover:shadow-[var(--color-accent)]/10 dark:border-white/10 dark:bg-[var(--color-navy-900)] dark:hover:border-[var(--color-accent-2)]/40">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-text)] dark:text-white">
                  {category.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-1 text-sm font-medium text-[var(--color-text-muted)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-accent)]/60 hover:text-[var(--color-accent)] dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-[var(--color-accent-2)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
