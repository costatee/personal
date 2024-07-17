"use client";

import { inter } from "../lib/fonts";
import PenStrikeHeading from "./pen";

export default function Work() {
  return (
    <section className="min-w-[90vw] h-full bg-gray-100 rounded-[36px] border-2 border-gray-200">
        <div className="flex flex-col">
          <div className="flex justify-center items-center mt-10"> 
            {/* <h1 className={`${inter.className} text-[1.85rem] py-1.5 px-4 border-2 border-gray-200 rounded-[36px]`}>Some of my ever expanding stack</h1> */}
            <PenStrikeHeading />
          </div>
            <div className="flex justify-center items-center gap-[10rem] m-16 overflow-x-clip">
              <img src="/js.svg" alt="JavaScript logo" className="w-36 h-36" />
              <img src="/ts.svg" alt="TypeScript logo" className="w-36 h-36" />
              <img src="/tailwind.svg" alt="Tailwind CSS logo" className="w-36 h-36" />
              <img src="/node.svg" alt="Node logo" className="w-36 h-36" />
              <img src="/react.svg" alt="React logo" className="w-36 h-36" />
              <img src="/vite.svg" alt="Vite logo" className="w-36 h-36" />
              <img src="/nextjs.svg" alt="Next.js logo" className="w-36 h-36" />
              <img src="/html5.svg" alt="HTML5 logo" className="w-36 h-36" />
            </div>
          </div>
    </section>
  )
}