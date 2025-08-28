"use client";

import { cn } from "@/utils/lib";
import { BentoGrid, BentoGridItem } from "@/extend/confi/interestHomeGridOneConfi";
import { motion } from "framer-motion";
import { globalClass } from "@/components/globalClass";
import React, { useMemo } from "react";
import Image from "next/image";
import { Globe } from "@/content/globeHome";
import DifferentFirstRow from "@/content/differentFirstRow";
import DifferentSecondRow from "@/content/differentSecondRow";
import DifferentThreeRow from "@/content/differentThreeRow";

// Configuración de animaciones optimizada
const ANIMATION_CONFIG = {
  duration: 0.2,
  ease: "easeOut"
} as const;

const fadeInVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: ANIMATION_CONFIG }
};

// Componentes Skeleton Optimizados
const SkeletonOne = React.memo(() => {
  return (
    <motion.div
      variants={fadeInVariants}
      className="relative flex flex-1 w-full h-full min-h-[8rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2 items-center justify-center overflow-hidden"
    >
          <Image
            src="/home/different.avif"
            alt="Respuesta del equipo"
            fill
            className="object-cover w-full h-full absolute top-0 left-0"
            loading="lazy"
          />
    </motion.div>
  );
});
SkeletonOne.displayName = 'SkeletonOne';

const SkeletonTwo = React.memo(() => {
  const chatVariants = useMemo(() => ({
    initial: { x: 0 },
    animate: { x: 10, rotate: 5, transition: ANIMATION_CONFIG }
  }), []);

  const responseVariants = useMemo(() => ({
    initial: { x: 0 },
    animate: { x: -10, rotate: -5, transition: ANIMATION_CONFIG }
  }), []);

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={chatVariants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-start space-x-2 bg-white dark:bg-black"
      >
        <Image
          src="/home/stefany.webp"
          alt="Stefany - Especialista en optimización de leads"
          height={100}
          width={100}
          className="rounded-full h-10 w-10 object-cover"
          loading="lazy"
        />
        <p className={cn(globalClass.p, "text-neutral-500 text-xs leading-tight")}>
          En Gen Leads, construimos relaciones reales, ofreciendo soluciones efectivas con compromiso, cercanía y resultados comprobados.
        </p>
      </motion.div>
      
      <motion.div
        variants={responseVariants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Enfoque</p>
      </motion.div>
    </motion.div>
  );
});
SkeletonTwo.displayName = 'SkeletonTwo';

const SkeletonThree = React.memo(() => {
  const messageVariants = useMemo(() => ({
    initial: { x: 0 },
    animate: { x: 10, rotate: 5, transition: ANIMATION_CONFIG }
  }), []);

  const replyVariants = useMemo(() => ({
    initial: { x: 0 },
    animate: { x: -10, rotate: -5, transition: ANIMATION_CONFIG }
  }), []);

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 gap-8"
    >
      <motion.div
        variants={messageVariants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-primary/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="relative h-8 w-10 rounded-full overflow-hidden">
          <Image
            src="/home/stefany.webp"
            alt="Usuario del chat"
            fill
            className="object-cover absolute top-0 left-0 w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      
      <motion.div
        variants={replyVariants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="relative h-8 w-10 rounded-full overflow-hidden">
          <Image
            src="/home/fashionThreeInterest.webp"
            alt="Respuesta del equipo"
            fill
            className="object-cover absolute top-0 left-0 w-full h-full"
            loading="lazy"
          />
        </div>
      </motion.div>
      
      <motion.div
        variants={messageVariants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="relative h-8 w-10 rounded-full overflow-hidden">
          <Image
            src="/home/stefany.webp"
            alt="Continuación del chat"
            fill
            className="object-cover absolute top-0 left-0 w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
});
SkeletonThree.displayName = 'SkeletonThree';

const SkeletonFour = React.memo(() => {
  const cardVariants = useMemo(() => ({
    first: {
      initial: { x: 20, rotate: -5 },
      hover: { x: 0, rotate: 0, transition: ANIMATION_CONFIG }
    },
    second: {
      initial: { x: -20, rotate: 5 },
      hover: { x: 0, rotate: 0, transition: ANIMATION_CONFIG }
    }
  }), []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2 max-lg:flex-col max-lg:p-5"
    >
      <motion.div
        variants={cardVariants.first}
        className="h-full w-1/3 max-lg:w-full max-lg:h-[15rem] rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center relative"
      >
        <DifferentFirstRow />
      </motion.div>
      
      <motion.div className="h-full z-20 w-1/3 max-lg:w-full max-lg:h-[15rem] rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center relative">
        <DifferentSecondRow />
      </motion.div>
      
      <motion.div
        variants={cardVariants.second}
        className="h-full w-1/3 max-lg:w-full max-lg:h-[15rem] rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center relative"
      >
        <DifferentThreeRow />
      </motion.div>
    </motion.div>
  );
});
SkeletonFour.displayName = 'SkeletonFour';

const SkeletonFive = React.memo(() => {
  return (
    <div className="overflow-hidden !p-0 rounded-xl">
      <Globe className="w-full h-full" />
    </div>
  );
});
SkeletonFive.displayName = 'SkeletonFive';

// Configuración de items optimizada y memoizada
const items = [
  {
    id: "comunicacion-abierta",
    title: "Comunicación Abierta",
    description: "Acompañamos cada paso de tu proyecto desde el inicio",
    header: <SkeletonOne />,
    className: "lg:col-span-1",
  },
  {
    id: "optimizacion-leads",
    title: "Optimización de Leads",
    description: "Mejora la calidad y conversión de cada uno de tus leads",
    header: <SkeletonTwo />,
    className: "lg:col-span-1",
  },
  {
    id: "compromiso-dedicacion",
    title: "Compromiso y dedicación",
    description: "Es la clave del éxito en tu proyecto",
    header: <SkeletonThree />,
    className: "lg:col-span-1",
  },
  {
    id: "atencion-24-7",
    title: "Atención de parte de nuestro equipo 24/7",
    description: "Recibe atención personalizada de nuestro equipo en cualquier momento.",
    header: <SkeletonFour />,
    className: "lg:col-span-2",
  },
  {
    id: "gestion-leads",
    title: "Gestión de Leads",
    description: "Mejora la calidad y conversión de tus leads fácilmente.",
    header: <SkeletonFive />,
    className: "lg:col-span-1",
  },
] as const;

export function InterestHomeGridOne() {
  const memoizedItems = useMemo(() => items, []);

  return (
    <BentoGrid className="max-w-6xl mx-auto lg:auto-rows-[20rem] gap-y-[9.5rem]">
      {memoizedItems.map((item, i) => (
        <BentoGridItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
        />
      ))}
    </BentoGrid>
  );
}