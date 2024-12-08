import * as React from "react";
import { LocationInput } from "./LocationInput";
import { LocationSectionProps } from "../types";

export const LocationSection: React.FC<LocationSectionProps> = ({
  title,
  type,
  dotColor,
}) => {
  const inputs = [
    { label: "Locations", placeholder: "Select your city" },
    { label: "Date", placeholder: "Select your date" },
    { label: "Time", placeholder: "Select your time" },
  ];

  return (
    <div className="flex flex-col px-12 py-6 bg-white rounded-xl max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2 items-center self-start">
        <div
          className={`flex justify-center items-center self-stretch px-1 my-auto w-4 h-4 ${dotColor} bg-opacity-30 rounded-[70px]`}
        >
          <div
            className={`flex self-stretch my-auto w-2 h-2 ${dotColor} rounded-full min-h-[8px]`}
          />
        </div>
        <div className="self-stretch my-auto text-base font-semibold tracking-tight text-gray-900">
          {title}
        </div>
      </div>
      <div className="flex flex-wrap gap-6 items-start mt-4">
        {inputs.map((input, index) => (
          <React.Fragment key={`${type}-${input.label}`}>
            <LocationInput {...input} />
            {index < inputs.length - 1 && (
              <div className="shrink-0 w-0 h-12 border border-solid border-slate-300 border-opacity-40" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
