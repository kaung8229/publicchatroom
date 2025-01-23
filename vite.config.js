import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        watch: {
            usePolling: true
        }
    },
    root: './src',
    publicDir: '../public',
    build:{
        outDir: '../dist', // define output directory to build bundled files
        rollupOptions:{
            input: {
                main: "./src/index.html",
                profile: "./src/profile.html",
                reset: "./src/reset.html",
                signin: "./src/signin.html",
                signup: "./src/signup.html"
            }
        }
    }
})