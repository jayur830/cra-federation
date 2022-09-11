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
    port: 6173,
  },
  preview: {
    port: 6173,
  },
  plugins: [
    react(),
    federation({
      name: 'app1',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
      },
      shared: Object.keys(deps),
    }),
  ],
});
