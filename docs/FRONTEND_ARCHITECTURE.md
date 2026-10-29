# Join Me Frontend — Architecture and UI Flow

## 1. Architecture Overview

Join Me uses lightweight feature-based React architecture.

React renders the UI, React Router selects the page, feature components implement the screen, and shared components provide consistent styling.

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
  +--> Authentication pages
  |      +--> Login
  |      +--> Register
  |      +--> Forgot password
  |      +--> Reset password
  |
  +--> Main application pages
         +--> Chat
         +--> Rooms
         +--> Profile
         +--> Settings
                |
                v
        Feature components
                |
                v
        Shared UI components
                |
                v
        Mock data + local React state
```

## 3. Route Plan

| Path | Page |
|---|---|
| `/login` | Login |
| `/register` | Register |
| `/forgot-password` | Forgot password |
| `/reset-password` | Reset password UI |
| `/chat` | Main chat |
| `/rooms` | Room list |
| `/rooms/:roomId` | Room conversation |
| `/profile` | Profile |
| `/settings` | Settings |

Route paths may be refined during implementation, but links must remain consistent.

These routes are for navigation only. They do not provide real authentication or security.

## 4. Registration Flow

```text
Register page
  -> Fill form
  -> Validate fields in the browser
  -> Show demo feedback
  -> Navigate to login if desired
```

No account is created and no data is sent to a server.

## 5. Login Flow

```text
Login page
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
Chat page
  -> Load sample conversations
  -> Select a conversation
  -> Display sample messages
  -> Search conversations locally
  -> Compose a message
  -> Update local demo state
```

The layout should include a conversation sidebar, selected conversation header, message history, and composer.

Provide an empty state when no conversation is selected.

## 8. Rooms Flow

```text
Rooms page
  -> Show sample rooms
  -> Select a room
  -> Display room details and sample messages
  -> Compose a demo message
  -> Update local demo state
```

Do not implement real membership, invitations, presence, or calls yet.

## 9. Profile and Settings Flow

```text
Profile page
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

React Hook Form and Zod may be used for form state and validation.

- Use clear labels and validation messages.
- Provide keyboard-accessible controls.
- Keep success and error feedback honest about being demo-only.
- Never store passwords in local storage.

## 12. Styling

Use Tailwind CSS and shadcn/ui.

Maintain consistent brand colors, typography, spacing, border styles, and responsive behavior.

Customize the components to match Join Me. Do not retain the default Vite demo screen or starter styling.

## 13. First Implementation Milestone

After the user approves the plan:

1. Inspect the installed dependencies and project configuration.
2. Identify and safely remove the Vite demo screen and unused starter assets.
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
