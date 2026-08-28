import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ command, mode }) => {
  const config = {
    plugins: [react()],
    //base: "/your-repository-name/", // Must match your repo name exactly
    build: {
      outDir: "dist",
      assetsDir: "assets",
      assetsInlineLimit: 0,
      sourcemap: true,
    },
    resolve: {
      alias: {
        "@/": path.resolve(__dirname, "./src"),
        "@/components": path.resolve(__dirname, "./src/components"),
        "@/pages": path.resolve(__dirname, "./src/pages"),
        // "@/utils": path.resolve(__dirname, "./src/utils"),
        // "@/image": path.resolve(__dirname, "./src/assets/image"),
        // "@/icon": path.resolve(__dirname, "./src/assets/icon"),
      },
    },
    // build: {
    //   outDir: "dist",
    //   sourcemap: true,
    //   minify: "terser", // or 'esbuild'
    //   rollupOptions: {
    //     external: ["vue"], // Don't bundle Vue in a library
    //     output: {
    //       globals: {
    //         vue: "Vue",
    //       },
    //     },
    //   },
    // },
    // server: {
    //   port: 3000,
    //   host: true, // Listen on all addresses
    //   open: true, // Auto-open browser
    //   cors: true,
    //   proxy: {
    //     "/api": {
    //       target: "http://localhost:8080",
    //       changeOrigin: true,
    //       secure: false,
    //     },
    //   },
    // },
    // resolve: {
    //   alias: {
    //     "@": path.resolve(__dirname, "./src"),
    //     "@components": path.resolve(__dirname, "./src/components"),
    //     "@utils": path.resolve(__dirname, "./src/utils"),
    //   },
    // },
  };

  if (command === "serve") {
    // Development-specific config
    config.server = {
      base: "/",
    };
  } else {
    // Production build config
    config.server = {
      base: "/sample-website-guesthouse/",
    };
  }

  console.log("mode : " + mode);
  console.log("command : " + command);

  return config;
});
