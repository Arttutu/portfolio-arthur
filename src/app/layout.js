import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const fonte = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Portfólio - Arthur Gomes",
  description:
    "Portfóliio sobre o Arthur Gomes dos Santos Desenvolvedor FullStack, com formação em Análise e Desenvolvimento de sistema e Blog com suas principais ideias",
  icons: {
    icon: "/assets/favicon.ico", // Caminho correto para o favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${fonte.className} bg-colors-backgroundClaro dark:bg-colors-background  antialiased h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
