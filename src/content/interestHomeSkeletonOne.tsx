import { globalClass } from "@/components/globalClass";
import { InterestHomeGridOne } from "@/extend/interestHomeGridOne";

export default function InterestHomeSkeletonOne() {
    return (
        <div className="flex flex-col gap-10">
            <div className="gap-6">
                <div className="flex flex-col w-full gap-5 text-center justify-center items-center">
                    <h4 className={globalClass.h4}>¿Por qué nos diferenciamos de los demás?</h4>
                    <p className={globalClass.extraP}>
                        Combinamos creatividad experiencia y compromiso para ofrecer soluciones personalizadas que se adaptan a cada proyecto Nuestra filosofía se basa en la colaboración constante la innovación continua y la búsqueda de la excelencia para superar siempre las expectativas de nuestros clientes
                    </p>
                </div>
            </div>
            <div>
                <InterestHomeGridOne />
            </div>
        </div>
    );
}