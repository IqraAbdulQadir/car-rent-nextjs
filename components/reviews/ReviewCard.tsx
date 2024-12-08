import React from "react";
import { ReviewCardProps } from "./types";
import { StarRating } from "./StarRating";

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div>
      <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
        <div className="flex gap-4">
          <img
            loading="lazy"
            src={review.avatar}
            alt={`${review.name}'s profile picture`}
            className="object-contain shrink-0 w-14 aspect-square rounded-[60px]"
          />
          <div className="flex flex-col">
            <div className="text-xl font-bold tracking-tight text-gray-900">
              {review.name}
            </div>
            <div className="mt-2 text-sm font-medium tracking-tight text-slate-400">
              {review.position} at {review.company}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-sm font-medium tracking-tight leading-5 text-right text-slate-400">
            {review.date}
          </div>
          <StarRating rating={review.rating} />
        </div>
      </div>
      <div className="self-end mt-3 text-sm tracking-tight leading-7 text-slate-500 max-md:max-w-full">
        {review.review}
      </div>
    </div>
  );
};
