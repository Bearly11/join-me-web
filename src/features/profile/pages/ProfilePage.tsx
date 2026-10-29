import React, { useState } from 'react'
import { User, Mail, ShieldCheck, CheckCircle2 } from 'lucide-react'

export const ProfilePage: React.FC = () => {
  const [name, setName] = useState('Phanith Pha')
  const [email] = useState('phanith.pha@allweb.com.kh')
  const [status, setStatus] = useState('Building the Join Me communication client')
  const [saved, setSaved] = useState(false)

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <h1 className="text-xl font-bold text-navy">Profile Overview</h1>
          <p className="text-sm text-muted-foreground">Manage your public profile and personal information</p>
        </div>
      </div>

      {saved && (
        <div className="p-3 bg-subtle border border-success rounded-xl text-xs text-success flex items-center gap-2 font-medium">
          <CheckCircle2 className="w-4 h-4" />
          Profile updated successfully (local demo state).
        </div>
      )}

      {/* Profile Card */}
      <div className="bg-surface rounded-2xl border border-border p-6 shadow-xs flex items-center gap-5">
        <div className="w-20 h-20 rounded-full bg-navy text-white flex items-center justify-center font-bold text-2xl shrink-0">
          P
        </div>
        <div>
          <h2 className="text-lg font-bold text-foreground">{name}</h2>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-0.5">
            <Mail className="w-3.5 h-3.5" />
            {email}
          </p>
          <span className="inline-block mt-2 px-2.5 py-0.5 bg-subtle text-navy text-xs font-semibold rounded-full">
            Active Member
          </span>
        </div>
      </div>

      {/* Edit Form */}
      <div className="bg-surface rounded-2xl border border-border p-6 shadow-xs space-y-4">
        <h3 className="text-sm font-bold text-navy flex items-center gap-2">
          <User className="w-4 h-4 text-primary" />
          Edit Details
        </h3>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-foreground mb-1.5">
              Display Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-surface border border-border rounded-xl text-foreground"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground mb-1.5">
              Account Email
            </label>
            <input
              type="email"
              value={email}
              disabled
              className="w-full px-3.5 py-2 text-sm bg-background border border-border rounded-xl text-muted-foreground cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground mb-1.5">
              Status Message
            </label>
            <input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-surface border border-border rounded-xl text-foreground"
            />
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="px-5 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-xl transition-colors shadow-sm"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>

      <div className="p-4 bg-surface rounded-2xl border border-border flex items-center gap-3">
        <ShieldCheck className="w-5 h-5 text-purple" />
        <div>
          <p className="text-xs font-semibold text-foreground">UI-Only Sandbox Mode</p>
          <p className="text-[11px] text-muted-foreground">Changes are maintained in local state and do not persist to a database.</p>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
