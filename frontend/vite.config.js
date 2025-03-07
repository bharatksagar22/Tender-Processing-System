import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    root: '.', // Ensure Vite is looking at the correct root directory
    build: {
        outDir: 'dist', // Output directory for build files
        emptyOutDir: true, // Clear the output directory before building
    },
    server: {
        port: 3000, // Change port if needed
        open: true, // Automatically open browser when running dev server
    },
    resolve: {
        alias: {
            '@': '/src', // Use '@' as an alias for 'src' directory
        },
    },
});
