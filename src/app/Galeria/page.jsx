import { createClient } from "@/prismicio";
import { GaleriaItem } from "../Componentes/GaleriaItem";
import Titles from "../Componentes/Titles";
export default async function Galeria() {
  const prismicClient = createClient();
  const galerias = await prismicClient
    .getAllByType("galeriaprojetos")
    .catch((e) => {
      console.error(e);
      return [];
    });

  return (
    <section className="w-full bg-colors-backgroundClar2 dark:bg-colors-background2 mt-4 mb-4 p-4 rounded-lg">
      <div className="flex flex-col  ">
        <Titles title={"Galeria"} />
        {galerias.map((galeria, index) => (
          <GaleriaItem key={index} galeria={galeria} />
        ))}
      </div>
    </section>
  );
}
