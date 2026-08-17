import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 'smv4',
    name: 'SMV4',
    tagline: 'Logistics ERP platform — one API, desktop, web & mobile clients',
    description:
      'Second-generation ERP for Siam Max, a cross-border (Thailand–Myanmar) freight forwarder: a single NestJS API serving a Tauri desktop app for staff, admin and agent web portals, and two mobile apps.',
    tech: ['TypeScript', 'NestJS', 'MongoDB', 'React 19', 'Tauri 2', 'Rust', 'Expo / React Native', 'Cloudflare R2', 'nginx'],
    url: 'https://siammaxlogistics.com',
    tier: 'featured',
    status: 'production',
    highlights: [
      'NestJS 11 + TypeScript API with ~35 domain modules; JWT with rotating refresh tokens and TOTP 2FA',
      'Tauri 2 desktop app (React 19 + Rust) with biometric fingerprint attendance and signed auto-updates',
      'Full accounting engine: GL auto-posting, bank reconciliation, FX revaluation, Thai CIT/VAT/WHT tax reports',
      'Dual-country (TH/MM) ledger dimension, HR & payroll suite, carrier abstraction over DHL / Thailand Post / DMS',
      'Self-hosted operations: nginx edge, systemd services, Cloudflare R2 storage, versioned deploy configs',
    ],
    print: {
      include: true,
      summary:
        'Logistics ERP platform — NestJS API, Tauri (Rust) desktop app, two web portals, two mobile apps; full accounting, payroll, dual-country ledger, carrier integrations.',
    },
  },
  {
    id: 'w2merp',
    name: 'W2M ERP',
    tagline: 'Multi-company ERP with real double-entry accounting',
    description:
      "Greenfield ERP for Way2Myanmar's logistics and trading business — freight, buy-on-behalf sourcing, warehouse trading, customs duty, and inter-company settlement, multi-currency from day one.",
    tech: ['TypeScript', 'NestJS', 'Prisma', 'PostgreSQL', 'React 19', 'Mantine', 'pnpm monorepo', 'Docker', 'GitHub Actions'],
    tier: 'featured',
    status: 'development',
    highlights: [
      'Double-entry posting engine as the only writer of journal entries — balanced-entry and period-lock enforcement, spec-driven and test-first (Jest + Supertest)',
      'FIFO cost-layer inventory ledger with immutable stock moves; PO → receipt → GRNI → auto-bill purchasing',
      'Multi-currency AR/AP with automatic FX gain/loss on settlement; bank statement reconciliation; P&L, balance sheet, trial balance',
      '93-model Prisma schema on PostgreSQL 16; legacy MongoDB → Postgres migration CLI with per-domain importers and verification',
      'Customer self-service portal; CI pipeline running migrations, lint, and tests on every push',
    ],
    print: {
      include: true,
      summary:
        'Greenfield multi-company ERP — NestJS + Prisma/PostgreSQL, double-entry posting engine, FIFO inventory ledger, multi-currency AR/AP, legacy-data migration tooling.',
    },
  },
  {
    id: 'way2myanmar',
    name: 'Way2Myanmar',
    tagline: 'Multi-tenant franchise logistics platform',
    description:
      "Production platform for cross-border cargo between Thailand and Myanmar — orders, cutoffs, customs clearance, invoicing, warehouse trading, and a buy-on-behalf shopper service, plus the public site and customer dashboard.",
    tech: ['Node.js', 'Express', 'MongoDB', 'React 18', 'Chakra UI', 'Redux Toolkit', 'Socket.IO', 'i18next', 'PWA'],
    url: 'https://waytomyanmar.com',
    tier: 'featured',
    status: 'production',
    highlights: [
      'Multi-tenant franchise architecture: tenant-scoped data layer, per-tenant module entitlements, franchise settlement ledger with atomic running balances',
      'Realtime presence and notifications over tenant-isolated Socket.IO rooms',
      'Granular role/permission system; customer deposits, outstanding balances, daily/monthly financial reports',
      'Trilingual (English / Burmese / Thai) PWA with push notifications to a companion mobile app',
    ],
    print: {
      include: true,
      summary:
        'Multi-tenant franchise logistics platform in production — tenant-scoped modules, settlement ledger, realtime Socket.IO, trilingual PWA.',
    },
  },
  {
    id: 'w2m-ai',
    name: 'W2M AI',
    tagline: 'Claude-powered assistant for operations staff',
    description:
      'An internal AI assistant that answers staff questions from the live production database — "how many orders shipped last week?" — through an agentic tool-use loop, delivered as a Tauri desktop app.',
    tech: ['Anthropic Claude SDK', 'Node.js', 'Express', 'MongoDB', 'SSE streaming', 'Tauri 2', 'React', 'Zustand'],
    tier: 'featured',
    status: 'production',
    highlights: [
      'Anthropic Claude (Sonnet 4.5 + Haiku 4.5) agentic loop with query, aggregation, and schema tools, plus an ask-user clarification tool',
      'Role-scoped collection allowlists, sensitive-field stripping, hard caps on documents, pipeline stages, timeouts, and iterations',
      'Per-user daily token budgets, rate limiting, and a full AI audit log; SSE streaming UI with table rendering',
      'Answers in the language you ask in — English, Burmese, or Thai',
    ],
    print: {
      include: true,
      summary:
        'Claude-powered staff assistant querying the live production database through guarded agentic tools — role allowlists, token budgets, audit logging, SSE streaming.',
    },
  },
  {
    id: 'adcomshop',
    name: 'ADCOM SHOP',
    tagline: 'Retail management + e-commerce for an IT shop',
    description:
      'Point-of-sale, inventory, and repair-job management for a computer shop, plus the public storefront at adcomshop.com — one Express app serving both.',
    tech: ['Node.js', 'Express', 'MongoDB', 'React 18', 'Chakra UI', 'Redux Toolkit', 'Zod', 'Puppeteer', 'Vitest'],
    url: 'https://adcomshop.com',
    tier: 'featured',
    status: 'production',
    highlights: [
      'POS sale orders, inventory with stock movements, service & repair job tracking, customer management',
      'Reporting suite (daily / monthly / yearly / inventory / service) with Puppeteer-rendered PDF reports',
      'Barcode generation and scanning, receipt and label printing, in-store price-check screen',
      'Public storefront with cart and checkout; Vitest + Supertest suite running against in-memory MongoDB',
    ],
    print: {
      include: true,
      summary:
        'Retail management + e-commerce for an IT shop — POS, inventory, repairs, PDF reporting, barcode printing, public storefront.',
    },
  },
  {
    id: 'maesot-market',
    name: 'Maesot Market',
    tagline: 'Cross-border e-commerce, Thailand → USA',
    description:
      'E-commerce platform selling Thai and Burmese goods to US customers — public storefront with live shipping quotes and Stripe checkout, and a role-permissioned staff back office for sourcing, inventory, shipping batches, and finance.',
    tech: ['Next.js 15', 'TypeScript', 'MongoDB', 'Stripe', 'NextAuth', 'Tailwind', 'Cloudinary', 'Vercel'],
    repo: 'https://github.com/Anocha28/maesotmarket',
    tier: 'featured',
    status: 'development',
    highlights: [
      'Next.js 15 App Router + TypeScript with 31 data models, deployed on Vercel',
      'Stripe Checkout with webhooks, NextAuth, transactional email via Resend, Cloudinary media',
      'Staff back office: orders, purchases, suppliers, sourcing, shipping batches, rate cards, expenses, payments, refunds, reports',
    ],
    print: {
      include: true,
      summary:
        'Cross-border e-commerce (Next.js 15 + Stripe + MongoDB) — storefront with live shipping quotes plus a full staff back office.',
    },
  },
  {
    id: 'ai-orchestrator',
    name: 'AI Orchestrator',
    tagline: 'Multi-agent research system with cross-vendor review',
    description:
      'A Python multi-agent system built on the Claude Agent SDK: a lead agent delegates research and analysis to cheaper sub-agents, and every draft answer — with the evidence it read — is checked by an independent GPT reviewer that can force revisions.',
    tech: ['Python', 'Claude Agent SDK', 'OpenAI SDK', 'Evals'],
    tier: 'featured',
    highlights: [
      'Lead Claude Sonnet agent with Haiku research and Sonnet analysis sub-agents using custom document-search tools',
      'Independent OpenAI GPT reviewer gate before anything reaches the user; ask-human tool for human-in-the-loop decisions',
      'Audit-logging hooks (blocks secret-file reads), per-run cross-vendor cost accounting, eval harness with unit tests',
    ],
    print: {
      include: true,
      summary:
        'Multi-agent system on the Claude Agent SDK — delegating sub-agents, independent GPT reviewer gate, cost accounting, eval harness.',
    },
  },
  {
    id: 'smv3',
    name: 'Siam Max Logistics (SMV3)',
    tagline: 'First-generation shipping system — now replaced by SMV4',
    description:
      "The system that ran Siam Max's cross-border shipping for years: shipment entry, rating, waybills, agent and sales billing, invoicing, payments, and double-entry accounting.",
    tech: ['Node.js', 'Express', 'MongoDB', 'React 18', 'Vite', 'Chakra UI', 'Redux Toolkit', 'Socket.IO', 'Puppeteer'],
    url: 'https://summitasiacargo.com',
    tier: 'featured',
    status: 'legacy',
    highlights: [
      'DHL Express API integration for shipment creation and tracking; multi-carrier rate engine (DHL, Thailand Post, DMS, ESS) with per-agent rate cards',
      'Double-entry accounting, PromptPay QR payments, payment-approval workflow',
      'Realtime edit-locking over Socket.IO; nightly cron reconciliation and DHL invoice sync',
      'Trilingual (EN/TH/MM) PWA used daily by admin, accounting, agent, and sales roles',
    ],
    print: { include: false, summary: '' },
  },

  // ——— Secondary tier ———
  {
    id: 'ano-listen',
    name: 'Ano Listen',
    tagline: 'Self-hosted music streaming app',
    description:
      'Spotify-style streaming with FFmpeg transcoding, JWT access + refresh-cookie auth, Google sign-in, drag-and-drop playlists, and a PWA client.',
    tech: ['React', 'Express', 'MongoDB', 'FFmpeg', 'Tailwind 4', 'PWA'],
    tier: 'secondary',
  },
  {
    id: 'mongodb-backup',
    name: 'MongoDB Backup Server',
    tagline: 'Scheduled backups for a fleet of apps',
    description:
      'Runs scheduled mongodump jobs across multiple databases to local disk or Cloudflare R2 — connection strings encrypted at rest, retention policies, restore tooling.',
    tech: ['Node.js', 'Express', 'node-cron', 'Cloudflare R2'],
    tier: 'secondary',
  },
  {
    id: 'kokoro-tts',
    name: 'Kokoro TTS',
    tagline: 'Local neural text-to-speech',
    description:
      'A self-contained TTS server wrapping the Kokoro ONNX model — 16 US/UK voices, fully offline local inference, one-shot installer.',
    tech: ['Python', 'Flask', 'ONNX'],
    tier: 'secondary',
  },
  {
    id: 'issueflow',
    name: 'IssueFlow',
    tagline: 'Multi-tenant issue-tracking SaaS',
    description:
      'Issue tracking with projects, invitations, and billing — Turborepo monorepo, OAuth sign-in (Google / GitHub / Facebook), Stripe subscriptions.',
    tech: ['TypeScript', 'Express', 'React 19', 'Stripe', 'Turborepo'],
    tier: 'secondary',
  },
  {
    id: 'you-are-like-me',
    name: 'You Are Like Me',
    tagline: 'Find strangers who think like you',
    description:
      'A quiz PWA: answer 100 questions, then discover the rare people who answered exactly the same — privacy-first with Supabase RLS and consent-gated reveals.',
    tech: ['Next.js 15', 'Supabase', 'Tailwind', 'Framer Motion'],
    tier: 'secondary',
  },

  // ——— Earlier projects ———
  {
    id: 'nyss',
    name: 'NYSS Express US',
    tagline: 'Receiving and shipping online-shop items from New York to Thailand and Myanmar — labels, pickups, tracking, rates, payments.',
    description: '',
    tech: ['Node.js', 'React', 'MongoDB'],
    url: 'https://nyssexpressusinc.com',
    tier: 'earlier',
  },
  {
    id: 'money-transfer',
    name: 'Money Transfer App',
    tagline: 'Multi-currency (THB / MMK / MYR / AUD / USD) transfer ledger for a local Myawaddy business — exchange rates, approvals, bank slips.',
    description: '',
    tech: ['Node.js', 'React', 'MongoDB'],
    tier: 'earlier',
  },
]

export const featuredProjects = projects.filter((p) => p.tier === 'featured')
export const secondaryProjects = projects.filter((p) => p.tier === 'secondary')
export const earlierProjects = projects.filter((p) => p.tier === 'earlier')
export const printProjects = projects.filter((p) => p.print?.include)
