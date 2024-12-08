export interface StarRatingProps {
  rating: number;
  reviewCount: string;
}

export interface CarSpecificationProps {
  label: string;
  value: string;
}

export interface CarSpecificationGroupProps {
  specifications: CarSpecificationProps[];
}

export interface PriceDisplayProps {
  dailyRate: string;
  originalPrice: string;
}
