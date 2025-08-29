import Particles from "@/components/darkEvil";
import TrueFocus from "@/components/focus";
import { globalClass } from "@/components/globalClass";
import CollaboratorsHome from "../../content/collaboratorsHome";
import Image from "next/image";
import SubtleButton from "@/components/button";

export default function FrontPage() {

  return (
    <section className="relative flex items-center justify-center max-lg:mt-24">
      <div className="container grid justify-center items-center flex-col pt-60 max-lg:pt-10 px-4">
        <div className="flex items-center justify-center flex-col w-full">
          {/* Botón sutil arriba del título */}
          <div className="mb-8 max-lg:mb-6">
            <SubtleButton >
              <span className={"text-purple-400"}>✨</span>
              Consultoría de Ventas
            </SubtleButton>
          </div>

          <h1 className={`flex justify-center items-center flex-col ${globalClass.h1} text-center`}>
            <span className="flex gap-8 items-center justify-center max-sm:gap-4 max relative">
              Escalá tus ventas
              <Image
                src={"/icons/SolidLogo.png"}
                height={100}
                width={100}
                alt={"logo"}
                className=" h-[5.5rem] w-[5.5rem] object-cover object-top !p-0 transition duration-500 group-hover:scale-105 max-lg:h-[5rem] max-lg:w-[5rem] max-sm:h-[2.2rem] max-sm:w-[2.2rem] order-0 "
              />
                con estrategia
            </span>
            <span className="flex gap-5 mt-3 max-lg:gap-6 max-lg:flex-col">
              sin fricción, y sin   <TrueFocus sentence='límites' />
            </span>
          </h1>
          <p className={`${globalClass.p} text-center mt-5 w-1/2 mb-24 max-lg:w-full max-lg:mb-12 max-lg:px-4`}>
            Impulsá tus ventas con estrategias inteligentes y generación de leads de calidad 
            conectando tu negocio con clientes reales y oportunidades que se ajustan a tus objetivos.
          </p>
        </div>
        
        {/* Collaborators con contenedor que controla el overflow */}
        <div className="w-full overflow-hidden">
          <CollaboratorsHome />
        </div>
      </div>
      <span className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-gradient-radial from-purple-200/40 via-pink-100/30 to-transparent rounded-full locos"/>
      <span className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-gradient-radial from-purple-200/40 via-pink-100/30 to-transparent rounded-full locos2"/>
    </section>
  )
}