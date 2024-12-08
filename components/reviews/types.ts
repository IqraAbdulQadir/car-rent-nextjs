export interface ReviewProps {
  id: string;
  name: string;
  position: string;
  company: string;
  date: string;
  rating: number;
  review: string;
  avatar: string;
}

export interface StarRatingProps {
  rating: number;
}

export interface ReviewCardProps {
  review: ReviewProps;
}
