"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  className?: string
  currentPage: number
  pageSize: number
  totalItems: number
  onPageChange: (page: number) => void
  onPageSizeChange?: (size: number) => void
  pageSizeOptions?: number[]
}

export function Pagination({
  className,
  currentPage,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [5, 10, 20, 50, 100],
}: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize))

  const canPrev = currentPage > 1
  const canNext = currentPage < totalPages

  const goTo = (page: number) => {
    const next = Math.min(Math.max(1, page), totalPages)
    if (next !== currentPage) onPageChange(next)
  }

  // Build compact page list: 1 ... prev, current, next ... last
  const pages: (number | "ellipsis")[] = React.useMemo(() => {
    const items: (number | "ellipsis")[] = []
    const window = 1
    const start = Math.max(2, currentPage - window)
    const end = Math.min(totalPages - 1, currentPage + window)

    items.push(1)
    if (start > 2) items.push("ellipsis")
    for (let p = start; p <= end; p++) items.push(p)
    if (end < totalPages - 1) items.push("ellipsis")
    if (totalPages > 1) items.push(totalPages)

    // Ensure current page visible if 1 or last
    if (currentPage !== 1 && currentPage !== totalPages && !items.includes(currentPage)) {
      items.splice(1, 0, currentPage)
    }

    // Deduplicate
    return items.filter((v, i, a) => a.indexOf(v) === i)
  }, [currentPage, totalPages])

  const from = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1
  const to = Math.min(currentPage * pageSize, totalItems)

  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", className)}>
      <div className="text-sm text-muted-foreground">
        Showing <span className="font-medium text-foreground">{from}</span>–<span className="font-medium text-foreground">{to}</span> of <span className="font-medium text-foreground">{totalItems}</span>
      </div>

      <div className="flex items-center gap-2">
        {onPageSizeChange && (
          <select
            aria-label="Items per page"
            className="h-9 rounded-md border bg-background px-2 text-sm"
            value={pageSize}
            onChange={(e) => onPageSizeChange(parseInt(e.target.value))}
          >
            {pageSizeOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}/page</option>
            ))}
          </select>
        )}
        <div className="flex items-center gap-1">
          <Button variant="outline" size="sm" onClick={() => goTo(currentPage - 1)} disabled={!canPrev} aria-label="Previous page">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {pages.map((p, idx) => (
            p === "ellipsis" ? (
              <span key={`e-${idx}`} className="px-2 text-muted-foreground">…</span>
            ) : (
              <Button
                key={p}
                variant={p === currentPage ? "default" : "outline"}
                size="sm"
                onClick={() => goTo(p)}
                aria-current={p === currentPage ? "page" : undefined}
                aria-label={`Page ${p}`}
              >
                {p}
              </Button>
            )
          ))}
          <Button variant="outline" size="sm" onClick={() => goTo(currentPage + 1)} disabled={!canNext} aria-label="Next page">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
