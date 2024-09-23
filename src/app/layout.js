import "./globals.css";
import Info from "./Componentes/InfoArthur/index.";
import Logo from "./Componentes/Logo";
import { JetBrains_Mono } from "next/font/google";
import IconeSuspenso from "./Componentes/IconeSuspenso";
import Header from "./Componentes/Header";

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
        <header className="container mx-auto text-center md:text-left mt-4 flex flex-col gap-8">
          <Logo />
          <Header mobile={true} />
        </header>
        <main className="relative">
          <div className="container  mx-auto flex flex-col  md:flex md:flex-row gap-4 mt-[20px]">
            <Info />
            <div>
              <Header mobile={false} />
              {children}
            </div>
          </div>
          <IconeSuspenso />
        </main>
      </body>
    </html>
  );
}
