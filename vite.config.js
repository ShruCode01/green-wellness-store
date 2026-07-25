// 
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
  // plugins: [react()],
  // base: '/green-wellness-store/',
// })

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// 
// export default defineConfig(({ mode }) => ({
  // plugins: [react()],
  // base: mode === "production" ? "/green-wellness-store/" : "/",
// }));


// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// 
// export default defineConfig({
  // plugins: [react()],
  // base: process.env.VERCEL ? "/" : "/green-wellness-store/",
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.VERCEL ? "/" : "/green-wellness-store/",
});