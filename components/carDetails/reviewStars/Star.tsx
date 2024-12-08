import * as React from "react";
import { StarProps } from "./types";

export const Star: React.FC<StarProps> = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
  />
);
