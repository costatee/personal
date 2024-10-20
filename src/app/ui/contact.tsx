"use client";

import RainbowText from "../lib/rainbow";

export default function Contact() {
  return (
    <section className="min-w-[90vw] h-[25vh] md:h-[20vh] bg-gray-100 rounded-[32px] mt-10 p-4 md:p-6 border-2 border-gray-200 shadow-lg">
      <div className="flex justify-center items-center text-[2.3rem] md:text-[3rem] lg:text-[4rem]">
        <h1 className="">This is so </h1>
        <RainbowText text="&nbsp;exciting!" />
      </div>
        <div className="w-full mt-2 flex flex-col items-center text-gray-600">
          <p className="text-[1.1rem] md:text-[1.6rem] lg:text-[2rem] elipsis">For work, collaboration, contribution. Find me on <a href="https://linkedin.com/in/attila-szepe" className="text-gray-800 hover:text-[#0077B5]">LinkedIn</a> or <a href="https://github.com/costatee" className="text-gray-800 hover:text-[#2dba4e]">GitHub</a>.</p>
          <p className="text-[1.1rem] md:text-[1.6rem] lg:text-[2rem]">For anything else, feel free to <a href="mailto:attila@attilaszepe.com" className="text-gray-800 hover:text-lime-700">email me</a>, or fill out this form below</p>
        </div>
        <div className="w-full mt-2 flex flex-col items-center text-gray-600">
          <form className="w-full mt-4 flex flex-col items-center">
              <input type="text" placeholder="Name" className="h-10 rounded-lg border-2 border-gray-200 bg-gray-100 p-2 text-gray-600 focus:border-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-700" />
              <input type="email" placeholder="Email" className="h-10 rounded-lg border-2 border-gray-200 bg-gray-100 p-2 text-gray-600 focus:border-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-700" />
              <textarea placeholder="Message" className="h-40 rounded-lg border-2 border-gray-200 bg-gray-100 p-2 text-gray-600 focus:border-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-700"></textarea>
              <button className="h-10 rounded-lg bg-lime-700 text-white text-center text-[1.1rem] md:text-[1.6rem] lg:text-[2rem] hover:bg-lime-800 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-lime-700">Send</button>
          </form>
        </div>
    </section>
  );
}
