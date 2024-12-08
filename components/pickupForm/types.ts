export interface LocationItemProps {
  title: string;
  subtitle: string;
}

export interface PickupSectionProps {
  icon: React.ReactNode;
  title: string;
  items: LocationItemProps[];
}
