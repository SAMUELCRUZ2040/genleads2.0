import { globalClass } from "@/components/globalClass";
import { cn } from "@/utils/lib";
import { Carousel } from "@/components/carousel";
import data from "@/json/data.json";
import { Tooltip } from "@/components/tooltip";

const ReviewCard = ({
  name,
}: {
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-60 cursor-pointer overflow-hidden p-5",
      )}
    >
        <div className="bg-cover bg-no-repeat h-[6rem] bg-center grayscale-[90%] hover:grayscale-0 transition" style={{ backgroundImage : `url(/home/${name}.png)` }} />
    </figure>
  );
};

export default function Collaborators() {
  return (
    <section>
        <div className="container relative">
            <div className="flex items-center justify-center gap-8">
              <div className="flex">
                    <Tooltip items={data.home[0].frontPage} />
              </div>
              <p className={globalClass.extraP}>
                <span className="text-secondary">+ 100</span> empresas confian en nuestro trabajo.
              </p>
            </div>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden my-16">
                <Carousel 
                    direction="left"
                    speed="slow"
                    pauseOnHover={false}
                >
                  {data.home[0].collaborators.map((item, idx) => (
                      <ReviewCard name={item.name} key={idx}/>
                  ))}
                </Carousel> 
                <Carousel 
                    direction="right"
                    speed="slow"
                    pauseOnHover={false}
                >
                  {data.home[0].collaborators.map((item, idx) => (
                      <ReviewCard name={item.name} key={idx}/>
                  ))}
                </Carousel> 
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
            </div>
        </div>
    </section>
  );
}