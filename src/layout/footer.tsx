import { globalClass } from "@/components/globalClass";
import data from "@/json/data.json";
import Link from "next/link";
import Action from "./action";

export default function Footer() {
    return (
        <footer className="max-lg:px-5 mt-72 pt-44">
            <Action />
            <hr className="mt-12" />
            <div className="flex flex-col items-center">
                <div className="container flex justify-between items-center pe-12 pt-12 mt-12 max-md:flex-col max-md:gap-12 max-md:pe-0">
                    {/* Logo & Copyright */}
                    <div className="flex flex-col items-start justify-start max-md:items-center max-md:gap-4 max-md:justify-center">
                        <div
                            className="w-[12rem] h-[3rem] bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: "url(/logo.jpg)" }}
                        />
                        <p className={globalClass.smallP}>
                            © copyright Startup 2024. All rights reserved.
                        </p>
                    </div>
                    {/* Footer Links */}
                    <div className="flex gap-12 max-md:flex-wrap max-md:justify-center max-md:w-full">
                        {data.footer.map((section, sectionIdx) => (
                            <div className="flex flex-col gap-5" key={sectionIdx}>
                                {Object.entries(section).map(([key, value], linkIdx) => (
                                    <Link
                                        key={linkIdx}
                                        href="/"
                                        className={`${value[0].title ? "font-black !ps-1 !text-black" : ""} ${globalClass.smallP} ps-2`}
                                    >
                                        {value[0].word}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                {/* Large Gradient Title */}
                <div className="container w-full flex justify-center items-center">
                    <h2 className="text-center uppercase mt-20 text-5xl md:text-9xl lg:text-[12rem] xl:text-[13rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#ffffff2f] dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 max-md:pb-8 max-md:text-[5rem]">
                        let's start
                    </h2>
                </div>
            </div>
        </footer>
    );
}