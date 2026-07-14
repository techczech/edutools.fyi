import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { writeFlexPlugin } from './vite/writeflex-plugin';

export default defineConfig(() => {
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), writeFlexPlugin()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
