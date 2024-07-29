"use client";

import RainbowText from "../lib/rainbow";

export default function Contact() {
  return (
    <section className="min-w-[90vw] h-[25vh] md:h-[20vh] bg-gray-100 rounded-[32px] mt-10 p-4 md:p-6 border-2 border-green-100 shadow-sm shadow-green-300/50">
      <div className="flex justify-center items-center text-[2.3rem] md:text-[3rem] lg:text-[4rem]">
        <h1 className="">This is so </h1>
        <RainbowText text="&nbsp;exciting!" />
      </div>
        <div className="w-full mt-2 flex flex-col items-center text-gray-600">
          <p className="text-[1.1rem] md:text-[1.6rem] lg:text-[2rem] elipsis">For work, collaboration, contribution. Find me on <a href="https://linkedin.com/in/attilaszepe" className="text-gray-800 hover:text-[#0077B5]">LinkedIn</a> or <a href="https://twitter.com/attilaszepe" className="text-gray-800 hover:text-[#2dba4e]">GitHub</a>.</p>
          <p className="text-[1.1rem] md:text-[1.6rem] lg:text-[2rem]">For anything else, feel free to <a href="mailto:attila@attilaszepe.com" className="text-gray-800 hover:text-lime-700">email me</a>, or fill out this form below</p>
        </div>
    </section>
  );
}
