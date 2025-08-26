import { globalClass } from '@/components/globalClass'
import Image from 'next/image'
import React from 'react'

export default function InterestHomeSkeletonThree() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full rounded-lg object-cover"
                style={{ maxHeight: "30rem" }}
            >
                  <source src="/videos/homeInterest3.webm" type="video/webm" />
                  <source src="/videos/homeInterest3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <div className="description h-full flex flex-col justify-center items-start gap-5">
            <h4 className={globalClass.h4}>
                Gen Leads: Impulso Estratégico para tu Negocio
            </h4>
            <p className={globalClass.extraP}>
                En Gen Leads, potenciamos el crecimiento empresarial en Latinoamérica y Europa con estrategias personalizadas, adaptables y orientadas a resultados. Nos sumergimos en la comprensión de tu negocio, co-creamos soluciones y evaluamos constantemente para mantenernos a la vanguardia. Más que generar leads, construimos relaciones sólidas y oportunidades sostenibles para llevar tu empresa a nuevas alturas.
            </p>
        </div>
    </div>
  )
}
