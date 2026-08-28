import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react"; // Substitute with your framework plugin (vue, svelte, etc.)
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), "");

  return {
    // 1. Shared Options
    root: process.cwd(),
    base: "/",
    plugins: [react()],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
      },
    },

    // 2. Development Server Options
    server: {
      host: "localhost", // Options: 'localhost', true, or '0.0.0.0' to expose to network
      port: 3000, // Custom local development port
      strictPort: true, // Force crash if port 3000 is already in use
      open: true, // Automatically launch app in browser on startup
      cors: true, // Enable CORS for dev assets

      // API Proxy configuration to bypass local CORS rules
      proxy: {
        "/api": {
          target: env.VITE_API_URL || "http://localhost:5000",
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },

      // File watching limits/polling tuning
      watch: {
        usePolling: false, // Set to true if HMR fails inside Docker containers
        ignored: ["**/node_modules/**", "**/dist/**"],
      },
    },

    // 3. Dependency Optimization Options (Dev speed-ups)
    optimizeDeps: {
      include: ["axios", "lodash-es"], // Force pre-bundling for heavy external packages
    },

    // 4. CSS Configurations
    css: {
      devSourcemap: true, // Enables CSS source maps during development
    },
  };
});
