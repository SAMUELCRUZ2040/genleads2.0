import { cn } from "@/utils/lib";
import { globalClass } from "./globalClass";

export default function Line({ 
  title, 
  descriptionOne, 
  DescriptionTwo
 } : {
  title : string,
  descriptionOne : string,
  DescriptionTwo : string
}) {

  return (
      <div className={cn(
        `flex ps-16 relative px-36 py-44 overflow-hidden`,
      )}>
        <div 
          className={cn(
            `h-full w-[2px] absolute bg-custom-gradient top-0`,
          )}
        />
        <div className="p-8 m-5">
          <h3 className={cn(
            `${globalClass.h3} flex flex-col gap-5`,
          )}>
            <span className="font-bold ">{title}</span>
            <span>{descriptionOne}</span>
            <span>{DescriptionTwo}</span>
          </h3>
        </div>
      </div>
  )
}
