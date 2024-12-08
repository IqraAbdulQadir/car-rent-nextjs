import * as React from "react";
import { FilterSection } from "./FilterSection";
import { FilterItem } from "./FilterItem";
import { PriceSlider } from "./PriceSlider";
import { TypeItemProps, CapacityItemProps } from "./types";

const typeItems: TypeItemProps[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7f0601032a7728dc0ae7ccd1cd438ff27f0027c1885b88b3504dd25be46b56f?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
    label: "Sport",
    count: 10,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7f0601032a7728dc0ae7ccd1cd438ff27f0027c1885b88b3504dd25be46b56f?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
    label: "SUV",
    count: 12,
    isActive: true,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/92bd81f0f88e1728ef29b3626fc80b768ad8c90179c4d5e9b9a9e872b35f43db?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
    label: "MPV",
    count: 16,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/92bd81f0f88e1728ef29b3626fc80b768ad8c90179c4d5e9b9a9e872b35f43db?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
    label: "Sedan",
    count: 20,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/92bd81f0f88e1728ef29b3626fc80b768ad8c90179c4d5e9b9a9e872b35f43db?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
    label: "Coupe",
    count: 14,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/92bd81f0f88e1728ef29b3626fc80b768ad8c90179c4d5e9b9a9e872b35f43db?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
    label: "Hatchback",
    count: 14,
  },
];

const capacityItems: CapacityItemProps[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7f0601032a7728dc0ae7ccd1cd438ff27f0027c1885b88b3504dd25be46b56f?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
    persons: "2 Person",
    count: 10,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/92bd81f0f88e1728ef29b3626fc80b768ad8c90179c4d5e9b9a9e872b35f43db?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
    persons: "4 Person",
    count: 14,
    isActive: true,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/92bd81f0f88e1728ef29b3626fc80b768ad8c90179c4d5e9b9a9e872b35f43db?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
    persons: "6 Person",
    count: 12,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7f0601032a7728dc0ae7ccd1cd438ff27f0027c1885b88b3504dd25be46b56f?placeholderIfAbsent=true&apiKey=a4373313357a4b7ab9b957f453da22fe",
    persons: "8 or More",
    count: 16,
  },
];

export function FiltersPanel() {
  return (
    <div
      role="complementary"
      aria-label="Filters"
      className="flex overflow-hidden flex-col items-start px-8 pt-8 mx-auto w-full bg-white border-r border-solid border-r-gray-100 max-w-[480px] pb-[1176px]"
    >
      <FilterSection title="T Y P E">
        {typeItems.map((item, index) => (
          <FilterItem key={index} icon={item.icon} isActive={item.isActive}>
            <span className={item.isActive ? "" : "text-slate-500"}>
              {item.label}
            </span>{" "}
            ({item.count})
          </FilterItem>
        ))}
      </FilterSection>

      <div className="mt-14">
        <FilterSection title="C A P A C I T Y">
          {capacityItems.map((item, index) => (
            <FilterItem key={index} icon={item.icon} isActive={item.isActive}>
              <span className={item.isActive ? "" : "text-slate-500"}>
                {item.persons}
              </span>{" "}
              ({item.count})
            </FilterItem>
          ))}
        </FilterSection>
      </div>

      <div className="mt-14">
        <PriceSlider maxPrice={100} />
      </div>
    </div>
  );
}
