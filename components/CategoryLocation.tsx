import * as React from "react";
import { LocationSection } from "@/components/carRental/components/LocationSection";
import Adbg from '@/public/Adbg.svg';
import Image from 'next/image';
import Link from 'next/link';
import { IconButton } from "./IconButton";

const CategoryLocation = () => {

    return (
        <section
className="flex items-center justify-between mt-8 w-full max-md:max-w-full"
aria-label="Location selection"
>
<LocationSection
  title="Pick - Up"
  type="pickup"
  dotColor="bg-blue-600"
/>
<IconButton
      imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/159113571b02e55e10391371bbf7c8afa9c7879e855a281f40c9e9adc43f1c9b?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe"
      imageAlt="Icon button"
      onClick={() => {}}
    />
<LocationSection
  title="Drop - Off"
  type="dropoff"
  dotColor="bg-blue-400"
/>
</section>
    )

}

export default CategoryLocation;