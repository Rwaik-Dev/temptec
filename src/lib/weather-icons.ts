import clearDay from "@/assets/weather/clear_day.png"
import clearNight from "@/assets/weather/clear_night.png"
import cloud from "@/assets/weather/cloud.png"
import cloudlyDay from "@/assets/weather/cloudly_day.png"
import cloudlyNight from "@/assets/weather/cloudly_night.png"
import fog from "@/assets/weather/fog.png"
import hail from "@/assets/weather/hail.png"
import noneDay from "@/assets/weather/none_day.png"
import noneNight from "@/assets/weather/none_night.png"
import rain from "@/assets/weather/rain.png"
import snow from "@/assets/weather/snow.png"
import storm from "@/assets/weather/storm.png"

const iconMap: Record<string, string> = {
  clear_day: clearDay,
  clear_night: clearNight,
  cloud,
  cloudly_day: cloudlyDay,
  cloudly_night: cloudlyNight,
  fog,
  hail,
  none_day: noneDay,
  none_night: noneNight,
  rain,
  snow,
  storm,
}

export function getConditionIcon(slug?: string): string {
  if (!slug) return noneDay
  return iconMap[slug] ?? noneDay
}
