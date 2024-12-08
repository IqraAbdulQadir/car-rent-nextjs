import React from "react";
import { PriceDisplayProps } from "./types";

export const PriceDisplay: React.FC<PriceDisplayProps> = ({
  dailyRate,
  originalPrice,
}) => {
  return (
    <div className="flex flex-col grow shrink font-bold text-slate-400 w-[195px]">
      <div className="text-3xl">
        <span className="text-3xl">${dailyRate}/</span>
        <span className="text-base text-slate-400">days</span>
      </div>
      <div className="mt-1 text-base">${originalPrice}</div>
    </div>
  );
};
