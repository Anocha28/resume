import type { Certification, EducationItem } from './types'

export const education: EducationItem[] = [
  {
    title: 'Diploma in Software Engineering',
    org: '',
    period: 'Jul 2013 – Mar 2014',
    note: 'Final project: HR management system for Technology Leaf Co., Ltd.',
    certUrl: 'certificates/diploma.pdf',
  },
  // {
  //   title: 'Diploma in Software Engineering',
  //   org: 'University of Yangon',
  //   period: 'Jul 2013 – Mar 2014',
  //   note: 'Final project: HR management system for Technology Leaf Co., Ltd.',
  //   certUrl: 'certificates/diploma.pdf',
  // },
  // {
  //   title: 'English (major)',
  //   org: 'Dagon University',
  //   period: 'Jul 2008 – Feb 2009',
  // },
]

export const certifications: Certification[] = [
  {
    title: 'The Web Developer Bootcamp',
    org: 'Udemy — Colt Steele',
    year: '2018',
    certUrl: 'certificates/2018.pdf',
  },
  {
    title: 'The Complete 2020 Web Developer Bootcamp',
    org: 'Udemy — Dr. Angela Yu',
    year: '2020',
    certUrl: 'certificates/2020.pdf',
  },
]
