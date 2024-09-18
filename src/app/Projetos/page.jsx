// src/app/page.tsx
import { createClient } from "@/prismicio";
import { ProjetosItem } from "../Componentes/ProjetosItem";

export default async function Projetos() {
  const prismicClient = createClient();
  const projetos = await prismicClient.getAllByType("projetos").catch((e) => {
    console.error(e);
    return [];
  });
  return (
    <div className="bg-colors-backgroundClar2 dark:bg-colors-background2  mt-4 mb-4 p-4  rounded-lg">
      <h2 className="text-lg font-bold tracking-tight  mb-2 sm:text-2xl text-slate-900 dark:text-white ">
        Portfólio
      </h2>
      <div className="w-16 h-1 bg-colors-destaque rounded-xl mb-8"></div>

      <main className="flex flex-col gap-8 ">
        {projetos.map((projeto) => (
          <ProjetosItem key={projeto.id} projetos={projeto} />
        ))}
      </main>
    </div>
  );
}
