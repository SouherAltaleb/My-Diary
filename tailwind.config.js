import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});

// plugins: [require("daisyui")];
// daisyui: {
//   themes: [
//     {
//       mydiary: {
//         primary: "#ff9784",
//         "primary-content": "#ffffff",
//         secondary: "#92b19f",
//         "secondary-content": "#ffffff",

//         "base-100": "#143335",
//         "base-200": "#bbd8c6",

//         "--color-primary": "#ff9784",
//         "--color-primary-content": "#ffffff",
//         "--color-bg-dark": "#143335",
//         "--color-bg-light": "#bbd8c6",
//         "--color-secondary": "#92b19f",
//       },
//     },
//   ];
// }
