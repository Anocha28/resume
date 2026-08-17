# Resume / Portfolio

Personal resume site for Anocha Sirijindachot — React 19 + Vite + TypeScript, deployed to GitHub Pages.

- **Live site:** https://anocha28.github.io/resume/
- **A4 print version:** https://anocha28.github.io/resume/print.html — open, hit `Cmd/Ctrl+P`, save as PDF. Turn off "Headers and footers" in the print dialog for a clean sheet.

## Editing content

All resume content lives in typed data files — no markup edits needed:

| File | Contents |
| --- | --- |
| `src/data/profile.ts` | Name, title, summary, contact, socials, languages |
| `src/data/projects.ts` | Projects (tiers: `featured` / `secondary` / `earlier`; `print.include` controls the A4 page) |
| `src/data/experience.ts` | Work history (`printInclude` controls the A4 page) |
| `src/data/skills.ts` | Skill groups |
| `src/data/education.ts` | Education + certifications |

Both the site and the A4 page render from the same data.

## Development

```bash
npm install
npm run dev      # http://localhost:5173/resume/  (+ /resume/print.html)
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
```

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds and deploys to GitHub Pages via the official `actions/deploy-pages` flow. Repo Settings → Pages must have Source set to **GitHub Actions**.
