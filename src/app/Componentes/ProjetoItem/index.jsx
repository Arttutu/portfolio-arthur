"use client"
import Link from "next/link"
import { asText } from "@prismicio/client"
import { FaExternalLinkAlt as Ancora, FaCalendar } from "react-icons/fa"
import { PrismicImage, PrismicRichText } from "@prismicio/react"
import { motion } from "framer-motion"
import icon from "../Utils/IconsTec"
import dayjs from "dayjs"

export function ProjetosItem({ projetos }) {
  return (
    <Link href={asText(projetos.data.linksite)} target="_blank">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex flex-col gap-2 p-4 w-full bg-colors-backgroundClaro dark:bg-colors-background rounded-none md:rounded-lg cursor-pointer"
      >
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="dark:text-colors-textoPrincipal text-lg md:text-xl transition-opacity duration-200 text-colors-destaque hover:opacity-70 flex items-center gap-2">
              <PrismicRichText field={projetos.data.titulo} />
            </h3>
            <Ancora className="dark:text-colors-paragrafo text-colors-paragrafo2 text-lg" />
          </div>
          <h2 className="text-colors-paragrafo2  dark:text-colors-paragrafo text-md md:text-[16px]">
            {asText(projetos.data.subtitulo)}
          </h2>
          <div className="bg-colors-backgroundClar2 dark:bg-colors-background2 rounded-lg flex flex-col items-center gap-4 p-4">
            <p className="text-colors-paragrafo2 dark:text-colors-paragrafo text-sm md:text-md text-left">
              {asText(projetos.data.descriaoprojeto)}
            </p>
            <PrismicImage
              className="h-auto w-full rounded-b-lg md:w-[600px] md:h-[300px] object-cover md:rounded-lg"
              field={projetos.data.imagemprojeto}
              alt="imagem do projeto"
            />
          </div>
        </div>
        <div className="flex justify-between gap-4 flex-wrap items-center mt-4">
          <div className="flex gap-4 w-full md:w-2/3 flex-wrap">
            {projetos.data.tecnologias.map((item, index) => (
              <ul key={index} className="rounded-lg bg-colors-background2 p-2">
                <li className="text-sm text-colors-paragrafo flex gap-2 items-center">
                  {icon[item.tecnologiasnome]}
                  {item.tecnologiasnome}
                </li>
              </ul>
            ))}
          </div>

          <span className="dark:text-colors-paragrafo p-4 text-colors-paragrafo2 flex items-center gap-2">
            <FaCalendar className="text-colors-destaque" />
            {dayjs(projetos.data.dataprojeto).format("DD/MM/YYYY")}
          </span>
        </div>
      </motion.div>
    </Link>
  )
}
