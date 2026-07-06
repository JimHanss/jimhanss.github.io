import { useEffect, useState, type CSSProperties } from 'react'

type NavItem = {
  number: string
  label: string
  href: string
}

type Stat = {
  label: string
  value: string
}

type Expertise = {
  title: string
  description: string
  tags: string[]
}

type Project = {
  name: string
  description: string
  techStack: string[]
  status: string
  githubUrl?: string
  demoUrl?: string
}

type Experience = {
  period: string
  title: string
  description: string
}

type ContactLink = {
  label: string
  value: string
  href: string
}

type SiteMetadata = {
  navigation: NavItem[]
  profile: {
    name: string
    handle: string
    brandSuffix: string
    title: string
    location: string
    avatarUrl: string
    intro: string
    summary: string
    availability: string
    stats: Stat[]
    expertise: Expertise[]
    projects: Project[]
    experiences: Experience[]
    contacts: ContactLink[]
  }
  hero: {
    kickerPrefix: string
    primaryAction: { label: string; href: string }
    secondaryAction: { label: string; href: string }
    identityPanel: {
      ariaLabel: string
    }
    stackAriaLabel: string
    stack: string[]
    scrollCueLabel: string
  }
  sections: {
    expertise: {
      number: string
      label: string
      title: string
      description: string
      quotePrefix: string
      quoteText: string
    }
    work: {
      number: string
      label: string
      title: string
      featuredLabel: string
      featuredLinkLabel: string
      scopesLabel: string
      scopes: string[]
      githubLinkLabel: string
      demoLinkLabel: string
    }
    experience: {
      number: string
      label: string
      title: string
      description: string
    }
    contact: {
      kicker: string
      title: string
      copy: string
    }
  }
}

type RevealStyle = CSSProperties & {
  '--reveal-delay'?: string
}

const metadataUrl = `${import.meta.env.BASE_URL}metadata.json`

const revealDelay = (index = 0): RevealStyle => ({
  '--reveal-delay': `${Math.min(index * 80, 360)}ms`,
})

const hasUrl = (url?: string) => Boolean(url?.trim())

