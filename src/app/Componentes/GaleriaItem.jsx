import { PrismicImage } from "@prismicio/react";

export function GaleriaItem({ galeria }) {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 mx-auto">
      {galeria.data.imagens.map((item, index) => (
        <div
          key={index}
          className="mb-4 break-inside-avoid  dark:bg-colors-backgroundClaro overflow-hidden"
        >
          <PrismicImage
            className="w-full h-auto object-cover"
            field={item.galeriaimagens}
          />
        </div>
      ))}
    </div>
  );
}
