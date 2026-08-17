import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  children: ReactNode
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="section-heading">
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}
