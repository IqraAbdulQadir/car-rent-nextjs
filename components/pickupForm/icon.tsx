import * as React from "react";

interface IconButtonProps {
  imageSrc: string;
  imageAlt: string;
  onClick?: () => void;
}

export function IconButton({ imageSrc, imageAlt, onClick }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col rounded-none max-w-[60px]"
      aria-label={imageAlt}
    >
      <div className="flex flex-col justify-center items-center px-3 w-full bg-blue-600 rounded-xl h-[60px]">
        <img
          loading="lazy"
          src={imageSrc}
          alt={imageAlt}
          className="object-contain w-6 aspect-square"
        />
      </div>
    </button>
  );
}