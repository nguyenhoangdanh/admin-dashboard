"use client"

import { useState } from "react"
import { Header } from "./header"
import { Sidebar } from "./sidebar"
import { Breadcrumb } from "./breadcrumb"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header onMenuToggle={() => setSidebarOpen(true)} />
      <div className="flex-1 flex">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)}
          className="md:block"
        />
        <main className="flex-1 p-4 md:p-6 overflow-x-hidden">
          <Breadcrumb />
          {children}
        </main>
      </div>
    </div>
  )
}