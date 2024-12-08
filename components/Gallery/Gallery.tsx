import * as React from "react";
import { GalleryImage } from "./GalleryImage";

const galleryImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb104c6b821b2cb27924a36d6eb6ceb0675da85c34ea0aae0a339b6b701045af?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
    alt: "Gallery image 1",
    roundedStyle: "rounded-none"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4fd948b633180804688dd145efd2400012403d7d287e296d6106b2a43af8e27?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
    alt: "Gallery image 2",
    roundedStyle: "rounded-xl"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d0011056cd9257fee8fccab8e1d92f3f3f6fd9f0a5159ce652793da50ff4d98?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
    alt: "Gallery image 3",
    roundedStyle: "rounded-lg"
  }
];

export const Gallery: React.FC = () => {
  return (
    <div 
      className="flex flex-wrap gap-6 items-center"
      role="region"
      aria-label="Image gallery"
    >
      {galleryImages.map((image, index) => (
        <GalleryImage
          key={index}
          src={image.src}
          alt={image.alt}
          roundedStyle={image.roundedStyle}
        />
      ))}
    </div>
  );
};