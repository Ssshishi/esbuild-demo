import { buildSync } from "esbuild";

const builder = (entryPoints: string[], out: string) =>  buildSync({
  entryPoints,
  define: {},
  minifySyntax: true,
  minifyWhitespace: true,
  outdir: out,
  chunkNames: 'chunks/[name]-[hash]',
  splitting: true,
  treeShaking: true,
  bundle: true,
  format: "esm",
  target: 'es6',
  resolveExtensions: ['.ts', '.tsx'],
  loader: {
    '.svg': 'file'
  }
})

builder(['src/index.tsx'], 'dist/built.js')
