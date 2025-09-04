import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Convert array of objects to CSV string with header
export function toCsv<T extends Record<string, any>>(rows: T[], columns?: { key: keyof T; label?: string }[]): string {
  if (!rows.length) return ""
  const cols: { key: keyof T; label: string }[] = columns
    ? columns.map((c) => ({ key: c.key, label: String(c.label ?? c.key) }))
    : Object.keys(rows[0]).map((k) => ({ key: k as keyof T, label: k }))

  const escape = (val: any) => {
    if (val === null || val === undefined) return ""
    const s = String(val)
    if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}` + '"'
    return s
  }

  const header = cols.map((c) => escape(c.label)).join(",")
  const body = rows
    .map((r) => cols.map((c) => escape(r[c.key])).join(","))
    .join("\n")
  return `${header}\n${body}`
}

export function downloadCsv(filename: string, csv: string) {
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  a.style.display = "none"
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
