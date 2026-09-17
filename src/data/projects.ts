export interface Project {
  title: string
  description: string
  tags: string[]
  githubUrl: string
}

const GITHUB_USERNAME = 'cereneteneresevene'

export const projects: Project[] = [
  {
    title: 'Vardiya Optimizasyonu',
    description:
      'Yöneylem araştırması teknikleriyle personel vardiya planlamasını optimize eden, kısıtlar altında en uygun çizelgeyi öneren bir uygulama.',
    tags: ['Python', 'Operations Research', 'Optimizasyon'],
    githubUrl: `https://github.com/${GITHUB_USERNAME}/vardiya-optimizasyonu`,
  },
  {
    title: 'İş Süreci Yönetim Sistemi',
    description:
      'Kurumsal iş süreçlerinin modellenmesi, takibi ve raporlanması için geliştirilen web tabanlı bir yönetim sistemi.',
    tags: ['.NET Core', 'Onion Architecture', 'MSSQL', 'React'],
    githubUrl: `https://github.com/${GITHUB_USERNAME}/is-sureci-yonetim-sistemi`,
  },
  {
    title: 'Inventory App',
    description:
      'Stok giriş-çıkış hareketlerini ve envanter seviyelerini gerçek zamanlı olarak takip eden bir envanter yönetim uygulaması.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'React'],
    githubUrl: `https://github.com/${GITHUB_USERNAME}/inventory-app`,
  },
  {
    title: 'Kanban App',
    description:
      'Sürükle-bırak destekli, görev ve sprint takibini kolaylaştıran Trello benzeri bir kanban pano uygulaması.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: `https://github.com/${GITHUB_USERNAME}/kanban-app`,
  },
  {
    title: 'Private Hospital Automation',
    description:
      'Özel hastaneler için randevu, hasta ve personel süreçlerini tek bir noktadan yöneten otomasyon sistemi.',
    tags: ['.NET Core', 'MSSQL', 'C#'],
    githubUrl: `https://github.com/${GITHUB_USERNAME}/private_hospital_automation`,
  },
  {
    title: 'Dinamik Form Doğrulama Uygulaması',
    description:
      'Kullanıcı girdilerini önceden tanımlanan dinamik kurallara göre doğrulayan, esnek bir form doğrulama uygulaması.',
    tags: ['JavaScript', 'React', 'Node.js'],
    githubUrl: `https://github.com/${GITHUB_USERNAME}/dinamik_form_dogrulama_uygulamasi`,
  },
]
