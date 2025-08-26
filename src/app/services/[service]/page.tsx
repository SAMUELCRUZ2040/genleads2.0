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
    const service = found(params.service);

    
    return (
        <section>
            <div className="container">
                <div className="title py-[10rem] max-lg:pb-[4rem] flex flex-col gap-8">
                    <h1 className='text-4xl lg:text-4xl xl:text-5xl 2xl:text-8xl flex flex-col  font-extrabold tracking-tight  leading-none'>
                        <span className='font-normal'>{service?.title}</span>    
                        <span>{service?.addTitle}</span>    
                    </h1>
                    <p className={globalClass.extraP}>{service?.description}</p>
                </div>
                <div className="media ps-64">
                <div
                    className="transition-none container_image w-full relative h-[60rem] bg-cover bg-no-repeat bg-center max-lg:w-full max-lg:h-[30rem] "
                    style={{
                    backgroundImage: `url(/services/${service?.image}.jpg)`,
                    }}
                />
                </div>
                <IncludesServices idPage={params.service} />
                <BenefitsServices />
                <MiniService />
            </div>
        </section>
    );
};