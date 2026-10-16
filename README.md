# Temp Tec v2

Dashboard de previsão do tempo para as **capitais brasileiras** (27 estados + DF). Interface dark, tipografia moderna e dados em tempo real via [HG Brasil Weather API](https://hgbrasil.com/weather/).

## O que mudou na v2

| Área | v1 | v2 |
|------|----|----|
| Scaffold | Create React App | **Vite** + React 19 |
| Estilo | styled-components | **Tailwind CSS** + **shadcn/ui** |
| Animações | CSS loader simples | **Framer Motion** (entrada, troca de cidade, hero) |
| Fontes | Montserrat | **Space Grotesk** (marca/temperatura) + **Manrope** (UI) |
| Cidades | 10 cidades fixas | **27 capitais** (estados + DF) com combobox pesquisável |
| API key | Hardcoded no código | Variável de ambiente `VITE_HG_BRASIL_KEY` |
| Estados de UI | `alert()` + loader só no 1º load | Skeleton, loading suave e `Alert` tipado |

### Por quê dessas escolhas

- **Vite em vez de Next.js** — o produto é um SPA client-only consumindo API externa. Não há SEO, autenticação server-side nem rotas dinâmicas que justifiquem App Router/RSC. Vite entrega DX rápida e deploy estático simples.
- **Tailwind + shadcn/ui** — tokens semânticos e componentes acessíveis (Command, Popover, Skeleton, Alert) sem reinventar combobox/loading. Substitui o CRA + styled-components, que estavam no fim do ciclo de suporte.
- **Framer Motion** — animações intencionais (stagger das métricas, crossfade do hero, fade do gráfico) sem espalhar keyframes CSS.
- **Space Grotesk + Manrope** — display geométrico para a marca e a temperatura; corpo legível e contemporâneo na UI. Evita stacks genéricas (Inter/Roboto/system).
- **Tema dark redesenhado** — mantém o tom escuro da v1, mas com fundo `#0B0F14`, superfícies em camadas e acento gelo `#3DDCFF`, alinhado ao domínio clima.
- **Capitais + combobox** — cobertura nacional clara (todas as capitais) com busca por nome/UF, em vez de um `<select>` curto e difícil de escalar.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4 + shadcn/ui (Radix)
- Framer Motion
- Recharts
- Axios + HG Brasil Weather (`woeid`)

## Rodando localmente

```bash
git clone https://github.com/Rwaik-Dev/temptec.git
cd temptec
cp .env.example .env
# edite VITE_HG_BRASIL_KEY com sua chave em https://console.hgbrasil.com
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Capitais cobertas

Aracaju (SE), Belém (PA), Belo Horizonte (MG), Boa Vista (RR), Brasília (DF), Campo Grande (MS), Cuiabá (MT), Curitiba (PR), Florianópolis (SC), Fortaleza (CE), Goiânia (GO), João Pessoa (PB), Macapá (AP), Maceió (AL), Manaus (AM), Natal (RN), Palmas (TO), Porto Alegre (RS), Porto Velho (RO), Recife (PE), Rio Branco (AC), Rio de Janeiro (RJ), Salvador (BA), São Luís (MA), São Paulo (SP), Teresina (PI), Vitória (ES), Santa Luzia (MG).

Cidade padrão ao abrir: **Santa Luzia** .

## Estrutura

```
src/
  components/
    city/           # CityCombobox
    layout/         # AppShell (marca + apoio)
    weather/        # Hero, métricas, gráfico, skeleton
    ui/             # primitives shadcn
  data/capitals.ts  # 27 capitais + WOEID
  hooks/useWeather.ts
  lib/api.ts
  types/weather.ts
```

## Variáveis de ambiente

| Variável | Descrição |
|----------|-----------|
| `VITE_HG_BRASIL_KEY` | Chave da HG Brasil Weather API |

> Não commite o arquivo `.env`. Use `.env.example` como referência.
