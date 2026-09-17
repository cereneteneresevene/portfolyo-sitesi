import { GraduationCap } from 'lucide-react'
import { education } from '../data/education'
import { Reveal } from './Reveal'

export function Education() {
  return (
    <section id="egitim" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)] dark:text-[var(--color-accent-2)]">
            Eğitim
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl dark:text-white">
            Akademik Yolculuğum
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((item, i) => (
            <Reveal key={item.school + item.period} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--color-accent)]/50 hover:shadow-lg hover:shadow-[var(--color-accent)]/10 dark:border-white/10 dark:bg-[var(--color-navy-900)] dark:hover:border-[var(--color-accent-2)]/40">
                <span className="flex size-10 items-center justify-center rounded-xl bg-[var(--color-surface-2)] text-[var(--color-accent)] transition-colors group-hover:bg-[var(--color-accent)]/10 dark:bg-white/5 dark:text-[var(--color-accent-2)]">
                  <GraduationCap size={18} />
                </span>
                <span className="mt-4 block text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)] dark:text-[var(--color-accent-2)]">
                  {item.period}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-[var(--color-text)] dark:text-white">
                  {item.school}
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--color-text-muted)] dark:text-slate-400">
                  {item.program}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)] dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
