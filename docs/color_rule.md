## Join Me Brand Colors, UI Style & shadcn/ui System

### Official brand palette

Use these exact colors as the source of truth:

- **Navy:** `#243B80` — primary brand identity, headings, selected navigation, and important UI elements.
- **Blue:** `#4776E6` — primary action buttons, links, focus indicators, and interactive states.
- **Purple:** `#8056D9` — secondary brand accent, gradients, and selective highlights.
- **Background:** `#F7F8FC` — main application background.

Supporting neutral colors:
- **Surface:** `#FFFFFF`
- **Main text:** `#1E293B`
- **Secondary text:** `#64748B`
- **Border:** `#E2E8F0`
- **Subtle brand surface:** `#EEF2FF`
- **Success:** `#16A34A`
- **Warning:** `#D97706`
- **Error / Destructive:** `#DC2626`

---

### Class Name & shadcn/ui Component Mapping (STRICT RULE)

> [!IMPORTANT]
> **NO arbitrary hex utility classes!**
> Never use `bg-[#4776E6]`, `text-[#243B80]`, `border-[#E2E8F0]`, etc. in components.
> Always use semantic tokens and shadcn/ui primitives (`src/components/ui/`) configured in `src/index.css`:

| Color Role | Hex | Tailwind Utility Classes | shadcn/ui Element Mapping |
|:---|:---|:---|:---|
| Primary Action / Brand Blue | `#4776E6` | `bg-primary`, `text-primary`, `border-primary`, `hover:bg-primary-hover` | `<Button variant="default">`, Active Links |
| Primary Hover | `#3B66CF` | `bg-primary-hover`, `hover:bg-primary-hover` | `<Button>` hover state |
| Brand Navy / Headings | `#243B80` | `text-navy` / `text-brand-navy`, `bg-navy` / `bg-brand-navy` | `<CardTitle className="text-navy">`, `<AvatarFallback className="bg-navy">` |
| Secondary / Purple Accent | `#8056D9` | `text-purple` / `text-brand-purple`, `bg-purple` / `bg-brand-purple` | Badges, Highlights, Accent Icons |
| Main Page Background | `#F7F8FC` | `bg-background` | Global body canvas, Page containers |
| Card / Panel Surface | `#FFFFFF` | `bg-surface` / `bg-card`, `bg-white` | `<Card>`, Modal dialogs, Form surfaces |
| Primary Body Text | `#1E293B` | `text-foreground`, `text-card-foreground` | General content, `<Label>`, Form values |
| Secondary / Muted Text | `#64748B` | `text-muted-foreground` | `<CardDescription>`, timestamps, subheadings |
| Borders & Dividers | `#E2E8F0` | `border-border`, `divide-border` | `<Separator>`, `<Card>`, `<Input>` borders |
| Subtle Surface / Active Nav | `#EEF2FF` | `bg-subtle` / `bg-brand-subtle` / `bg-secondary` | `<Button variant="secondary">`, Active nav pill |
| Success Indicator | `#16A34A` | `text-success`, `bg-success` | Success alerts, online presence dot |
| Warning Indicator | `#D97706` | `text-warning`, `bg-warning` | Warning banners, away status dot |
| Destructive / Error | `#DC2626` | `text-destructive`, `bg-destructive` | `<Button variant="destructive">`, validation errors |

---

### Usage Rules

1. **Brand Uniformity**: Maintain the official brand palette consistently across all feature pages.
2. **shadcn/ui Standard**: Do not use raw HTML `<button>`, `<input>`, `<label>`, or custom styled card `<div>`s on feature pages. Always use the shared components in `src/components/ui/`.
3. **Navy (`#243B80`)**: Use for brand identity, main titles, headings, and strong emphasis.
4. **Blue (`#4776E6`)**: Use for primary action buttons (`<Button>`), active links, and focus rings.
5. **Purple (`#8056D9`)**: Use for secondary accents, icons, and subtle badge highlights.
6. **Background (`#F7F8FC`) & Surface (`#FFFFFF`)**: Page canvas uses `bg-background`, panels and forms use `<Card>`.
7. **Strict Token Enforcement**: Do not scatter arbitrary hex colors (e.g. no `bg-[#4776E6]`). Use semantic Tailwind utility classes mapped in `src/index.css`.
8. **Consistent Radii**:
   - Containers, Cards, and Modals: `rounded-2xl`
   - Interactive elements (Buttons, Inputs, Badges): `rounded-xl`
9. **Inputs & Focus States**: Inputs use `<Input>` with neutral borders (`border-border`) and brand focus rings (`focus-visible:ring-ring`).
10. **Restrained Gradients**: Use solid colors by default; gradients are reserved exclusively for the Auth marketing side and select hero highlights.
11. **Accessibility**: Maintain high contrast ratios, visible keyboard focus rings, and explicit `<Label>` bindings for all form inputs.
12. **Logo Consistency**: Always use the shared `<Logo />` component (`src/components/brand/Logo.tsx`).
