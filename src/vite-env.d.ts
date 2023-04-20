/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly [key: string]: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
