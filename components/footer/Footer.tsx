import * as React from "react";

import { FooterSection } from "./FooterSection";

const sections = [
  {
    title: "About",
    links: ["How it works", "Featured", "Partnership", "Bussiness Relation"],
  },
  {
    title: "Community",
    links: ["Events", "Blog", "Podcast", "Invite a friend"],
  },
  {
    title: "Socials",
    links: ["Discord", "Instagram", "Twitter", "Facebook"],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer
      className="flex overflow-hidden flex-col px-16 py-16 bg-white max-md:px-5"
      role="contentinfo"
    >
      <div className="flex flex-wrap gap-10 items-start w-full max-w-[1244px] max-md:max-w-full">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold tracking-tighter text-blue-600">
            MORENT
          </h1>
          <p className="mt-4 text-base font-medium tracking-tight leading-6 text-neutral-900 text-opacity-60">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        <div className="flex-auto mt-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className={`flex flex-col ${
                  index === 0 ? "w-[42%]" : index === 1 ? "w-[34%]" : "w-[24%]"
                } max-md:ml-0 max-md:w-full ${index > 0 ? "ml-5" : ""}`}
              >
                <FooterSection title={section.title} links={section.links} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="shrink-0 mt-12 h-px border border-solid border-neutral-900 border-opacity-20 max-md:mt-10 max-md:max-w-full"
        role="separator"
      />

      <div className="flex flex-wrap gap-5 justify-between mt-9 w-full text-base font-semibold tracking-tight text-gray-900 max-md:max-w-full">
        <p>©2022 MORENT. All rights reserved</p>
        <div className="flex gap-10 text-right">
          <a
            href="#"
            className="basis-auto hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Privacy & Policy
          </a>
          <a
            href="#"
            className="basis-auto hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Terms & Condition
          </a>
        </div>
      </div>
    </footer>
  );
};
