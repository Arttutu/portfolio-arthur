"use client";
import { FiMoon, FiSun } from "react-icons/fi";
import { useEffect } from "react";

export default function Tema() {
  const PreferenciaSistema = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  useEffect(() => {
    PreferenciaSistema && document.documentElement.classList.add("dark");
  });
  const toogle = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className="">
      <FiSun
        className="cursor-pointer text-black text-4xl bg-colors-backgroundClar2 dark:bg-colors-background2 p-2 rounded-r-none  rounded-lg md:rounded-lg   transition-all block dark:hidden dark:text-white "
        onClick={toogle}
      />
      <FiMoon
        className=" cursor-pointer text-colors-textoPrincipal  text-4xl bg-colors-background2 p-2 rounded-r-none  rounded-lg md:rounded-lg   transition-all hidden dark:block"
        onClick={toogle}
      />
    </div>
  );
}
