import Particles from "@/components/darkEvil";
import TrueFocus from "@/components/focus";
import { globalClass } from "@/components/globalClass";
import { GlobeHome } from "@/content/globeHome";

export default function FrontPage() {
  return (
    <section className={`${globalClass.flexCenter} max-lg:mt-24`}>
        <div className="container grid justify-center items-center flex-col pt-40">
          <div className={`${globalClass.flexCenter} flex flex-col`}>
              <h1 className={`${globalClass.flexCenter} ${globalClass.h1}`}>
                    <span>Gen Leads Genera Tu</span>
                    <span className={`flex gap-5 mt-3 max-lg:flex-col`}> <TrueFocus sentence='Éxito Comercial' /></span>
              </h1>
              <p className={`${globalClass.extraP} text-center mt-5`}>Impulsá tus ventas con estrategias inteligentes y generación de leads de calidad conectando tu negocio con clientes reales y oportunidades que se ajustan a tus objetivos tu crecimiento comienza con un clic</p>
          </div>
          <div className="flex justify-center items-center">
            <GlobeHome />
          </div>
        </div>
        <div className="w-full h-full top-0 left-0 absolute z-[-999]">
          <Particles
            particleColors={['#000', '#000']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
    </section>
  )
}
