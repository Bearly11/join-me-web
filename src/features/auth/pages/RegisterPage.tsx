import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Demo registration success navigates to login
    navigate('/login')
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-bold text-navy">Create an account</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Connect with friends and communities on Join Me
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-foreground mb-1.5">
            Full name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full px-3.5 py-2.5 text-sm bg-surface border border-border rounded-xl text-foreground"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-foreground mb-1.5">
            Email address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-3.5 py-2.5 text-sm bg-surface border border-border rounded-xl text-foreground"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-foreground mb-1.5">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-3.5 py-2.5 text-sm bg-surface border border-border rounded-xl text-foreground"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2.5 px-4 bg-primary hover:bg-primary-hover text-white font-medium text-sm rounded-xl transition-colors shadow-sm"
        >
          Create account
        </button>
      </form>

      <div className="text-center text-sm text-muted-foreground">
        Already have an account?{' '}
        <Link to="/login" className="text-primary font-semibold hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  )
}

export default RegisterPage
