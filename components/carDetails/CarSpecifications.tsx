import React from "react";
import { CarSpecificationGroupProps } from "./types";

export const CarSpecifications: React.FC<CarSpecificationGroupProps> = ({
  specifications,
}) => {
  return (
    <div className="flex gap-10 items-start text-xl tracking-tight min-w-[240px] max-md:max-w-full">
      {[0, 1].map((groupIndex) => (
        <div key={groupIndex} className="flex flex-col">
          {specifications
            .slice(groupIndex * 2, groupIndex * 2 + 2)
            .map((spec, index) => (
              <div
                key={index}
                className={`flex gap-4 items-start ${index > 0 ? "mt-4" : ""}`}
              >
                <div className="text-slate-400 w-[92px]">{spec.label}</div>
                <div className="font-semibold text-right text-slate-500 w-[92px]">
                  {spec.value}
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};
