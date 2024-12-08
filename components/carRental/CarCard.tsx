'use client'

import * as React from "react";
import { useRouter } from "next/navigation";
import { CarCardProps } from "./types";

export const CarCard: React.FC<CarCardProps> = ({
  name,
  type,
  image,
  fuelCapacity,
  transmission,
  capacity,
  price,
  originalPrice,
  favorite,
}) => {
  const router = useRouter(); // Use Next.js router for navigation

  const handleRentNow= () => {
    router.push('/Detail');
  };
  

  return (
    <div className="flex overflow-hidden flex-col p-6 bg-white rounded-xl min-w-[240px] w-[270px] max-md:px-5">
      <div className="flex gap-5 justify-between font-bold">
        <div className="flex flex-col">
          <div className="text-xl tracking-tight text-gray-900">{name}</div>
          <div className="mt-1 text-sm tracking-tight text-slate-400">
            {type}
          </div>
        </div>
        <img
          loading="lazy"
          src={
            favorite
              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/c9d8067ea0fcc5b0224f89c39112265049ae65cb120726ab4c59fa833b6ae98e?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe"
              : "https://cdn.builder.io/api/v1/image/assets/TEMP/7cc867dde34466daad40faa01ae7a09c95ce38ededf44e27385ad5eb333c53a5?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe"
          }
          alt={favorite ? "Favorite car" : "Not favorite car"}
          className="object-contain shrink-0 self-start w-6 aspect-square"
        />
      </div>
      <img
        loading="lazy"
        src={image}
        alt={`${name} ${type} car`}
        className="object-contain self-center mt-16 max-w-full aspect-[3.18] w-[204px] max-md:mt-10"
      />
      <div className="flex gap-4 items-start mt-16 text-sm font-medium tracking-tight leading-5 text-slate-400 max-md:mt-10">
        <div className="flex gap-1.5 items-start whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb9f5fa088a33a8329469c11ed8f42f7df3e0fd11b9aa0921af94d8d3307f051?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe"
            alt="Fuel capacity icon"
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div className="w-7">{fuelCapacity}</div>
        </div>
        <div className="flex gap-1 items-start whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/563fd9367e8be9e271233fa362e88c8b2205c920475aad51a787f2599d87477e?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe"
            alt="Transmission type icon"
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div className="w-12">{transmission}</div>
        </div>
        <div className="flex gap-1.5 items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/208da64848e62ec29a2752e20bf61795bc1d287972e3ba2b4662ede01ca316b3?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe"
            alt="Passenger capacity icon"
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div className="w-[60px]">{capacity}</div>
        </div>
      </div>
      <div className="flex gap-3 mt-5 w-full">
        <div className="flex flex-col font-bold text-slate-400">
          <div className="text-xl">
            ${price}.00/ <span className="text-sm text-slate-400">day</span>
          </div>
          {originalPrice && (
            <div className="mt-1 text-sm">${originalPrice}.00</div>
          )}
        </div>
        <button
          className="gap-2 self-start mt-1 text-base font-semibold tracking-tight text-center text-white bg-blue-600 rounded min-h-[44px] w-[76px]"
          aria-label={`Rent ${name} for ${price} dollars per day`}
          onClick={handleRentNow} // Navigate to detail page
        >
          Rent Now
        </button>
      </div>
    </div>
  );
};
