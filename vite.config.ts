import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configura la ruta base para el despliegue en GitHub Pages
  base: '/studiominimax/',
});
