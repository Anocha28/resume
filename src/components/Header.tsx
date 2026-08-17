import { Icon } from './Icon'
import { useTheme } from '../hooks/useTheme'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const { theme, toggle } = useTheme()

  return (
    <header className="site-header">
      <div className="container inner">
        <a href="#top" className="brand">
          Anocha <span>S.</span>
        </a>
        <nav className="site-nav" aria-label="Sections">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <a className="btn btn-primary" href={`${import.meta.env.BASE_URL}print.html`}>
            <Icon name="printer" />
            <span className="btn-label-optional">Print / Save PDF</span>
          </a>
        </div>
      </div>
    </header>
  )
}
