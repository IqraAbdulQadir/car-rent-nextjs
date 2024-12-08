import * as React from "react";
import { PickupIcon } from "./PickupIcon";
import { LocationItem } from "./LocationItem";

const locationItems = [
  {
    title: "Locations",
    subtitle: "Select your city",
  },
  {
    title: "Date",
    subtitle: "Select your date",
  },
  {
    title: "Time",
    subtitle: "Select your time",
  },
];

export const PickupForm: React.FC = () => {
  return (
    <div
      className="flex overflow-hidden flex-col rounded-xl max-w-[582px]"
      role="region"
      aria-label="Pickup Form"
    >
      <div className="flex flex-col px-12 py-6 w-full bg-white rounded-xl max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2 items-center self-start">
          <PickupIcon />
          <div className="self-stretch my-auto text-base font-semibold tracking-tight text-gray-900 w-[68px]">
            Pick - Up
          </div>
        </div>
        <div className="flex flex-wrap gap-6 items-start mt-4">
          {locationItems.map((item, index) => (
            <React.Fragment key={item.title}>
              <LocationItem {...item} />
              {index < locationItems.length - 1 && (
                <div className="shrink-0 w-0 h-12 border border-solid border-slate-300 border-opacity-40" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
