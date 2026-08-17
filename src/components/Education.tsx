import { certifications, education } from '../data/education'
import { Icon } from './Icon'
import { Section } from './Section'

export function Education() {
  return (
    <Section id="education" title="Education & Certifications">
      <div className="education-grid">
        {education.map((item) => (
          <div className="education-card" key={item.title}>
            <h3>{item.title}</h3>
            <p className="org">{item.org}</p>
            <p className="period">{item.period}</p>
            {item.note && <p className="note">{item.note}</p>}
            {item.certUrl && (
              <a
                className="cert-link"
                href={import.meta.env.BASE_URL + item.certUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="file" />
                View certificate (PDF)
              </a>
            )}
          </div>
        ))}
        {certifications.map((cert) => (
          <div className="education-card" key={cert.title}>
            <h3>{cert.title}</h3>
            <p className="org">{cert.org}</p>
            <p className="period">{cert.year}</p>
            {cert.certUrl && (
              <a
                className="cert-link"
                href={import.meta.env.BASE_URL + cert.certUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="file" />
                View certificate (PDF)
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
