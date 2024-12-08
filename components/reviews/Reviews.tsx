import React from "react";
import { ReviewCard } from "./ReviewCard";
import { reviewsData } from "./data";

export const Reviews: React.FC = () => {
  return (
    <section
      className="flex overflow-hidden flex-col p-6 bg-white rounded-xl max-md:px-5"
      aria-label="Customer Reviews"
    >
      <header className="flex gap-3 items-start self-start whitespace-nowrap">
        <h2 className="w-20 text-xl font-semibold tracking-tight text-gray-900">
          Reviews
        </h2>
        <div
          className="gap-2 self-stretch px-3 w-11 text-sm font-bold text-center text-white bg-blue-600 rounded min-h-[28px]"
          aria-label="Total reviews"
        >
          13
        </div>
      </header>

      <div className="flex flex-col gap-6 mt-8">
        {reviewsData.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      <button
        className="flex gap-2 justify-center items-center self-center px-5 mt-6 ml-3 max-w-full text-base font-semibold tracking-tight text-center rounded min-h-[44px] text-slate-400 w-[132px]"
        aria-label="Show all reviews"
      >
        <span className="self-stretch my-auto w-[68px]">Show All</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/697bb4a42b261556594ed46df932f6dc2f06165aba061101ad88a43c38d12eee?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        />
      </button>
    </section>
  );
};
