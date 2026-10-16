/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HG_BRASIL_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
