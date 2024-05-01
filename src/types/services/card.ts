import { StaticImageData } from "next/image";

export interface ServiceCardType {
  serviceName: string;
  serviceRate: number;
  workingDays: string;
  workingHours: string;
  serviceNote: string;
  serviceDistance: string;
  companyName: string;
  companyAddress: string;
  companyAddressDetail: string;
  companyFollowingState: boolean;
  images: CardImage[];
}

export interface CardImage {
  url: StaticImageData;
  alt: string;
}
