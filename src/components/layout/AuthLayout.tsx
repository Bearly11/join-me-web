import React from 'react'
import { Outlet } from 'react-router-dom'
import { Logo } from '@/components/brand/Logo'

export const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <Logo size="lg" showTagline={true} />
        </div>
        <div className="bg-surface rounded-2xl border border-border shadow-sm p-6 sm:p-8">
          <Outlet />
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground">
          Join Me UI Preview &bull; Local state only
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
