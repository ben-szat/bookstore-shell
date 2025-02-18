import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "bookstore-shell",
      remotes: {
        booklist: "http://localhost:3001/assets/remoteEntry.js", // Load the BookList microfrontend
      },
      shared: ["react", "react-dom", "@mui/material"],
    }),
  ],
  server: {
    proxy: {
      '/assets/remoteEntry.js': 'http://localhost:3001/assets/remoteEntry.js', // Proxy remoteEntry.js for shell to microfrontend
    }
  },
  build: {
    target: "esnext",
  },
});
