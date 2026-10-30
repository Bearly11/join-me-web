# Join Me — Project Brief

## 1. Product Overview

Join Me is a modern communication application.

Its long-term goal is to let users:
- Send direct messages.
- Communicate in rooms and group conversations.
- Manage their profiles.
- Eventually make voice and video calls.

**Tagline:** One place. Everyone connected.

## 2. Current Objective

Build the frontend UI first.

The application should look like a coherent, modern messaging product with uniform styling across all screens. Users should be able to navigate between screens and explore the interface using mock data.

Do not implement the backend during this phase.

## 3. Technology

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- **shadcn/ui** (powered by Radix UI primitives and Class Variance Authority)
- **React Router**
- **React Hook Form & Zod** (for client-side form validation)
- **Lucide React** (icons)

## 4. UI Architecture & Component Uniformity (shadcn/ui Standard)

All UI screens must strictly use **shadcn/ui** components located in `src/components/ui/` for consistency, accessibility, and visual harmony:

- **Cards & Containers:** `<Card>`, `<CardHeader>`, `<CardTitle>`, `<CardDescription>`, `<CardContent>`, `<CardFooter>` instead of unstyled `<div>` panels.
- **Buttons & Actions:** `<Button>` with uniform variants (`default`, `secondary`, `outline`, `ghost`, `destructive`) instead of raw `<button>` tags.
- **Form Controls:** `<Input>`, `<Label>`, `<Textarea>`, `<Select>`, `<Switch>` instead of raw HTML form elements.
- **Identity & Navigation:** `<Avatar>`, `<AvatarImage>`, `<AvatarFallback>`, `<Separator>` for profiles, conversation lists, and section dividers.

Raw, unstyled HTML elements (`<input>`, `<button>`, etc.) with ad-hoc Tailwind classes must not be used on feature screens.

## 5. Visual Identity & Uniform Color Rules

All screens and shadcn/ui components must adhere strictly to the uniform Join Me design system:

### Palette Source of Truth:
- **Brand Navy:** `#243B80` (`text-navy`, `bg-navy`) — primary brand identity, page and card headers, active navigation.
- **Brand Blue:** `#4776E6` (`bg-primary`, `text-primary`, `ring-primary`) — primary actions, interactive controls, links, active rings.
- **Primary Hover:** `#3B66CF` (`hover:bg-primary-hover`).
- **Brand Purple Accent:** `#8056D9` (`text-purple`, `bg-purple`) — subtle accents and badges.
- **App Background:** `#F7F8FC` (`bg-background`) — neutral global canvas.
- **Surface / Card Background:** `#FFFFFF` (`bg-surface`, `bg-card`) — panels, modals, forms.
- **Primary Text:** `#1E293B` (`text-foreground`).
- **Muted Text:** `#64748B` (`text-muted-foreground`).
- **Borders & Dividers:** `#E2E8F0` (`border-border`).
- **Subtle Surface:** `#EEF2FF` (`bg-subtle`, `bg-secondary`, `bg-accent`).

### Strict Styling Rules:
1. **No arbitrary hex classes:** Never use classes like `bg-[#4776E6]` or `text-[#243B80]`. Always use semantic design tokens (`bg-primary`, `text-navy`, `border-border`).
2. **Consistent Radii:** Use `rounded-2xl` for cards/panels/surfaces and `rounded-xl` for interactive elements (inputs, buttons, badges).
3. **Inputs & Focus States:** Inputs must feature neutral borders at rest (`border-border`) and primary brand focus rings (`focus-visible:ring-2 focus-visible:ring-ring`).
4. **Branding:** Use the reusable `<Logo />` brand component across all auth and app pages.

## 6. Required UI Features

### Authentication
- Registration page (`RegisterPage.tsx`)
- Login page (`LoginPage.tsx`)
- Forgot-password page (`ForgotPasswordPage.tsx`)
- Reset-password page (`ResetPasswordPage.tsx`)
- Show/hide password toggles
- Client-side validation feedback
- Demo success and error alerts
- *Note:* No real authentication, account creation, or password reset is required.

### Chat
- Main chat layout (`ChatPage.tsx`)
- Conversation sidebar with search and unread badges
- Direct-message view with active user header
- Message bubbles and timestamps
- Message composer with attachment and send actions
- Empty conversation state
- Sample conversations and messages
- *Note:* Sending a message updates local demo state only.

### Rooms
- Room list with topic tags and member counts (`RoomsPage.tsx`)
- Room conversation view
- Room header with member display
- Sample group messages
- Local demo message composition

### Profile
- Profile overview with avatar and display name (`ProfilePage.tsx`)
- Email and status display
- Edit profile form powered by shadcn `<Card>`, `<Input>`, `<Label>`, `<Button>`
- Local demo updates with confirmation toast/alert

### Settings
- Account settings UI (`SettingsPage.tsx`)
- Notification preferences
- Appearance preferences (theme/density)
- *Note:* Settings do not require backend persistence.

## 7. Out of Scope

The following are future work:
- Spring Boot backend integration
- PostgreSQL database
- Real authentication, session tokens, and security guards
- Persistent messages and profile synchronization
- WebSocket communication
- Voice and video calling / WebRTC
- Production cloud deployment

## 8. Completion Criteria

The UI phase is successful when:
1. Users can explore all required pages and navigate smoothly between them.
2. Every page and component strictly uses shadcn/ui primitives styled with uniform Join Me brand tokens.
3. The layout is fully responsive on desktop and mobile.
4. Mock interactions (sending messages, updating profile, switching rooms) work seamlessly in local state.
5. Zero arbitrary hex colors exist; the codebase passes TypeScript and build checks cleanly.
