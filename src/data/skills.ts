import type { SkillGroup } from './types'

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    skills: ['React 18/19', 'TypeScript', 'Next.js 15', 'Vite', 'Redux Toolkit', 'TanStack Query', 'Mantine', 'Chakra UI', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'Socket.IO', 'JWT / auth flows', 'Prisma', 'Mongoose', 'Zod'],
  },
  {
    label: 'Databases',
    skills: ['MongoDB (Atlas & self-hosted)', 'PostgreSQL', 'Supabase', 'Schema design & migrations', 'Backup & restore ops'],
  },
  {
    label: 'AI Engineering',
    highlight: true,
    skills: [
      'Anthropic Claude API & Agent SDK',
      'Agentic tool use',
      'Multi-agent orchestration',
      'Guardrails & token budgeting',
      'OpenAI SDK',
      'SSE streaming',
      'Local ONNX inference',
    ],
  },
  {
    label: 'Desktop & Mobile',
    skills: ['Tauri 2', 'Rust (Tauri backends)', 'Electron', 'React Native / Expo', 'PWA'],
  },
  {
    label: 'DevOps & Infra',
    skills: ['Linux / nginx / systemd', 'GitHub Actions', 'Docker', 'Cloudflare R2', 'Self-hosted VM ops (vSphere)', 'Veeam / Synology backups'],
  },
]