function App() {
  const [metadata, setMetadata] = useState<SiteMetadata | null>(null)
  const [metadataError, setMetadataError] = useState(false)
  const [navState, setNavState] = useState({
    isSticky: false,
    isShown: false,
    progress: 0,
  })

  useEffect(() => {
    let isCancelled = false

    const loadMetadata = async () => {
      try {
        const response = await fetch(metadataUrl, { cache: 'no-cache' })

        if (!response.ok) {
          throw new Error(`Failed to load metadata: ${response.status}`)
        }

        const nextMetadata = (await response.json()) as SiteMetadata

        if (!isCancelled) {
          setMetadata(nextMetadata)
          setMetadataError(false)
        }
      } catch (error) {
        console.error(error)

        if (!isCancelled) {
          setMetadataError(true)
        }
      }
    }

    void loadMetadata()

    return () => {
      isCancelled = true
    }
  }, [])

  useEffect(() => {
    const updateHeaderState = () => {
      const scrollTop = window.scrollY
      const scrollRange = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      )
      const progress = Math.min(100, Math.round((scrollTop / scrollRange) * 100))

      setNavState({
        isSticky: scrollTop > 250,
        isShown: scrollTop > 300,
        progress,
      })
    }

    updateHeaderState()
    window.addEventListener('scroll', updateHeaderState, { passive: true })
    window.addEventListener('resize', updateHeaderState)

    return () => {
      window.removeEventListener('scroll', updateHeaderState)
      window.removeEventListener('resize', updateHeaderState)
    }
  }, [])

  useEffect(() => {
    if (!metadata) {
      return undefined
    }

    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    )

    if (!revealItems.length) {
      return undefined
    }

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.14,
      },
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [metadata])

  if (!metadata) {
    return (
      <main className="site-shell metadata-shell">
        <div className="mesh-layer" aria-hidden="true" />
        <div className="scanline-layer" aria-hidden="true" />
        <p className="metadata-status" role={metadataError ? 'alert' : 'status'}>
          {metadataError ? 'Content could not be loaded.' : 'Loading content...'}
        </p>
      </main>
    )
  }

  const { hero, navigation, profile, sections } = metadata
  const featuredProject = profile.projects[0]
  const featuredProjectUrl = featuredProject?.demoUrl?.trim()

  return (
    <main className="site-shell">
      <div className="mesh-layer" aria-hidden="true" />
      <div className="scanline-layer" aria-hidden="true" />
      <div className="scroll-meter" aria-hidden="true">
        <span>{navState.progress}%</span>
        <i style={{ height: `${navState.progress}%` }} />
      </div>

      <header
        className={`topbar${navState.isSticky ? ' is-sticky' : ''}${
          navState.isShown ? ' is-shown' : ''
        }`}
        aria-label="Primary navigation"
      >
        <a className="brand-mark" href="#home" aria-label={`${profile.name} home`}>
          {profile.handle}
          <span>{profile.brandSuffix}</span>
        </a>
        <nav className="nav-links" aria-label="Page sections">
          {navigation.map((item) => (
            <a href={item.href} key={item.href} aria-label={item.label}>
              <span>{item.number}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero-section" id="home" aria-labelledby="hero-title">
        <div className="hero-visual" aria-hidden="true">
          <span className="shape data-plane plane-one" />
          <span className="shape data-plane plane-two" />
          <span className="shape data-plane plane-three" />
          <span className="shape signal-rail rail-one" />
          <span className="shape signal-rail rail-two" />
          <span className="shape telemetry-node node-one" />
          <span className="shape telemetry-node node-two" />
          <span className="shape horizon-grid" />
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker">
              {hero.kickerPrefix} {profile.availability}
            </p>
            <h1 id="hero-title">{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="primary-link" href={hero.primaryAction.href}>
                {hero.primaryAction.label}
              </a>
              <a className="secondary-link" href={hero.secondaryAction.href}>
                {hero.secondaryAction.label}
              </a>
            </div>
          </div>

          <aside
            className="system-panel identity-panel"
            aria-label={hero.identityPanel.ariaLabel}
          >
            <div className="identity-row">
              <img src={profile.avatarUrl} alt={`${profile.name} avatar`} />
              <div>
                <strong>{profile.handle}</strong>
                <span>{profile.location}</span>
              </div>
            </div>
            <dl className="signal-list">
              {profile.stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <div className="hero-dock" aria-label={hero.stackAriaLabel}>
          {hero.stack.map((tool, index) => (
            <span key={tool} style={revealDelay(index)}>
              {tool}
            </span>
          ))}
        </div>

        <a className="scroll-cue" href="#expertise" aria-label={hero.scrollCueLabel}>
          <span />
        </a>
      </section>

      <section className="section-block" id="expertise" aria-labelledby="expertise-title">
        <div className="section-label">
          <span>{sections.expertise.number}</span>
          <p>{sections.expertise.label}</p>
        </div>
        <div className="section-content">
          <div className="section-heading">
            <h2 id="expertise-title">{sections.expertise.title}</h2>
            <p>{sections.expertise.description}</p>
          </div>
          <div className="expertise-list">
            {profile.expertise.map((item, index) => (
              <article
                className="expertise-item"
                data-reveal
                key={item.title}
                style={revealDelay(index)}
              >
                <span className="item-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="tag-list" aria-label={`${item.title} tags`}>
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <blockquote className="code-quote" data-reveal>
            <span>{sections.expertise.quotePrefix}</span>
            <strong>{sections.expertise.quoteText}</strong>
          </blockquote>
        </div>
      </section>

      <section className="section-block" id="work" aria-labelledby="work-title">
        <div className="section-label">
          <span>{sections.work.number}</span>
          <p>{sections.work.label}</p>
        </div>
        <div className="section-content">
          <div className="work-intro">
            <div className="section-heading">
              <h2 id="work-title">{sections.work.title}</h2>
              <p>{profile.summary}</p>
            </div>
            {featuredProject ? (
              <aside className="featured-project" data-reveal>
                <div className="panel-header">
                  <span>{sections.work.featuredLabel}</span>
                  <strong>{featuredProject.status}</strong>
                </div>
                <h3>{featuredProject.name}</h3>
                {featuredProjectUrl ? (
                  <a href={featuredProjectUrl} target="_blank" rel="noreferrer">
                    {sections.work.featuredLinkLabel}
                  </a>
                ) : null}
              </aside>
            ) : null}
          </div>
          <div className="filter-row" aria-label="Project scopes">
            <span>{sections.work.scopesLabel}</span>
            {sections.work.scopes.map((scope) => (
              <p key={scope}>{scope}</p>
            ))}
          </div>
          <div className="project-list">
            {profile.projects.map((project, index) => {
              const githubUrl = project.githubUrl?.trim()
              const demoUrl = project.demoUrl?.trim()

              return (
                <article
                  className="project-row"
                  data-reveal
                  key={project.name}
                  style={revealDelay(index)}
                >
                  <div className="project-main">
                    <div className="project-heading">
                      <h3>{project.name}</h3>
                      <span>{project.status}</span>
                    </div>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-meta">
                    <div className="tag-list" aria-label={`${project.name} stack`}>
                      {project.techStack.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    {hasUrl(githubUrl) || hasUrl(demoUrl) ? (
                      <div className="project-links">
                        {hasUrl(githubUrl) ? (
                          <a href={githubUrl} target="_blank" rel="noreferrer">
                            {sections.work.githubLinkLabel}
                          </a>
                        ) : null}
                        {hasUrl(demoUrl) ? (
                          <a href={demoUrl} target="_blank" rel="noreferrer">
                            {sections.work.demoLinkLabel}
                          </a>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section
        className="section-block"
        id="experience"
        aria-labelledby="experience-title"
      >
        <div className="section-label">
          <span>{sections.experience.number}</span>
          <p>{sections.experience.label}</p>
        </div>
        <div className="section-content">
          <div className="section-heading">
            <h2 id="experience-title">{sections.experience.title}</h2>
            <p>{sections.experience.description}</p>
          </div>
          <div className="timeline">
            {profile.experiences.map((experience, index) => (
              <article
                className="timeline-item"
                data-reveal
                key={experience.title}
                style={revealDelay(index)}
              >
                <p>{experience.period}</p>
                <div>
                  <h3>{experience.title}</h3>
                  <span>{experience.description}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <p className="section-kicker">{sections.contact.kicker}</p>
        <h2 id="contact-title">{sections.contact.title}</h2>
        <p className="contact-copy">{sections.contact.copy}</p>
        <address className="contact-list">
          {profile.contacts.map((contact, index) => (
            <a
              data-reveal
              href={contact.href}
              key={contact.label}
              style={revealDelay(index)}
            >
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
