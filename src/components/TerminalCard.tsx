export function TerminalCard() {
  return (
    <div className="absolute -bottom-6 -left-6 hidden w-64 animate-float rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/95 p-4 font-mono text-xs shadow-2xl backdrop-blur-sm sm:block dark:border-white/10 dark:bg-[var(--color-navy-900)]/95">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="size-2.5 rounded-full bg-red-400/80" />
        <span className="size-2.5 rounded-full bg-yellow-400/80" />
        <span className="size-2.5 rounded-full bg-green-400/80" />
      </div>
      <p className="leading-relaxed">
        <span className="text-[var(--color-accent)] dark:text-[var(--color-accent-2)]">
          const
        </span>{' '}
        <span className="text-[var(--color-text)] dark:text-white">dev</span>{' '}
        <span className="text-[var(--color-text-muted)] dark:text-slate-500">
          =
        </span>{' '}
        <span className="text-[var(--color-text-muted)] dark:text-slate-500">
          {'{'}
        </span>
        <br />
        <span className="pl-4 text-[var(--color-text-muted)] dark:text-slate-400">
          role:
        </span>{' '}
        <span className="text-emerald-600 dark:text-emerald-400">
          'Full-Stack Dev'
        </span>
        <span className="text-[var(--color-text-muted)] dark:text-slate-500">
          ,
        </span>
        <br />
        <span className="pl-4 text-[var(--color-text-muted)] dark:text-slate-400">
          focus:
        </span>{' '}
        <span className="text-emerald-600 dark:text-emerald-400">
          'Optimizasyon'
        </span>
        <span className="text-[var(--color-text-muted)] dark:text-slate-500">
          ,
        </span>
        <br />
        <span className="pl-4 text-[var(--color-text-muted)] dark:text-slate-400">
          available:
        </span>{' '}
        <span className="text-[var(--color-accent)] dark:text-[var(--color-accent-2)]">
          true
        </span>
        <br />
        <span className="text-[var(--color-text-muted)] dark:text-slate-500">
          {'}'};
        </span>
        <span className="ml-0.5 inline-block h-3.5 w-[7px] animate-pulse bg-[var(--color-accent)] align-middle dark:bg-[var(--color-accent-2)]" />
      </p>
    </div>
  )
}
