"use client";
import React from "react";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="overflow-hidden py-14 pl-16 mt-9 w-full bg-cyan-900 max-md:pl-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between w-full text-3xl font-bold tracking-normal leading-tight text-white max-w-[1300px] max-md:max-w-full">
        <h2 className="max-md:max-w-full">What peoples says about us</h2>
        <img
          src="/TestimonialsSection/Decoration.svg"
          className="object-contain shrink-0 self-start mt-1.5 max-w-full aspect-[2.33] w-[100px]"
          alt="Decoration"
        />
      </div>

      <div className="mt-10 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col justify-around">
          {/* Testimonial 1 */}
          <article className="w-2/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start px-5 py-7 mx-auto w-full bg-white rounded-xl border border-solid border-[color:var(--Fuschia-60,#FCDDEC)] max-md:mt-8 max-md:max-w-full">
              <img
                src="/TestimonialsSection/Quote.svg"
                className="object-contain w-8 aspect-[1.14]"
                alt="Quote"
              />
              <p className="self-stretch mt-6 text-base leading-7 text-gray-500 max-md:max-w-full">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat aute irure sint
                amet occaecat cupidatat non proident ea commodo consequat aute
                irure sint amet occaecat cupidatat non proident
              </p>
              <div className="flex gap-4 mt-12 tracking-normal max-md:mt-10">
                <img
                  src="/TestimonialsSection/Chris_profile.png"
                  className="object-contain shrink-0 aspect-square rounded-[40px] w-[70px]"
                  alt="Chris profile"
                />
                <div className="flex flex-col my-auto">
                  <h3 className="self-start text-base font-bold text-yellow-950">
                    Chris
                  </h3>
                  <p className="mt-2.5 text-sm text-zinc-800">
                    President and CEO, PrintReach, USA
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Testimonial 2 */}
          <article className="w-2/5 max-md:ml-0 max-md:w-full">
            {/* Similar structure as Testimonial 1 */}
            <div className="flex flex-col items-start px-5 py-7 mx-auto w-full bg-white rounded-xl border border-solid border-[color:var(--Fuschia-60,#FCDDEC)] max-md:mt-8 max-md:max-w-full">
              <img
                src="/TestimonialsSection/Quote.svg"
                className="object-contain w-8 aspect-[1.14]"
                alt="Quote"
              />
              <p className="self-stretch mt-6 text-base leading-7 text-gray-500 max-md:max-w-full">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat aute irure sint
                amet occaecat cupidatat non proident ea commodo consequat aute
                irure sint amet occaecat cupidatat non proident
              </p>
              <div className="flex gap-4 mt-11 tracking-normal max-md:mt-10">
                <img
                  src="/TestimonialsSection/Chris_profile.png"
                  className="object-contain shrink-0 aspect-square rounded-[40px] w-[70px]"
                  alt="Chris profile"
                />
                <div className="flex flex-col my-auto">
                  <h3 className="self-start text-base font-bold text-yellow-950">
                    Chris
                  </h3>
                  <p className="mt-2.5 text-sm text-zinc-800">
                    President and CEO, PrintReach, USA
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
