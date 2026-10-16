import { motion } from "framer-motion"
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import type { ForecastDay } from "@/types/weather"

type ForecastChartProps = {
  cityName: string
  forecast: ForecastDay[]
}

export function ForecastChart({ cityName, forecast }: ForecastChartProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-4 rounded-2xl border border-border bg-card/70 p-4 backdrop-blur-sm sm:p-6"
    >
      <div className="flex flex-col gap-1">
        <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
          Previsão — {cityName}
        </h3>
        <p className="text-sm text-muted-foreground">
          Próximos {forecast.length} dias
        </p>
      </div>

      <div className="h-[340px] w-full sm:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={forecast} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="oklch(0.94 0.008 240 / 8%)" strokeDasharray="4 4" />
            <XAxis
              dataKey="weekday"
              tick={{ fill: "oklch(0.68 0.02 240)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "oklch(0.68 0.02 240)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              width={36}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "oklch(0.18 0.018 250)",
                border: "1px solid oklch(0.94 0.008 240 / 10%)",
                borderRadius: "0.75rem",
                color: "oklch(0.94 0.008 240)",
              }}
              labelStyle={{ fontWeight: 600 }}
            />
            <Legend
              wrapperStyle={{ paddingTop: 12, fontSize: 12 }}
            />
            <Line
              type="monotone"
              dataKey="max"
              name="Temp. máxima"
              stroke="var(--chart-1)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="min"
              name="Temp. mínima"
              stroke="var(--chart-2)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="cloudiness"
              name="Nebulosidade"
              stroke="var(--chart-3)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="rain"
              name="Nível de chuva"
              stroke="var(--chart-4)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="rain_probability"
              name="Prob. de chuva"
              stroke="var(--chart-5)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.section>
  )
}
