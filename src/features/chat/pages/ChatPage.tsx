import React, { useState } from 'react'
import { Search, Send, Phone, Video, MoreVertical, MessageSquare } from 'lucide-react'

interface Message {
  id: string
  sender: 'me' | 'other'
  text: string
  time: string
}

interface Conversation {
  id: string
  name: string
  avatar: string
  lastMessage: string
  time: string
  unread: number
}

const initialConversations: Conversation[] = [
  {
    id: '1',
    name: 'Sarah Connor',
    avatar: 'SC',
    lastMessage: 'Let’s review the community guidelines soon.',
    time: '10:42 AM',
    unread: 2,
  },
  {
    id: '2',
    name: 'Alex Rivera',
    avatar: 'AR',
    lastMessage: 'Sounds good! See you in the general room.',
    time: 'Yesterday',
    unread: 0,
  },
  {
    id: '3',
    name: 'Community Support',
    avatar: 'CS',
    lastMessage: 'Welcome to Join Me! Reach out if you need help.',
    time: 'Oct 28',
    unread: 0,
  },
]

const initialMessages: Record<string, Message[]> = {
  '1': [
    { id: 'm1', sender: 'other', text: 'Hey Phanith, how is the Join Me web UI coming along?', time: '10:38 AM' },
    { id: 'm2', sender: 'me', text: 'Going great! Foundation, styling tokens, and navigation shells are set up.', time: '10:40 AM' },
    { id: 'm3', sender: 'other', text: 'Let’s review the community guidelines soon.', time: '10:42 AM' },
  ],
}

export const ChatPage: React.FC = () => {
  const [conversations] = useState<Conversation[]>(initialConversations)
  const [selectedId, setSelectedId] = useState<string>('1')
  const [messages, setMessages] = useState<Record<string, Message[]>>(initialMessages)
  const [inputVal, setInputVal] = useState('')

  const activeChat = conversations.find((c) => c.id === selectedId)
  const currentMessages = activeChat ? messages[activeChat.id] || [] : []

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputVal.trim() || !activeChat) return

    const newMsg: Message = {
      id: Date.now().toString(),
      sender: 'me',
      text: inputVal.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }

    setMessages((prev) => ({
      ...prev,
      [activeChat.id]: [...(prev[activeChat.id] || []), newMsg],
    }))
    setInputVal('')
  }

  return (
    <div className="flex h-full bg-background">
      {/* Conversations List */}
      <div className="w-80 bg-surface border-r border-border flex flex-col shrink-0">
        <div className="p-4 border-b border-border">
          <h1 className="text-lg font-bold text-navy mb-3">Chats</h1>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-background border border-border rounded-xl text-foreground"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto divide-y divide-border">
          {conversations.map((c) => {
            const isSelected = c.id === selectedId
            return (
              <button
                key={c.id}
                onClick={() => setSelectedId(c.id)}
                className={`w-full text-left p-3.5 flex items-center gap-3 transition-colors ${
                  isSelected ? 'bg-subtle' : 'hover:bg-background'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold text-xs shrink-0">
                  {c.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold truncate text-foreground">
                      {c.name}
                    </span>
                    <span className="text-[10px] text-muted-foreground shrink-0">{c.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{c.lastMessage}</p>
                </div>
                {c.unread > 0 && (
                  <span className="w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    {c.unread}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Message Area */}
      {activeChat ? (
        <div className="flex-1 flex flex-col min-w-0 bg-background">
          {/* Header */}
          <div className="p-4 bg-surface border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold text-xs shrink-0">
                {activeChat.avatar}
              </div>
              <div>
                <h2 className="text-sm font-semibold text-foreground truncate">
                  {activeChat.name}
                </h2>
                <p className="text-xs text-success flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
                  Active now
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <button title="Voice Call (Future)" className="p-2 hover:bg-subtle rounded-lg">
                <Phone className="w-4 h-4" />
              </button>
              <button title="Video Call (Future)" className="p-2 hover:bg-subtle rounded-lg">
                <Video className="w-4 h-4" />
              </button>
              <button title="More" className="p-2 hover:bg-subtle rounded-lg">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {currentMessages.map((msg) => {
              const isMe = msg.sender === 'me'
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-md px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      isMe
                        ? 'bg-primary text-white rounded-br-sm'
                        : 'bg-surface text-foreground border border-border rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-muted-foreground mt-1 px-1">{msg.time}</span>
                </div>
              )
            })}
          </div>

          {/* Composer */}
          <form
            onSubmit={handleSend}
            className="p-3 bg-surface border-t border-border flex items-center gap-2"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type your message..."
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
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-center p-8 text-muted-foreground">
          <MessageSquare className="w-12 h-12 text-navy/40 mb-3" />
          <h3 className="text-base font-semibold text-foreground">Select a conversation</h3>
          <p className="text-xs mt-1 max-w-sm">
            Choose a contact from the sidebar to view messages or start a new conversation.
          </p>
        </div>
      )}
    </div>
  )
}

export default ChatPage
