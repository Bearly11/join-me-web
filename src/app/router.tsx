import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AuthLayout } from '@/components/layout/AuthLayout'
import { AppLayout } from '@/components/layout/AppLayout'
import { LoginPage } from '@/features/auth/pages/LoginPage'
import { RegisterPage } from '@/features/auth/pages/RegisterPage'
import { ForgotPasswordPage } from '@/features/auth/pages/ForgotPasswordPage'
import { ResetPasswordPage } from '@/features/auth/pages/ResetPasswordPage'
import { ChatPage } from '@/features/chat/pages/ChatPage'
import { RoomsPage } from '@/features/rooms/pages/RoomsPage'
import { ProfilePage } from '@/features/profile/pages/ProfilePage'
import { SettingsPage } from '@/features/settings/pages/SettingsPage'

export const router = createBrowserRouter([
  // Redirect root to chat
  {
    path: '/',
    element: <Navigate to="/chat" replace />,
  },

  // Auth routes (Wrapped in AuthLayout)
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/forgot-password',
        element: <ForgotPasswordPage />,
      },
      {
        path: '/reset-password',
        element: <ResetPasswordPage />,
      },
    ],
  },

  // Application routes (Wrapped in AppLayout)
  {
    element: <AppLayout />,
    children: [
      {
        path: '/chat',
        element: <ChatPage />,
      },
      {
        path: '/rooms',
        element: <RoomsPage />,
      },
      {
        path: '/rooms/:roomId',
        element: <RoomsPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/settings',
        element: <SettingsPage />,
      },
    ],
  },

  // Catch-all 404
  {
    path: '*',
    element: <Navigate to="/chat" replace />,
  },
])

export default router
