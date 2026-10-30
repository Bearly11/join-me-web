# Join Me Frontend — Agent Rules

## 1. Project Boundary

Join Me is a new, independent project.

- Work only within the Join Me repository.
- Do not assume existing code, configuration, architecture, or requirements from another project.
- Do not search for or copy code from other projects.
- The current scope is frontend UI only.
- Backend implementation will be planned separately later.

## 2. Technology Stack

Use the following technologies:

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- shadcn/ui (powered by Radix UI primitives & Class Variance Authority)
- React Router
- React Hook Form and Zod for form validation when useful
- Lucide React for iconography

Inspect the installed versions and existing configuration before changing dependencies.

Do not introduce additional libraries without explaining why they are needed.

## 3. Initial Project Inspection

Before changing files:

1. Inspect the repository and its current file structure.
2. Identify the default React + Vite demo code and unused starter assets.
3. Read the project documentation in `docs/`.
4. Compare the current project with `docs/FRONTEND_STRUCTURE.md`.
5. Explain the proposed cleanup and setup plan.
6. Wait for user approval before modifying or deleting files.

## 4. React + Vite Starter Cleanup

After approval, replace the default starter interface with the Join Me application.

Typical starter files may include:

- `src/App.tsx`
- `src/App.css`
- `src/assets/react.svg`
- `public/vite.svg`

Inspect the actual files before deciding what to remove.

Rules:

- Remove the default Vite counter and demonstration UI.
- Remove unused starter logos, CSS, and imports.
- Replace starter styling with Join Me design tokens and global styles.
- Establish the agreed React Router structure.
- Preserve essential configuration files, including `package.json`, lockfiles, `index.html`, `vite.config.ts`, TypeScript configuration, and `src/main.tsx`, unless a change is necessary.
- Check imports and references before deleting or moving files.
- Never delete a file simply because it looks unfamiliar.

## 5. Architecture Rules

Follow these documents:

- `docs/PROJECT_BRIEF.md` — product goals, features, and UI standards.
- `docs/FRONTEND_STRUCTURE.md` — folder responsibilities and shadcn component tree.
- `docs/FRONTEND_ARCHITECTURE.md` — routing and user flows.
- `docs/color_rule.md` — official color palette, component mapping, and strict token rules.

Use lightweight feature-based architecture.

- Keep feature-specific code inside its feature folder.
- Keep shared shadcn/ui primitives inside `src/components/ui/`.
- Keep shared layout shells in `src/components/layout/` and brand assets in `src/components/brand/`.
- Keep routing and application setup inside `src/app/`.
- Keep shared utilities inside `src/lib/`.
- Keep feature-specific types near their feature.
- Avoid oversized components and unnecessary abstractions.

## 6. UI-Only Restrictions

Use mock data and local React state.

Do not implement:

- Backend API integration
- Real authentication or authorization
- Database access
- Real password reset emails
- WebSockets
- Voice/video calling
- Production session or token handling

Forms may demonstrate client-side validation and UI feedback, but must never pretend that a real account, login, or password reset succeeded.

Never store passwords in local storage.

## 7. Design & Component Rules (shadcn/ui Standard)

Follow the Join Me brand direction and component uniformity:

- **shadcn/ui Primitives**: Always use standard components from `src/components/ui/` (`<Card>`, `<Button>`, `<Input>`, `<Label>`, `<Avatar>`, `<Separator>`, `<Textarea>`) on feature pages. Do not write raw unstyled HTML elements (`<input>`, `<button>`) with custom styling.
- **Clean, Modern, Friendly Interface**: Blue-purple accents, dark navy text, light neutral backgrounds.
- **Consistent Rounded Radii**:
  - `rounded-2xl` for cards, panels, and modal containers.
  - `rounded-xl` for interactive controls (buttons, inputs, pills).
- **Strict Color Token Enforcement**: Never use arbitrary hex utility classes (e.g., `bg-[#4776E6]`, `text-[#243B80]`, `border-[#E2E8F0]`). Always use semantic Tailwind classes (`bg-primary`, `text-navy`, `border-border`, `bg-background`, `bg-subtle`, `text-muted-foreground`, etc.) as documented in `docs/color_rule.md`.
- **Inputs & Focus States**: Inputs use `<Input>` with neutral borders (`border-border`) and primary brand focus rings (`focus-visible:ring-ring`).
- **Logo Consistency**: Always use the centralized `<Logo />` component (`src/components/brand/Logo.tsx`).

## 8. Implementation Workflow

For each task:

1. Inspect the relevant files.
2. Explain what needs to change and why.
3. Wait for approval when the task requires it.
4. Implement only the agreed scope.
5. Run available lint, type-check, and build commands.
6. Report changed files, checks performed, and remaining issues.

Never claim a command passed unless it was actually run.
