import { profile } from '../data/profile'
import { printExperience } from '../data/experience'
import { printProjects } from '../data/projects'
import { skillGroups } from '../data/skills'
import { certifications, education } from '../data/education'
import { PrintToolbar } from './PrintToolbar'

export function PrintResume() {
  return (
    <>
      <PrintToolbar />
      <div className="sheet">
        <header className="p-header">
          <div>
            <h1>{profile.name}</h1>
            <p className="p-title">{profile.title}</p>
          </div>
          <div className="p-contact">
            <span>{profile.email}</span>
            <span>{profile.phone}</span>
            <span>{profile.location}</span>
            <span>github.com/Anocha28</span>
          </div>
        </header>

        <p className="p-summary">{profile.printSummary}</p>

        <section className="p-section">
          <h2>Skills</h2>
          <div className="p-skills">
            {skillGroups.map((g) => (
              <p key={g.label} className="entry">
                <strong>{g.label}:</strong> {g.skills.join(' · ')}
              </p>
            ))}
            <p className="entry">
              <strong>Languages:</strong>{' '}
              {profile.languages.map((l) => `${l.name} (${l.level.toLowerCase()})`).join(' · ')}
            </p>
          </div>
        </section>

        <section className="p-section">
          <h2>Experience</h2>
          {printExperience.map((e) => (
            <div className="entry p-job" key={`${e.company}-${e.start}`}>
              <div className="p-job-line">
                <span className="p-role">{e.role}</span>
                <span className="p-org">
                  {e.company} · {e.location}
                </span>
                <span className="p-dates">
                  {e.start} – {e.end}
                </span>
              </div>
              <p className="p-job-summary">{e.printSummary ?? e.summary}</p>
            </div>
          ))}
        </section>

        <section className="p-section">
          <h2>Selected Projects</h2>
          {printProjects.map((p) => (
            <div className="entry p-project" key={p.id}>
              <p>
                <strong>{p.name}</strong>
                {p.url && <span className="p-url"> — {p.url.replace('https://', '')}</span>}
                {!p.url && p.repo && <span className="p-url"> — {p.repo.replace('https://', '')}</span>}
              </p>
              <p className="p-project-summary">{p.print!.summary}</p>
              <p className="p-tech">{p.tech.join(' · ')}</p>
            </div>
          ))}
        </section>

        <section className="p-section">
          <h2>Education & Certifications</h2>
          {education.map((item) => (
            <p className="entry p-edu" key={item.title}>
              <strong>{item.title}</strong> — {item.org}, {item.period}
              {item.note ? `. ${item.note}` : ''}
            </p>
          ))}
          {certifications.map((c) => (
            <p className="entry p-edu" key={c.title}>
              <strong>{c.title}</strong> — {c.org}, {c.year}
            </p>
          ))}
        </section>
      </div>
    </>
  )
}
