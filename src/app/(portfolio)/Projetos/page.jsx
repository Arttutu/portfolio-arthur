// src/app/page.tsx
import { createClient } from "@/prismicio"
import { ProjetosItem } from "@/app/Componentes/ProjetoItem"
import Titles from "@/app/Componentes/Titles"
import EspacamentoMobile from "@/app/Componentes/UI/EspacamentoMobile"
import BodySessao from "@/app/Componentes/UI/BodySessao"

export default async function Projetos() {
  const prismicClient = createClient("arthurgomes", {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  })
  const projetos = await prismicClient
    .getAllByType("projetos", {
      orderings: [
        { field: "document.first_publication_date", direction: "desc" },
      ],
    })
    .catch((e) => {
      console.error(e)
    })
  return (
    <BodySessao>
      <EspacamentoMobile>
        <Titles title={"Meu Portfólio"} />
        <p className="text-md sm:text-lg dark:text-colors-paragrafo text-colors-paragrafo2">
          Meu portfólio com alguns dos projetos que já desenvolvi.
        </p>
      </EspacamentoMobile>
      <div className="flex flex-col gap-8 mt-8 ">
        {projetos.map((projeto) => (
          <ProjetosItem key={projeto.id} projetos={projeto} />
        ))}
      </div>
    </BodySessao>
  )
}
