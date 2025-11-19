
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carga las variables de entorno desde el archivo .env
  // El tercer parámetro '' permite cargar todas las variables
  const env = loadEnv(mode, process.cwd(), '');

  // Prioriza la variable del sistema, luego busca NEXT_PUBLIC_API_KEY o API_KEY en el archivo .env
  const apiKey = process.env.API_KEY || process.env.NEXT_PUBLIC_API_KEY || env.API_KEY || env.NEXT_PUBLIC_API_KEY;

  return {
    plugins: [react()],
    define: {
      // Expone la variable 'process.env.API_KEY' al código del cliente (navegador)
      // independientemente de si se llamó API_KEY o NEXT_PUBLIC_API_KEY en el archivo .env
      'process.env.API_KEY': JSON.stringify(apiKey),
    }
  };
});
