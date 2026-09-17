import { ArrowDown, Download } from 'lucide-react'
import avatar from '../assets/avatar.webp'
import { TerminalCard } from './TerminalCard'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 animate-blob rounded-full bg-[var(--color-accent)]/25 blur-[120px] dark:bg-[var(--color-accent)]/30" />
        <div className="absolute right-[5%] top-[30%] h-[360px] w-[360px] animate-float rounded-full bg-[var(--color-accent-2)]/20 blur-[110px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.2fr_0.8fr]">
        <div className="animate-fade-up">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5 text-sm font-medium text-[var(--color-text-muted)] dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
            👋 Merhaba, ben
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-text)] sm:text-5xl md:text-6xl dark:text-white">
            Ceren <span className="gradient-text">Tanrıseven</span>
          </h1>
          <p className="mt-4 text-xl font-medium text-[var(--color-text-muted)] sm:text-2xl dark:text-slate-300">
            Full-Stack Developer &amp; Operations Research
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)] dark:text-slate-400">
            Web tabanlı projelerde frontend ve backend geliştirme deneyimine
            sahibim; süreç optimizasyonu ve veri odaklı çözümlerle
            teknolojiye katma değer katmayı hedefliyorum.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projeler"
              className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--color-accent)]/30 transition-transform hover:-translate-y-0.5"
            >
              Projelerimi Gör
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition-transform hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              <Download size={16} />
              CV İndir
            </a>
          </div>
        </div>

        <div className="relative mx-auto hidden aspect-square w-full max-w-sm md:block">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-2)] opacity-20 blur-2xl" />
          <div className="relative flex h-full w-full items-start justify-center overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] dark:border-white/10 dark:bg-white/5">
            <img
              src={avatar}
              alt="Ceren Tanrıseven"
              className="h-[112%] w-auto max-w-none object-contain object-top"
            />
          </div>
          <TerminalCard />
        </div>
      </div>

      <a
        href="#hakkimda"
        aria-label="Aşağı kaydır"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-text-muted)] animate-float dark:text-slate-500"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  )
}
