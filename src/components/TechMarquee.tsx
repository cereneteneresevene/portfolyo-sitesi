const TECHNOLOGIES = [
  'React',
  'TypeScript',
  'Node.js',
  'Express.js',
  '.NET Core',
  'MSSQL',
  'MongoDB',
  'Tailwind CSS',
  'Python',
  'C#',
  'Git',
  'Scrum',
]

export function TechMarquee() {
  const items = [...TECHNOLOGIES, ...TECHNOLOGIES]

  return (
    <div className="overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-surface)] py-5 dark:border-white/10 dark:bg-[var(--color-navy-900)]">
      <div
        className="flex w-max animate-marquee gap-10"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        {items.map((tech, i) => (
          <span
            key={tech + i}
            className="flex items-center gap-2 text-sm font-medium whitespace-nowrap text-[var(--color-text-muted)] dark:text-slate-400"
          >
            <span className="size-1.5 rounded-full bg-[var(--color-accent)] dark:bg-[var(--color-accent-2)]" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
