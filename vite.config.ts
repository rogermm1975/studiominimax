
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carga las variables de entorno desde el archivo .env
  // El tercer parámetro '' permite cargar todas las variables, no solo las que tienen prefijo VITE_
  const env = loadEnv(mode, process.cwd(), '');

  // Prioriza la variable del sistema (process.env) y luego la del archivo .env
  const apiKey = process.env.API_KEY || env.API_KEY;

  return {
    plugins: [react()],
    define: {
      // Expone la variable 'process.env.API_KEY' al código del cliente (navegador)
      'process.env.API_KEY': JSON.stringify(apiKey),
    }
  };
});
