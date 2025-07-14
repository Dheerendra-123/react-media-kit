// build.js
import { build } from 'esbuild';

build({
  entryPoints: ['src/index.js'],
  outdir: 'dist',
  bundle: false,
  format: 'esm',
  platform: 'browser',
  loader: { '.js': 'jsx' }, // 👈 Important to support JSX in .js files
  splitting: false,
  sourcemap: false,
  minify: false,
  target: ['es2017'],
}).catch(() => process.exit(1));
