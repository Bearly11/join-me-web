# Join Me — Web Frontend

Join Me is a communication application designed to connect people in one place through direct messaging, rooms, profile management, and future voice/video calling.

**Tagline:** *One place. Everyone connected.*

---

## Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **shadcn/ui** (customized with Radix UI primitives & Class Variance Authority)
- **React Router v7**
- **Lucide React** (icons)
- **React Hook Form & Zod** (client-side form validation)

---

## Design System & Brand Palette

The application uses a strict, uniform color and component system defined in `src/index.css`:

- **Brand Navy:** `#243B80` (`text-navy`, `bg-navy`)
- **Brand Blue (Primary):** `#4776E6` (`bg-primary`, `text-primary`, `focus:ring-primary`)
- **Primary Hover:** `#3B66CF` (`hover:bg-primary-hover`)
- **Brand Purple (Accent):** `#8056D9` (`text-purple`, `bg-purple`)
- **Background:** `#F7F8FC` (`bg-background`)
- **Surface / Cards:** `#FFFFFF` (`bg-surface`, `bg-card`)
- **Borders & Dividers:** `#E2E8F0` (`border-border`)
- **Subtle Surface:** `#EEF2FF` (`bg-subtle`, `bg-secondary`)

All pages use **shadcn/ui** components located in `src/components/ui/` (`Card`, `Button`, `Input`, `Label`, `Avatar`, `Separator`, `Textarea`) styled with uniform tokens. Arbitrary hex values are strictly prohibited.

---

## Project Documentation

Detailed guidelines are maintained in the [`docs/`](./docs) directory:

- [**PROJECT_BRIEF.md**](./docs/PROJECT_BRIEF.md) — Product overview, UI requirements, technology, and scope.
- [**FRONTEND_STRUCTURE.md**](./docs/FRONTEND_STRUCTURE.md) — Folder structure and component placement conventions.
- [**FRONTEND_ARCHITECTURE.md**](./docs/FRONTEND_ARCHITECTURE.md) — Routing plan, application flow, and backend boundaries.
- [**color_rule.md**](./docs/color_rule.md) — Official color palette, shadcn component mapping, and strict token rules.
- [**AGENT.md**](./AGENT.md) — Agent development instructions and safety constraints.

---

## Getting Started

### Development
```bash
npm run dev
```

### Type Check & Build
```bash
npm run build
```

### Lint
```bash
npm run lint
```
