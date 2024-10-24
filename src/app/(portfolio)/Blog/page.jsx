import BlogItem from "@/app/Componentes/BlogItem"
import Titles from "@/app/Componentes/Titles"
import { createClient } from "@/prismicio"

export default async function Blog() {
  const prismicClient = createClient()
  const Blog = await prismicClient.getAllByType("blog").catch((e) => {
    console.error(e)
  })

  return (
    <section className="dark:bg-colors-background2 bg-colors-backgroundClar2 rounded-none md:rounded-lg p-4 mt-4">
      <>
        <div className="p-4">
          <Titles title={"Meu Bloge"} />
          <p className="text-lg dark:text-colors-paragrafo text-colors-paragrafo2">
            Meu blog com dicas de tecnologias e um pouco sobre minhas
            trajetórias
          </p>
        </div>
        <div className="flex justify-end p-4 gap-2">
          <span className="text-lg dark:text-colors-paragrafo text-colors-paragrafo2">
            {Blog?.length}/{Blog?.length} postagem(s)
          </span>
        </div>
        {Blog?.map((blogItem) => (
          <BlogItem key={blogItem.id} blog={blogItem} />
        ))}
      </>
    </section>
  )
}
