"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Search, 
  Send, 
  Paperclip, 
  MoreHorizontal, 
  Phone, 
  Video,
  Mail,
  MessageSquare,
  Bell,
  Settings,
  Plus,
  Circle,
  Smile
} from "lucide-react"

const conversations = [
  {
    id: 1,
    name: "John Doe",
    avatar: "/avatars/01.png",
    lastMessage: "Hey, how's the project going?",
    timestamp: "2 min ago",
    unread: 2,
    online: true,
    type: "direct"
  },
  {
    id: 2,
    name: "Marketing Team",
    avatar: "/avatars/team.png",
    lastMessage: "Sarah: The campaign results look great!",
    timestamp: "15 min ago",
    unread: 0,
    online: false,
    type: "group",
    members: 8
  },
  {
    id: 3,
    name: "Jane Smith",
    avatar: "/avatars/02.png",
    lastMessage: "Can we schedule a meeting for tomorrow?",
    timestamp: "1 hour ago",
    unread: 1,
    online: true,
    type: "direct"
  },
  {
    id: 4,
    name: "Development Team",
    avatar: "/avatars/dev-team.png",
    lastMessage: "Bob: Code review completed ✅",
    timestamp: "2 hours ago",
    unread: 0,
    online: false,
    type: "group",
    members: 12
  },
  {
    id: 5,
    name: "Alice Brown",
    avatar: "/avatars/03.png",
    lastMessage: "Thanks for the quick response!",
    timestamp: "1 day ago",
    unread: 0,
    online: false,
    type: "direct"
  },
]

const messages = [
  {
    id: 1,
    sender: "John Doe",
    content: "Hey, how's the project going?",
    timestamp: "10:30 AM",
    isOwn: false,
    avatar: "/avatars/01.png"
  },
  {
    id: 2,
    sender: "You",
    content: "Going well! Just finished the user authentication module.",
    timestamp: "10:32 AM",
    isOwn: true,
    avatar: "/avatars/you.png"
  },
  {
    id: 3,
    sender: "You",
    content: "Should be ready for testing by end of week.",
    timestamp: "10:32 AM",
    isOwn: true,
    avatar: "/avatars/you.png"
  },
  {
    id: 4,
    sender: "John Doe",
    content: "That's great! Let me know when you need any help with testing.",
    timestamp: "10:35 AM",
    isOwn: false,
    avatar: "/avatars/01.png"
  },
  {
    id: 5,
    sender: "John Doe",
    content: "Also, can you review the design mockups I sent yesterday?",
    timestamp: "10:36 AM",
    isOwn: false,
    avatar: "/avatars/01.png"
  },
]

