import * as React from "react";
import { LocationItemProps } from "./types";

export const LocationItem: React.FC<LocationItemProps> = ({
  title,
  subtitle,
}) => (
  <div className="flex flex-col">
    <div className="text-base font-bold tracking-tight text-gray-900">
      {title}
    </div>
    <div className="flex gap-2 items-center mt-2 text-xs font-medium tracking-tight text-slate-400">
      <div className="self-stretch my-auto w-[104px]">{subtitle}</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9690106296c8e68bccaea4ffe9ea7f1c25e6bf0cbe95bba9d3172614f2de3f1?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
      />
    </div>
  </div>
);
