import { Skeleton } from "@/components/ui/skeleton"

export function WeatherSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      <Skeleton className="h-[280px] w-full rounded-2xl" />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-24 rounded-xl" />
        ))}
      </div>
      <Skeleton className="h-[400px] w-full rounded-2xl" />
    </div>
  )
}
