import Link from "next/link";
import data from "@/json/data.json";
import { globalClass } from "@/components/globalClass";
import { cn } from "@/utils/lib";

export default function Navbar() {

  
  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full",
      `!z-[9999]`,
      `${globalClass.flexCenter} flex`,
    )}>
      <div className={cn(
        "relative container my-10 py-6",
        "flex justify-between items-center",
        "max-md:px-8 max-md:py-2",
        "rounded-3xl p-5 px-12 w-1/2  max-2xl:w-4/5 max-xl:w-full ",
      )}>
        <div>
          <Link href="/">
            <div className={cn(
              "bg-cover bg-center bg-no-repeat",
              "w-[16rem] h-[4rem] max-md:w-[8rem] max-md:h-[2rem]"
            )}
            style={{backgroundImage : "url(/logo.png)"}} />
          </Link>
        </div>
        <div className="list_item flex gap-7 h-full justify-center align-center max-md:hidden">
          {data.navigation.map((item: { path: string; name: string }, key: number) => (
            <Link
              key={key}
              href={item.path}
              className={cn(
                  `${globalClass.extraP} flex ${globalClass.flexCenter} gap-2 !z-[9999]`,
                  "transition-transform will-change-transform hover:translate-y-[-3px] hover:translate-x-[2px]",
                  "hover:text-black hover:font-semibold"
                )}
            >
              <div className="bg-cover bg-center bg-no-repeat w-[1rem] h-[1rem] max-md:w-[8rem] max-md:h-[2rem]" style={{backgroundImage : "url(/arrow.png)"}} />
              {item.name}
            </Link>
          ))}
        </div>
        <div className="max-md:hidden">
            <Link href={"/contact"} className={cn(
              `${globalClass.flexCenter}  ${globalClass.extraP} gap-2 text-lg  flex`,
              "bg-primary hover:bg-secondary text-white rounded-2xl",
              "px-11 py-3  transition"
            )} >Agendar cita ahora mismo</Link>
        </div>
      </div>
    </nav>
  )
}
