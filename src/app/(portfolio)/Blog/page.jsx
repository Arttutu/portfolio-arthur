import BlogItem from "@/app/Componentes/BlogItem"
import { Buscador } from "@/app/Componentes/Buscador"
import Titles from "@/app/Componentes/Titles"
import { createClient } from "@/prismicio"
export default async function Blog() {
  const prismicClient = createClient()
  const Blog = await prismicClient.getAllByType("blog").catch((e) => {
    console.error(e)
  })
  return (
    <section className="w-full bg-colors-backgroundClar2 dark:bg-colors-background2   p-0 md:p-4  mt-4 mb-4 rounded-none md:rounded-lg">
      <div className="p-4">
        <Titles title={"Meu Blog"} />
        <p className="text-lg dark:text-colors-paragrafo text-colors-paragrafo2">
          Blog onde vou escrever sobre tutoriais e dicas de programação.
        </p>
      </div>

      <div className="flex justify-end p-4 gap-2 ">
        <span className="text-lg dark:text-colors-paragrafo text-colors-paragrafo2">
          {Blog.length}/{Blog.length}
        </span>
        <span className="text-lg  dark:text-colors-paragrafo text-colors-paragrafo2">
          postagem(s)
        </span>
      </div>
      <div className=" p-4 md:p-0">
        <Buscador Blog={Blog} />
      </div>

      <div className=" w-full flex flex-col gap-8 ">
        {Blog.map((blogItem) => (
          <BlogItem key={blogItem.id} blog={blogItem} />
        ))}
      </div>
    </section>
  )
}
