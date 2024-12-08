import * as React from "react";

interface PriceSliderProps {
  maxPrice: number;
}

export function PriceSlider({ maxPrice }: PriceSliderProps) {
  return (
    <div className="flex flex-col self-stretch">
      <div className="text-xs font-semibold tracking-tight text-slate-400">
        P R I C E
      </div>
      <div className="flex flex-col mt-7 w-full max-w-[296px]">
        <div className="flex items-center pr-14 w-full rounded-none">
          <div className="flex flex-col grow shrink-0 items-start self-stretch my-auto mr-0 rounded-xl basis-0 bg-slate-400 w-fit">
            <div className="flex shrink-0 w-full h-3 bg-blue-600 rounded-xl" />
          </div>
          <div className="flex shrink-0 self-stretch my-auto w-6 h-6 bg-blue-600 rounded-full border-4 border-white border-solid fill-blue-600 stroke-[4px] stroke-white" />
        </div>
        <div className="mt-3 text-xl font-semibold tracking-tight text-justify text-slate-500">
          Max. ${maxPrice.toFixed(2)}
        </div>
      </div>
    </div>
  );
}
