import React from "react";
import { StarRatingProps } from "./types";

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div
      className="flex overflow-hidden gap-0.5 items-center mt-2"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          loading="lazy"
          src={
            index < rating
              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/492d01546298192fe1a03879e5bf6ba145dbe895fceb1dd793ad44154414281f?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe"
              : "https://cdn.builder.io/api/v1/image/assets/TEMP/b55a0d4c5650bbcad5ac86bc6c679c25b805f082b139ff07e9e3f28aedcc5866?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe"
          }
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        />
      ))}
    </div>
  );
};
