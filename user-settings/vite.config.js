import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    server: { https: false },
    build: {
        target: 'es2022',
        outDir: '../dist/user-settings',
    },
});
