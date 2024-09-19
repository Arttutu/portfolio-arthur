import "./globals.css";
import Menu from "./Componentes/Menu";
import Info from "./Componentes/Info";
import Logo from "./Componentes/Logo";
import { JetBrains_Mono } from "next/font/google";
import Tema from "./Componentes/ToggleTema";
import IconeSuspenso from "./Componentes/IconeSuspenso";

const fonte = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Portfólio - Arthur Gomes",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="dark">
      <body
        className={`${fonte.className} bg-colors-backgroundClaro dark:bg-colors-background  antialiased h-screen`}
      >
        <header className="container mx-auto text-center md:text-left mt-4 flex flex-col gap-8">
          <Logo />
          <div className="flex items-center justify-between  md:hidden">
            <Menu />
            <Tema />
          </div>
        </header>
        <main className="relative">
          <div className="container  mx-auto flex flex-col  md:flex md:flex-row gap-4 mt-[20px]">
            <Info />
            <div>
              <div className="hidden md:flex items-center justify-between">
                <Menu />
                <Tema />
              </div>
              {children}
            </div>
          </div>
          <IconeSuspenso />
        </main>
      </body>
    </html>
  );
}
