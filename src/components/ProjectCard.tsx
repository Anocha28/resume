import type { Project, ProjectStatus } from '../data/types'
import { Icon } from './Icon'

const statusLabels: Record<ProjectStatus, string> = {
  production: 'In production',
  development: 'In development',
  legacy: 'Legacy',
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="card-top">
        <h3>{project.name}</h3>
        {project.status && <span className={`status status-${project.status}`}>{statusLabels[project.status]}</span>}
      </div>
      <p className="tagline">{project.tagline}</p>
      <p className="description">{project.description}</p>
      {project.highlights && (
        <ul className="highlights">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
      <div className="tech-tags">
        {project.tech.map((t) => (
          <span className="tech-tag" key={t}>
            {t}
          </span>
        ))}
      </div>
      {(project.url || project.repo) && (
        <div className="card-links">
          {project.url && (
            <a href={project.url} target="_blank" rel="noreferrer">
              Visit site
              <Icon name="external" />
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer">
              GitHub
              <Icon name="github" />
            </a>
          )}
        </div>
      )}
    </article>
  )
}
