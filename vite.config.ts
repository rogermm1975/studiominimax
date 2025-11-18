import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Cargar variables de entorno de forma segura desde el directorio actual
  // El tercer argumento '' permite cargar variables que no empiecen por VITE_ (como API_KEY)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      // Inyectamos la API_KEY de forma segura para que esté disponible en el código del cliente
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});