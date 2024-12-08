import * as React from "react";
import { FooterLinkProps } from "./types";

export const FooterLink: React.FC<FooterLinkProps> = ({ text }) => (
  <a
    href="#"
    className="block text-base font-medium tracking-tight leading-6 text-neutral-900 text-opacity-60 hover:text-opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
    role="menuitem"
  >
    {text}
  </a>
);
