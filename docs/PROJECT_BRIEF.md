# Join Me — Project Brief

## 1. Product Overview

Join Me is a communication application.

Its long-term goal is to let users:
- Send direct messages.
- Communicate in rooms and group conversations.
- Manage their profiles.
- Eventually make voice and video calls.

**Tagline:** One place. Everyone connected.

## 2. Current Objective

Build the frontend UI first.

The application should look like a coherent, modern messaging product. Users should be able to navigate between screens and explore the interface using mock data.

Do not implement the backend during this phase.

## 3. Technology

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router

React Hook Form and Zod may be used for client-side form validation.

## 4. Required UI Features

### Authentication

- Registration page
- Login page
- Forgot-password page
- Reset-password page
- Show/hide password
- Validation messages
- Demo success and error states

No real authentication, account creation, or password reset is required.

### Chat

- Main chat layout
- Conversation sidebar
- Search conversations
- Direct-message view
- Message bubbles and timestamps
- Message composer
- Empty conversation state
- Sample conversations and messages

Sending a message may update local demo state only.

### Rooms

- Room list
- Room conversation view
- Room name and member display
- Sample group messages
- Local demo message composition

### Profile

- Profile overview
- Avatar and display name
- Email and status display
- Edit profile form
- Local demo updates

### Settings

- Account settings UI
- Notification preferences
- Appearance preferences

Settings must not require backend persistence.

## 5. Visual Identity

Product name: Join Me

Tagline: One place. Everyone connected.

Use a clean and friendly visual style with blue-purple accents, dark navy text, neutral backgrounds, consistent spacing, and rounded components.

Keep the authentication pages visually consistent with the main application.

Use a reusable logo or brand component rather than duplicating branding markup across pages.

## 6. Out of Scope

The following are future work:

- Spring Boot integration
- PostgreSQL
- Real authentication and authorization
- Persistent messages and profiles
- WebSocket communication
- Voice/video calls
- WebRTC
- Backend security and deployment

## 7. Completion Criteria

The UI phase is successful when users can explore all required pages, navigate between them, view sample conversations and rooms, interact with demo forms, and edit demo profile information.

The layout should work on desktop and mobile.

The code should be organized for future backend integration without implementing backend concerns now.