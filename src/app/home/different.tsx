import { globalClass } from "@/components/globalClass";
import { InterestHomeGridOne } from "@/extend/interestHomeGridOne";

export default function Different() {
    return (
        <section>
            <div className="flex flex-col gap-10 container">
                <div className="gap-6 pb-20">
                    <div className="flex w-full flex-col gap-5 text-center justify-center items-center">
                        <span className={`rounded-2xl bg-extraPrimary px-5  ${globalClass.p} flex items-center justify-center gap-5`}>
                            <span className="w-3 h-3 rounded-full bg-primary "/>
                            porque nos ...
                        </span>
                        <h2 className={globalClass.h2}>¿Por qué <span className="text-primary"> nos diferenciamos </span> de los demás?</h2>
                        <p className={`${globalClass.p} w-[70%] max-lg:w-full`}>
                            Unimos creatividad, experiencia y compromiso para ofrecer soluciones personalizadas. Nos guiamos por la colaboración, la innovación y la excelencia para superar las expectativas de nuestros clientes.     
                        </p>
                    </div>
                </div>
                <InterestHomeGridOne />
            </div>
        </section>
    );
}