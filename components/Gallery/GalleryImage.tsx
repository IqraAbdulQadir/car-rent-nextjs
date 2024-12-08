import * as React from "react";
import { ImageProps } from "./types";

export const GalleryImage: React.FC<ImageProps> = ({ src, alt, roundedStyle }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`object-contain shrink-0 self-stretch my-auto ${roundedStyle} aspect-[1.19] w-[148px]`}
    />
  );
};