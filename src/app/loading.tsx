export default function Loading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div>
        <div className="h-8 w-48 rounded bg-muted" />
        <div className="mt-2 h-4 w-64 rounded bg-muted" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="h-4 w-24 rounded bg-muted" />
              <div className="h-4 w-4 rounded bg-muted" />
            </div>
            <div className="mt-4 h-6 w-20 rounded bg-muted" />
            <div className="mt-2 h-3 w-28 rounded bg-muted" />
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 rounded-lg border p-4">
          <div className="h-5 w-32 rounded bg-muted" />
          <div className="mt-2 h-4 w-56 rounded bg-muted" />
          <div className="mt-6 h-[300px] w-full rounded bg-muted" />
        </div>
        <div className="col-span-3 rounded-lg border p-4">
          <div className="h-5 w-40 rounded bg-muted" />
          <div className="mt-2 h-4 w-56 rounded bg-muted" />
          <div className="mt-6 space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="h-4 w-32 rounded bg-muted" />
                <div className="h-4 w-12 rounded bg-muted" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
