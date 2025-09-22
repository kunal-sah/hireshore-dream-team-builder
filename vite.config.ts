import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: true,
    minify: 'esbuild',
    cssMinify: true,
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        format: 'es',
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          // Force TypeScript files to be compiled to .js
          if (assetInfo.name && /\.(tsx?|jsx?)$/.test(assetInfo.name)) {
            return 'assets/[name]-[hash].js';
          }
          return 'assets/[name]-[hash].[ext]';
        },
        // Ensure proper bundling and compression
        preserveModules: false,
        compact: true,
      },
      external: [],
      // Ensure TypeScript files are processed
      input: {
        main: './src/main.tsx'
      }
    },
    assetsInlineLimit: 0,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
    // Enable additional compression optimizations
    commonjsOptions: {
      include: ['node_modules/**'],
      transformMixedEsModules: true
    }
  },
  esbuild: {
    target: 'es2020',
    legalComments: 'none',
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    // Ensure TypeScript is properly compiled
    tsconfigRaw: {
      compilerOptions: {
        target: 'es2020',
        module: 'esnext',
        moduleResolution: 'node',
        allowSyntheticDefaultImports: true,
        esModuleInterop: true,
        skipLibCheck: true,
        strict: true,
        jsx: 'react-jsx'
      }
    }
  }
}));
