import { motion } from "framer-motion"
import {
  CloudIcon,
  CloudRainIcon,
  CompassIcon,
  DropletsIcon,
  WindIcon,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { WeatherResults } from "@/types/weather"

type Metric = {
  label: string
  value: string
  icon: LucideIcon
}

type MetricGridProps = {
  data: WeatherResults
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function MetricGrid({ data }: MetricGridProps) {
  const metrics: Metric[] = [
    {
      label: "Direção do vento",
      value: `${data.wind_direction}°`,
      icon: CompassIcon,
    },
    {
      label: "Condições",
      value: data.description,
      icon: CloudIcon,
    },
    {
      label: "Nebulosidade",
      value: `${data.cloudiness}%`,
      icon: CloudIcon,
    },
    {
      label: "Velocidade do vento",
      value: data.wind_speedy,
      icon: WindIcon,
    },
    {
      label: "Umidade",
      value: `${data.humidity}%`,
      icon: DropletsIcon,
    },
    {
      label: "Chuva",
      value: `${data.rain}%`,
      icon: CloudRainIcon,
    },
  ]

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4"
    >
      {metrics.map((metric) => {
        const Icon = metric.icon
        return (
          <motion.div
            key={metric.label}
            variants={item}
            className="flex flex-col gap-3 rounded-xl border border-border bg-card/70 p-4 backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-card"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <Icon className="size-4 text-primary" />
              <span className="text-xs font-medium tracking-wide uppercase">
                {metric.label}
              </span>
            </div>
            <p className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              {metric.value}
            </p>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
