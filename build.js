// build.js
import { build } from 'esbuild';

build({
  entryPoints: ['src/index.js'],    // Entry to your package
  outfile: 'dist/index.js',         // Single bundled file
  bundle: true,                     // ✅ Bundle all internal files
  format: 'esm',                    // ES module format
  platform: 'browser',              // For React/browser usage
  loader: { '.js': 'jsx' },         // Support JSX inside .js files
  target: ['es2017'],               // Reasonable target for modern browsers
  sourcemap: false,
  minify: false
}).catch(() => process.exit(1));
