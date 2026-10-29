import React, { useState } from 'react'
import { Bell, Palette, Lock, CheckCircle2 } from 'lucide-react'

export const SettingsPage: React.FC = () => {
  const [notifications, setNotifications] = useState(true)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [compactMode, setCompactMode] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <div className="border-b border-border pb-4">
        <h1 className="text-xl font-bold text-navy">Application Settings</h1>
        <p className="text-sm text-muted-foreground">Configure your notifications and workspace preferences</p>
      </div>

      {saved && (
        <div className="p-3 bg-subtle border border-success rounded-xl text-xs text-success flex items-center gap-2 font-medium">
          <CheckCircle2 className="w-4 h-4" />
          Preferences updated (demo state).
        </div>
      )}

      {/* Notifications Section */}
      <div className="bg-surface rounded-2xl border border-border p-6 shadow-xs space-y-4">
        <h2 className="text-sm font-bold text-navy flex items-center gap-2">
          <Bell className="w-4 h-4 text-primary" />
          Notifications
        </h2>

        <div className="space-y-3">
          <label className="flex items-center justify-between p-2 rounded-xl hover:bg-background cursor-pointer">
            <div>
              <p className="text-sm font-medium text-foreground">Desktop Notifications</p>
              <p className="text-xs text-muted-foreground">Receive push alerts when mentioned or messaged</p>
            </div>
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className="w-4 h-4 text-primary rounded border-border"
            />
          </label>

          <label className="flex items-center justify-between p-2 rounded-xl hover:bg-background cursor-pointer">
            <div>
              <p className="text-sm font-medium text-foreground">Sound Effects</p>
              <p className="text-xs text-muted-foreground">Play sound for incoming direct messages</p>
            </div>
            <input
              type="checkbox"
              checked={soundEnabled}
              onChange={(e) => setSoundEnabled(e.target.checked)}
              className="w-4 h-4 text-primary rounded border-border"
            />
          </label>
        </div>
      </div>

      {/* Appearance Section */}
      <div className="bg-surface rounded-2xl border border-border p-6 shadow-xs space-y-4">
        <h2 className="text-sm font-bold text-navy flex items-center gap-2">
          <Palette className="w-4 h-4 text-purple" />
          Appearance & Layout
        </h2>

        <div className="space-y-3">
          <label className="flex items-center justify-between p-2 rounded-xl hover:bg-background cursor-pointer">
            <div>
              <p className="text-sm font-medium text-foreground">Compact Message Density</p>
              <p className="text-xs text-muted-foreground">Display tighter spacing between conversation bubbles</p>
            </div>
            <input
              type="checkbox"
              checked={compactMode}
              onChange={(e) => setCompactMode(e.target.checked)}
              className="w-4 h-4 text-primary rounded border-border"
            />
          </label>
        </div>
      </div>

      {/* Security info */}
      <div className="bg-surface rounded-2xl border border-border p-6 shadow-xs space-y-3">
        <h2 className="text-sm font-bold text-navy flex items-center gap-2">
          <Lock className="w-4 h-4 text-muted-foreground" />
          Privacy & Credentials
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed">
          In this frontend prototype, authentication is simulated. No sensitive passwords, tokens, or personal identifiers are stored in localStorage or sent over the network.
        </p>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="px-5 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-xl transition-colors shadow-sm"
        >
          Save Preferences
        </button>
      </div>
    </div>
  )
}

export default SettingsPage
