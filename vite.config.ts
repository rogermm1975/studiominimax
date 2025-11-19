
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Cargar variables de entorno (incluye .env y variables del sistema)
  // El tercer argumento '' le dice a Vite que cargue TODAS las variables, no solo las que empiezan por VITE_
  const env = loadEnv(mode, process.cwd(), '');

  // Prioridad: Variable de sistema (Vercel) > Variable en archivo .env
  const apiKey = process.env.API_KEY || env.API_KEY;

  if (!apiKey) {
    console.warn('⚠️  ADVERTENCIA: API_KEY no encontrada en el proceso de build.');
  } else {
    console.log('✅ API_KEY inyectada en el build exitosamente.');
  }

  return {
    plugins: [react()],
    base: './', // Asegura rutas relativas para despliegues flexibles
    define: {
      // Definimos process.env para evitar "ReferenceError: process is not defined" en el navegador
      'process.env': {},
      // Inyectamos explícitamente la API_KEY
      'process.env.API_KEY': JSON.stringify(apiKey),
    }
  };
});
