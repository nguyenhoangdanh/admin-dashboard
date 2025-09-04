import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Modern Admin Dashboard</h1>
        <p className="text-xl text-muted-foreground">
          Production-ready template for SaaS, CRM, HRM & internal tools
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/dashboard">View Dashboard</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}