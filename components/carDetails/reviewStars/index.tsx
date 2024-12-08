import * as React from "react";
import { ReviewStars } from "./ReviewStars";

export default function ReviewStarsContainer() {
  const stars = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/492d01546298192fe1a03879e5bf6ba145dbe895fceb1dd793ad44154414281f?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
      alt: "Filled star rating",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/492d01546298192fe1a03879e5bf6ba145dbe895fceb1dd793ad44154414281f?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
      alt: "Filled star rating",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/492d01546298192fe1a03879e5bf6ba145dbe895fceb1dd793ad44154414281f?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
      alt: "Filled star rating",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/492d01546298192fe1a03879e5bf6ba145dbe895fceb1dd793ad44154414281f?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
      alt: "Filled star rating",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b55a0d4c5650bbcad5ac86bc6c679c25b805f082b139ff07e9e3f28aedcc5866?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
      alt: "Half star rating",
    },
  ];

  return <ReviewStars stars={stars} reviewCount={440} />;
}
