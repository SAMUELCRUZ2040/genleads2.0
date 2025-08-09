"use client";

import data from '@/json/data.json';
import { useState } from 'react';

// Tipos según tu JSON
type Option = {
  id: number;
  option: string;
};

type Picture = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type Detail = {
  options: Option[];
  picture: Picture[];
};

type InformationService = {
  id: string;
  title: string;
  addTitle: string;
  description: string;
  image: string;
  details: Detail[];
};

type includesServicesProps = {
  idPage: string;
};

export function IncludesServices({ idPage }: includesServicesProps) {
  const [detail, setDetail] = useState<number>(1);

  // Busca el servicio por id
  const searchOption = (data.services?.[0]?.informationService ?? []) as InformationService[];
  const inyectId = searchOption.find((iterator) => iterator.id === idPage);

  // Si no existe, no renderiza nada
  if (!inyectId || !inyectId.details?.[0]) return null;

  const resultInformation = inyectId.details[0].options;

  return (
    <div className="flex justify-center items-center mb-14">
      <div className="container flex justify-center items-center flex-col">
        <ul className="flex justify-center gap-14 w-full pt-[10rem] mt-[10rem] max-md:justify-start max-md:overflow-hidden max-md:overflow-x-scroll">
          {resultInformation.map((options) => (
            <li
              className='item cursor-pointer border-2 border-[#347faa] w-[11rem] h-[11rem] justify-center text-center rounded-full flex items-center hover:bg-[#0000000f] max-lg:w-[8rem] max-lg:h-[8rem] max-lg:text-sm p-8'
              key={options.id}
              onClick={() => setDetail(options.id)}
            >
              {options.option}
            </li>
          ))}
        </ul>
        <StructureDetails id={detail} idPage={idPage} />
      </div>
    </div>
  );
}

type StructureDetailsProps = {
  id: number;
  idPage: string;
};

export function StructureDetails({ id, idPage }: StructureDetailsProps) {
  const searchOption = (data.services?.[0]?.informationService ?? []) as InformationService[];
  const inyectId = searchOption.find((iterator) => iterator.id === idPage);

  if (!inyectId || !inyectId.details?.[0]) return null;

  const resultInformation = inyectId.details[0].picture;
  const inyectInformation = resultInformation.find((lookFor) => lookFor.id === id);

  if (!inyectInformation) return null;

  return (
    <>
      <div className="flex justify-between w-full my-14 max-lg:flex-col px-[12rem]">
        <h2 className='w-2/5 text-5xl tracking-tight max-lg:text-3xl max-lg:w-full'>{inyectInformation.title}</h2>
        <p className='text-lg w-3/6 max-lg:w-full max-lg:text-sm max-lg:mt-8'>{inyectInformation.description}</p>
      </div>
      <div
        className="transition-none container_image w-full relative h-[30rem] bg-cover bg-no-repeat bg-center max-lg:w-full max-lg:h-[18rem] grayscale"
        style={{
          backgroundImage: `url(/image/services/${inyectInformation.image}.webp)`,
          width: "69%",
        }}
      />
    </>
  );
}