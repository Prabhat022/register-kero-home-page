"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex overflow-hidden relative flex-col items-start px-16 pb-16 w-full min-h-[585px] max-md:px-5 max-md:max-w-full">
      <img
        src="/HeroSection/Hero_background.png"
        className="object-cover absolute inset-0 w-full h-[91%]"
        alt="Hero background"
      />

      <div className="flex relative flex-col items-start mt-10 max-w-full w-[675px]">
        <div className="flex relative flex-col px-7 py-1 max-w-full text-sm font-semibold leading-none aspect-[10.5] text-neutral-900 w-[230px] max-md:px-5">
          <img
            src="/HeroSection/Rating_background.svg"
            className="object-cover absolute inset-0 size-full"
            alt="Rating background"
          />
          <span>Google Rating</span>
        </div>

        <h1 className="mt-8 text-5xl font-medium tracking-tighter leading-none text-black max-md:max-w-full max-md:text-4xl">
          Your trusted partner
          <br />
          for compliance business needs
        </h1>

        <img
          src="/HeroSection/Divider.svg"
          className="object-contain mt-6 w-10 aspect-[40]"
          alt="Divider"
        />

        <p className="self-stretch mt-8 text-xl tracking-tight leading-9 text-zinc-800 max-md:mr-2 max-md:max-w-full">
          <span className="text-[#4F4F4F]">
            An online business compliance platform that helps entrepreneurs and
            other individuals with various,{" "}
          </span>
          <strong className="text-[#4F4F4F]">registrations</strong>
          <span className="text-[#4F4F4F]">, </span>
          <strong className="text-[#4F4F4F]">tax filings</strong>
          <span className="text-[#4F4F4F]">, and other </span>
          <strong className="text-[#4F4F4F]">legal matters.</strong>
        </p>

        <div className="flex flex-wrap gap-10 items-start mt-11 max-w-full w-[580px] max-md:mt-10">
          {/* Stats Section */}
          <div className="flex flex-col flex-1 self-stretch my-auto">
            <div className="flex gap-5 self-start">
              <div className="flex gap-1 self-start">
                <img
                  src="/HeroSection/Star1.svg"
                  className="object-contain shrink-0 aspect-square fill-neutral-600 w-[19px]"
                  alt="Star"
                />
                <img
                  src="/HeroSection/Star2.svg"
                  className="object-contain shrink-0 aspect-square fill-neutral-600 w-[19px]"
                  alt="Star"
                />
              </div>
              <span className="text-2xl font-extrabold leading-3 text-center">
                <span style={{ letterSpacing: "-0.22px" }}>4.5</span>+
              </span>
            </div>
            <div className="flex gap-5">
              <div className="flex gap-1 self-start">
                <img
                  src="/HeroSection/Star3.svg"
                  className="object-contain shrink-0 aspect-[1.06] fill-neutral-600 w-[19px]"
                  alt="Rating"
                />
                <img
                  src="/HeroSection/Star4.svg"
                  className="object-contain shrink-0 aspect-[1.06] fill-neutral-600 w-[19px]"
                  alt="Rating"
                />
              </div>
              <span className="grow shrink text-sm leading-none text-neutral-600 w-[94px]">
                Customer Rating
              </span>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="flex flex-1 gap-4">
            <img
              src="/HeroSection/Clients_icon.svg"
              className="object-contain shrink-0 w-12 aspect-square"
              alt="Clients icon"
            />
            <div className="flex flex-col my-auto">
              <span className="text-2xl font-extrabold leading-3">
                <span style={{ letterSpacing: "-0.22px" }}>20,000</span>+
              </span>
              <span className="self-start mt-1.5 text-sm leading-none text-neutral-600">
                Clients
              </span>
            </div>
          </div>

          <div className="flex flex-1 gap-4">
            <img
              src="/HeroSection/Financial_icon.svg"
              className="object-contain shrink-0 w-12 aspect-square"
              alt="Financial icon"
            />
            <div className="flex flex-col my-auto">
              <span className="self-start text-2xl font-extrabold leading-3 max-md:ml-2">
                <span style={{ letterSpacing: "-0.22px" }}>99.8</span>%
              </span>
              <span className="mt-2.5 text-sm leading-none text-neutral-600">
                Financial Stability
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-5 justify-between mt-9 max-w-full text-base w-[474px]">
          <button className="px-11 py-5 font-bold tracking-wide leading-none text-center text-white bg-cyan-900 rounded shadow-[0px_30px_50px_rgba(168,22,75,0.15)] max-md:px-5">
            Talk An Expert
          </button>
          <div className="flex gap-2 items-center my-auto font-semibold leading-loose text-zinc-800">
            <img
              src="/HeroSection/Play.svg"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square rounded-[29px]"
              alt="Play"
            />
            <span className="self-stretch my-auto w-[242px]">
              See how it works
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
