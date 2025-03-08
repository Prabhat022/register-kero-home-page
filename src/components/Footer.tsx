"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center px-28 py-16 bg-blue-950 max-md:px-5 max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-start w-full max-md:max-w-full">
          {/* Company Info */}
          <div className="min-w-60 w-[247px]">
            <div className="flex flex-col w-full max-w-[247px]">
              <p className="text-base font-medium tracking-normal leading-6 text-slate-400">
                Design outstanding interfaces with advanced Figma features in a
                matter of minutes.
              </p>
              <div className="flex gap-6 items-start self-start mt-4">
                <div className="flex shrink-0 w-6 h-6" />
                <div className="flex shrink-0 w-6 h-6" />
                <img
                  src="/Footer/Social.svg"
                  className="object-contain shrink-0 w-6 aspect-square"
                  alt="Social"
                />
                <div className="flex shrink-0 w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <nav className="text-base tracking-normal w-[150px]">
            <h3 className="overflow-hidden gap-1 self-stretch font-bold text-orange-400 rounded-md">
              START A BUSINESS
            </h3>
            <ul className="flex flex-col items-start mt-6 w-full font-medium whitespace-nowrap text-slate-400">
              <li className="overflow-hidden gap-1 self-stretch rounded-md">
                <a href="/features">Features</a>
              </li>
              <li className="overflow-hidden gap-1 self-stretch mt-3 rounded-md">
                <a href="/solutions">Solutions</a>
              </li>
              <li className="overflow-hidden gap-1 self-stretch mt-3 rounded-md">
                <a href="/integrations">Integrations</a>
              </li>
              <li className="overflow-hidden gap-1 self-stretch mt-3 rounded-md">
                <a href="/enterprise">Enterprise</a>
              </li>
              <li className="overflow-hidden gap-1 self-stretch mt-3 rounded-md">
                <a href="/solutions">Solutions</a>
              </li>
            </ul>
          </nav>

          <nav className="text-base tracking-normal w-[234px]">
            <h3 className="overflow-hidden gap-1 self-stretch font-bold text-orange-400 rounded-md">
              GOVERNMENT REGISTRATION
            </h3>
            <ul className="flex flex-col items-start mt-6 w-full font-medium whitespace-nowrap text-slate-400">
              <li className="overflow-hidden gap-1 self-stretch rounded-md">
                <a href="/partners">Partners</a>
              </li>
              <li className="overflow-hidden gap-1 self-stretch mt-3 rounded-md">
                <a href="/community">Community</a>
              </li>
              <li className="overflow-hidden gap-1 self-stretch mt-3 rounded-md">
                <a href="/developers">Developers</a>
              </li>
              <li className="overflow-hidden gap-1 self-stretch mt-3 rounded-md">
                <a href="/app">App</a>
              </li>
              <li className="overflow-hidden gap-1 self-stretch mt-3 rounded-md">
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </nav>

          <nav className="text-base tracking-normal w-[158px]">
            <h3 className="overflow-hidden gap-1 self-stretch font-bold text-orange-400 rounded-md">
              COMPLIANCE & TAX
            </h3>
            <ul className="flex flex-col items-start mt-6 w-full font-medium text-slate-400">
              <li className="overflow-hidden gap-1 self-stretch whitespace-nowrap rounded-md">
                <a href="/channels">Channels</a>
              </li>
              <li className="overflow-hidden gap-1 self-stretch mt-3 whitespace-nowrap rounded-md">
                <a href="/scale">Scale</a>
              </li>
              <li className="overflow-hidden gap-1 self-stretch mt-3 rounded-md">
                <a href="/demo">Watch the Demo</a>
              </li>
              <li className="overflow-hidden gap-1 self-stretch mt-3 rounded-md">
                <a href="/competition">Our Competition</a>
              </li>
            </ul>
          </nav>

          <nav className="text-base tracking-normal w-[101px]">
            <h3 className="overflow-hidden gap-1 self-stretch font-bold text-orange-400 rounded-md">
              BIS & CDSCO
            </h3>
            <ul className="flex flex-col items-start mt-6 w-full font-medium text-slate-400">
              <li className="overflow-hidden gap-1 self-stretch rounded-md">
                <a href="/about">About Us</a>
              </li>
              <li className="overflow-hidden gap-1 self-stretch mt-3 whitespace-nowrap rounded-md">
                <a href="/news">News</a>
              </li>
              <li className="overflow-hidden gap-1 self-stretch mt-3 whitespace-nowrap rounded-md">
                <a href="/leadership">Leadership</a>
              </li>
              <li className="overflow-hidden gap-1 self-stretch mt-3 rounded-md">
                <a href="/media-kit">Media Kit</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col mt-16 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full">
          <div className="flex justify-center items-center self-center px-3 w-14 h-14 bg-orange-400 rounded-[30px]">
            <img
              src="/Footer/Logo.svg"
              className="object-contain self-stretch my-auto w-8 aspect-square"
              alt="Logo"
            />
          </div>
          <p className="mt-4 text-base font-medium tracking-normal text-center text-slate-400 max-md:max-w-full">
            © 2024 Registerkaro. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
