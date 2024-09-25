import { GaleriaItem } from "@/app/Componentes/GaleriaItem";
import Titles from "@/app/Componentes/Titles";
import { createClient } from "@/prismicio";

export default async function Galeria() {
  const prismicClient = createClient();
  const galerias = await prismicClient
    .getAllByType("galeriaprojetos")
    .catch((e) => {
      console.error(e);
      return [];
    });

  return (
    <section className="w-full bg-colors-backgroundClar2 dark:bg-colors-background2 mt-4 mb-4 p-4 rounded-none md:rounded-lg">
      <Titles title={"Galeria"} />
      <p className="text-lg dark:text-colors-paragrafo text-colors-paragrafo2 mb-4">
        Minha Galeria com algumas imagens de projetos desenvolvidos.
      </p>
      <div className="flex flex-col  ">
        {galerias.map((galeria, index) => (
          <GaleriaItem key={index} galeria={galeria} />
        ))}
      </div>
    </section>
  );
}
