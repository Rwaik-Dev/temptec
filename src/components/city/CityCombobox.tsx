import { useMemo, useState } from "react"
import { ChevronsUpDownIcon, MapPinIcon } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  capitals,
  formatCapitalLabel,
  type Capital,
} from "@/data/capitals"
import { cn } from "@/lib/utils"

type CityComboboxProps = {
  value: number
  onChange: (woeid: number) => void
  disabled?: boolean
}

export function CityCombobox({
  value,
  onChange,
  disabled,
}: CityComboboxProps) {
  const [open, setOpen] = useState(false)

  const selected = useMemo(
    () => capitals.find((c) => c.woeid === value),
    [value],
  )

  function selectCity(capital: Capital) {
    onChange(capital.woeid)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        disabled={disabled}
        className={cn(
          "inline-flex h-11 w-full max-w-md items-center justify-between gap-2 rounded-xl border border-border bg-card/80 px-3 text-left text-sm text-foreground shadow-none backdrop-blur-sm transition-colors hover:bg-muted/60 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40 disabled:opacity-50",
        )}
      >
        <span className="flex min-w-0 items-center gap-2">
          <MapPinIcon className="size-4 shrink-0 text-primary" />
          <span className="truncate font-medium">
            {selected ? formatCapitalLabel(selected) : "Selecione uma capital"}
          </span>
        </span>
        <ChevronsUpDownIcon className="size-4 shrink-0 text-muted-foreground" />
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-[var(--radix-popover-trigger-width)] p-0"
      >
        <Command>
          <CommandInput placeholder="Buscar capital ou UF..." />
          <CommandList>
            <CommandEmpty>Nenhuma capital encontrada.</CommandEmpty>
            <CommandGroup heading="Capitais brasileiras">
              {capitals.map((capital) => (
                <CommandItem
                  key={capital.woeid}
                  value={`${capital.name} ${capital.uf}`}
                  data-checked={capital.woeid === value || undefined}
                  onSelect={() => selectCity(capital)}
                >
                  <span className="truncate">
                    {formatCapitalLabel(capital)}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
