import { build } from 'esbuild';

build({
  entryPoints: ['src/index.js'],
  outfile: 'dist/index.js',
  bundle: true,
  format: 'esm',
  platform: 'browser',
  external: ['react'],  // 👈 Tells esbuild NOT to bundle react
  loader: { '.js': 'jsx' },
  target: ['es2017']
}).catch(() => process.exit(1));
