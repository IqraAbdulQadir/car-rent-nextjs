import * as React from "react";
import { Star } from "./Star";
import { ReviewStarsProps } from "./types";

export const ReviewStars: React.FC<ReviewStarsProps> = ({
  stars,
  reviewCount,
}) => {
  return (
    <div
      className="flex overflow-hidden gap-2 items-center mt-2 min-h-[24px]"
      role="complementary"
      aria-label="Product Rating"
    >
      <div className="flex overflow-hidden gap-0.5 items-center self-stretch my-auto">
        {stars.map((star, index) => (
          <Star key={index} {...star} />
        ))}
      </div>
      <div className="self-stretch my-auto text-sm font-medium tracking-wide text-slate-500 w-[104px]">
        {reviewCount}+ Reviewer
      </div>
    </div>
  );
};
