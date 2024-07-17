"use client";

import { inter } from "../lib/fonts";
import Scroller from "./scroller";

export default function Work() {
  const logos = [
    "/js.svg",
    "/ts.svg",
    "/tailwind.svg",
    "/node.svg",
    "/react.svg",
    "/vite.svg",
    "/nextjs.svg",
    "/html5.svg",
    "/udemy.svg",
    "/docker.svg",
  ]

  return (
    <section className="min-w-[90vw] h-full bg-gray-100 rounded-[36px] border-2 border-gray-200 overflow-hidden">
        <div className="flex flex-col">
          <div className="flex justify-center items-center"> 
            {/* <h1 className={`${inter.className} text-[1.85rem] py-1.5 px-4`}>Some of my ever expanding stack</h1> */}
          </div>
            <div className="w-fit my-12">
              <Scroller items={logos} />
            </div>
          </div>
    </section>
  )
}