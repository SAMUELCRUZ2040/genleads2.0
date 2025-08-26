import Particles from "@/components/darkEvil";
import TrueFocus from "@/components/focus";
import { globalClass } from "@/components/globalClass";
import Collaborators from "./collaborators";

export default function FrontPage() {
  return (
    <section className={`${globalClass.flexCenter} max-lg:mt-24 `}>
        <div className="container grid justify-center items-center flex-col pt-72 pb-60">
          <div className={`${globalClass.flexCenter} flex flex-col`}>
              <h1 className={`${globalClass.flexCenter} ${globalClass.h1}`}>
                    <span>Transforma tus ventas con</span>
                    <span className={`flex gap-5 mt-3 max-lg:flex-col`}>  estrategias <TrueFocus sentence='innovadoras' /></span>
              </h1>
              <p className={`${globalClass.p} text-center mt-5 w-3/4 mb-24`}>Impulsá tus ventas con estrategias inteligentes y generación de leads de calidad conectando tu negocio con clientes reales y oportunidades que se ajustan a tus objetivos tu crecimiento solo haciendo un clic.</p>
          </div>
          <Collaborators />
        </div>
        {/* <div className="w-full h-full top-0 left-0 absolute z-[-999]">
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
        </div> */}
        <span className="absolute top-0 left-0 w-[40rem] h-[40rem]  bg-gradient-radial from-purple-200/40 via-pink-100/30 to-transparent rounded-full locos"/>
        <span className="absolute top-0 left-0 w-[40rem] h-[40rem]  bg-gradient-radial from-purple-200/40 via-pink-100/30 to-transparent rounded-full locos2"/>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background" />
    </section>
  )
}
