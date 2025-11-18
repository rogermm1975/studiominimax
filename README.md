
# Habana MiniMax Studio - Landing Page

Esta es la landing page para Habana MiniMax Studio, desarrollada con React, Vite, TypeScript y Tailwind CSS.

## Requisitos

- Node.js (versión 18 o superior)
- npm (o un gestor de paquetes compatible como yarn o pnpm)

## Instalación

1.  Clona el repositorio en tu máquina local.
2.  Navega al directorio del proyecto.
3.  Instala las dependencias necesarias ejecutando el siguiente comando:

    ```bash
    npm install
    ```

## Ejecución en Modo Desarrollo

Para iniciar el servidor de desarrollo con hot-reloading, ejecuta:

    ```bash
    npm run dev
    ```

Esto iniciará la aplicación en modo de desarrollo. Abre [http://localhost:5173](http://localhost:5173) (o el puerto que indique la terminal) para verla en tu navegador.

## Compilación y Despliegue en GitHub Pages

Para desplegar la aplicación en GitHub Pages, simplemente ejecuta el siguiente comando:

    ```bash
    npm run deploy
    ```

Este comando hará lo siguiente:
1.  **Construirá el proyecto**: Ejecutará `npm run build` para generar los archivos optimizados en la carpeta `dist/`.
2.  **Creará un `404.html`**: Copiará `dist/index.html` a `dist/404.html` para asegurar que el enrutamiento del lado del cliente funcione correctamente.
3.  **Publicará en GitHub Pages**: Usará `gh-pages` para subir el contenido de la carpeta `dist/` a la rama `gh-pages` de tu repositorio, haciendo que el sitio esté disponible online.
