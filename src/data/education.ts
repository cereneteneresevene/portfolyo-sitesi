export interface EducationItem {
  period: string
  school: string
  program: string
  description: string
}

export const education: EducationItem[] = [
  {
    period: '2025 - Halen',
    school: 'Hacı Bayram Veli Üniversitesi',
    program: 'Yöneylem Araştırması, Yüksek Lisans',
    description: 'AGNO: 3.88',
  },
  {
    period: '2023 - 2025',
    school: 'Necmettin Erbakan Üniversitesi',
    program: 'Yönetim Bilişim Sistemleri, Lisans',
    description: 'AGNO: 3.37 — Konya',
  },
  {
    period: '2021 - 2023',
    school: 'Karadeniz Teknik Üniversitesi',
    program: 'Yönetim Bilişim Sistemleri, Lisans',
    description: 'AGNO: 3.21 — Trabzon',
  },
]
