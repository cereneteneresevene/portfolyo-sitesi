import { Briefcase } from 'lucide-react'
import { workExperience } from '../data/workExperience'
import { Reveal } from './Reveal'

export function WorkExperience() {
  return (
    <section
      id="deneyim"
      className="bg-[var(--color-surface-2)]/60 py-24 dark:bg-white/[0.02]"
    >
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)] dark:text-[var(--color-accent-2)]">
            İş Deneyimi
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl dark:text-white">
            Nerelerde Çalıştım
          </h2>
        </Reveal>

        <ol className="relative mt-14 border-s border-[var(--color-border)] dark:border-white/10">
          {workExperience.map((item, i) => (
            <Reveal key={item.company + item.period} delay={i * 100}>
              <li className="mb-10 ms-8 last:mb-0">
                <span className="absolute -start-4 flex size-8 items-center justify-center rounded-full bg-[var(--color-surface)] ring-8 ring-[var(--color-surface-2)] dark:bg-[var(--color-navy-900)] dark:ring-[var(--color-navy-950)]">
                  <Briefcase
                    size={15}
                    className="text-[var(--color-accent)] dark:text-[var(--color-accent-2)]"
                  />
                </span>

                <div className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all hover:-translate-y-1 hover:border-[var(--color-accent)]/50 hover:shadow-lg hover:shadow-[var(--color-accent)]/10 dark:border-white/10 dark:bg-[var(--color-navy-900)] dark:hover:border-[var(--color-accent-2)]/40">
                  <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)] dark:text-[var(--color-accent-2)]">
                    {item.period}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-[var(--color-text)] dark:text-white">
                    {item.company}
                  </h3>
                  <p className="text-sm font-medium text-[var(--color-text-muted)] dark:text-slate-400">
                    {item.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)] dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
