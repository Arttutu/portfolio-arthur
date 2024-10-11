/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          background2: "#16161a",
          backgroundClaro: "#fffffe",
          background: "#242629",
          backgroundClar2: "#DCE0E8",
          textoPrincipal: "#fffffe",
          paragrafo2: "#4c4f69",
          paragrafo: "#CDD6F4",
          titulo: "#7f5af0",
          botao: "#7f5af0",
          destaque: "#7f5af0",
          icone: "#7f5af0",
          hover: "#7f5af0",
          botaoTexto: "#fffffe",
          rodape: "#010101",
          erro: "#ff0000",
        },
      },
    },
  },
  plugins: [],
}
