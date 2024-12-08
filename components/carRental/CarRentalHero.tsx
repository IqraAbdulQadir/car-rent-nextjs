import * as React from "react";
import { LocationSection } from "./components/LocationSection";
import Adbg from '@/public/Adbg.svg';
import Image from 'next/image';
import Link from 'next/link';
import Switch from "@/public/Switch.svg";
import { IconButton } from "@/components/IconButton"

export const CarRentalHero: React.FC = () => {
  return (
    <main className="flex flex-col rounded-none" role="main">
      <section className="w-full max-md:max-w-full" aria-label="Hero section">
        <div className="flex gap-5 max-md:flex-col">
          {/* First Card */}
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col grow w-full text-white bg-information-500 rounded-xl max-md:mt-8 max-md:max-w-full">
              <div className="flex relative flex-col items-start px-6 pt-6 pb-28 w-full min-h-[360px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
                <Image
                  src={Adbg}
                  alt="Car rental advertisement background"
                  width={24}
                  height={24}
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col mb-0 max-w-full w-[284px] max-md:mb-2.5">
                  <div className="flex flex-col w-full">
                    <h1 className="text-3xl tracking-tighter leading-10">
                      The Best Platform for Car Rental
                    </h1>
                    <p className="mt-4 text-base font-medium tracking-tight leading-6">
                      Ease of doing a car rental safely and reliably. Of course at a low price.
                    </p>
                  </div>
                  {/* Add Navigation to Rental Page */}
                  <Link href="/rental" passHref>
                    <button
                      className="gap-2 self-stretch px-5 mt-5 max-w-full text-base font-semibold tracking-tight text-center bg-primary-500 rounded min-h-[44px] w-[120px]"
                      aria-label="Rent a car"
                    >
                      Rental Car
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col grow w-full text-white bg-blue-600 rounded-xl max-md:mt-8 max-md:max-w-full">
              <div className="flex relative flex-col items-start px-6 pt-6 pb-28 w-full min-h-[360px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/67b0364fd9e9b2a039e1352b7e170feb702b444c51550547b4499099befd72f2?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe"
                  alt="Car rental service background"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col mb-0 max-w-full w-[284px] max-md:mb-2.5">
                  <div className="flex flex-col w-full">
                    <h1 className="text-3xl tracking-tighter leading-10">
                      Easy way to rent a car at a low price
                    </h1>
                    <p className="mt-4 text-base font-medium tracking-tight leading-6">
                      Providing cheap car rental services and safe and comfortable facilities.
                    </p>
                  </div>
                  {/* Add Click Interaction */}
                  <button
                    onClick={() => alert('Navigate to rental page!')}
                    className="gap-2 self-stretch px-5 mt-5 max-w-full text-base font-semibold tracking-tight text-center bg-blue-400 rounded min-h-[44px] w-[120px]"
                    aria-label="Rent a car"
                  >
                    Rental Car
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Selection Section */}
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
    </main>
  );
};
