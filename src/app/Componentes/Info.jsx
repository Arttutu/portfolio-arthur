import Image from "next/image";
import arthur from "../assets/img/arthur.jpeg";
import { RiGithubLine, RiLinkedinFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoMdPin } from "react-icons/io";
import Link from "next/link";
export default function Info() {
  return (
    <aside className=" flex flex-col sm:flex sm:flex-row md:flex md md:flex-col gap-4">
      <div className=" shadow-colors-background shadow-lg    bg-colors-background2   md:h-auto p-5 rounded-none md:rounded-lg w-full md:w-[400px] flex flex-col gap-2 items-center justify-center">
        <Image
          src={arthur}
          alt="minha foto"
          width={120}
          height={120}
          className="rounded-lg"
        />
        <h1 className="text-colors-textoPrincipal text-xl md:text-lg font-bold  ">
          Arthur Gomes dos Santos
        </h1>
        <h2 className="text-colors-destaque text-lg md:text-lg font-bold  ">
          Desenvolvedor Full Stack
        </h2>
        <div className="flex gap-4">
          <div className="p-2 rounded-lg bg-colors-background">
            <RiGithubLine className="text-2xl text-colors-textoPrincipal" />
          </div>
          <div className="p-2 rounded-lg bg-colors-background">
            <RiLinkedinFill className="text-2xl text-colors-textoPrincipal" />
          </div>
        </div>
      </div>
      <div className="flex  flex-col gap-4  w-full  md:h-auto bg-colors-background2 p-5 rounded-none md:rounded-lg">
        <div className="flex  items-center gap-4">
          <div className="p-2 rounded-lg bg-colors-background">
            <MdEmail className="text-colors-paragrafo text-2xl" />
          </div>
          <div className=" flex flex-col">
            <h3 className="text-colors-destaque font-bold">Email</h3>
            <Link href={""} className="text-colors-paragrafo">
              arthurtt08@gmail.com
            </Link>
          </div>
        </div>
        <div className="flex  items-center gap-4">
          <div className="p-2 rounded-lg bg-colors-background">
            <IoMdPin className="text-colors-paragrafo text-2xl" />
          </div>
          <div>
            <h3 className="text-colors-destaque text-md font-bold">
              Localização
            </h3>
            <p className="text-colors-paragrafo text-md">
              São Bernado do Campo/SP - Brasil
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
