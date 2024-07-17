"use client";

import RainbowText from "../lib/rainbow";
import Img from "next/image";
import Rolling from "./rolling";

const videos = [
  '/me.MOV', '/merobot.MOV', '/mechicken.MOV',
  '/me.MOV', '/merobot.MOV', '/mechicken.MOV',
  '/me.MOV', '/merobot.MOV', '/mechicken.MOV',
  '/me.MOV', '/merobot.MOV', '/mechicken.MOV',
  '/me.MOV', '/merobot.MOV', '/mechicken.MOV'
];

export default function Intro() {
  return (
    <section className="rounded-[32px]">
        <div className="flex min-h-[80vh] min-w-[90vw]">
          <div className="flex flex-col items-start justify-center m-20 px-20 leading-snug text-[5.25rem]">
              <RainbowText text="Hi, I'm Attila." />
              <RainbowText text="A front end developer," />
              <RainbowText text="based in Madrid, Spain." />
              <RainbowText text="Now available to work." />
          </div>
          <div className="flex flex-col justify-center mr-20 pr-20">

            {/* <Img src="/round_headshot.png" alt="Attila self photo" className="border-[0.75rem] border-gray-300 rounded-full" width={500} height={500} />
            <video src="/me.MOV" className="border-[0.75rem] border-gray-300 rounded-full w-[500px] h-[500px]" controls /> */}

            <Rolling videos={videos} /> 

          </div>
        </div>
    </section>
  );
}
