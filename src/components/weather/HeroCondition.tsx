import { AnimatePresence, motion } from "framer-motion"
import { getConditionIcon } from "@/lib/weather-icons"
import type { WeatherResults } from "@/types/weather"

type HeroConditionProps = {
  data: WeatherResults
}

export function HeroCondition({ data }: HeroConditionProps) {
  const icon = getConditionIcon(data.condition_slug)

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={`${data.city_name}-${data.condition_slug}-${data.temp}`}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-2xl border border-border bg-card"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${icon})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 8% center",
            backgroundSize: "min(42vw, 280px)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-card via-card/90 to-card/40" />

        <div className="relative flex flex-col gap-6 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-1">
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {data.city_name}
            </h2>
            <p className="text-muted-foreground">{data.description}</p>
          </div>

          <p className="font-display text-6xl font-semibold tracking-tighter text-primary sm:text-7xl lg:text-8xl">
            {data.temp}
            <span className="ml-1 text-3xl text-muted-foreground sm:text-4xl">
              °C
            </span>
          </p>

          <p className="text-sm text-muted-foreground">
            {data.date} · {data.time}
            {data.currently ? ` · ${data.currently}` : null}
          </p>
        </div>
      </motion.section>
    </AnimatePresence>
  )
}
