import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const ResetPasswordPage: React.FC = () => {
  const navigate = useNavigate()
  const [done, setDone] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setDone(true)
    setTimeout(() => {
      navigate('/login')
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-bold text-navy">Choose new password</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Create a secure password for your account
        </p>
      </div>

      {done ? (
        <div className="p-4 bg-subtle border border-success rounded-xl text-center text-sm text-success font-medium">
          Password updated (simulated). Redirecting to login...
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-foreground mb-1.5">
              New Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 text-sm bg-surface border border-border rounded-xl text-foreground"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground mb-1.5">
              Confirm New Password
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
            Update password
          </button>
        </form>
      )}

      <div className="text-center text-sm text-muted-foreground">
        <Link to="/login" className="text-primary font-semibold hover:underline">
          Cancel and return to login
        </Link>
      </div>
    </div>
  )
}

export default ResetPasswordPage
