import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, 'src', 'ui'),
      '@app': path.resolve(__dirname, 'src', 'app'),
    }
  }
})
