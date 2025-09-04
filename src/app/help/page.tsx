"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { 
  Search, 
  Book, 
  MessageCircle, 
  Mail, 
  Phone,
  ExternalLink,
  FileText,
  Video,
  ChevronRight,
  Star,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react"

const faqData = [
  {
    question: "How do I reset my password?",
    answer: "You can reset your password by going to Settings > Security > Password & Authentication. Click 'Update Password' and follow the instructions.",
    category: "Account"
  },
  {
    question: "How do I invite team members?",
    answer: "Navigate to Settings > Team Management and click 'Invite Member'. Enter their email address and select their role permissions.",
    category: "Team Management"
  },
  {
    question: "Can I export my data?",
    answer: "Yes, you can export your data by going to Settings > Advanced > Data & Privacy and clicking 'Request Data Export'.",
    category: "Data"
  },
  {
    question: "How do I enable two-factor authentication?",
    answer: "Go to Settings > Security > Two-Factor Authentication and toggle the switch. Follow the setup instructions using your authenticator app.",
    category: "Security"
  },
  {
    question: "What file types can I upload?",
    answer: "You can upload PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, JPG, PNG, GIF, and most common file types. Maximum file size is 100MB.",
    category: "Documents"
  },
  {
    question: "How do I change my notification preferences?",
    answer: "Go to Settings > Notifications and customize your email and push notification preferences for different types of activities.",
    category: "Notifications"
  }
]

const supportTickets = [
  {
    id: "TKT-001",
    subject: "Unable to upload large files",
    status: "Open",
    priority: "High",
    created: "2 hours ago",
    lastUpdate: "1 hour ago"
  },
  {
    id: "TKT-002", 
    subject: "Calendar sync issues",
    status: "In Progress",
    priority: "Medium",
    created: "1 day ago",
    lastUpdate: "4 hours ago"
  },
  {
    id: "TKT-003",
    subject: "Feature request: Dark mode",
    status: "Resolved",
    priority: "Low",
    created: "3 days ago",
    lastUpdate: "2 days ago"
  }
]

