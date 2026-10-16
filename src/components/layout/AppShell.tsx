import type { ReactNode } from "react"
import { motion } from "framer-motion"

type AppShellProps = {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="relative mx-auto flex min-h-dvh w-full max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-3"
      >
        <p className="font-display text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Temp Tec
        </p>
        <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
          Previsão do tempo para as capitais do Brasil — clara, atual e sem
          ruído.
        </p>
      </motion.header>
      {children}
    </div>
  )
}
