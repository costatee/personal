"use client";

import Scroller from "./scroller";

export default function Stack() {
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
    <section className="min-w-[90vw] h-full bg-gray-100 rounded-[36px] border-2 border-gray-200 overflow-hidden mt-6 md:mt-10">
        <div className="flex flex-col">
          <div className="flex justify-center items-center"> 
            {/* <h1 className="my-10 text-[1.85rem]">Some of the stuff I've dipped my toes in</h1> */}
          </div>
            <div className="w-fit my-4 lg:my-6">
              <Scroller items={logos} />
            </div>
          </div>
    </section>
  )
}