# Join Me Frontend — Architecture and UI Flow

## 1. Architecture Overview

Join Me uses lightweight feature-based React architecture with **shadcn/ui** providing accessible, customizable UI components.

React renders the UI, React Router selects the page, feature components implement the screen, and shared shadcn/ui components (`src/components/ui/`) provide uniform styling and behavior across all pages.

During this phase, pages use mock data and local React state. There is no backend.

## 2. Application Flow

```text
Browser
  |
  v
React entry point (main.tsx)
  |
  v
App.tsx
  |
  v
React Router (src/app/router.tsx)
  |
  +--> Authentication pages (AuthLayout)
  |      +--> Login
  |      +--> Register
  |      +--> Forgot password
  |      +--> Reset password
  |
  +--> Main application pages (AppLayout)
         +--> Chat
         +--> Rooms
         +--> Profile
         +--> Settings
                |
                v
        Feature components
                |
                v
        Shared shadcn/ui components (Card, Button, Input, Label, Avatar, Separator)
                |
                v
        Mock data + local React state
```

## 3. Route Plan

| Path | Page | Layout |
|---|---|---|
| `/login` | Login | `AuthLayout` |
| `/register` | Register | `AuthLayout` |
| `/forgot-password` | Forgot password | `AuthLayout` |
| `/reset-password` | Reset password UI | `AuthLayout` |
| `/chat` | Main chat | `AppLayout` |
| `/rooms` | Room list | `AppLayout` |
| `/rooms/:roomId` | Room conversation | `AppLayout` |
| `/profile` | Profile | `AppLayout` |
| `/settings` | Settings | `AppLayout` |

Route paths may be refined during implementation, but links must remain consistent.

These routes are for navigation only. They do not provide real authentication or security.

## 4. Registration Flow

```text
Register page (uses shadcn Card, Input, Label, Button)
  -> Fill form
  -> Validate fields in the browser
  -> Show demo feedback
  -> Navigate to login if desired
```

No account is created and no data is sent to a server.

## 5. Login Flow

```text
Login page (uses shadcn Card, Input, Label, Button)
  -> Enter email and password
  -> Validate form fields
  -> Show a clear demo result
  -> Allow navigation to the chat preview
```

The UI must not claim real authentication occurred.

## 6. Password Reset Flow

```text
Forgot-password page
  -> Enter email
  -> Show generic demo confirmation
  -> Open reset-password page for preview
  -> Validate new-password fields locally
  -> Show demo feedback
```

No email is sent. No reset token is verified. No real password is changed.

## 7. Chat Flow

```text
Chat page (uses shadcn Card, Input/Textarea, Button, Avatar, Separator)
  -> Load sample conversations
  -> Select a conversation
  -> Display sample messages
  -> Search conversations locally
  -> Compose a message
  -> Update local demo state
```

The layout includes a conversation sidebar, selected conversation header, message history, and composer.

Provide an empty state when no conversation is selected.

## 8. Rooms Flow

```text
Rooms page (uses shadcn Card, Button, Avatar, Separator)
  -> Show sample rooms
  -> Select a room
  -> Display room details and sample messages
  -> Compose a demo message
  -> Update local demo state
```

Do not implement real membership, invitations, presence, or calls yet.

## 9. Profile and Settings Flow

```text
Profile page (uses shadcn Card, Avatar, Input, Label, Button, Separator)
  -> Display sample user information
  -> Open edit form
  -> Edit local form state
  -> Show demo save feedback
```

Settings controls may update local UI state. Changes do not persist to a server.

## 10. State Management

Start with React state and props.

Use `useState` or `useReducer` for local interactions. Keep sample conversations, messages, rooms, and profile data separate from presentation components where practical.

Do not add Redux or Zustand until a real need is demonstrated.

## 11. Forms

React Hook Form and Zod may be used for form state and validation alongside shadcn `<Input>` and `<Label>`.

- Use clear labels and validation messages.
- Provide keyboard-accessible controls.
- Keep success and error feedback honest about being demo-only.
- Never store passwords in local storage.

## 12. Styling and Component System (shadcn/ui Standard)

Join Me establishes **shadcn/ui** as its primary component architecture alongside Tailwind CSS v4.

- **Component Primitives**: Build all screens using shared primitives in `src/components/ui/` (`Card`, `Button`, `Input`, `Label`, `Avatar`, `Separator`, `Textarea`, etc.) rather than unstyled HTML elements.
- **Uniform Design Tokens**: All styling relies strictly on centralized semantic theme tokens configured in `src/index.css` (e.g. `bg-primary`, `text-navy`, `border-border`, `bg-surface`, `bg-background`).
- **No Arbitrary Hex Utility Classes**: Arbitrary hex classes such as `bg-[#4776E6]` or `text-[#243B80]` are prohibited.
- **Consistent Rounded Radii**: Containers and cards use `rounded-2xl`; interactive controls (buttons, inputs) use `rounded-xl`.
- **Accessibility & Focus**: Controls must maintain high visual contrast, visible focus rings (`focus-visible:ring-ring`), and descriptive labels via shadcn's Radix UI-backed components.

## 13. First Implementation Milestone

After the user approves the plan:

1. Inspect the installed dependencies and project configuration.
2. Ensure shadcn/ui primitives and theme tokens are set up.
3. Establish Join Me global styles and brand components.
4. Configure React Router.
5. Add the agreed route shells.
6. Verify lint, type-check, and build commands where available.
7. Report exactly what changed and which checks passed.

Do not implement all feature pages in one uncontrolled change. Build them in small, reviewable steps.

## 14. Future Backend Boundary

The backend will be planned separately.

When backend work is authorized in the future, the frontend may receive data from a separate Spring Boot application. The current architecture should keep visual components reasonably independent from data sources so mock data can later be replaced.

For now, do not implement API calls, tokens, real authentication guards, databases, WebSockets, or WebRTC.
