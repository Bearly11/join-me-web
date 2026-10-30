import React, { useState } from 'react'
import { Mail, ShieldCheck, CheckCircle2, User } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

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

      {/* Page Header */}
      <div className="flex items-center justify-between pb-4">
        <div>
          <h1 className="text-xl font-bold text-navy">Profile Overview</h1>
          <p className="text-sm text-muted-foreground">
            Manage your public profile and personal information
          </p>
        </div>
      </div>

      <Separator />

      {/* Success Alert */}
      {saved && (
        <div className="p-3 bg-subtle border border-success rounded-xl text-xs text-success flex items-center gap-2 font-medium">
          <CheckCircle2 className="w-4 h-4" />
          Profile updated successfully (local demo state).
        </div>
      )}

      {/* Profile Card */}
      <Card>
        <CardContent className="pt-6 flex items-center gap-5">
          <Avatar className="w-20 h-20 text-2xl">
            <AvatarFallback className="text-2xl font-bold">P</AvatarFallback>
          </Avatar>
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
        </CardContent>
      </Card>

      {/* Edit Form Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm text-navy flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            Edit Details
          </CardTitle>
          <CardDescription>Update your display name and status.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="display-name">Display Name</Label>
              <Input
                id="display-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="account-email">Account Email</Label>
              <Input
                id="account-email"
                type="email"
                value={email}
                disabled
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="status-message">Status Message</Label>
              <Input
                id="status-message"
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>

            <div className="pt-2 flex justify-end">
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Sandbox Notice */}
      <Card>
        <CardContent className="pt-6 flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-purple shrink-0" />
          <div>
            <p className="text-xs font-semibold text-foreground">UI-Only Sandbox Mode</p>
            <p className="text-[11px] text-muted-foreground">
              Changes are maintained in local state and do not persist to a database.
            </p>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}

export default ProfilePage
