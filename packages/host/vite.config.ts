import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const deps = require('./package.json').dependencies;

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      ['@src']: resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
  },
  server: {
    port: 6175,
  },
  preview: {
    port: 6175,
  },
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        app1: 'http://localhost:6173/assets/remoteEntry.js',
        app2: 'http://localhost:6174/assets/remoteEntry.js',
      },
      shared: Object.keys(deps),
    }),
  ],
});
