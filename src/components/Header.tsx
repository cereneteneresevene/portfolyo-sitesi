import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../hooks/useTheme'

const NAV_LINKS = [
  { href: '#hakkimda', label: 'Hakkımda', id: 'hakkimda' },
  { href: '#yetenekler', label: 'Yetenekler', id: 'yetenekler' },
  { href: '#projeler', label: 'Projeler', id: 'projeler' },
  { href: '#deneyim', label: 'Deneyim', id: 'deneyim' },
  { href: '#egitim', label: 'Eğitim', id: 'egitim' },
  { href: '#iletisim', label: 'İletişim', id: 'iletisim' },
]

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(NAV_LINKS.map((link) => link.id))

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-md transition-colors dark:border-white/10 dark:bg-[var(--color-navy-950)]/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-lg font-semibold tracking-tight text-[var(--color-text)] dark:text-white"
        >
          Ceren<span className="gradient-text">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-sm font-medium transition-colors hover:text-[var(--color-accent)] dark:hover:text-[var(--color-accent-2)] ${
                activeId === link.id
                  ? 'is-active text-[var(--color-accent)] dark:text-[var(--color-accent-2)]'
                  : 'text-[var(--color-text-muted)] dark:text-slate-300'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Tema değiştir"
            className="flex size-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] dark:border-white/10 dark:text-slate-200 dark:hover:border-[var(--color-accent-2)] dark:hover:text-[var(--color-accent-2)]"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Menüyü aç/kapat"
            className="flex size-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] md:hidden dark:border-white/10 dark:text-slate-200"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-[var(--color-border)] px-6 pb-4 md:hidden dark:border-white/10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-2 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-surface-2)] dark:hover:bg-white/5 ${
                activeId === link.id
                  ? 'text-[var(--color-accent)] dark:text-[var(--color-accent-2)]'
                  : 'text-[var(--color-text-muted)] dark:text-slate-300'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
