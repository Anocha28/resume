import { profile } from '../data/profile'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" title="About">
      <p className="about-text">{profile.summary}</p>
      <blockquote className="about-quote">
        “{profile.quote}”
        <p className="author">— {profile.quoteAuthor}</p>
      </blockquote>
    </Section>
  )
}
