import { asDate, asText } from "@prismicio/client";
import { PrismicImage } from "@prismicio/react";
import { FaCalendar } from "react-icons/fa";
import dayjs from "dayjs";
import Link from "next/link";

export default function BlogItem({ blog }) {
  return (
    <div className="mt-8">
      <article className=" flex flex-row items-center justify-between gap-2 p-4 w-full bg-colors-backgroundClaro dark:bg-colors-background rounded-lg cursor-pointer">
        <div className=" w-1/2 flex flex-col gap-4">
          <Link href={`/Poster/${blog.uid}`}>
            <h2 className="dark:text-colors-textoPrincipal text-xl transition-opacity duration-200 text-colors-destaque hover:opacity-70">
              {asText(blog.data.title)}
            </h2>
          </Link>
          <p className="text-colors-paragrafo2 dark:text-colors-paragrafo text-md">
            {asText(blog.data.descricaocard)}
          </p>
          <span className="dark:text-colors-paragrafo text-colors-paragrafo2 flex items-center gap-2">
            <FaCalendar className="text-colors-destaque" />
            {dayjs(blog.data.data).format("DD/MM/YYYY")}
          </span>
        </div>
        <PrismicImage
          className=" w-[300px] h-[200px] object-cover rounded-lg "
          field={blog.data.bannercard}
        />
      </article>
    </div>
  );
}
