# Join Me Frontend — File Structure

## 1. Architecture Choice

Use lightweight feature-based architecture.

Each feature owns its own pages, components, types, and related UI logic. Shared components are placed in a common location.

The following is the target structure. Inspect the actual repository and create files gradually rather than creating every file immediately.

```text
join-me-web/
├── AGENTS.md
├── docs/
│   ├── PROJECT_BRIEF.md
│   ├── FRONTEND_STRUCTURE.md
│   └── FRONTEND_ARCHITECTURE.md
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   ├── router.tsx
│   │   └── providers.tsx
│   ├── components/
│   │   ├── brand/
│   │   ├── layout/
│   │   └── ui/
│   ├── features/
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── schemas/
│   │   │   └── types.ts
│   │   ├── chat/
│   │   │   ├── components/
│   │   │   ├── data/
│   │   │   ├── pages/
│   │   │   └── types.ts
│   │   ├── rooms/
│   │   │   ├── components/
│   │   │   ├── data/
│   │   │   ├── pages/
│   │   │   └── types.ts
│   │   ├── profile/
│   │   │   ├── components/
│   │   │   └── pages/
│   │   └── settings/
│   │       ├── components/
│   │       └── pages/
│   ├── lib/
│   │   ├── utils.ts
│   │   └── mock-data.ts
│   ├── types/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── index.html
├── vite.config.ts
├── tsconfig.json
└── components.json
```

Some files may differ depending on the installed Vite and TypeScript versions.

## 2. Folder Responsibilities

### `src/app/`

Application setup, route definitions, and shared providers.

### `src/components/`

Reusable components shared across features.

- `brand/`: Join Me logo and wordmark.
- `layout/`: shared layouts and navigation.
- `ui/`: shadcn/ui components.

### `src/features/auth/`

Registration, login, forgot-password, and reset-password screens.

### `src/features/chat/`

Conversation list, message panel, message composer, and direct-message UI.

### `src/features/rooms/`

Room list, room conversation, and room-related UI.

### `src/features/profile/`

Profile display and profile editing UI.

### `src/features/settings/`

Settings pages and preference controls.

### `src/lib/`

Small shared utilities and mock-data helpers.

### `src/types/`

Types shared by multiple features. Keep feature-specific types inside their feature folders.

## 3. Vite Starter Cleanup

Inspect the repository for default starter code such as:

- `src/App.tsx`
- `src/App.css`
- `src/assets/react.svg`
- `public/vite.svg`

These are examples; not every project will contain all of them.

After approval:

1. Replace the default counter and logo demo in `App.tsx`.
2. Remove unused starter CSS and image assets.
3. Replace starter global styling with Join Me styles.
4. Add the agreed routing structure.
5. Fix imports and references after removals.
6. Confirm the application still builds.

Preserve necessary configuration and entry points, including `package.json`, lockfiles, `index.html`, `vite.config.ts`, TypeScript configuration, and `src/main.tsx`.

Do not delete configuration files just to make the project look clean.

## 4. File Organization Rules

- Use clear filenames such as `LoginPage.tsx`, `RegisterPage.tsx`, and `ChatPage.tsx`.
- Keep pages focused on composing components.
- Keep feature-specific components inside their feature folder.
- Share components only when they genuinely have a shared responsibility.
- Do not create empty folders or files without a current purpose.
- Do not create backend service layers or API clients in the UI-only phase.

This structure is a guide, not a requirement to create every listed file at once.