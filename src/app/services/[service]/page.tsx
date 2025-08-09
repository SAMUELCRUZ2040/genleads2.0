import { globalClass } from '@/components/globalClass';
import BenefitsServices from '@/content/benefitsServices';
import { IncludesServices } from '@/content/includesServices';
import { MiniService } from '@/content/miniService';
import data from '@/json/data.json';

type TemplateProps = {
    params: { [key: string]: string }
};

export default function Template ({ params }: TemplateProps)  {

    const found = (id: string) => {
    const services = data.services[0].informationService,
          consult = services.find(iterator => iterator.id === id);  
    return consult;
    };
    // const service = found(params.service);

    
    return (
        <section>
            <div className="container">
                <div className="title py-[10rem] max-lg:pb-[4rem] flex flex-col gap-8">
                    <h1 className='text-4xl lg:text-4xl xl:text-5xl 2xl:text-8xl flex flex-col  font-extrabold tracking-tight  leading-none'>
                        <span className='font-normal'>Somos especialistas</span>    
                        <span>En lo que hacemos</span>    
                    </h1>
                    <p className={globalClass.extraP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi libero nulla voluptatum ipsum quae aliquid impedit a? Officiis earum molestiae reprehenderit voluptates, eum id quaerat cumque iure, eius, corporis quos!</p>
                </div>
                <div className="media ps-64">
                    <video
                        src="/videos/homeInterest2.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full rounded-lg object-cover"
                        style={{ maxHeight: "70vh" }}
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
                <IncludesServices idPage={params.service} />
                <BenefitsServices />
                <MiniService />
            </div>
        </section>
    );
};