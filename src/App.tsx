import { useEffect, useState, type CSSProperties } from 'react'
import { profile } from './data/profile'

const navItems = [
  { number: '01', label: 'home', href: '#home' },
  { number: '02', label: 'expertise', href: '#expertise' },
  { number: '03', label: 'work', href: '#work' },
  { number: '04', label: 'experience', href: '#experience' },
  { number: '05', label: 'contact', href: '#contact' },
]

type RevealStyle = CSSProperties & {
  '--reveal-delay'?: string
}

const revealDelay = (index = 0): RevealStyle => ({
  '--reveal-delay': `${Math.min(index * 80, 360)}ms`,
})

function App() {
  const [navState, setNavState] = useState({ isSticky: false, isShown: false })

  useEffect(() => {
    const updateHeaderState = () => {
      const scrollTop = window.scrollY

      setNavState({
        isSticky: scrollTop > 250,
        isShown: scrollTop > 300,
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
  }, [])

  return (
    <main className="site-shell">
      <div className="scroll-meter" aria-hidden="true">
        <span>57%</span>
      </div>

      <header
        className={`topbar${navState.isSticky ? ' is-sticky' : ''}${
          navState.isShown ? ' is-shown' : ''
        }`}
        aria-label="Primary navigation"
      >
        <a className="brand-mark" href="#home" aria-label={`${profile.name} home`}>
          {profile.handle}<span>._</span>
        </a>
        <nav className="nav-links" aria-label="Page sections">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              <span>{item.number}</span>
              // {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero-section" id="home" aria-labelledby="hero-title">
        <div className="hero-visual" aria-hidden="true">
          <span className="shape cube cube-one" />
          <span className="shape cube cube-two" />
          <span className="shape cube cube-three" />
          <span className="shape orb" />
          <span className="shape pillar" />
          <span className="shape floor-shadow" />
        </div>

        <div className="hero-copy">
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
        </div>

        <div className="featured-strip" aria-label="Featured in">
          <p>As featured in</p>
          <div>
            <span>&lt; GitHub /&gt;</span>
            <span>Vite</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>Pages</span>
          </div>
        </div>

        <a className="scroll-cue" href="#expertise" aria-label="Scroll to expertise" />
      </section>

      <section className="section-block" id="expertise" aria-labelledby="expertise-title">
        <div className="section-label">
          <span>01</span>
          <p>My Expertise</p>
        </div>
        <div className="section-content">
          <h2 id="expertise-title">Software development with frontend precision.</h2>
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
            <span>const principle =</span>
            <strong>"Ship simple, readable interfaces that stay easy to change."</strong>
          </blockquote>
        </div>
      </section>

      <section className="section-block" id="work" aria-labelledby="work-title">
        <div className="section-label">
          <span>02</span>
          <p>My Work</p>
        </div>
        <div className="section-content">
          <div className="work-intro">
            <div>
              <h2 id="work-title">Selected scalable web projects and experiments.</h2>
              <p>{profile.summary}</p>
            </div>
            <aside className="featured-project" data-reveal>
              <p>Featured Project</p>
              <h3>{profile.projects[0].name}</h3>
              <a href={profile.projects[0].demoUrl} target="_blank" rel="noreferrer">
                View Project
              </a>
            </aside>
          </div>
          <div className="filter-row" aria-label="Project filters">
            <span>Filter by</span>
            <a href="#work">All {profile.projects.length}</a>
            <a href="#work">Web Development</a>
            <a href="#work">Automation</a>
          </div>
          <div className="project-list">
            {profile.projects.map((project, index) => (
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
                  <div className="project-links">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-block"
        id="experience"
        aria-labelledby="experience-title"
      >
        <div className="section-label">
          <span>03</span>
          <p>Professional Experience</p>
        </div>
        <div className="section-content">
          <h2 id="experience-title">A compact record of engineering practice.</h2>
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
        <p className="section-kicker">04 / Contact</p>
        <h2 id="contact-title">Available for selected opportunities.</h2>
        <p className="contact-copy">
          Have an exciting project, collaboration, or portfolio idea that needs a
          clean frontend implementation?
        </p>
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
