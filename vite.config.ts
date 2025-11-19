
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Cargar variables de entorno de forma segura desde el directorio actual
  // Usamos cast a any para evitar errores de tipado si @types/node no está explícito
  const cwd = (process as any).cwd ? (process as any).cwd() : '.';
  const env = loadEnv(mode, cwd, '');

  // Intentar obtener la API_KEY del entorno del sistema (Vercel) o de los archivos .env cargados
  // Se verifica también VITE_API_KEY por compatibilidad
  const apiKey = process.env.API_KEY || process.env.VITE_API_KEY || env.API_KEY || env.VITE_API_KEY;

  if (!apiKey) {
    console.warn('⚠️  ADVERTENCIA: No se detectó API_KEY. La funcionalidad de IA no funcionará.');
  } else {
    console.log('✅ API_KEY detectada e inyectada correctamente.');
  }

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
