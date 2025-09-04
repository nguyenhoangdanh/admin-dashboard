"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  Users,
  Settings,
  Home,
  FileText,
  Calendar,
  Mail,
  HelpCircle,
  X,
  Sparkles,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: Home,
    badge: null,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: TrendingUp,
    badge: "Pro",
  },
  {
    title: "Users",
    href: "/users",
    icon: Users,
    badge: "1.2k",
  },
  {
    title: "Documents",
    href: "/documents",
    icon: FileText,
    badge: null,
  },
  {
    title: "Calendar",
    href: "/calendar",
    icon: Calendar,
    badge: null,
  },
  {
    title: "Messages",
    href: "/messages",
    icon: Mail,
    badge: "12",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
    badge: null,
  },
  {
    title: "Help",
    href: "/help",
    icon: HelpCircle,
    badge: null,
  },
]

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean
  onClose?: () => void
}

export function Sidebar({ className, isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform border-r bg-background/80 backdrop-blur-xl transition-transform duration-300 ease-in-out md:relative md:translate-x-0 shadow-medium",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <div className="hidden md:block">
              <h2 className="font-bold text-lg text-gradient">Dashboard</h2>
              <p className="text-xs text-muted-foreground">Admin Panel</p>
            </div>
          </div>
          {/* Mobile close button */}
          <Button variant="ghost" size="icon" onClick={onClose} className="md:hidden">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <ScrollArea className="h-full">
          <div className="space-y-4 py-6">
            <div className="px-4">
              <nav className="space-y-2">
                {sidebarNavItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => onClose?.()}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all hover:bg-accent/10 group",
                        isActive 
                          ? "bg-primary text-primary-foreground shadow-medium" 
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className={cn(
                          "h-4 w-4 transition-colors",
                          isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground"
                        )} />
                        <span>{item.title}</span>
                      </div>
                      {item.badge && (
                        <Badge 
                          variant={isActive ? "secondary" : "outline"} 
                          className={cn(
                            "text-xs h-5",
                            isActive 
                              ? "bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20" 
                              : "bg-muted text-muted-foreground"
                          )}
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  )
                })}
              </nav>
            </div>

            {/* Bottom section */}
            <div className="px-4 pt-4 border-t border-border/50">
              <div className="rounded-xl bg-gradient-secondary p-4 shadow-soft">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Upgrade to Pro</p>
                    <p className="text-xs text-muted-foreground">Get advanced features</p>
                  </div>
                </div>
                <Button size="sm" className="w-full gradient-primary text-white shadow-medium hover:shadow-large transition-all">
                  Upgrade Now
                </Button>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </>
  )
}
