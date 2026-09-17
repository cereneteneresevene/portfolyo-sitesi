import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import { Reveal } from './Reveal'

const CONTACT_LINKS = [
  {
    label: 'ceren.tnrsvn@gmail.com',
    href: 'mailto:ceren.tnrsvn@gmail.com',
    icon: Mail,
  },
  {
    label: 'linkedin.com/in/ceren-tanrıseven',
    href: 'https://linkedin.com/in/ceren-tanriseven',
    icon: LinkedinIcon,
  },
  {
    label: 'github.com/cereneteneresevene',
    href: 'https://github.com/cereneteneresevene',
    icon: GithubIcon,
  },
]

export function Contact() {
  return (
    <section id="iletisim" className="py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)] dark:text-[var(--color-accent-2)]">
            İletişim
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl dark:text-white">
            Birlikte çalışalım
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)] dark:text-slate-400">
            Bir proje fikriniz mi var, yoksa sadece merhaba mı demek
            istiyorsunuz? Aşağıdaki kanallardan bana ulaşabilirsiniz.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {CONTACT_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm font-medium text-[var(--color-text)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] sm:w-auto dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-[var(--color-accent-2)] dark:hover:text-[var(--color-accent-2)]"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
