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
- **Error:** `#DC2626`

### Usage rules

1. Keep the official brand palette consistent throughout the entire application.
2. Use Navy `#243B80` for brand identity, headings where appropriate, active navigation, and strong emphasis.
3. Use Blue `#4776E6` for primary buttons, links, interactive controls, and focus states.
4. Use Purple `#8056D9` for secondary accents and a restrained Navy/Blue/Purple gradient.
5. Use Background `#F7F8FC` for the main page background and white surfaces for cards, forms, and panels.
6. Define reusable color tokens centrally in `src/index.css`, then connect them to the installed Tailwind CSS and shadcn/ui configuration. Inspect the current versions and setup before changing configuration.
7. Do not scatter arbitrary hex colors across components or introduce a competing brand palette.
8. Inputs must use a neutral border at rest and a subtle Blue focus ring. Do not retain an unexplained bright-blue default border.
9. Keep the UI modern, clean, friendly, readable, responsive, and suitable for a daily communication application.
10. Use gradients selectively; do not put gradients on every button, card, or page.
11. Keep accessible contrast, visible keyboard focus, and clear hover, active, disabled, loading, and error states.
12. Use the existing Join Me logo when available. Do not replace it with a different logo or invent a different visual identity.

Before implementing new screens, check that the colors, spacing, typography, borders, radii, and component states follow this shared design system.