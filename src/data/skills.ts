export interface SkillCategory {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'Bootstrap', 'HTML/CSS', 'TypeScript'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', '.NET Core'],
  },
  {
    title: 'Veritabanı',
    skills: ['MSSQL', 'MongoDB'],
  },
  {
    title: 'Diller',
    skills: ['Python', 'Java', 'C#', 'JavaScript'],
  },
  {
    title: 'Araçlar',
    skills: ['Git', 'GitHub', 'Jira', 'Scrum', 'Postman', 'Figma'],
  },
]
