import { Reveal } from './Reveal'

const HIGHLIGHTS = [
  {
    label: 'Eğitim',
    value: 'Yönetim Bilişim Sistemleri mezunu',
  },
  {
    label: 'Yüksek Lisans',
    value: 'Yöneylem Araştırması, Hacı Bayram Veli Üniversitesi',
  },
  {
    label: 'İlgi Alanları',
    value: 'Yazılım geliştirme, iş analizi, süreç optimizasyonu',
  },
]

export function About() {
  return (
    <section id="hakkimda" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)] dark:text-[var(--color-accent-2)]">
            Hakkımda
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl dark:text-white">
            Analitik düşünceyi yazılım geliştirmeyle birleştiriyorum
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={100}>
            <p className="text-lg leading-relaxed text-[var(--color-text-muted)] dark:text-slate-400">
              Necmettin Erbakan Üniversitesi Yönetim Bilişim Sistemleri
              bölümünden mezun oldum ve şu anda Hacı Bayram Veli
              Üniversitesi&apos;nde Yöneylem Araştırması alanında yüksek
              lisansıma devam ediyorum. Eğitim hayatım boyunca veri analizi,
              süreç optimizasyonu, yazılım geliştirme ve sistem tasarımı gibi
              alanlarda teorik ve pratik bilgi birikimi edindim. Takım
              çalışmalarında etkin rol üstlenebilme, iş süreçlerine analitik
              bakış açısıyla yaklaşabilme ve çözüm odaklı düşünebilme
              yetkinliklerine sahibim.
            </p>
          </Reveal>

          <div className="flex flex-col gap-4">
            {HIGHLIGHTS.map((item, i) => (
              <Reveal key={item.label} delay={150 + i * 100}>
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40 dark:border-white/10 dark:bg-white/5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)] dark:text-[var(--color-accent-2)]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-[var(--color-text)] dark:text-slate-200">
                    {item.value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
