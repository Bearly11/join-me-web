# Join Me Frontend — File Structure

## 1. Architecture Choice

Join Me uses a lightweight feature-based architecture with **shadcn/ui** providing the core design system primitives.

Each feature owns its own pages, components, types, and mock data. Shared layouts, brand elements, and reusable shadcn/ui components are located in `src/components/`.

```text
join-me-web/
├── AGENTS.md                          # AI agent behavior and development rules
├── README.md                          # Project overview, tech stack, and setup
├── components.json                    # shadcn/ui configuration
├── package.json                       # Dependencies & scripts
├── tsconfig.json                      # TypeScript root config
├── tsconfig.app.json                  # Application TypeScript config
├── tsconfig.node.json                 # Vite TypeScript config
├── vite.config.ts                     # Vite + Tailwind v4 config
├── index.html                         # Entry HTML
├── docs/
│   ├── PROJECT_BRIEF.md               # Product brief, features, and UI goals
│   ├── FRONTEND_STRUCTURE.md          # File & folder structure (this file)
│   ├── FRONTEND_ARCHITECTURE.md       # Routing, state flow, and boundary rules
│   └── color_rule.md                  # Strict color tokens and styling rules
├── public/
│   └── images/                        # Static assets
└── src/
    ├── app/                           # App initialization & routing
    │   ├── router.tsx                 # Route declarations
    │   └── providers.tsx              # Context providers
    ├── assets/                        # Bundled media & logos
    │   └── Join Me Community Logo.png
    ├── components/                    # Shared components
    │   ├── brand/                     # Logo & brand identity
    │   │   └── Logo.tsx
    │   ├── layout/                    # Layout shells
    │   │   ├── AppLayout.tsx          # Main application layout with sidebar
    │   │   └── AuthLayout.tsx         # Authentication split layout
    │   └── ui/                        # shadcn/ui primitives (Radix UI + CVA)
    │       ├── avatar.tsx             # <Avatar>, <AvatarImage>, <AvatarFallback>
    │       ├── button.tsx             # <Button> (default, secondary, outline, ghost)
    │       ├── card.tsx               # <Card>, <CardHeader>, <CardTitle>, <CardContent>, etc.
    │       ├── input.tsx              # <Input>
    │       ├── label.tsx              # <Label>
    │       ├── separator.tsx          # <Separator>
    │       └── textarea.tsx           # <Textarea>
    ├── features/                      # Feature modules
    │   ├── auth/                      # Authentication feature
    │   │   ├── components/            # Auth-specific components
    │   │   └── pages/                 # Auth pages
    │   │       ├── ForgotPasswordPage.tsx
    │   │       ├── LoginPage.tsx
    │   │       ├── RegisterPage.tsx
    │   │       └── ResetPasswordPage.tsx
    │   ├── chat/                      # Direct messaging feature
    │   │   ├── components/            # Chat bubbles, conversation list, message composer
    │   │   └── pages/
    │   │       └── ChatPage.tsx
    │   ├── profile/                   # User profile feature
    │   │   ├── components/            # Profile-specific components
    │   │   └── pages/
    │   │       └── ProfilePage.tsx    # Profile view & edit with shadcn Card/Input/Button
    │   ├── rooms/                     # Group rooms feature
    │   │   ├── components/            # Room cards, member lists
    │   │   └── pages/
    │   │       └── RoomsPage.tsx
    │   └── settings/                  # App settings feature
    │       ├── components/            # Setting rows, toggles
    │       └── pages/
    │           └── SettingsPage.tsx
    ├── lib/                           # Shared utility libraries
    │   ├── utils.ts                   # cn() helper (clsx + tailwind-merge)
    │   └── mock-data.ts               # Sample mock conversations, rooms, users
    ├── types/                         # Shared cross-feature TypeScript types
    ├── App.tsx                        # Root application component
    ├── main.tsx                       # React DOM entry point
    └── index.css                      # Tailwind v4 theme, brand colors, and semantic tokens
```

## 2. Folder Responsibilities

### `src/components/ui/` (shadcn/ui)
Houses customized, accessible UI primitives built with Radix UI and Class Variance Authority. All components are styled using Join Me's uniform design tokens (`bg-primary`, `text-navy`, `border-border`, `rounded-xl`, `rounded-2xl`).

**Every feature page MUST use these components instead of unstyled HTML elements.**

### `src/components/brand/`
Contains the standard `<Logo />` component. All authentication and application headers consume this component to guarantee uniform brand representation.

### `src/components/layout/`
- `AppLayout.tsx`: The primary authenticated/main application frame featuring the persistent navigation sidebar, user badge, and content viewport.
- `AuthLayout.tsx`: The authentication layout providing a balanced visual split with the Join Me brand artwork and centered card forms.

### `src/features/<feature>/`
Encapsulates each domain (`auth`, `chat`, `rooms`, `profile`, `settings`):
- `pages/`: Page-level components bound to routes in `router.tsx`.
- `components/`: Sub-components specific to that feature (e.g. `MessageComposer`, `ConversationItem`).

### `src/lib/`
- `utils.ts`: Contains `cn()` utility function combining `clsx` and `tailwind-merge`.
- `mock-data.ts`: Centralizes mock conversations, messages, channels, and profile data so mock updates remain consistent across screens.

## 3. Styling & Uniform Color Enforcement

1. **Tokens Defined Centrally:** All color tokens are declared in `@theme` inside `src/index.css`.
2. **Strict Class Usage:**
   - Primary buttons & links: `bg-primary`, `text-primary`, `hover:bg-primary-hover`
   - Brand headings & accents: `text-navy`, `bg-navy`, `text-purple`
   - Surfaces & Cards: `bg-surface`, `bg-card`, `border-border`
   - Inputs: `bg-surface`, `border-border`, `focus-visible:ring-ring`
3. **No Arbitrary Hex:** Never write `bg-[#4776E6]` or `text-[#243B80]` in any file.
4. **Radii Standard:** `rounded-2xl` for cards and major containers; `rounded-xl` for buttons, inputs, and badges.

## 4. File Organization Rules

- Use PascalCase filenames for React components: `ProfilePage.tsx`, `ChatPage.tsx`, `Button.tsx`.
- Keep pages focused on layout and composing shared shadcn/ui and feature components.
- Keep state local to features or lifted to providers when cross-cutting.
- Do not introduce arbitrary external styling libraries or backend API wrappers during this UI phase.
