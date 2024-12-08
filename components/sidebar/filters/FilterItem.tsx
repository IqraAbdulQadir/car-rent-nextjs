import * as React from "react";

interface FilterItemProps {
  icon: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export function FilterItem({ icon, children, isActive }: FilterItemProps) {
  return (
    <div className="flex gap-2 items-start mt-8">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 w-6 aspect-square"
      />
      <div className={`${isActive ? "text-slate-400" : "text-slate-500"}`}>
        {children}
      </div>
    </div>
  );
}
