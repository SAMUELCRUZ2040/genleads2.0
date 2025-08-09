import { cn } from "@/utils/lib";
import { globalClass } from "./globalClass";

type LineProps = {
  number: string;
};

export default function Line( { number }: LineProps ) {

  return (
      <div className={cn(
        `flex ps-16 relative px-36 py-52 overflow-hidden`,
        `${number === "interestTwo" ? "flex-row-reverse" : "" }`,
      )}>
        <div 
          className={cn(
            `h-full w-[2px] absolute bg-custom-gradient top-0`,
          )}
        />
        <div className="p-8 m-5">
          <h3 className={cn(
            `${globalClass.h3} flex flex-col gap-5`,
            `${number === "interestTwo" ? "items-end text-end" : "" }`,
          )}>
            <span className="font-bold ">Soluciones Flexibles y Estratégicas</span>
            <span className="w-1/2 ">Estrategias Meticulosamente Diseñadas para tus Desafíos Comerciales</span>
          </h3>
        </div>
      </div>
  )
}
