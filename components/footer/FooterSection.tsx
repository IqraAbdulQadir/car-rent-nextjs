import * as React from "react";
import { FooterLink } from "./FooterLink";
import { FooterSectionProps } from "./types";

export const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  links,
}) => (
  <nav
    className="flex flex-col grow"
    role="navigation"
    aria-label={`${title} navigation`}
  >
    <h2 className="text-xl font-semibold tracking-tight text-gray-900">
      {title}
    </h2>
    <div className="mt-12 space-y-6 max-md:mt-10">
      {links.map((link, index) => (
        <FooterLink key={`${title}-${index}`} text={link} />
      ))}
    </div>
  </nav>
);
