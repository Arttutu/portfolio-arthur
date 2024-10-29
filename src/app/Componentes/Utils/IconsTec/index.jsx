import {
  SiTailwindcss,
  SiVite,
  SiRadixui,
  SiNextdotjs,
  SiPrisma,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiFigma,
  SiPrismic,
  SiDocker,
  SiAuth0,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiStyledcomponents,
  SiAxios,
} from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"
import { FaReact } from "react-icons/fa"
//Icones das tecnlogias dos projetos
const icon = {
  React: (
    <span style={{ backgroundColor: "#61DAFB" }} className="p-2 rounded-full">
      <FaReact className="text-black" /> {/* Ícone em branco para contraste */}
    </span>
  ),
  Tailiwind: (
    <span style={{ backgroundColor: "#38BDF8" }} className="p-2 rounded-full">
      <SiTailwindcss className="text-white" />
    </span>
  ),
  Vite: (
    <span style={{ backgroundColor: "#646CFF" }} className="p-2 rounded-full">
      <SiVite className="text-white" />
    </span>
  ),
  Radix: (
    <span style={{ backgroundColor: "#C4A5FA" }} className="p-2 rounded-full">
      <SiRadixui className="text-white" />
    </span>
  ),
  Nextjs: (
    <span style={{ backgroundColor: "#000000" }} className="p-2 rounded-full">
      <SiNextdotjs className="text-white" />
    </span>
  ),
  Prisma: (
    <span style={{ backgroundColor: "#2D3748" }} className="p-2 rounded-full">
      <SiPrisma className="text-white" />
    </span>
  ),
  Prismic: (
    <span style={{ backgroundColor: "#5163BA" }} className="p-2 rounded-full">
      <SiPrismic className="text-white" />
    </span>
  ),
  TypeScript: (
    <span style={{ backgroundColor: "#3178C6" }} className="p-2 rounded-full">
      <SiTypescript className="text-white" />
    </span>
  ),
  JavaScript: (
    <span style={{ backgroundColor: "#F7DF1E" }} className="p-2 rounded-full">
      <SiJavascript className="text-black" />{" "}
    </span>
  ),
  MongoDB: (
    <span style={{ backgroundColor: "#47A248" }} className="p-2 rounded-full">
      <SiMongodb className="text-white" />
    </span>
  ),
  Nodejs: (
    <span style={{ backgroundColor: "#339933" }} className="p-2 rounded-full">
      <SiNodedotjs className="text-white" />
    </span>
  ),
  Postgresql: (
    <span style={{ backgroundColor: "#336791" }} className="p-2 rounded-full">
      <BiLogoPostgresql className="text-black" />
    </span>
  ),
  Figma: (
    <span style={{ backgroundColor: "#F24E1E" }} className="p-2 rounded-full">
      <SiFigma className="text-white" />
    </span>
  ),
  Docker: (
    <span style={{ backgroundColor: "#F24E1E" }} className="p-2 rounded-full">
      <SiDocker className="text-white" />
    </span>
  ),
  HTML: (
    <span style={{ backgroundColor: "#336791" }} className="p-2 rounded-full">
      <SiHtml5 className="text-white" />
    </span>
  ),
  CSS: (
    <span style={{ backgroundColor: "#0c17eb" }} className="p-2 rounded-full">
      <SiCss3 className="text-white" />
    </span>
  ),
  Bootstrap: (
    <span style={{ backgroundColor: "#A020F0" }} className="p-2 rounded-full">
      <SiBootstrap className="text-white" />
    </span>
  ),
  StyledComponents: (
    <span style={{ backgroundColor: "#ac2d99" }} className="p-2 rounded-full">
      <SiStyledcomponents className="text-white" />
    </span>
  ),
  Axios: (
    <span style={{ backgroundColor: "#ac2d99" }} className="p-2 rounded-full">
      <SiAxios className="text-white" />
    </span>
  ),
}

export default icon
