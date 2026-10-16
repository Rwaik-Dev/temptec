import axios from "axios"
import type { WeatherResponse, WeatherResults } from "@/types/weather"

const apiKey = import.meta.env.VITE_HG_BRASIL_KEY?.trim() ?? ""

const client = axios.create({
  baseURL: "https://api.hgbrasil.com/weather",
  params: {
    format: "json-cors",
    ...(apiKey ? { key: apiKey } : {}),
  },
})

export async function fetchWeatherByWoeid(
  woeid: number,
): Promise<WeatherResults> {
  const { data } = await client.get<WeatherResponse>("", {
    params: { woeid },
  })

  if (!data?.results) {
    throw new Error("Resposta inválida da API de clima.")
  }

  return data.results
}

export function getWeatherErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const message = error.response?.data?.message
    if (typeof message === "string" && message.length > 0) {
      return message
    }
    if (error.code === "ERR_NETWORK") {
      return "Falha de rede ao consultar a previsão."
    }
  }
  if (error instanceof Error && error.message) {
    return error.message
  }
  return "Não foi possível carregar a previsão."
}
