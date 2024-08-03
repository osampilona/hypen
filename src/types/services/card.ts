import { StaticImageData } from "next/image";

export interface ServiceCardType {
  serviceId: string;
  serviceName: string;
  serviceRate: number;
  servicePrice: number;
  workingDays: string;
  workingHours: string;
  serviceNote: string;
  serviceDistance: number;
  companyId: string;
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
