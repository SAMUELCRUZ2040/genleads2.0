"use client"

import { globalClass } from "@/components/globalClass";
import { useState } from "react";
import { ChevronDown, ChevronRight, Users, TrendingUp, Zap} from 'lucide-react';
import Link from "next/link";

export  const Consults = () => {
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
    setActiveDropdown(prev => (prev === index ? null : index));
    };

  const dropdownData = [
    {
      title: "Estrategias de Ventas Avanzadas",
      icon: <TrendingUp className="w-5 h-5" />,
      items: [
        "Análisis de mercado personalizado",
        "Optimización de procesos de venta",
        "Capacitación en técnicas de cierre",
        "Implementación de CRM avanzado"
      ]
    },
    {
      title: "Potenciación de Equipos Comerciales",
      icon: <Users className="w-5 h-5" />,
      items: [
        "Evaluación de desempeño individual",
        "Programas de motivación y incentivos",
        "Coaching personalizado para vendedores",
        "Desarrollo de liderazgo comercial"
      ]
    },
    {
      title: "Eficiencia Operativa B2B",
      icon: <Zap className="w-5 h-5" />,
      items: [
        "Automatización de procesos",
        "Análisis de datos y métricas",
        "Optimización de recursos",
        "Implementación de tecnologías disruptivas"
      ]
    }
  ];
    return (
        <section className="mt-72">
            <div className="container">
                <div className="grid grid-cols-2 justify-center items-center gap-36">
                    <div className="image w-4-/5 h-4/5">
                        <div className="h-full w-full bg-cover bg-no-repeat bg-center " style={{backgroundImage : "url(/home/consult.png)"}} />
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex w-full flex-col gap-5  justify-start items-start  text-justify">
                            <span className={`rounded-2xl bg-extraPrimary px-5  ${globalClass.extraP} flex items-center justify-center gap-5`}>
                                <span className="w-3 h-3 rounded-full bg-primary "/>
                                porque nos ...
                            </span>
                            <h2 className={globalClass.h2}>Gestión <span className="text-primary">personalizada</span> para tu negocio</h2>
                            <p className={`${globalClass.p}`}>
                                Unimos creatividad, experiencia y compromiso para ofrecer soluciones personalizadas. Nos guiamos por la colaboración, la innovación y la excelencia para superar las expectativas de nuestros clientes.     
                            </p>
                            <p className={`${globalClass.p}`}>
                                Unimos creatividad, experiencia y compromiso para ofrecer soluciones personalizadas. Nos guiamos por la colaboración, la innovación y la excelencia para superar las expectativas de nuestros clientes.     
                            </p>
                        </div>
                        {/* Dropdowns */}
                        <div className="space-y-3">
                        {dropdownData.map((item, index) => (
                            <div key={index} className="border border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                            <button
                                onClick={() => toggleDropdown(index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50/50 rounded-xl transition-colors duration-200"
                            >
                                <div className="flex items-center space-x-3">
                                <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                                    {item.icon}
                                </div>
                                <span className="font-semibold text-gray-800">{item.title}</span>
                                </div>
                                <ChevronDown 
                                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                                    activeDropdown === index ? 'rotate-180' : ''
                                }`}
                                />
                            </button>
                            
                            {/* Dropdown content */}
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                activeDropdown === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                                <div className="px-6 pb-4 border-t border-gray-100">
                                <div className="pt-4 space-y-3">
                                    {item.items.map((subItem, subIndex) => (
                                    <div key={subIndex} className="flex items-center space-x-3 text-gray-600 hover:text-purple-700 transition-colors duration-200 cursor-pointer">
                                        <ChevronRight className="w-4 h-4 text-purple-500" />
                                        <span className="text-sm">{subItem}</span>
                                    </div>
                                    ))}
                                </div>
                                </div>
                            </div>
                            </div>
                        ))}
                        </div>
                        <Link href={"/Contact"} className={` bg-primary py-4 px-2  rounded-2xl text-center text-white text-xl ${globalClass.extraP} `}>Obten tu Asesoria Ya mismo</Link>
                    </div>
                </div>
            </div>
            <span className="absolute top-0 left-0 w-[40rem] h-[40rem]  bg-gradient-radial from-purple-200/40 via-pink-100/30 to-transparent rounded-full locos"/>
            <span className="absolute top-0 left-0 w-[40rem] h-[40rem]  bg-gradient-radial from-purple-200/40 via-pink-100/30 to-transparent rounded-full locos2"/>
        </section>
    );
}