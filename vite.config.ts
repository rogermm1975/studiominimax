
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Cargar variables de entorno local (.env) y del sistema (Vercel)
  const env = loadEnv(mode, process.cwd(), '');

  // Intentar obtener la clave de Vercel (process.env) o del archivo local (env)
  const apiKey = process.env.API_KEY || env.API_KEY;

  if (!apiKey) {
    console.warn('⚠️  ADVERTENCIA CRÍTICA: API_KEY está vacía o indefinida durante el build.');
  } else {
    console.log('✅ API_KEY detectada. Inyectando en el cliente...');
  }

  return {
    plugins: [react()],
    base: './',
    define: {
      // IMPORTANTE: Reemplazo literal de la cadena 'process.env.API_KEY' por el valor real.
      // No definimos 'process.env': {} aquí porque bloquea la inyección de la clave.
      'process.env.API_KEY': JSON.stringify(apiKey),
    }
  };
});
