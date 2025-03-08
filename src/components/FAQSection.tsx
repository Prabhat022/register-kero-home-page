"use client";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "Yes, you can recover deleted files from your desktop using our software. The process is simple and efficient.",
    },
    {
      question:
        "How much time Stellar Data Recovery will take to recover data?",
      answer:
        "The recovery time varies depending on the amount of data and type of recovery needed.",
    },
    {
      question: "Can I recover a specific file with the help of this software?",
      answer:
        "Yes, you can search for and recover specific files using our targeted recovery feature.",
    },
    {
      question: "What is Quick scan and Deep scan?",
      answer:
        "Quick scan is a rapid file recovery option, while Deep scan performs a thorough search for lost data.",
    },
    {
      question: "Does Stellar Data Recovery support exFAT partitions?",
      answer:
        "Yes, our software supports recovery from exFAT partitions along with many other file systems.",
    },
  ];

  return (
    <section className="flex overflow-hidden flex-col px-20 py-12 w-full text-base font-medium bg-neutral-50 text-neutral-900 max-md:px-5 max-md:max-w-full">
      <span className="self-center text-sm tracking-widest text-center text-amber-500 uppercase">
        FAQ
      </span>

      <h2 className="self-center mt-6 text-3xl font-bold tracking-normal leading-tight text-center text-yellow-950">
        Frequent Ask Questions
      </h2>

      <div className="flex flex-col gap-4 mt-11 max-md:mt-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex overflow-hidden flex-col bg-white rounded-md border-t border-r border-l shadow-sm border-black border-opacity-10"
          >
            <button
              className="flex justify-between items-center w-full px-6 py-4 text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="flex-1 leading-loose">{faq.question}</span>
              <img
                src={
                  openIndex === index
                    ? "/FAQSection/Collapse_Expand.svg"
                    : "/FAQSection/Collapse_Expand.svg"
                }
                className="object-contain shrink-0 my-auto aspect-square w-[25px]"
                alt={openIndex === index ? "Collapse" : "Expand"}
              />
            </button>

            {openIndex === index && (
              <div className="px-6 py-4 text-gray-600 border-t">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="flex overflow-hidden gap-1.5 justify-center items-center self-center px-5 py-3 mt-10 text-base font-semibold leading-none text-white bg-cyan-900 rounded-md border border-solid shadow-sm border-[color:var(--Stroke-Light-Base,#E5E5E7)]">
        <span className="self-stretch my-auto">Show more</span>
        <img
          src="/FAQSection/Show_more.svg"
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          alt="Show more"
        />
      </button>
    </section>
  );
};

export default FAQSection;
