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

export const profile = {
  name: 'Jim Hanss',
  handle: 'JimHanss',
  title: '前端开发者 / Full-stack Builder',
  location: 'China',
  avatarUrl: 'https://github.com/JimHanss.png',
  summary:
    '这里是一段可替换的个人简介。你可以用它介绍自己的技术方向、工作经历、开源贡献，或正在构建的产品。',
  highlights: [
    '专注 React、TypeScript 与现代 Web 工程化',
    '重视清晰的交互体验、可维护组件和自动化部署',
    '持续整理个人项目，把想法做成可运行的作品',
  ],
  skills: [
    'React',
    'TypeScript',
    'Vite',
    'Node.js',
    'CSS',
    'GitHub Actions',
    'API Design',
    'Product Thinking',
  ],
  experiences: [
    {
      period: '2026 - Now',
      title: '个人项目与开源实践',
      description:
        '把常用工具、实验性应用和学习成果整理为可展示、可维护的项目。',
    },
    {
      period: '2024 - 2025',
      title: 'Web 应用开发',
      description:
        '围绕业务流程、数据展示和前端工程效率构建稳定的用户界面。',
    },
  ] satisfies Experience[],
  projects: [
    {
      name: 'Portfolio Website',
      description:
        '基于 React 与 Vite 构建的个人主页，用于集中展示个人信息、技能与项目作品。',
      techStack: ['React', 'TypeScript', 'Vite', 'CSS'],
      status: 'In Progress',
      githubUrl: 'https://github.com/JimHanss/jimhanss.github.io',
      demoUrl: 'https://jimhanss.github.io/',
    },
    {
      name: 'Project Showcase',
      description:
        '项目展示占位条目。后续可以替换为真实仓库、在线演示和更完整的技术说明。',
      techStack: ['TypeScript', 'Automation', 'GitHub'],
      status: 'Draft',
      githubUrl: 'https://github.com/JimHanss',
      demoUrl: 'https://jimhanss.github.io/',
    },
    {
      name: 'Learning Notes',
      description:
        '用于沉淀学习笔记和实践记录的内容项目，适合展示持续学习和工程思考。',
      techStack: ['Markdown', 'Web', 'Docs'],
      status: 'Planned',
      githubUrl: 'https://github.com/JimHanss',
      demoUrl: 'https://jimhanss.github.io/',
    },
  ] satisfies Project[],
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
