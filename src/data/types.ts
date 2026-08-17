export type ProjectTier = 'featured' | 'secondary' | 'earlier'

export type ProjectStatus = 'production' | 'development' | 'legacy'

export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  tech: string[]
  url?: string
  repo?: string
  tier: ProjectTier
  status?: ProjectStatus
  highlights?: string[]
  /** Whether and how this project appears on the A4 print resume. */
  print?: { include: boolean; summary: string }
}

export interface Experience {
  role: string
  company: string
  location: string
  start: string
  end: string
  summary: string
  printInclude: boolean
  /** Shorter variant used on the A4 page; falls back to `summary`. */
  printSummary?: string
}

export interface SkillGroup {
  label: string
  skills: string[]
  /** Visually emphasized on the site (e.g. AI Engineering). */
  highlight?: boolean
}

export interface EducationItem {
  title: string
  org: string
  period: string
  note?: string
  /** Path under the site base, e.g. 'certificates/diploma.pdf'. */
  certUrl?: string
}

export interface Certification {
  title: string
  org: string
  year: string
  certUrl?: string
}

export interface SpokenLanguage {
  name: string
  level: string
}

export interface Profile {
  name: string
  firstName: string
  lastName: string
  /** Alternate (Burmese) name shown under the main name in the hero. */
  altName?: string
  title: string
  tagline: string
  summary: string
  /** Shorter summary used on the A4 print resume. */
  printSummary: string
  location: string
  email: string
  phone: string
  phoneHref: string
  quote: string
  quoteAuthor: string
  socials: { github: string; x: string; facebook: string }
  languages: SpokenLanguage[]
}
