import { globalClass } from "@/components/globalClass";
import { InfiniteMovingCards } from "@/extend/carouselHomeTestimonies";
import data from "@/json/data.json";
import { cn } from "@/utils/lib";

export function Testimonies() {

  return (
  <section>
    <div className="container">
      <div className={cn(
        "text-start flex justify-between mt-52",
        "max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:text-center"
      )}>
          <h2 className={cn(
            `${globalClass.h2} flex flex-col items-start justify-start mt-5`,
            "max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:text-center"
          )}>
              <span className={`rounded-2xl bg-extraPrimary px-5  ${globalClass.p} flex items-center justify-center gap-5`}>
                  <span className="w-3 h-3 rounded-full bg-primary "/>
                  testimonios
              </span>
              <span >Nuestros Aliados</span>
              <span className="text-primary">Impulsa Nuestra Visión</span>
          </h2>
          <h3 className={cn(
            "flex-col flex gap-5 items-end",
            "max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:text-center",
          )}>
            <span className="text-6xl text-primary">+ 500</span>
            <span className={globalClass.h3}>clientes satisfechos</span>
          </h3>
      </div>
      <div className="h-auto rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden py-3 my-5">
        <InfiniteMovingCards
          items={data.testimonies?.[0]?.firstRow ?? []}
          direction="left"
          speed="slow"
        />
        <InfiniteMovingCards
          items={data.testimonies?.[0]?.secondRow ?? []}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  </section>
  );
}
