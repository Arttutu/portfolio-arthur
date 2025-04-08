import BlogItem from "@/app/Componentes/BlogItem"
import { Buscador } from "@/app/Componentes/Buscador"
import Titles from "@/app/Componentes/Titles"
import BodySessao from "@/app/Componentes/UI/BodySessao"
import EspacamentoMobile from "@/app/Componentes/UI/EspacamentoMobile"
import { createClient } from "@/prismicio"

export default async function Blog() {
  const prismicClient = createClient("arthurgomes", {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    fetchOptions: { cache: "no-store" },
  })
  const Blog = await prismicClient.getAllByType("blog").catch((e) => {
    console.error(e)
  })

  return (
    <BodySessao>
      <EspacamentoMobile>
        <Titles title={"Meu Blog"} />
        <p className="text-md sm:text-lg dark:text-colors-paragrafo text-colors-paragrafo2">
          Meu blog com dicas de tecnologias e um pouco sobre minhas trajetórias
        </p>
      </EspacamentoMobile>
      <div className="flex justify-end p-4 gap-2">
        <span className="text-lg dark:text-colors-paragrafo text-colors-paragrafo2">
          {Blog?.length}/{Blog?.length} postagem(s)
        </span>
      </div>
      <EspacamentoMobile>
        <Buscador />
      </EspacamentoMobile>
      {Blog?.map((blogItem) => (
        <BlogItem key={blogItem.id} blog={blogItem} />
      ))}
    </BodySessao>
  )
}
