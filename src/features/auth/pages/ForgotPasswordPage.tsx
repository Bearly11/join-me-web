import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const ForgotPasswordPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-bold text-navy">Reset password</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Enter your email to receive recovery instructions
        </p>
      </div>

      {submitted ? (
        <div className="space-y-4">
          <div className="p-4 bg-subtle border border-border rounded-xl text-sm text-navy">
            Demo: Reset instructions sent (simulated). You can proceed to test the reset password screen.
          </div>
          <Link
            to="/reset-password"
            className="block text-center w-full py-2.5 px-4 bg-primary hover:bg-primary-hover text-white font-medium text-sm rounded-xl transition-colors"
          >
            Preview Reset Password Screen
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
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

          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-primary hover:bg-primary-hover text-white font-medium text-sm rounded-xl transition-colors shadow-sm"
          >
            Send recovery link
          </button>
        </form>
      )}

      <div className="text-center text-sm text-muted-foreground">
        Remember your password?{' '}
        <Link to="/login" className="text-primary font-semibold hover:underline">
          Back to login
        </Link>
      </div>
    </div>
  )
}

export default ForgotPasswordPage
