export type Capital = {
  name: string
  uf: string
  woeid: number
}

/** Capitals of the 26 states + Brasília (DF) — 27 cities, sorted A–Z. */
export const capitals: Capital[] = [
  { name: "Aracaju", uf: "SE", woeid: 455839 },
  { name: "Belém", uf: "PA", woeid: 455820 },
  { name: "Belo Horizonte", uf: "MG", woeid: 455821 },
  { name: "Boa Vista", uf: "RR", woeid: 455936 },
  { name: "Brasília", uf: "DF", woeid: 455819 },
  { name: "Campo Grande", uf: "MS", woeid: 26804347 },
  { name: "Cuiabá", uf: "MT", woeid: 455829 },
  { name: "Curitiba", uf: "PR", woeid: 455822 },
  { name: "Florianópolis", uf: "SC", woeid: 90200648 },
  { name: "Fortaleza", uf: "CE", woeid: 455830 },
  { name: "Goiânia", uf: "GO", woeid: 455831 },
  { name: "João Pessoa", uf: "PB", woeid: 455872 },
  { name: "Macapá", uf: "AP", woeid: 455970 },
  { name: "Maceió", uf: "AL", woeid: 455880 },
  { name: "Manaus", uf: "AM", woeid: 455833 },
  { name: "Natal", uf: "RN", woeid: 455888 },
  { name: "Palmas", uf: "TO", woeid: 457721 },
  { name: "Porto Alegre", uf: "RS", woeid: 455823 },
  { name: "Porto Velho", uf: "RO", woeid: 455901 },
  { name: "Recife", uf: "PE", woeid: 455824 },
  { name: "Rio Branco", uf: "AC", woeid: 455904 },
  { name: "Rio de Janeiro", uf: "RJ", woeid: 455825 },
  { name: "Salvador", uf: "BA", woeid: 455826 },
  { name: "São Luís", uf: "MA", woeid: 455834 },
  { name: "São Paulo", uf: "SP", woeid: 455827 },
  { name: "Teresina", uf: "PI", woeid: 455835 },
  { name: "Vitória", uf: "ES", woeid: 455922 },
  { name: "Santa Luzia", uf: "MG", woeid: 448467 }
]

export const DEFAULT_WOEID = 448467

export function findCapitalByWoeid(woeid: number): Capital | undefined {
  return capitals.find((c) => c.woeid === woeid)
}

export function formatCapitalLabel(capital: Capital): string {
  return `${capital.name}, ${capital.uf}`
}
