import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Users, Hash, Send, Plus, Shield } from 'lucide-react'

interface Room {
  id: string
  name: string
  topic: string
  memberCount: number
}

interface RoomMessage {
  id: string
  author: string
  text: string
  time: string
  role?: string
}

const initialRooms: Room[] = [
  { id: 'general', name: 'general', topic: 'General discussion for all Join Me members', memberCount: 124 },
  { id: 'announcements', name: 'announcements', topic: 'Official product updates and release notes', memberCount: 310 },
  { id: 'frontend-dev', name: 'frontend-dev', topic: 'UI/UX architecture, Tailwind, and React discussions', memberCount: 42 },
]

const initialRoomMessages: Record<string, RoomMessage[]> = {
  general: [
    { id: 'r1', author: 'Moderator', role: 'Staff', text: 'Welcome everyone to the Join Me general community room!', time: '09:00 AM' },
    { id: 'r2', author: 'Phanith', text: 'Hi all! Excited to test out the responsive layout.', time: '09:15 AM' },
  ],
  announcements: [
    { id: 'a1', author: 'Join Me Team', role: 'Official', text: 'Milestone 1 foundation is officially complete with brand design tokens.', time: 'Yesterday' },
  ],
  'frontend-dev': [
    { id: 'f1', author: 'Frontend Lead', text: 'Remember to check color_rule.md for Navy and Blue tokens.', time: '10:00 AM' },
  ],
}

export const RoomsPage: React.FC = () => {
  const { roomId } = useParams<{ roomId?: string }>()
  const navigate = useNavigate()
  const activeRoomId = roomId || 'general'

  const [rooms] = useState<Room[]>(initialRooms)
  const [messages, setMessages] = useState<Record<string, RoomMessage[]>>(initialRoomMessages)
  const [inputVal, setInputVal] = useState('')

  const currentRoom = rooms.find((r) => r.id === activeRoomId) || rooms[0]
  const roomMsgs = messages[currentRoom.id] || []

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputVal.trim()) return

    const newMsg: RoomMessage = {
      id: Date.now().toString(),
      author: 'Phanith',
      text: inputVal.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }

    setMessages((prev) => ({
      ...prev,
      [currentRoom.id]: [...(prev[currentRoom.id] || []), newMsg],
    }))
    setInputVal('')
  }

  return (
    <div className="flex h-full bg-background">
      {/* Rooms Directory */}
      <div className="w-72 bg-surface border-r border-border flex flex-col shrink-0">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h1 className="text-lg font-bold text-navy">Community Rooms</h1>
          <button
            title="Create Room (Demo)"
            className="p-1.5 bg-subtle text-primary hover:bg-primary hover:text-white rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 p-2 space-y-1 overflow-y-auto">
          {rooms.map((r) => {
            const isSelected = r.id === currentRoom.id
            return (
              <button
                key={r.id}
                onClick={() => navigate(`/rooms/${r.id}`)}
                className={`w-full text-left px-3 py-2.5 rounded-xl flex items-center justify-between transition-colors ${
                  isSelected ? 'bg-subtle text-navy font-semibold' : 'text-muted-foreground hover:bg-background'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <Hash className="w-4 h-4 shrink-0 text-purple" />
                  <span className="text-sm truncate">{r.name}</span>
                </div>
                <span className="text-xs text-muted-foreground bg-surface border border-border px-1.5 py-0.5 rounded-md shrink-0">
                  {r.memberCount}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Room Conversation */}
      <div className="flex-1 flex flex-col min-w-0 bg-background">
        {/* Room Header */}
        <div className="p-4 bg-surface border-b border-border flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Hash className="w-5 h-5 text-purple" />
              <h2 className="text-base font-bold text-foreground">{currentRoom.name}</h2>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">{currentRoom.topic}</p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-background px-3 py-1.5 rounded-lg border border-border">
            <Users className="w-3.5 h-3.5" />
            <span>{currentRoom.memberCount} members</span>
          </div>
        </div>

        {/* Room Message Feed */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {roomMsgs.map((msg) => (
            <div key={msg.id} className="p-3 bg-surface rounded-xl border border-border shadow-2xs">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-navy">{msg.author}</span>
                  {msg.role && (
                    <span className="text-[10px] bg-subtle text-primary px-1.5 py-0.5 rounded flex items-center gap-1 font-medium">
                      <Shield className="w-2.5 h-2.5" />
                      {msg.role}
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-muted-foreground">{msg.time}</span>
              </div>
              <p className="text-sm text-foreground leading-relaxed">{msg.text}</p>
            </div>
          ))}
        </div>

        {/* Room Composer */}
        <form
          onSubmit={handleSend}
          className="p-3 bg-surface border-t border-border flex items-center gap-2"
        >
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder={`Message #${currentRoom.name}...`}
            className="flex-1 px-4 py-2 text-sm bg-background border border-border rounded-xl text-foreground"
          />
          <button
            type="submit"
            disabled={!inputVal.trim()}
            className="p-2.5 bg-primary hover:bg-primary-hover disabled:opacity-50 text-white rounded-xl transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default RoomsPage
