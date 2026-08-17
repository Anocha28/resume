import { profile } from '../data/profile'
import { skillGroups } from '../data/skills'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className={`skill-group${group.highlight ? ' highlight' : ''}`} key={group.label}>
            <h3>{group.label}</h3>
            <div className="chips">
              {group.skills.map((s) => (
                <span className="tech-tag" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="languages-row">
        {profile.languages.map((l) => (
          <span key={l.name}>
            <strong>{l.name}</strong> — {l.level}
          </span>
        ))}
      </div>
    </Section>
  )
}
