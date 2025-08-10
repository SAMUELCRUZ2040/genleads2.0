import { globalClass } from "@/components/globalClass";
import { cn } from "@/utils/lib";
import { Carousel } from "@/components/carousel";
import data from "@/json/data.json";

const reviews = data.home[0].collaborators;
const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({
  name,
}: {
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden p-5",
      )}
    >
        <div className="bg-cover bg-no-repeat w-[auto] h-[3rem] bg-center" style={{ backgroundImage : `url(/home/${name}.webp)` }} />
    </figure>
  );
};

export default function Collaborators() {
  return (
    <section>
        <div className="container relative">
            <div className="title text-center flex justify-center items-center flex-col">
                <h2 className={`${globalClass.h2} text-center flex flex-col ${globalClass.flexCenter}`}>
                    <span>Nuestros Aliados</span>
                    <span>Impulsan Nuestra Visión</span>
                </h2>
                <p className={`${globalClass.extraP} text-center mt-5`}>Juntos creamos alianzas sólidas que nos permiten ofrecer soluciones innovadoras y confiables Gracias a nuestros colaboradores llevamos cada proyecto al siguiente nivel y construimos un futuro de éxito compartido</p>
            </div>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden my-16">
                <Carousel pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                    <ReviewCard key={review.name} {...review} />
                    ))}
                </Carousel>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
        </div>
    </section>
  );
}