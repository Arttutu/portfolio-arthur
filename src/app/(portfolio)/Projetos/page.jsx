// src/app/page.tsx
import { createClient } from "@/prismicio"
import { ProjetosItem } from "@/app/Componentes/ProjetoItem"
import Titles from "@/app/Componentes/Titles"

export default async function Projetos() {
  const prismicClient = createClient()
  const projetos = await prismicClient.getAllByType("projetos").catch((e) => {
    console.error(e)
  })
  return (
    <section className="w-full bg-colors-backgroundClar2 dark:bg-colors-background2  mt-4 mb-4 p-0 md:p-4  rounded-none md:rounded-lg">
      <div className="p-4">
        <Titles title={"Meu Portfólio"} />
        <p className="text-lg dark:text-colors-paragrafo text-colors-paragrafo2">
          Meu portfólio com alguns dos projetos que já desenvolvi.
        </p>
      </div>
      <div className="flex flex-col gap-8 mt-8 ">
        {projetos.map((projeto) => (
          <ProjetosItem key={projeto.id} projetos={projeto} />
        ))}
      </div>
    </section>
  )
}
