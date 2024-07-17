"use client";

import RainbowText from "../lib/rainbow";
import Img from "next/image";

export default function Intro() {
  return (
    <section className="rounded-[32px]">
        <div className="flex min-h-[80vh] min-w-[90vw]">
          <div className="flex flex-col items-start justify-center m-20 px-20 pt-[10rem] leading-snug text-[5rem]">
              <RainbowText text="Hi, I'm Attila." />
              <RainbowText text="A front end developer," />
              <RainbowText text="based in Madrid, Spain." />
              <RainbowText text="Now available to work." />
          </div>
          <div className="flex justify-center items-center mt-[7rem] ml-[5rem]">
            <Img src="/round_headshot.png" alt="Attila self photo" className="border-[0.75rem] border-gray-300 rounded-full" width={500} height={500} />
          </div>
        </div>
    </section>
  );
}
