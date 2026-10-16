import { useEffect, useState } from "react"
import { fetchWeatherByWoeid, getWeatherErrorMessage } from "@/lib/api"
import type { WeatherResults } from "@/types/weather"

type WeatherState = {
  data: WeatherResults | null
  loading: boolean
  error: string | null
}

export function useWeather(woeid: number): WeatherState {
  const [data, setData] = useState<WeatherResults | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      setError(null)

      try {
        const results = await fetchWeatherByWoeid(woeid)
        if (!cancelled) {
          setData(results)
        }
      } catch (err) {
        if (!cancelled) {
          setError(getWeatherErrorMessage(err))
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    void load()

    return () => {
      cancelled = true
    }
  }, [woeid])

  return { data, loading, error }
}
