import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const LoginPage: React.FC = () => {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Demo navigation to chat
    navigate('/chat')
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-bold text-navy">Welcome back</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Enter your credentials to access your conversations
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-foreground mb-1.5">
            Email address
          </label>
          <input
            type="email"
            defaultValue="demo@joinme.com"
            placeholder="you@example.com"
            className="w-full px-3.5 py-2.5 text-sm bg-surface border border-border rounded-xl text-foreground"
            required
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-semibold text-foreground">
              Password
            </label>
            <Link
              to="/forgot-password"
              className="text-xs text-primary hover:underline font-medium"
            >
              Forgot password?
            </Link>
          </div>
          <input
            type="password"
            defaultValue="password123"
            placeholder="••••••••"
            className="w-full px-3.5 py-2.5 text-sm bg-surface border border-border rounded-xl text-foreground"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2.5 px-4 bg-primary hover:bg-primary-hover text-white font-medium text-sm rounded-xl transition-colors shadow-sm"
        >
          Sign in to Join Me
        </button>
      </form>

      <div className="text-center text-sm text-muted-foreground">
        Don't have an account?{' '}
        <Link to="/register" className="text-primary font-semibold hover:underline">
          Register
        </Link>
      </div>
    </div>
  )
}

export default LoginPage
