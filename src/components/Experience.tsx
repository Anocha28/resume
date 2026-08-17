import { experience } from '../data/experience'
import { Section } from './Section'

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="timeline">
        {experience.map((e) => (
          <div className="timeline-entry" key={`${e.company}-${e.start}`}>
            <div className="role">{e.role}</div>
            <div className="org-line">
              <span className="company">{e.company}</span>
              <span>{e.location}</span>
              <span className="dates">
                {e.start} – {e.end}
              </span>
            </div>
            <p className="summary">{e.summary}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