const notifications = [
  {
    id: 1,
    title: "New message from Marketing Team",
    description: "Sarah shared campaign results",
    time: "5 min ago",
    read: false,
    type: "message"
  },
  {
    id: 2,
    title: "Meeting reminder",
    description: "Team standup in 15 minutes",
    time: "10 min ago",
    read: true,
    type: "reminder"
  },
  {
    id: 3,
    title: "Document shared",
    description: "Alice shared 'Q4 Report.pdf'",
    time: "1 hour ago",
    read: false,
    type: "file"
  },
]

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])
  const [messageInput, setMessageInput] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Add message logic here
      setMessageInput("")
    }
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <h1 className="text-4xl font-bold tracking-tight">Messages</h1>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              <MessageSquare className="h-3 w-3 mr-1" />
              {conversations.reduce((total, conv) => total + conv.unread, 0)} new
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Stay connected with your team and manage communications.
          </p>
        </div>
        <Button className="gradient-primary text-white shadow-medium hover:shadow-large transition-all">
          <Plus className="mr-2 h-4 w-4" />
          New Message
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="card-modern hover:scale-105 transition-transform">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Unread Messages</CardTitle>
            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/20">
              <MessageSquare className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-3xl font-bold">
              {conversations.reduce((total, conv) => total + conv.unread, 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              Across {conversations.filter(c => c.unread > 0).length} conversations
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Chats</CardTitle>
            <Circle className="h-4 w-4 text-green-500 fill-current" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {conversations.filter(c => c.online).length}
            </div>
            <p className="text-xs text-muted-foreground">
              People online now
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Group Chats</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {conversations.filter(c => c.type === "group").length}
            </div>
            <p className="text-xs text-muted-foreground">
              Team conversations
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Notifications</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {notifications.filter(n => !n.read).length}
            </div>
            <p className="text-xs text-muted-foreground">
              Pending alerts
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="messages" className="space-y-4">
        <TabsList>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="messages" className="space-y-4">
          <div className="grid gap-6 lg:grid-cols-4">
            {/* Conversations List */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Conversations</CardTitle>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search conversations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-[500px]">
                    <div className="space-y-1 p-3">
                      {filteredConversations.map((conversation) => (
                        <div
                          key={conversation.id}
                          onClick={() => setSelectedConversation(conversation)}
                          className={`p-3 rounded-lg cursor-pointer transition-colors ${
                            selectedConversation?.id === conversation.id
                              ? "bg-primary/10 border-primary"
                              : "hover:bg-muted/50"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="relative">
                              <Avatar>
                                <AvatarImage src={conversation.avatar} alt={conversation.name} />
                                <AvatarFallback>
                                  {conversation.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              {conversation.online && (
                                <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-background"></div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <p className="font-medium truncate">{conversation.name}</p>
                                <span className="text-xs text-muted-foreground">
                                  {conversation.timestamp}
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <p className="text-sm text-muted-foreground truncate">
                                  {conversation.lastMessage}
                                </p>
                                {conversation.unread > 0 && (
                                  <Badge variant="destructive" className="text-xs">
                                    {conversation.unread}
                                  </Badge>
                                )}
                              </div>
                              {conversation.type === "group" && (
                                <p className="text-xs text-muted-foreground">
                                  {conversation.members} members
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-3">
              <Card className="h-[600px] flex flex-col">
                {/* Chat Header */}
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={selectedConversation.avatar} alt={selectedConversation.name} />
                        <AvatarFallback>
                          {selectedConversation.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{selectedConversation.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {selectedConversation.online ? "Online" : "Last seen 1 hour ago"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages */}
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}
                      >
                        <div className={`flex items-start space-x-2 max-w-[70%] ${
                          message.isOwn ? "flex-row-reverse space-x-reverse" : ""
                        }`}>
                          {!message.isOwn && (
                            <Avatar className="w-8 h-8">
                              <AvatarImage src={message.avatar} alt={message.sender} />
                              <AvatarFallback>
                                {message.sender.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                          )}
                          <div className={`rounded-lg px-3 py-2 ${
                            message.isOwn
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted"
                          }`}>
                            <p className="text-sm">{message.content}</p>
                            <p className={`text-xs mt-1 ${
                              message.isOwn 
                                ? "text-primary-foreground/70" 
                                : "text-muted-foreground"
                            }`}>
                              {message.timestamp}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                {/* Message Input */}
                <div className="border-t p-4">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Input
                      placeholder="Type a message..."
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button variant="ghost" size="icon">
                      <Smile className="h-4 w-4" />
                    </Button>
                    <Button onClick={handleSendMessage}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Stay updated with important alerts and messages.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-lg border ${
                      !notification.read ? "bg-blue-50 border-blue-200" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          !notification.read ? "bg-blue-500" : "bg-gray-300"
                        }`}></div>
                        <div>
                          <h4 className="font-medium">{notification.title}</h4>
                          <p className="text-sm text-muted-foreground">{notification.description}</p>
                          <span className="text-xs text-muted-foreground">{notification.time}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Mark as read
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Message Settings</CardTitle>
              <CardDescription>
                Configure your messaging preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Notification Preferences</h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span className="text-sm">Email notifications for new messages</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span className="text-sm">Push notifications</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Desktop notifications</span>
                  </label>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium">Privacy Settings</h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span className="text-sm">Show online status</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span className="text-sm">Read receipts</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Allow message previews</span>
                  </label>
                </div>
              </div>
              <Button>Save Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}