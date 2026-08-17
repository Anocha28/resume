import { Icon } from './Icon'
import { profile } from '../data/profile'
import portrait from '../assets/profile.png'

export function Hero() {
  return (
    <div className="hero" id="top">
      <div className="container inner">
        <div>
          <p className="eyebrow">Hi, I&apos;m</p>
          <h1>
            {profile.firstName} <span>{profile.lastName}</span>
          </h1>
          {profile.altName && (
            <p className="alt-name">
              <span>a.k.a.</span> {profile.altName}
            </p>
          )}
          <p className="tagline">{profile.tagline}</p>
          <div className="meta">
            <span className="item">
              <Icon name="mapPin" />
              {profile.location}
            </span>
            <a className="item" href={`mailto:${profile.email}`}>
              <Icon name="mail" />
              {profile.email}
            </a>
            <a className="item" href={profile.phoneHref}>
              <Icon name="phone" />
              {profile.phone}
            </a>
          </div>
          <div className="cta-row">
            <a className="btn btn-primary" href="#projects">
              View projects
              <Icon name="arrowRight" />
            </a>
            <a className="btn btn-ghost" href={`${import.meta.env.BASE_URL}print.html`}>
              <Icon name="printer" />
              A4 resume
            </a>
            <div className="socials">
              <a className="icon-btn" href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Icon name="github" />
              </a>
              <a className="icon-btn" href={profile.socials.x} target="_blank" rel="noreferrer" aria-label="X (Twitter)">
                <Icon name="x" />
              </a>
              <a className="icon-btn" href={profile.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <Icon name="facebook" />
              </a>
            </div>
          </div>
        </div>
        {/* Square/circle version — switch back by restoring this block (and a square image import):
        <div className="portrait-wrap">
          <img className="portrait" src={portrait} alt={`Portrait of ${profile.name}`} width="240" height="240" />
        </div> */}
        <div className="portrait-wrap">
          <img className="portrait-tall" src={portrait} alt={`Portrait of ${profile.name}`} width="427" height="640" />
        </div>
      </div>
    </div>
  )
}
