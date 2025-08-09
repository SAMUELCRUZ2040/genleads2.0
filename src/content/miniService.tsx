import { globalClass } from "@/components/globalClass";

export const MiniService = () => {
    return (
        <section>
            <div className="title text-center flex justify-center items-center flex-col p-16 m-16">
                <h2 className={`${globalClass.h2} text-center flex flex-col ${globalClass.flexCenter}`}>
                    <span>Nuestros Aliados</span>
                    <span>Impulsan Nuestra Visión</span>
                </h2>
                <p className={`${globalClass.extraP} text-center mt-5`}>Juntos creamos alianzas sólidas que nos permiten ofrecer soluciones innovadoras y confiables Gracias a nuestros colaboradores llevamos cada proyecto al siguiente nivel y construimos un futuro de éxito compartido</p>
            </div>
            <div className="flex gap-5">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <div key={idx} className="border-2 flex flex-col gap-5 rounded-2xl p-14 relative group">
                        <div className="w-12 h-12 bg-center bg-no-repeat bg-cover:translate-y-1 group-hover:translate-y-[-5px]" style={{backgroundImage : "url(/icons/dolar.svg)"}} />
                        <h4 className={globalClass.h4}>Arquitectura de Prospección Efectiva</h4>
                        <p>Diseñamos y ejecutamos campañas outbound de alto impacto en LinkedIn.</p>
                        <span className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-[10rem] font-black font-mono text-transparent -rotate-45 -z-10 opacity-85 family invisible group-hover:visible transition-none" style={{WebkitTextStroke : "1px #b6b6b6"}}>02</span>
                    </div>
                ))}
            </div>
        </section>
    );
}