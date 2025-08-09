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
        "max-md:px-8 max-md:py-2"
      )}>
        <div>
          <Link href="/">
            <div className={cn(
              "bg-cover bg-center bg-no-repeat",
              "w-[12rem] h-[2rem] max-md:w-[8rem] max-md:h-[2rem]"
            )}
            style={{backgroundImage : "url(/logo.png)"}} />
          </Link>
        </div>
        <div className="list_item flex gap-7 h-full justify-center align-center max-md:hidden">
          {data.navigation.map((item: { path: string; name: string }, key: number) => (
            <Link
              key={key}
              href={item.path}
              className={`${globalClass.extraP} flex ${globalClass.flexCenter} gap-2 !z-[9999] hover:translate-y-[2px]`}
            >
              <div className="bg-cover bg-center bg-no-repeat w-[1rem] h-[1rem] max-md:w-[8rem] max-md:h-[2rem]" style={{backgroundImage : "url(/arrow.png)"}} />
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex max-md:hidden">
          <Link href={"/contact"} className={cn(
            `${globalClass.flexCenter}  ${globalClass.extraP} gap-2 text-lg  flex`,
            "bg-[#000000] text-white rounded-tr-xl rounded-bl-xl",
            "px-11 py-3 hover:scale-[1.06] transition-all"
          )} >Let's start?</Link>
        </div>
      </div>
    </nav>
  )
}
