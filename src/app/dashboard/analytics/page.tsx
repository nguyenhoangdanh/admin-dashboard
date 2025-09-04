"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnalyticsCharts } from "@/components/charts/analytics-charts"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  ShoppingCart, 
  Eye,
  Target,
  Clock,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"

export default function AnalyticsPage() {
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
      title: "Total Users", 
      value: "2,350",
      change: "+180.1% from last month",
      icon: Users,
      trend: "up" as const,
      color: "text-blue-600",
      bgColor: "bg-blue-50", 
      darkBgColor: "dark:bg-blue-950/20",
    },
    {
      title: "Orders",
      value: "12,234", 
      change: "-4.3% from last month",
      icon: ShoppingCart,
      trend: "down" as const,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      darkBgColor: "dark:bg-purple-950/20",
    },
    {
      title: "Page Views",
      value: "573,289",
      change: "+201.3% from last month", 
      icon: Eye,
      trend: "up" as const,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      darkBgColor: "dark:bg-orange-950/20",
    },
  ]

  const secondaryMetrics = [
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "+0.4% from last month",
      icon: Target,
      trend: "up" as const,
    },
    {
      title: "Avg. Session Duration", 
      value: "4m 32s",
      change: "+12s from last month",
      icon: Clock,
      trend: "up" as const,
    },
    {
      title: "Bounce Rate",
      value: "42.3%",
      change: "-2.1% from last month",
      icon: TrendingDown,
      trend: "down" as const,
    },
  ]

  const topPages = [
    { path: "/dashboard", views: "12,234", change: "+12%" },
    { path: "/products", views: "9,876", change: "+8%" },
    { path: "/analytics", views: "7,654", change: "+15%" },
    { path: "/users", views: "5,432", change: "+5%" },
    { path: "/settings", views: "3,210", change: "-2%" },
  ]

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <h1 className="text-4xl font-bold tracking-tight">Analytics</h1>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            <BarChart3 className="h-3 w-3 mr-1" />
            Pro
          </Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Comprehensive insights and performance metrics for your business.
        </p>
      </div>

      {/* Primary KPI Cards */}
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
                  <ArrowUpRight className="h-3 w-3 text-green-500" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-red-500" />
                )}
                <p className={`text-xs ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                  {metric.change}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Enhanced Analytics Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
          <TabsTrigger value="conversion">Conversion</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-7">
            <Card className="lg:col-span-4 card-modern">
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Revenue Overview</CardTitle>
                  <Badge variant="outline" className="text-xs">12 months</Badge>
                </div>
                <CardDescription>
                  Monthly revenue trends and performance insights
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <AnalyticsCharts type="revenue" />
              </CardContent>
            </Card>

            <Card className="lg:col-span-3 card-modern">
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Top Performing Pages</CardTitle>
                  <Badge variant="secondary" className="text-xs">This month</Badge>
                </div>
                <CardDescription>
                  Most visited pages and traffic insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPages.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{item.path}</p>
                        <p className="text-xs text-muted-foreground">{item.views} views</p>
                      </div>
                      <div className={`text-xs font-medium ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {item.change}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Secondary Metrics */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {secondaryMetrics.map((metric) => (
              <Card key={metric.title} className="card-modern">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {metric.title}
                  </CardTitle>
                  <div className="p-2 rounded-lg bg-muted/50">
                    <metric.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="flex items-center space-x-2">
                    {metric.trend === "up" ? (
                      <ArrowUpRight className="h-3 w-3 text-green-500" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3 text-green-500" />
                    )}
                    <p className="text-xs text-green-600">{metric.change}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <Card className="card-modern">
            <CardHeader>
              <CardTitle>Revenue Analytics</CardTitle>
              <CardDescription>
                Detailed revenue breakdown and trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AnalyticsCharts type="revenue" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="traffic" className="space-y-6">
          <Card className="card-modern">
            <CardHeader>
              <CardTitle>Traffic Analytics</CardTitle>
              <CardDescription>
                Website traffic patterns and user behavior
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AnalyticsCharts type="traffic" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conversion" className="space-y-6">
          <Card className="card-modern">
            <CardHeader>
              <CardTitle>Conversion Analytics</CardTitle>
              <CardDescription>
                Conversion rates and funnel performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AnalyticsCharts type="conversion" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}