import { globalClass } from "@/components/globalClass";
// import { cn } from "@/utils/lib";
// import { Carousel } from "@/components/carousel";
import data from "@/json/data.json";
import { Tooltip } from "@/components/tooltip";
import { InfiniteMovingCardsColaborators } from "@/extend/carouselHomeCollaborators";


export default function CollaboratorsHome() {
  return (
    <section>
        <div className="container flex justify-center items-center flex-col gap-8">
            <div className="flex items-center justify-center gap-8 max-lg:flex-col max-lg:gap-5">
              <div className="flex ">
                    <Tooltip items={data.home[0].frontPage} />
              </div>
              <p className={`${globalClass.p} max-lg:text-center`}>
                <span className="text-secondary">+ 100</span> empresas confian en nuestro trabajo.
              </p>
            </div>
            <div className="h-auto rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden py-3 my-5">
              <InfiniteMovingCardsColaborators
                items={data.home[0].collaborators ?? []}
                direction="left"
                speed="slow"
              />
              <InfiniteMovingCardsColaborators
                items={data.home[0].collaborators?? []}
                direction="right"
                speed="slow"
              />
            </div>
        </div>
    </section>
  );
}