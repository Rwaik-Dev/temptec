import { useState } from "react"
import { motion } from "framer-motion"
import { AlertCircleIcon } from "lucide-react"
import { CityCombobox } from "@/components/city/CityCombobox"
import { AppShell } from "@/components/layout/AppShell"
import { ForecastChart } from "@/components/weather/ForecastChart"
import { HeroCondition } from "@/components/weather/HeroCondition"
import { MetricGrid } from "@/components/weather/MetricGrid"
import { WeatherSkeleton } from "@/components/weather/WeatherSkeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { DEFAULT_WOEID } from "@/data/capitals"
import { useWeather } from "@/hooks/useWeather"

export default function App() {
  const [woeid, setWoeid] = useState(DEFAULT_WOEID)
  const { data, loading, error } = useWeather(woeid)
  const isInitialLoad = loading && !data

  return (
    <AppShell>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex flex-col gap-2"
      >
        <label className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Capital
        </label>
        <CityCombobox value={woeid} onChange={setWoeid} disabled={loading} />
      </motion.div>

      {error ? (
        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle>Erro ao carregar</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : null}

      {isInitialLoad ? (
        <WeatherSkeleton />
      ) : data ? (
        <div
          className={`flex flex-col gap-6 transition-opacity duration-300 ${loading ? "opacity-60" : "opacity-100"}`}
        >
          <HeroCondition data={data} />
          <MetricGrid data={data} />
          <ForecastChart
            cityName={data.city_name}
            forecast={data.forecast ?? []}
          />
        </div>
      ) : null}
    </AppShell>
  )
}
