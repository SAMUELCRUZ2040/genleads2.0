import Link from "next/link";
import Image from "next/image";
import data from "@/json/data.json";
import { globalClass } from "@/components/globalClass";
import { cn } from "@/utils/lib";

export default function Navbar() {
  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full h-auto z-[9999] flex",
      globalClass.flexCenter
    )}>
      <div className="container my-10 px-72 flex justify-between items-center max-lg:px-6 max-xl:px-32">
        <div className={cn(
          "relative py-3 w-full backdrop-blur-sm",
          "flex justify-between items-center",
          "max-md:px-8 max-md:py-2",
          "rounded-3xl shadow-md px-12 bg-white/[0.17] max-lg:rounded-xl"
        )}>
          {/* Logo */}
          <div>
            <Link href="/" className="block">
              <Image
                src="/logo.webp"
                alt="Logo"
                width={256}
                height={64}
                className="w-64 h-16 max-md:w-32 max-md:h-8 object-contain"
                priority
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex gap-7 h-full items-center">
            {data.navigation.map((item, index) => (
              <a
                key={`nav-${index}`}
                href={item.path}
                className={cn(
                  globalClass.pHero,
                  "flex items-center gap-2 z-[9999]",
                  "transition-transform duration-200 ease-in-out",
                  "hover:-translate-y-1 hover:translate-x-1 hover:text-black",
                  "will-change-transform"
                )}
              >
                <Image
                  src="/arrow.png"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className={cn(
                globalClass.flexCenter,
                globalClass.pHero,
                "gap-2 text-lg",
                "bg-primary hover:bg-secondary text-white rounded-2xl",
                "px-3 py-3 transition-colors duration-200"
              )}
            >
              Agendar cita
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}