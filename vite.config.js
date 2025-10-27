import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Tidak perlu memuat env secara manual di sini jika kita hanya perlu 'mode'
  
  return {
    // PERBAIKAN UTAMA:
    // Setel 'base' ke root (/) untuk deployment Vercel yang menggunakan subdomain.
    // Jika Anda ingin deploy ke GitHub Pages (yang butuh nama repo di jalur),
    // barulah gunakan logika kondisional. Untuk Vercel, '/' adalah yang paling aman.
    base: '/', 
    
    plugins: [react(), tailwindcss()],
    
    server: {
      open: true,
      host: '0.0.0.0', // Gunakan '0.0.0.0' untuk hosting di jaringan
      proxy: {
        // Proxy ini hanya berjalan saat development (npm run dev)
        "/api": {
          target: "http://localhost:5000",
          changeOrigin: true,
          // secure: true // Jika target lokal, secure: false lebih aman, tapi untuk contoh ini kita biarkan true
        },
      },
    },
    // Pindahkan build keluar dari server agar diterapkan saat npm run build
    build: {
      outDir: "dist", // pastikan output folder
    },
  };
});
