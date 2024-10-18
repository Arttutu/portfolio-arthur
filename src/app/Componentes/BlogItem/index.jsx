import { asDate, asText } from "@prismicio/client"
import { PrismicImage } from "@prismicio/react"
import { FaCalendar } from "react-icons/fa"
import dayjs from "dayjs"
import Link from "next/link"

export default function BlogItem({ blog }) {
  return (
    <div className="mt-8 w-full container ">
      <article className="w-full xl:w-[750px] 2xl:w-[1100px] md:flex-col items-center md:flex xl:flex xl:flex-row-reverse gap-8  justify-between md:gap-8  bg-colors-backgroundClaro dark:bg-colors-background rounded-none md:rounded-lg">
        <PrismicImage
          className=" w-full  pb-4  xl:w-[300px]  xl:h-[200px] object-cover  xl:rounded-lg xl:m-4"
          field={blog.data.bannercard}
        />
        <div className="flex flex-col gap-2 ">
          <Link href={`/Poster/${blog.uid}`}>
            <h2 className="dark:text-colors-textoPrincipal p-4 font-bold text-xl transition-opacity duration-200 text-colors-destaque hover:opacity-70">
              {asText(blog.data.title)}
            </h2>
          </Link>
          <p className="text-colors-paragrafo2  p-4 dark:text-colors-paragrafo text-md">
            {asText(blog.data.descricaocard)}
          </p>
          <span className="dark:text-colors-paragrafo  p-4 text-colors-paragrafo2 flex items-center gap-2">
            <FaCalendar className="text-colors-destaque" />
            {dayjs(blog.data.data).format("DD/MM/YYYY")}
          </span>
        </div>
      </article>
    </div>
  )
}
