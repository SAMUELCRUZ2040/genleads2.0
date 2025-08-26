"use client";
import { cn } from "@/utils/lib";
import { BentoGrid, BentoGridItem } from "@/extend/confi/interestHomeGridOneConfi";
import { motion } from "framer-motion";
import { globalClass } from "@/components/globalClass";
import React from "react";
import { Globe } from "@/content/globeHome";
import DifferentFirstRow from "@/content/differentFirstRow";
import DifferentSecondRow from "@/content/differentSecondRow";
import DifferentThreeRow from "@/content/differentThreeRow";

export function InterestHomeGridOne() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem] ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
    return (
    <motion.div
      className="flex flex-1 w-full h-full min-h-[8rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2  items-center justify-center"
    >
        <div className="h-full w-full bg-cover bg-no-repeat bg-center" style={{backgroundImage : "url(/home/different.avif)"}} />

    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <img
          src="/home/stefany.webp"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className={`${globalClass.extraP} text-neutral-500`}>
          En Gen Leads, construimos relaciones reales, ofreciendo soluciones efectivas con compromiso, cercanía y resultados comprobados.
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Enfoque</p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonThree = () => {

 const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 gap-8"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-primary/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-8 w-10 rounded-full bg-cover bg-no-repeat bg-center" style={{backgroundImage : "url(/home/stefany.webp)"}} />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-8 w-10 rounded-full bg-cover bg-no-repeat bg-center" style={{backgroundImage : "url(/home/fashionThreeInterest.webp)"}} />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-8 w-10 rounded-full bg-cover bg-no-repeat bg-center" style={{backgroundImage : "url(/home/stefany.webp)"}} />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );

};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center relative"
      >
        <DifferentFirstRow />
      </motion.div>
      <motion.div className="h-full  z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center relative">
        <DifferentSecondRow />
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center relative"
      >
        <DifferentThreeRow/>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  return(
    <div className="overflow-hidden !p-0">
      <Globe className="" />
    </div>
  )
};
const items = [
  {
    title: "Comunicación Abierta",
    description: (
      <span>
        Acompañamos cada paso de tu proyecto desde el inicio
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
  },
  {
    title: "Optimización de Leads",
    description: (
      <span>
        Mejora la calidad y conversión de cada uno tus leads
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
  },
  {
    title: "Compromiso y dedicación",
    description: (
      <span>
        Es la clave del exito en tu proyecto
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
  },
  {
    title: "Atencion de por parte de nuestro equipo 24/7",
    description: (
      <span>
        Recibe atención personalizada de nuestro equipo en cualquier momento.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
  },

  {
    title: "gestión de Leads",
    description: (
      <span>
          Mejora la calidad y conversión de tus leads fácilmente.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
  },
];
