import { globalClass } from "@/components/globalClass";
import { ContentHighlights } from "./components/Highlights/ContentHighlights";

export default function Highlights() {
    return (
        <section>
            <div className="flex flex-col gap-10 container mt-32 max-lg:mt-16">
                <div className="gap-6 pb-20">
                    <div className="flex w-full flex-col gap-5 text-center justify-center items-center">
                        <span className={`rounded-2xl bg-extraPrimary px-5  ${globalClass.p} flex items-center justify-center gap-5`}>
                            <span className="w-3 h-3 rounded-full bg-primary "/>
                            porque nos ...
                        </span>
                        <h2 className={`${globalClass.h2} flex flex-col`}>
                            <span>
                                ¿Por qué <span className="text-primary"> nos diferenciamos</span>
                            </span>
                            <span>
                                 de los demás?
                            </span>
                        </h2>
                        <p className={`${globalClass.p} w-[50%] max-lg:w-full`}>
                            Unimos creatividad, experiencia y compromiso para ofrecer soluciones personalizadas. Nos guiamos por la colaboración, la innovación y la excelencia para superar las expectativas de nuestros clientes.     
                        </p>
                    </div>
                </div>
                <ContentHighlights />
            </div>
        </section>
    );
}