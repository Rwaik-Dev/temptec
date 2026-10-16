export type ForecastDay = {
  date: string
  weekday: string
  max: number
  min: number
  cloudiness: number
  rain: number
  rain_probability: number
  description?: string
  condition?: string
  wind_speedy?: string
  humidity?: number
}

export type WeatherResults = {
  temp: number
  date: string
  time: string
  description: string
  currently: string
  city: string
  city_name: string
  humidity: number
  cloudiness: number
  rain: number
  wind_speedy: string
  wind_direction: number
  condition_slug: string
  sunrise?: string
  sunset?: string
  forecast: ForecastDay[]
}

export type WeatherResponse = {
  by: string
  valid_key: boolean
  results: WeatherResults
}
