import * as React from "react";
import { CarCard } from "@/components/carRental/CarCard";
import { SectionHeader } from "@/components/carRental/SectionHeader";

const recentCars = [
  {
    name: "Koenigsegg",
    type: "Sport",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4c3b6c59318191c4d16fdbba0cf0566c8b74e804539a66f63156a99c6d841ada?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
    fuelCapacity: "90L",
    transmission: "Manual",
    capacity: "2 People",
    price: 99,
    favorite: true,
  },
  {
    name: "Nissan GT - R",
    type: "Sport",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3a186543802b2c235fee13f923ce4a5062235eabdd9730cb0330f411578ec2e9?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
    fuelCapacity: "80L",
    transmission: "Manual",
    capacity: "2 People",
    price: 80,
    originalPrice: 100,
    favorite: false,
  },
  {
    name: "Rolls - Royce",
    type: "Sedan",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2d6c8235f983360a78f01a82bdb243d7247e379b5e56d575df348cdec80c125b?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
    fuelCapacity: "70L",
    transmission: "Manual",
    capacity: "4 People",
    price: 96,
    favorite: true,
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4c3b6c59318191c4d16fdbba0cf0566c8b74e804539a66f63156a99c6d841ada?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
    fuelCapacity: "90L",
    transmission: "Manual",
    capacity: "2 People",
    price: 99,
    favorite: true,
  },
];

const recommendedCars = [
  {
    name: "All New Rush",
    type: "SUV",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/57f07081a13038d734c6cb4bdfd569f7e2138d4e53f565991ff54787a89ea193?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
    fuelCapacity: "70L",
    transmission: "Manual",
    capacity: "6 People",
    price: 72,
    originalPrice: 80,
    favorite: false,
  },
  {
    name: "CR - V",
    type: "SUV",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/30244ace4d849c65288f0362ddea35acce5b9ad9e6ccfa47974b42b81b041b87?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
    fuelCapacity: "80L",
    transmission: "Manual",
    capacity: "6 People",
    price: 80,
    favorite: true,
  },
  {
    name: "All New Terios",
    type: "SUV",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cd6c0997f29733b8a4ccd6e15d451b48d51bced81c6357133b7e443f9ffd656f?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
    fuelCapacity: "90L",
    transmission: "Manual",
    capacity: "6 People",
    price: 74,
    favorite: false,
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4c3b6c59318191c4d16fdbba0cf0566c8b74e804539a66f63156a99c6d841ada?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
    fuelCapacity: "90L",
    transmission: "Manual",
    capacity: "2 People",
    price: 99,
    favorite: true,
  },
  
];

export const DetailCards: React.FC = () => {
  return (
    <main className="flex flex-col">
      <section
        className=" w-full max-md:max-w-full mt-10"
        aria-label="Recent Cars"
      >
        <SectionHeader title="Popular Car" showViewAll={true} />
        <div className="flex flex-wrap gap-8 items-start mt-5 max-md:max-w-full">
          {recentCars.map((car, index) => (
            <CarCard key={`popular-${index}`} {...car} />
          ))}
        </div>
      </section>

      <section
        className="mt-8 w-full max-md:max-w-full"
        aria-label="Recommended Cars"
      >
        <SectionHeader title="Recomendation Car" />
        <div className="flex flex-col mt-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-8 items-start max-md:max-w-full">
            {recommendedCars.map((car, index) => (
              <CarCard key={`recommended-${index}`} {...car} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
