"use client";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";

export default function SubirBotao() {
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const scrollPosition = window.scrollY;
        if (scrollPosition > window.innerHeight * 0.1) {
          setShowIcon(true);
        } else {
          setShowIcon(false);
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!showIcon) return null;

  return (
    <ScrollLink smooth={true} duration={500} to="logo">
      <button
        aria-label="Voltar para o topo"
        variant="outline"
        className="flex justify-center fixed bottom-0 md:bottom-2 left-1/2 transform -translate-x-1/2 
    md:left-auto md:right-4 md:translate-x-0 md:w-12
    bg-colors-backgroundClar2 dark:bg-colors-background2 p-2 rounded-lg rounded-b-none md:rounded-lg 
    cursor-pointer transition-all"
      >
        <IoIosArrowDropup className="text-colors-destaque text-4xl" />
      </button>
    </ScrollLink>
  );
}
