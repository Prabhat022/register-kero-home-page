"use client";
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="overflow-hidden w-full bg-neutral-50 max-md:max-w-full">
      <div className="overflow-hidden py-16 pr-2.5 pl-16 bg-white max-md:pl-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
              <div className="max-w-full w-[609px]">
                <span className="max-w-full text-sm tracking-widest text-amber-500 rounded-none w-[258px]">
                  WELCOME TO REGISTERKARO.IN
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tighter leading-none text-gray-800 max-md:max-w-full">
                  About <span className="text-[#FFA229]">Register Karo</span>
                </h2>
              </div>

              <p className="self-stretch mt-6 text-base tracking-normal leading-7 text-neutral-900 max-md:max-w-full">
                We have been using Intelegencia as our DevOps vendor for our
                field service applications over the last couple of years and I'm
                extremely pleased with
                <br />
                their performance, ability to execute, and willingness to adapt
                in our ever changing environment. Perry is an outstanding leader
                who is fanatical about
                <br />
                customer satisfaction. He has built a solid team which has
                consistently delivered on projects thereby exceeding everyone's
                expectations.
                <br />
                <br />I would strongly recommend their services to any
                organization that is looking for solid, reliable, and
                predictable outcomes.
              </p>

              <button className="flex gap-3 px-6 py-4 mt-10 text-base text-white bg-cyan-900 rounded shadow-[8px_8px_56px_rgba(251,199,94,0.1)] max-md:px-5">
                <span className="grow">Learn More</span>
                <span className="self-start tracking-normal leading-none text-center"></span>
              </button>
            </div>
          </div>

          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow items-end px-20 mt-1.5 rounded-none min-h-[422px] max-md:mt-10 max-md:max-w-full">
              <img
                src="/AboutSection/about.png"
                className="object-cover absolute inset-0 size-full"
                alt="About background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
