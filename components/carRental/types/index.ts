export interface LocationSectionProps {
  title: string;
  type: "pickup" | "dropoff";
  dotColor: string;
}

export type LocationInputProps = {
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
};