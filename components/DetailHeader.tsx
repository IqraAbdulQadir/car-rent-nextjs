import * as React from "react";import Image from 'next/image';
import Link from 'next/link';
import { Gallery } from "./Gallery/Gallery";

export const DetailHeader: React.FC = () => {
  return (
    <main className="flex flex-col rounded-none" role="main">
      <section className="w-full max-md:max-w-full" aria-label="Hero section">
        <div className="flex gap-5 ">

    
          <div className="flex flex-col ">
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
            <div className="flex justify-center items-center mt-6 ">
            <Gallery/>
            </div>
          </div>
          
        </div>
      </section>
      </main> )}

          