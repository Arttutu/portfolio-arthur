import { createClient } from "@/prismicio";
import { GaleriaItem } from "../Componentes/GaleriaItem";
export default async function Galeria() {
  const prismicClient = createClient();
  const galerias = await prismicClient
    .getAllByType("galeriaprojetos")
    .catch((e) => {
      console.error(e);
      return [];
    });

  return (
    <div className="bg-colors-backgroundClar2 dark:bg-colors-background2 mt-4 mb-4 p-4 rounded-lg">
      <main className="flex flex-col gap-2 ">
        <h2 className="text-lg font-bold tracking-tight mb-2 sm:text-2xl text-slate-900 dark:text-white ">
          Galeria de Projetos
        </h2>
        <div className="w-16 h-2 bg-colors-destaque rounded-xl mb-8"></div>
        {galerias.map((galeria, index) => (
          <GaleriaItem key={index} galeria={galeria} />
        ))}
      </main>
    </div>
  );
}
