import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/charts/overview"
import { Activity, CreditCard, DollarSign, Users, TrendingUp, TrendingDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1% from last month",
      icon: DollarSign,
      trend: "up" as const,
      color: "text-green-600",
      bgColor: "bg-green-50",
      darkBgColor: "dark:bg-green-950/20",
    },
    {
      title: "Subscriptions",
      value: "+2,350",
      change: "+180.1% from last month",
      icon: Users,
      trend: "up" as const,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      darkBgColor: "dark:bg-blue-950/20",
    },
    {
      title: "Sales",
      value: "+12,234",
      change: "+19% from last month",
      icon: CreditCard,
      trend: "up" as const,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      darkBgColor: "dark:bg-purple-950/20",
    },
    {
      title: "Active Now",
      value: "+573",
      change: "+201 since last hour",
      icon: Activity,
      trend: "up" as const,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      darkBgColor: "dark:bg-orange-950/20",
    },
  ]

  const recentSales = [
    { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00", avatar: "OM" },
    { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00", avatar: "JL" },
    { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00", avatar: "IN" },
    { name: "William Kim", email: "will@email.com", amount: "+$99.00", avatar: "WK" },
    { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00", avatar: "SD" },
  ]

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Live
          </Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Welcome back! Here's an overview of your metrics.
        </p>
      </div>
      
      {/* Metrics Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title} className="card-modern hover:scale-105 transition-transform">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${metric.bgColor} ${metric.darkBgColor}`}>
                <metric.icon className={`h-4 w-4 ${metric.color}`} />
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-3xl font-bold">{metric.value}</div>
              <div className="flex items-center space-x-2">
                {metric.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 text-green-500" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500" />
                )}
                <p className="text-xs text-muted-foreground">{metric.change}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Charts and Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-7">
        <Card className="lg:col-span-4 card-modern">
          <CardHeader className="space-y-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Overview</CardTitle>
              <Badge variant="outline" className="text-xs">
                Last 7 months
              </Badge>
            </div>
            <CardDescription>
              Revenue performance and growth trends
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-3 card-modern">
          <CardHeader className="space-y-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Recent Sales</CardTitle>
              <Badge variant="secondary" className="text-xs">
                265 this month
              </Badge>
            </div>
            <CardDescription>
              Latest customer transactions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentSales.map((sale, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white text-sm font-semibold">
                    {sale.avatar}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{sale.name}</p>
                    <p className="text-xs text-muted-foreground">{sale.email}</p>
                  </div>
                  <div className="text-sm font-semibold text-green-600">
                    {sale.amount}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}