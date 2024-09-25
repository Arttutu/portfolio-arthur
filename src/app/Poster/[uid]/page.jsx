import { createClient } from "@/prismicio";
import { asText } from "@prismicio/client";
import { notFound } from "next/navigation";
export default async function Poster({ params }) {
  const prismicClient = createClient();
  const post = await prismicClient
    .getByUID("blog", params.uid)
    .catch(() => notFound());
  return (
    <div>
      <h1 className=" text-2xl text-colors-destaque">
        {asText(post.data.title)}
      </h1>
      {post.data.conteudo.map((item, index) => (
        <div key={index}>
          <h1> {asText(item.title)}</h1>
          <p> {asText(item.conteudo)}</p>
        </div>
      ))}
    </div>
  );
}
