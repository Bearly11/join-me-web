import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { MessageSquare, Users, User, Settings, LogOut } from 'lucide-react'
import { Logo } from '@/components/brand/Logo'
import { cn } from '@/lib/utils'

export const AppLayout: React.FC = () => {
  const navigate = useNavigate()

  const navItems = [
    { to: '/chat', label: 'Chat', icon: MessageSquare },
    { to: '/rooms', label: 'Rooms', icon: Users },
    { to: '/profile', label: 'Profile', icon: User },
    { to: '/settings', label: 'Settings', icon: Settings },
  ]

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-surface border-r border-border shrink-0">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <Logo size="sm" />
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-colors',
                    isActive
                      ? 'bg-subtle text-navy font-semibold'
                      : 'text-muted-foreground hover:bg-background hover:text-foreground'
                  )
                }
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            )
          })}
        </nav>

        {/* User preview and logout footer */}
        <div className="p-3 border-t border-border bg-background/50 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm shrink-0">
              P
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold truncate text-foreground">Phanith</p>
              <p className="text-xs text-success flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-success inline-block"></span>
                Online
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            title="Log out (Demo)"
            className="p-2 text-muted-foreground hover:text-destructive hover:bg-surface rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between px-4 py-3 bg-surface border-b border-border">
          <Logo size="sm" />
          <button
            onClick={handleLogout}
            className="text-xs font-medium text-muted-foreground hover:text-destructive flex items-center gap-1"
          >
            <LogOut className="w-4 h-4" />
            Exit
          </button>
        </header>

        {/* Dynamic page content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>

        {/* Mobile Bottom Navigation */}
        <nav className="md:hidden flex items-center justify-around bg-surface border-t border-border py-2">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'flex flex-col items-center gap-1 py-1 px-3 rounded-lg text-xs font-medium',
                    isActive ? 'text-navy font-bold' : 'text-muted-foreground'
                  )
                }
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export default AppLayout
