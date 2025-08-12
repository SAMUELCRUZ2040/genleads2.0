import data from '@/json/data.json';
import Link from 'next/link';
import { globalClass } from '@/components/globalClass';

export default function Services() {
  return (
    <section className="flex justify-center items-center mb-[7rem] bg-center bg-fixed bg-no-repeat bg-cover" style={{backgroundImage : "url(/figure.png)"}}>
        <div className="container px-[5rem]">
            <div className="title py-[10rem] max-lg:pb-[4rem]">
                <h1 className='text-4xl lg:text-4xl xl:text-5xl 2xl:text-8xl flex flex-col  font-extrabold tracking-tight  leading-none'>
                    <span className='font-normal'>Somos especialistas</span>    
                    <span>En lo que hacemos</span>    
                </h1>
            </div>
            <div className="services grid grid-cols-3 gap-[8rem] my-14 flex-wrap max-lg:grid-cols-2 max-sm:grid-cols-1">
              {data.services[0].servicesLogo.map((data, key) => (
                <div className="group">
                  <Link href={`services/${data.url}`} key={key} >
                    <div className='flex flex-col gap-6'>
                      <div className="w-14 h-14 bg-center bg-no-repeat bg-cover group-hover:translate-y-[-5px]" style={{backgroundImage : `url(/services/${data.image}.webp)`}} />
                      <h3 className={globalClass.h4}>{data.title}</h3>
                      <p className={globalClass.extraP}>{data.miniDescription}</p>
                      <p className={globalClass.extraP}>{data.description}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
        </div>
    </section>
  )
}
