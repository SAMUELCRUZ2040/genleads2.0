import Particles from "@/components/darkEvil";
import TrueFocus from "@/components/focus";
import { globalClass } from "@/components/globalClass";
import CollaboratorsHome from "../../content/collaboratorsHome";

export default function FrontPage() {
  return (
    <section className="relative flex items-center justify-center max-lg:mt-24">
      <div className="container grid justify-center items-center flex-col py-60 max-lg:py-10 px-4">
        <div className="flex items-center justify-center flex-col w-full">
          <h1 className={`flex justify-center items-center flex-col ${globalClass.h1} text-center`}>
            <span>Transforma y revoluciona tu </span>
            <span className="flex gap-5 mt-3 max-lg:flex-col max-lg:gap-2">
              crecimiento <TrueFocus sentence='comercial' />
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

      {/* Background Elements */}
      <div className="w-full h-full top-0 left-0 absolute z-[-999]">
        <Particles
          particleColors={['#c86dbd', '#c86dbd']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      
      <span className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-gradient-radial from-purple-200/40 via-pink-100/30 to-transparent rounded-full locos"/>
      <span className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-gradient-radial from-purple-200/40 via-pink-100/30 to-transparent rounded-full locos2"/>
    </section>
  )
}