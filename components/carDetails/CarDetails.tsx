import React from "react";
import ReviewStarsConainer from '@/components/carDetails/reviewStars/index'
import { CarSpecifications } from "./CarSpecifications";
import { PriceDisplay } from "./PriceDisplay";

export const CarDetails: React.FC = () => {
  const specifications = [
    { label: "Type Car", value: "Sport" },
    { label: "Steering", value: "Manual" },
    { label: "Capacity", value: "2 Person" },
    { label: "Gasoline", value: "70L" },
  ];

  return (
    <section
      className="flex overflow-hidden flex-wrap gap-8 content-start items-start p-6 bg-white rounded-xl max-w-[540px] max-md:px-5"
      aria-label="Car Details"
    >
      <div className="flex overflow-hidden flex-col grow shrink w-[215px]">
        <h1 className="text-3xl font-bold tracking-tighter text-gray-900">
          Nissan GT - R
        </h1>
        <ReviewStarsConainer />
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9d8067ea0fcc5b0224f89c39112265049ae65cb120726ab4c59fa833b6ae98e?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe"
        alt="Nissan GT-R car"
        className="object-contain shrink-0 w-6 aspect-square"
      />
      <p className="grow shrink text-xl tracking-tight leading-10 text-slate-500 w-[439px] max-md:max-w-full">
        NISMO has become the embodiment of Nissan's outstanding performance,
        inspired by the most unforgiving proving ground, the "race track".
      </p>
      <CarSpecifications specifications={specifications} />
      <PriceDisplay dailyRate="80.00" originalPrice="100.00" />
      <button
        className="grow shrink gap-2 self-stretch px-5 text-base font-bold tracking-tight text-center text-white bg-blue-600 rounded min-h-[56px] w-[135px]"
        aria-label="Rent Nissan GT-R"
      >
        Rent Now
      </button>
    </section>
  );
};