const helpCategories = [
  {
    title: "Getting Started",
    description: "Basic setup and first steps",
    icon: <Book className="h-6 w-6" />,
    articles: 12
  },
  {
    title: "User Management",
    description: "Adding and managing team members",
    icon: <MessageCircle className="h-6 w-6" />,
    articles: 8
  },
  {
    title: "Security",
    description: "Account security and privacy",
    icon: <CheckCircle className="h-6 w-6" />,
    articles: 6
  },
  {
    title: "Integrations",
    description: "Connect with third-party tools",
    icon: <ExternalLink className="h-6 w-6" />,
    articles: 15
  },
  {
    title: "Billing & Subscriptions",
    description: "Manage your account and billing",
    icon: <FileText className="h-6 w-6" />,
    articles: 9
  },
  {
    title: "Troubleshooting",
    description: "Common issues and solutions",
    icon: <AlertCircle className="h-6 w-6" />,
    articles: 18
  }
]

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || faq.category.toLowerCase() === selectedCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      Open: "bg-blue-100 text-blue-800",
      "In Progress": "bg-yellow-100 text-yellow-800",
      Resolved: "bg-green-100 text-green-800",
      Closed: "bg-gray-100 text-gray-800",
    }
    return statusConfig[status as keyof typeof statusConfig] || "bg-gray-100 text-gray-800"
  }

  const getPriorityBadge = (priority: string) => {
    const priorityConfig = {
      High: "bg-red-100 text-red-800",
      Medium: "bg-yellow-100 text-yellow-800",
      Low: "bg-green-100 text-green-800",
    }
    return priorityConfig[priority as keyof typeof priorityConfig] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
          <p className="text-muted-foreground">
            Find answers to your questions and get the help you need.
          </p>
        </div>
        <Button>
          <MessageCircle className="mr-2 h-4 w-4" />
          Contact Support
        </Button>
      </div>

      {/* Quick Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search help articles and FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full"
            />
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="browse" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="browse">Browse Help</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
          <TabsTrigger value="tickets">Support Tickets</TabsTrigger>
        </TabsList>

        {/* Browse Help */}
        <TabsContent value="browse" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {helpCategories.map((category, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{category.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {category.articles} articles
                        </span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Popular Articles</CardTitle>
              <CardDescription>
                Most viewed help articles this week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { title: "Getting Started Guide", views: "2.1k", rating: 4.8 },
                  { title: "How to Set Up Team Permissions", views: "1.8k", rating: 4.9 },
                  { title: "Integrating with Third-Party Tools", views: "1.5k", rating: 4.7 },
                  { title: "Understanding Your Dashboard", views: "1.2k", rating: 4.6 },
                  { title: "Troubleshooting Common Issues", views: "1.1k", rating: 4.5 },
                ].map((article, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{article.title}</p>
                        <p className="text-sm text-muted-foreground">{article.views} views</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground">{article.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Video className="mr-2 h-5 w-5" />
                  Video Tutorials
                </CardTitle>
                <CardDescription>
                  Learn with step-by-step video guides
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { title: "Dashboard Overview", duration: "5:30" },
                    { title: "Setting Up Your First Project", duration: "12:15" },
                    { title: "Team Collaboration Features", duration: "8:45" },
                  ].map((video, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-muted/50 cursor-pointer">
                      <div className="w-16 h-12 bg-gray-200 rounded flex items-center justify-center">
                        <Video className="h-4 w-4 text-gray-500" />
                      </div>
                      <div>
                        <p className="font-medium">{video.title}</p>
                        <p className="text-sm text-muted-foreground">{video.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
                <CardDescription>
                  Frequently accessed resources
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    "API Documentation",
                    "Feature Roadmap",
                    "System Status",
                    "Security Best Practices",
                    "Keyboard Shortcuts",
                    "Release Notes"
                  ].map((link, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-muted/50 cursor-pointer">
                      <span className="text-sm">{link}</span>
                      <ExternalLink className="h-3 w-3 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* FAQ */}
        <TabsContent value="faq" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>
                Find quick answers to common questions
              </CardDescription>
              <div className="flex items-center space-x-4">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="account">Account</SelectItem>
                    <SelectItem value="team management">Team Management</SelectItem>
                    <SelectItem value="security">Security</SelectItem>
                    <SelectItem value="data">Data</SelectItem>
                    <SelectItem value="documents">Documents</SelectItem>
                    <SelectItem value="notifications">Notifications</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {filteredFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-2">
                        <span>{faq.question}</span>
                        <Badge variant="outline" className="ml-auto">
                          {faq.category}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Contact Us */}
        <TabsContent value="contact" className="space-y-4">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Send us a message and we'll get back to you soon.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing Question</SelectItem>
                      <SelectItem value="feature">Feature Request</SelectItem>
                      <SelectItem value="bug">Bug Report</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your question or issue..."
                    rows={5}
                  />
                </div>

                <Button className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Other Ways to Reach Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Email Support</p>
                      <p className="text-sm text-muted-foreground">support@example.com</p>
                      <p className="text-xs text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Phone Support</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-xs text-muted-foreground">Mon-Fri, 9AM-6PM PST</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Live Chat</p>
                      <p className="text-sm text-muted-foreground">Available 24/7</p>
                      <Button variant="outline" size="sm" className="mt-1">
                        Start Chat
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Support Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Monday - Friday</span>
                      <span className="text-sm text-muted-foreground">9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Saturday</span>
                      <span className="text-sm text-muted-foreground">10:00 AM - 4:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Sunday</span>
                      <span className="text-sm text-muted-foreground">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Support Tickets */}
        <TabsContent value="tickets" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Support Tickets</CardTitle>
              <CardDescription>
                Track the status of your support requests
              </CardDescription>
              <Button className="ml-auto">
                <MessageCircle className="mr-2 h-4 w-4" />
                New Ticket
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {supportTickets.map((ticket) => (
                  <div key={ticket.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium">{ticket.subject}</h4>
                        <p className="text-sm text-muted-foreground">Ticket #{ticket.id}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusBadge(ticket.status)}>
                          {ticket.status}
                        </Badge>
                        <Badge className={getPriorityBadge(ticket.priority)}>
                          {ticket.priority}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>Created {ticket.created}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="h-3 w-3" />
                        <span>Updated {ticket.lastUpdate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}