import * as React from "react";
import { SectionHeaderProps } from "./types";

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  showViewAll,
}) => {
  return (
    <div className="flex flex-wrap gap-10 items-start text-base font-semibold text-center max-md:max-w-full">
      <div className="gap-2 self-stretch px-5 rounded min-h-[44px] text-slate-400 w-[132px]">
        {title}
      </div>
      {showViewAll && (
        <div className="gap-2 self-stretch px-5 text-blue-600 rounded min-h-[44px] w-[104px]">
          View All
        </div>
      )}
    </div>
  );
};
