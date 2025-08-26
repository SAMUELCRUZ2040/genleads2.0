import { globalClass } from '@/components/globalClass'
import { InterestHomeGridTwo } from '@/extend/interestHomeGridTwo'
import React from 'react'

export default function InterestHomeSkeletonTwo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="description h-full flex flex-col justify-center items-start gap-5">
            <h4 className={globalClass.h4}>Compromiso y crecimiento empresarial</h4>
            <p className={globalClass.extraP}>
                En Gen Leads, impulsamos tu crecimiento desde la gestión de contactos hasta la entrega de negocios calificados. Generamos leads de calidad y construimos relaciones duraderas, basadas en un compromiso que asegura resultados sostenibles y beneficios mutuos.
            </p>
        </div>
        <div className="">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full rounded-lg object-cover"
                style={{ maxHeight: "30rem" }}
            >
                  <source src="/videos/homeInterest2.webm" type="video/webm" />
                  <source src="/videos/homeInterest2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  )
}
