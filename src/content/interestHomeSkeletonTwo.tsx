import { globalClass } from '@/components/globalClass'
import { InterestHomeGridTwo } from '@/extend/interestHomeGridTwo'
import React from 'react'

export default function InterestHomeSkeletonTwo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="description h-full flex flex-col justify-center items-start gap-5">
            <h4 className={globalClass.h4}>¿Por qué nos diferenciamos de los demás?</h4>
            <p className={globalClass.extraP}>
                Combinamos creatividad experiencia y compromiso para ofrecer soluciones personalizadas que se adaptan a cada proyecto Nuestra filosofía se basa en la colaboración constante la innovación continua y la búsqueda de la excelencia para superar siempre las expectativas de nuestros clientes
            </p>
        </div>
        <div className="">
            <InterestHomeGridTwo />
        </div>
    </div>
  )
}
