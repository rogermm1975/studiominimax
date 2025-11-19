import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Cargar variables de entorno de forma segura desde el directorio actual
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    // Base relativa para que funcione en cualquier subdirectorio (GitHub Pages)
    base: './',
    plugins: [react()],
    define: {
      // Inyectamos la API_KEY de forma segura
      'process.env.API_KEY': JSON.stringify(env.API_KEY || '')
    }
  };
});