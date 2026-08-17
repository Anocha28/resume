import { profile } from '../data/profile'
import { Icon } from './Icon'

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container inner">
        <div className="contact-row">
          <a href={`mailto:${profile.email}`}>
            <Icon name="mail" />
            {profile.email}
          </a>
          <a href={profile.phoneHref}>
            <Icon name="phone" />
            {profile.phone}
          </a>
          <a href={profile.socials.github} target="_blank" rel="noreferrer">
            <Icon name="github" />
            GitHub
          </a>
          <a href={profile.socials.x} target="_blank" rel="noreferrer">
            <Icon name="x" />X
          </a>
          <a href={profile.socials.facebook} target="_blank" rel="noreferrer">
            <Icon name="facebook" />
            Facebook
          </a>
        </div>
        <p>
          © {new Date().getFullYear()} {profile.name} · Built with React + Vite
        </p>
      </div>
    </footer>
  )
}
