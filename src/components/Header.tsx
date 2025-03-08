"use client";
import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <header className="flex flex-col justify-center items-end px-16 py-2 w-full whitespace-nowrap bg-cyan-900 max-md:px-5 max-md:max-w-full">
        <nav className="flex gap-5">
          <div className="flex gap-1.5 my-auto">
            <span className="my-auto text-base font-black leading-none text-violet-100"></span>
            <a href="/" className="text-sm leading-none text-white basis-auto">
              www.registerkaro.in
            </a>
          </div>
          <div className="flex shrink-0 w-px h-7" />
          <div className="flex gap-1 my-auto text-sm">
            <span className="my-auto font-black leading-none text-violet-100"></span>
            <a
              href="tel:+918447746183"
              className="leading-none text-white basis-auto"
            >
              +918447746183
            </a>
          </div>
          <div className="flex shrink-0 w-px h-7" />
        </nav>
      </header>

      <nav className="flex overflow-hidden flex-wrap gap-5 justify-between px-16 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex relative flex-col justify-center items-start px-2 py-4 aspect-[5] w-[355px] max-md:pr-5">
          <img
            src="/header/Logo.png"
            className="object-contain max-w-full aspect-[5.41] w-[200px]"
            alt="Logo"
          />
        </div>

        <div className="flex flex-wrap gap-9 items-center my-auto text-base font-semibold text-gray-800 max-md:max-w-full">
          <a href="/" className="grow self-stretch my-auto">
            Home
          </a>
          <div className="flex gap-2 self-stretch my-auto">
            <a href="/services" className="grow">
              Our Services
            </a>
            <img
              src="/header/Services_dropdown.svg"
              className="object-contain shrink-0 my-auto w-2.5 aspect-[1.67]"
              alt="Services dropdown"
            />
          </div>
          <div className="flex flex-wrap gap-9 items-center self-stretch max-md:max-w-full">
            <a href="/blog" className="self-stretch my-auto">
              Blog
            </a>
            <a href="/contact" className="self-stretch my-auto">
              Contact Us
            </a>
            <a href="/about" className="self-stretch my-auto">
              About us
            </a>
            <img
              src="/header/Menu.svg"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              alt="Menu"
            />
            <div className="flex gap-5 items-center self-stretch font-bold tracking-tight text-center text-white">
              <button className="self-stretch px-6 py-3 my-auto bg-orange-400 rounded w-[157px] max-md:px-5">
                Talk An Expert
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex shrink-0 h-px bg-neutral-300 bg-opacity-60 max-md:max-w-full" />
    </>
  );
};

export default Header;
