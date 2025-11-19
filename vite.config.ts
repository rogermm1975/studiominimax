
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Cargar variables de entorno de forma segura desde el directorio actual
  const env = loadEnv(mode, (process as any).cwd(), '');

  // Intentar obtener la API_KEY del entorno del sistema (Vercel) o de los archivos .env cargados
  const apiKey = process.env.API_KEY || env.API_KEY;

  return {
    // Base relativa para que funcione en cualquier subdirectorio (GitHub Pages)
    base: './',
    plugins: [react()],
    define: {
      // Inyectamos la API_KEY de forma segura
      'process.env.API_KEY': JSON.stringify(apiKey || '')
    }
  };
});
