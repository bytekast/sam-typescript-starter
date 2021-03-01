#!/usr/bin/env node
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { build } = require('estrella')
const common = {
  bundle: true,
  minify: true,
  sourcemap: true,
  platform: 'node',
  target: 'node12.17',
}
build({
  ...common,
  entry: 'src/hello.ts',
  outfile: 'dist/hello.js',
})
build({
  ...common,
  entry: 'src/hola.ts',
  outfile: 'dist/hola.js',
})
