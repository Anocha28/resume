import { earlierProjects, featuredProjects, secondaryProjects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { Section } from './Section'

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="project-grid">
        {featuredProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      <h3 className="subheading">Side projects</h3>
      <div className="secondary-grid">
        {secondaryProjects.map((p) => (
          <article className="secondary-card" key={p.id}>
            <h4>{p.name}</h4>
            <p className="tagline">{p.tagline}</p>
            <p className="description">{p.description}</p>
            <div className="tech-tags">
              {p.tech.map((t) => (
                <span className="tech-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <h3 className="subheading">Earlier work</h3>
      <div className="earlier-list">
        {earlierProjects.map((p) => (
          <p key={p.id}>
            <strong>{p.name}</strong>
            {p.url && (
              <>
                {' '}
                (
                <a href={p.url} target="_blank" rel="noreferrer">
                  {p.url.replace('https://', '')}
                </a>
                )
              </>
            )}{' '}
            — {p.tagline}
          </p>
        ))}
      </div>
    </Section>
  )
}
