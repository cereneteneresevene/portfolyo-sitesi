export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-[var(--color-text-muted)] dark:text-slate-500">
        © {new Date().getFullYear()} Ceren Tanrıseven. Tüm hakları saklıdır.
      </div>
    </footer>
  )
}
