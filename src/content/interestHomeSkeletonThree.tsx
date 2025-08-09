import { globalClass } from '@/components/globalClass'
import Image from 'next/image'
import React from 'react'

export default function InterestHomeSkeletonThree() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
            <video
                src="/videos/homeInterest2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full rounded-lg object-cover"
                style={{ maxHeight: "30rem" }}
            >
                Your browser does not support the video tag.
            </video>
        </div>
        <div className="description h-full flex flex-col justify-center items-start gap-5">
            <h4 className={globalClass.h4}>¿Por qué nos diferenciamos de los demás?</h4>
            <p className={globalClass.extraP}>
                Combinamos creatividad experiencia y compromiso para ofrecer soluciones personalizadas que se adaptan a cada proyecto Nuestra filosofía se basa en la colaboración constante la innovación continua y la búsqueda de la excelencia para superar siempre las expectativas de nuestros clientes
            </p>
        </div>
    </div>
  )
}
