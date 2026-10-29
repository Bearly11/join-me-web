## Join Me Brand Colors and UI Style

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

### Class Name Mapping (STRICT RULE)

> [!IMPORTANT]
> **NO arbitrary hex utility classes!**
> Never use `bg-[#4776E6]`, `text-[#243B80]`, `border-[#E2E8F0]`, etc. in components.
> Always use the semantic and token-based Tailwind classes configured in `src/index.css`:

| Color Role | Hex | Tailwind Utility Classes |
|:---|:---|:---|
| Primary Action / Brand Blue | `#4776E6` | `bg-primary`, `text-primary`, `border-primary`, `hover:bg-primary-hover` |
| Primary Hover | `#3B66CF` | `bg-primary-hover`, `hover:bg-primary-hover` |
| Brand Navy / Headings | `#243B80` | `text-navy` / `text-brand-navy`, `bg-navy` / `bg-brand-navy` |
| Secondary / Purple Accent | `#8056D9` | `text-purple` / `text-brand-purple`, `bg-purple` / `bg-brand-purple` |
| Main Page Background | `#F7F8FC` | `bg-background` |
| Card / Panel Surface | `#FFFFFF` | `bg-surface` / `bg-card`, `bg-white` |
| Primary Body Text | `#1E293B` | `text-foreground`, `text-card-foreground` |
| Secondary / Muted Text | `#64748B` | `text-muted-foreground` |
| Borders & Dividers | `#E2E8F0` | `border-border`, `divide-border` |
| Subtle Surface / Active Nav | `#EEF2FF` | `bg-subtle` / `bg-brand-subtle` / `bg-secondary` |
| Success Indicator | `#16A34A` | `text-success`, `bg-success` |
| Warning Indicator | `#D97706` | `text-warning`, `bg-warning` |
| Destructive / Error | `#DC2626` | `text-destructive`, `bg-destructive` |

---

### Usage rules

1. Keep the official brand palette consistent throughout the entire application.
2. Use Navy `#243B80` (`text-navy` / `text-brand-navy`) for brand identity, headings where appropriate, active navigation, and strong emphasis.
3. Use Blue `#4776E6` (`bg-primary`, `text-primary`) for primary buttons, links, interactive controls, and focus states.
4. Use Purple `#8056D9` (`text-purple`) for secondary accents and a restrained Navy/Blue/Purple gradient.
5. Use Background `#F7F8FC` (`bg-background`) for the main page background and white surfaces (`bg-surface` / `bg-white`) for cards, forms, and panels.
6. Define reusable color tokens centrally in `src/index.css`, then connect them to the installed Tailwind CSS and shadcn/ui configuration.
7. **Strict Token Enforcement**: Do not scatter arbitrary hex colors across components (e.g. no `bg-[#4776E6]`). Always use semantic Tailwind utility classes (`bg-primary`, `text-navy`, `border-border`, etc.).
8. Inputs must use a neutral border at rest (`border-border`) and a subtle Blue focus ring (`focus:ring-primary`). Do not retain an unexplained bright-blue default border.
9. Keep the UI modern, clean, friendly, readable, responsive, and suitable for a daily communication application.
10. Use gradients selectively; do not put gradients on every button, card, or page.
11. Keep accessible contrast, visible keyboard focus, and clear hover, active, disabled, loading, and error states.
12. Use the existing Join Me logo when available. Do not replace it with a different logo or invent a different visual identity.

Before implementing new screens, check that the colors, spacing, typography, borders, radii, and component states follow this shared design system.
