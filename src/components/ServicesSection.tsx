"use client";
import React from "react";

const ServicesSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-20 py-14 mt-36 w-full bg-neutral-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <span className="text-sm tracking-widest text-center text-amber-500">
        WELCOME TO REGISTERKARO.IN
      </span>

      <h2 className="mt-7 text-3xl font-bold tracking-normal leading-tight text-center text-gray-800">
        Explore Our Services
      </h2>

      <div className="self-end mt-12 w-full max-w-[1212px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {/* Service Card 1 */}
          <article className="w-[23%] max-md:ml-0 max-md:w-full mt-[29px]">
            <div className="flex flex-col items-center self-stretch my-auto w-full tracking-normal text-center max-md:mt-10">
              <img
                src="/ServicesSection/Company_Formation.svg"
                className="object-contain aspect-square w-[60px]"
                alt="Company Formation"
              />
              <h3 className="mt-8 text-xl font-extrabold leading-none text-black">
                Company Formation
              </h3>
              <p className="self-stretch mt-9 text-lg font-light leading-7 text-zinc-800">
                Build web-based solutions that
                <br />
                enhance customer experience.
              </p>
              <div className="flex gap-1.5 mt-14 max-w-full text-base text-slate-900 w-[108px] max-md:mt-10">
                <span className="grow font-semibold">Learn more </span>
                <span className="leading-none"></span>
              </div>
            </div>
          </article>

          {/* Service Cards Container */}
          <div className="ml-5 w-[77%] max-md:ml-0 max-md:w-full">
            <div className="w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                {/* Service Card 2 */}
                <article className="w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-10 py-7 pr-16 tracking-normal text-center border-l border-stone-200 max-md:-mr-0.5 max-md:max-w-full">
                    <div className="flex shrink-0 self-start mt-10 w-1 bg-red-700 h-[19px]" />
                    <div className="flex flex-col grow shrink-0 items-center basis-0 w-fit">
                      <img
                        src="/ServicesSection/Company_Secretarial_Services.svg"
                        className="object-contain aspect-square w-[60px]"
                        alt="Company Secretarial Services"
                      />
                      <h3 className="self-stretch mt-8 text-xl font-extrabold leading-none text-black">
                        Company Secretarial Services
                      </h3>
                      <p className="mt-9 text-lg font-light leading-7 text-zinc-800">
                        Make data-driven decisions and
                        <br />
                        utilize technology to reach
                        <br />
                        business goals.
                      </p>
                      <div className="flex gap-1.5 mt-8 max-w-full text-base text-slate-900 w-[108px]">
                        <span className="grow font-semibold">Learn more </span>
                        <span className="leading-none"></span>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Service Card 3 */}
                <article className="w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col py-7 w-full tracking-normal text-center border-l border-stone-200 max-md:max-w-full">
                    <div className="flex flex-col px-20 max-md:px-5 max-md:max-w-full">
                      <img
                        src="/ServicesSection/Virtual_Office_Address.svg"
                        className="object-contain self-center aspect-square w-[60px]"
                        alt="Virtual Office Address"
                      />
                      <h3 className="self-end mt-8 text-xl font-extrabold leading-none text-black max-md:mr-2">
                        Virtual Office Address
                      </h3>
                      <p className="mt-10 text-lg font-light leading-7 text-zinc-800">
                        Foster customer relationships by
                        <br />
                        effectively serving your market.
                      </p>
                    </div>
                    <div className="flex shrink-0 mt-6 w-1 bg-red-700 h-[19px]" />
                    <div className="flex gap-1.5 self-center mt-4 max-w-full text-base text-slate-900 w-[109px]">
                      <span className="grow font-semibold">Learn more </span>
                      <span className="leading-none"></span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
