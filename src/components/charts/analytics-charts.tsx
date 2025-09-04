"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const revenueData = [
  { name: "Jan", total: 45000, target: 40000 },
  { name: "Feb", total: 38000, target: 42000 },
  { name: "Mar", total: 52000, target: 45000 },
  { name: "Apr", total: 47000, target: 48000 },
  { name: "May", total: 61000, target: 50000 },
  { name: "Jun", total: 55000, target: 52000 },
  { name: "Jul", total: 72000, target: 55000 },
  { name: "Aug", total: 68000, target: 58000 },
  { name: "Sep", total: 79000, target: 60000 },
  { name: "Oct", total: 75000, target: 62000 },
  { name: "Nov", total: 85000, target: 65000 },
  { name: "Dec", total: 92000, target: 68000 },
]

const trafficData = [
  { name: "Mon", visitors: 2400, pageViews: 4800, bounceRate: 42 },
  { name: "Tue", visitors: 1398, pageViews: 3200, bounceRate: 38 },
  { name: "Wed", visitors: 9800, pageViews: 14200, bounceRate: 45 },
  { name: "Thu", visitors: 3908, pageViews: 7800, bounceRate: 41 },
  { name: "Fri", visitors: 4800, pageViews: 9600, bounceRate: 39 },
  { name: "Sat", visitors: 3800, pageViews: 7200, bounceRate: 46 },
  { name: "Sun", visitors: 4300, pageViews: 8400, bounceRate: 43 },
]

const conversionData = [
  { name: "Awareness", value: 10000, fill: "#3b82f6" },
  { name: "Interest", value: 7500, fill: "#8b5cf6" },
  { name: "Consideration", value: 5000, fill: "#06b6d4" },
  { name: "Purchase", value: 2500, fill: "#10b981" },
  { name: "Retention", value: 1800, fill: "#f59e0b" },
]

interface AnalyticsChartsProps {
  type: "revenue" | "traffic" | "conversion"
}

export function AnalyticsCharts({ type }: AnalyticsChartsProps) {
  if (type === "revenue") {
    return (
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart
          data={revenueData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value / 1000}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
            formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
          />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#3b82f6"
            fillOpacity={1}
            fill="url(#colorRevenue)"
            strokeWidth={2}
            name="Actual Revenue"
          />
          <Area
            type="monotone"
            dataKey="target"
            stroke="#10b981"
            fillOpacity={1}
            fill="url(#colorTarget)"
            strokeWidth={2}
            name="Target Revenue"
          />
        </AreaChart>
      </ResponsiveContainer>
    )
  }

  if (type === "traffic") {
    return (
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={trafficData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Bar dataKey="visitors" fill="#3b82f6" name="Visitors" />
          <Bar dataKey="pageViews" fill="#8b5cf6" name="Page Views" />
        </BarChart>
      </ResponsiveContainer>
    )
  }

  if (type === "conversion") {
    return (
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={conversionData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {conversionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    )
  }

  return null
}