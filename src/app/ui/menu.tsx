"use client";

import Link from "next/link";
import { NavLinkProps } from "../lib/definitions";
import CopyButton from "./copy-button";

const NavLink = ({ href, children, className }: NavLinkProps) => (
  <li className={`${className}`}>
    <Link href={href}>
      <p className="font-medium text-gray-600 hover:text-gray-800">{children}</p>
    </Link>
  </li>
);

export default function Menu() {
  return (
    <div className="fixed left-0 top-0 w-screen h-16 px-20 backdrop-blur-10 bg-white/50 border-2 border-black/5 z-10" >
      <style jsx>{`
        .backdrop-blur-10 {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
      `}</style>
      <nav className="h-full">
        <ul className="flex justify-end items-center h-full gap-4">
          <NavLink className="text-[1.15rem] mr-2"href="mailto:attila@attilaszepe.com">attila@attilaszepe.com</NavLink>
          <CopyButton />
          <NavLink className="text-[1.33rem]" href="https://linkedin.com/in/attila-szepe">LinkedIn</NavLink>/
          <NavLink className="text-[1.33rem]" href="https://github.com/costatee">Github</NavLink>
        </ul>
      </nav>
    </div>
  );
}
