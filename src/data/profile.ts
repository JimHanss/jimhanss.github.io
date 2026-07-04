export type Project = {
  name: string
  description: string
  techStack: string[]
  status: string
  githubUrl: string
  demoUrl: string
}

export type Experience = {
  period: string
  title: string
  description: string
}

export type ContactLink = {
  label: string
  value: string
  href: string
}

export type Expertise = {
  title: string
  description: string
  tags: string[]
}

export type Stat = {
  label: string
  value: string
}

export const profile = {
  name: 'Jim Hanss',
  handle: 'JimHanss',
  title: 'Front-end Developer / Full-stack Builder',
  location: 'China',
  avatarUrl: 'https://github.com/JimHanss.png',
  intro:
    'I build clean, fast, and maintainable web experiences with React, TypeScript, and modern frontend tooling.',
  summary:
    'This portfolio is a living space for projects, experiments, and notes. Replace the placeholder copy with your real background, product work, open-source contributions, and contact details when ready.',
  availability: 'Open to selected collaborations',
  stats: [
    { label: 'Focus', value: 'Product UI' },
    { label: 'Stack', value: 'React + TS' },
    { label: 'Shipping', value: 'GitHub Pages' },
  ] satisfies Stat[],
  expertise: [
    {
      title: 'Interface Engineering',
      description:
        'Build responsive interfaces with clear component boundaries, predictable state, and accessible interaction patterns.',
      tags: ['React', 'TypeScript', 'CSS'],
    },
    {
      title: 'Frontend Tooling',
      description:
        'Set up lean project workflows around Vite, automated builds, GitHub Actions, and production deployment.',
      tags: ['Vite', 'GitHub Actions', 'CI'],
    },
    {
      title: 'Product Thinking',
      description:
        'Turn project ideas into usable screens, focusing on hierarchy, content clarity, and repeatable user flows.',
      tags: ['UX', 'Prototyping', 'Docs'],
    },
  ] satisfies Expertise[],
  projects: [
    {
      name: 'Portfolio Website',
      description:
        'A personal homepage built with React and Vite to present profile information, technical direction, and project work.',
      techStack: ['React', 'TypeScript', 'Vite', 'CSS'],
      status: 'Live',
      githubUrl: 'https://github.com/JimHanss/jimhanss.github.io',
      demoUrl: 'https://jimhanss.github.io/',
    },
    {
      name: 'Project Showcase',
      description:
        'A placeholder project entry for a future repository, product experiment, or case study with richer technical notes.',
      techStack: ['TypeScript', 'Automation', 'GitHub'],
      status: 'Draft',
      githubUrl: 'https://github.com/JimHanss',
      demoUrl: 'https://jimhanss.github.io/',
    },
    {
      name: 'Learning Notes',
      description:
        'A future content space for engineering notes, implementation records, and lessons learned from hands-on practice.',
      techStack: ['Markdown', 'Web', 'Docs'],
      status: 'Planned',
      githubUrl: 'https://github.com/JimHanss',
      demoUrl: 'https://jimhanss.github.io/',
    },
  ] satisfies Project[],
  experiences: [
    {
      period: '2026 - Now',
      title: 'Personal Projects & Open Practice',
      description:
        'Organizing useful tools, experimental apps, and learning outcomes into visible, maintainable projects.',
    },
    {
      period: '2024 - 2025',
      title: 'Web Application Development',
      description:
        'Building stable user interfaces around business workflows, data presentation, and frontend engineering efficiency.',
    },
  ] satisfies Experience[],
  contacts: [
    {
      label: 'GitHub',
      value: 'github.com/JimHanss',
      href: 'https://github.com/JimHanss',
    },
    {
      label: 'Email',
      value: 'you@example.com',
      href: 'mailto:you@example.com',
    },
  ] satisfies ContactLink[],
}
