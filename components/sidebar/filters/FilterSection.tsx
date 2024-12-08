import * as React from "react";

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
}

export function FilterSection({ title, children }: FilterSectionProps) {
  return (
    <div className="flex flex-col font-semibold text-slate-400">
      <div className="text-xs tracking-tight">{title}</div>
      <div className="flex flex-col items-start mt-7 text-xl tracking-tight text-justify">
        {children}
      </div>
    </div>
  );
}
