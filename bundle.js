const esbuild = require('esbuild')

const commonConfig = {
  entryPoints: [ 'node-verification-code.ts' ],
  bundle: true,
  splitting: false,
  external: [ 'node:crypto', 'node:buffer' ],
  target: [ 'node12.22' ],
  treeShaking: true
}

Promise.all([
  esbuild
    .build({
      ...commonConfig,
      outfile: 'dist/node-verification-code.cjs',
      format: 'cjs'
    })
    .catch(console.error),

  esbuild
    .build({
      ...commonConfig,
      outfile: 'dist/node-verification-code.mjs',
      format: 'esm'
    })
    .catch(console.error)
])
