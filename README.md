# Ceren Tanrıseven — Portfolyo Sitesi
React, TypeScript ve Tailwind CSS ile geliştirilmiştir; özgeçmiş, projeler, yetenekler ve iş deneyimi bilgilerini modern ve responsive bir arayüzde bir araya getirir.

🔗 **Canlı demo:**(https://portfolyo-sitesi-six.vercel.app)

## Özellikler

- ⚡️ Vite ile hızlı geliştirme ve build süreci
- 🎨 Tailwind CSS ile modern, koyu/açık tema destekli tasarım
- 📱 Tüm cihazlarda uyumlu (responsive) arayüz
- ✨ Scroll ile ortaya çıkan (reveal) animasyonlar
- 🧩 Bölümler: Hero, Hakkımda, Yetenekler, Projeler, İş Deneyimi, Eğitim, İletişim
- 📄 CV indirme özelliği

## Kullanılan Teknolojiler

**Frontend:** React, TypeScript, Tailwind CSS
**Diller:** JavaScript, Python, Java, C#
**Backend / Araçlar (deneyim):** Node.js, Express.js, .NET Core, MSSQL, MongoDB, Git, Jira, Figma

## Kurulum

Projeyi yerel ortamınızda çalıştırmak için:

```bash
# Depoyu klonlayın
git clone https://github.com/cereneteneresevene/portfolyo-sitesi.git
cd portfolyo-sitesi

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Uygulama varsayılan olarak `http://localhost:5173` adresinde çalışacaktır.

### Diğer komutlar

```bash
npm run build    # Production build oluşturur
npm run preview  # Build çıktısını yerel olarak önizler
npm run lint     # Oxlint ile kod kontrolü yapar
```

## Proje Yapısı

```
src/
├── assets/          # Görseller (avatar vb.)
├── components/       # Hero, About, Skills, Projects, WorkExperience,
│                      # Education, Contact, Footer, Header vb. bileşenler
├── data/             # projects.ts, skills.ts, education.ts, workExperience.ts
├── hooks/            # useTheme, useInView, useActiveSection
└── main.tsx
```
