import type { Experience } from './types'

export const experience: Experience[] = [
  {
    role: 'Full-Stack Developer',
    company: 'Siam Max Co., Ltd.',
    location: 'Chiang Mai, Thailand',
    start: 'Dec 2021',
    end: 'Present',
    summary:
      "Sole developer for the company's shipping operations. Built SMV3 (Express + React), which ran daily cross-border logistics for years, then designed and built SMV4 — a NestJS + Tauri + mobile replatform with full accounting, payroll, and dual-country ledgers. Full-time on site through mid-2023, part-time and remote since.",
    printInclude: true,
    printSummary:
      'Sole developer for cross-border shipping operations: built SMV3 (Express + React), then replatformed to SMV4 — NestJS API, Tauri desktop, web portals, and mobile apps with full accounting and payroll. Part-time/remote since mid-2023.',
  },
  {
    role: 'Independent Full-Stack Developer',
    company: 'Self-employed',
    location: 'Remote',
    start: '2023',
    end: 'Present',
    summary:
      'Design, build, and operate business systems for SME clients alongside the Siam Max role: the Way2Myanmar logistics platform and its W2M ERP successor, the W2M AI staff assistant, and ADCOM SHOP retail management — all self-hosted and maintained end to end.',
    printInclude: true,
    printSummary:
      'Built and operate the Way2Myanmar logistics platform, W2M ERP (NestJS + PostgreSQL), the Claude-powered W2M AI assistant, and ADCOM SHOP retail management — self-hosted, maintained end to end.',
  },
  {
    role: 'Corporate Customer Services',
    company: 'Pure & Co. Ltd.',
    location: 'Canada, US & Thailand',
    start: 'Apr 2018',
    end: 'Jun 2021',
    summary:
      'Clothing wholesale and retail company — EDI and online catalogue operations, UPC/barcode creation, and ERP-based order workflows.',
    printInclude: true,
    printSummary: 'Clothing wholesale/retail — EDI, online catalogues, ERP-based order workflows.',
  },
  {
    role: 'Material & Process Flow Coordinator · IT Support',
    company: 'Sanuk Garment Co., Ltd.',
    location: 'Tak, Thailand',
    start: 'Mar 2016',
    end: 'Apr 2018',
    summary:
      'Garment manufacturer — ERP planning and procurement, plus server maintenance, backups, and hardware/software support across the factory.',
    printInclude: true,
    printSummary: 'Garment manufacturer — ERP planning/procurement plus server maintenance and IT support.',
  },
  {
    role: 'Material & Process Flow Coordinator',
    company: 'Georgie & Lou Co., Ltd.',
    location: 'Chiang Mai, Thailand',
    start: 'Dec 2014',
    end: 'Mar 2016',
    summary: 'Textiles and garment manufacturer — production material planning and process flow.',
    printInclude: false,
  },
  {
    role: 'Freelance Software Developer',
    company: 'Freelance',
    location: 'Myanmar',
    start: 'Oct 2010',
    end: 'Nov 2011',
    summary: 'Early freelance software work.',
    printInclude: false,
  },
]

export const printExperience = experience.filter((e) => e.printInclude)
