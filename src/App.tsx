import { profile } from './data/profile'

function App() {
  return (
    <main className="page-shell">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">{profile.handle}</p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions" aria-label="主要链接">
            <a className="primary-link" href="#projects">
              查看项目
            </a>
            <a
              className="secondary-link"
              href={profile.contacts[0]?.href}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <aside className="profile-panel" aria-label="个人概览">
          <img
            className="avatar"
            src={profile.avatarUrl}
            alt={`${profile.name} 的头像`}
          />
          <div>
            <p className="panel-label">Current Location</p>
            <p className="panel-value">{profile.location}</p>
          </div>
          <div>
            <p className="panel-label">Focus</p>
            <p className="panel-value">React / TypeScript / Product UI</p>
          </div>
        </aside>
      </section>

      <section className="content-section" aria-labelledby="highlights-title">
        <div className="section-heading">
          <p className="eyebrow">Profile</p>
          <h2 id="highlights-title">个人亮点</h2>
        </div>
        <div className="highlight-grid">
          {profile.highlights.map((item) => (
            <article className="highlight-card" key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" aria-labelledby="skills-title">
        <div className="section-heading">
          <p className="eyebrow">Stack</p>
          <h2 id="skills-title">技能方向</h2>
        </div>
        <div className="skill-list" aria-label="技能列表">
          {profile.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section
        className="content-section project-section"
        id="projects"
        aria-labelledby="projects-title"
      >
        <div className="section-heading">
          <p className="eyebrow">Work</p>
          <h2 id="projects-title">项目展示</h2>
        </div>
        <div className="project-grid">
          {profile.projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-card-header">
                <h3>{project.name}</h3>
                <span>{project.status}</span>
              </div>
              <p>{project.description}</p>
              <div className="tech-stack" aria-label={`${project.name} 技术栈`}>
                {project.techStack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section resume-grid" aria-labelledby="resume-title">
        <div className="section-heading">
          <p className="eyebrow">Resume</p>
          <h2 id="resume-title">经历与联系</h2>
        </div>
        <div className="timeline">
          {profile.experiences.map((experience) => (
            <article className="timeline-item" key={experience.title}>
              <p>{experience.period}</p>
              <h3>{experience.title}</h3>
              <span>{experience.description}</span>
            </article>
          ))}
        </div>
        <address className="contact-list">
          {profile.contacts.map((contact) => (
            <a href={contact.href} key={contact.label}>
              <span>{contact.label}</span>
              {contact.value}
            </a>
          ))}
        </address>
      </section>
    </main>
  )
}

export default App
