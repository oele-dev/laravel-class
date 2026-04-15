import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

const codespaceHost = '0.0.0.0';
const codespacePort = 5173;
const codespaceUrl = 'https://ominous-succotash-gxr44jg6vxhwprj-5173.app.github.dev';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources/js'),
        },
    },
    server: {
        host: codespaceHost,
        port: codespacePort,
        strictPort: true,
        origin: codespaceUrl,
        cors: {
            origin: ['https://ominous-succotash-gxr44jg6vxhwprj-8000.app.github.dev'],
            credentials: false,
        },
        hmr: {
            protocol: 'wss',
            host: 'ominous-succotash-gxr44jg6vxhwprj-5173.app.github.dev',
            clientPort: 443,
        },
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
});
