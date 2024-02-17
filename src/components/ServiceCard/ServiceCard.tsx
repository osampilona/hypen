import serviceCard from "@/components/ServiceCard/serviceCard.module.scss";
import ServiceCardDevider from "../ServiceCardDevider/ServiceCardDevider";
import ServiceCardInfo from "../ServiceCardInfo/ServiceCardInfo";
import ServiceCardBusiness from "../ServiceCardBusiness/ServiceCardBusiness";
import ServiceCardImage from "../ServiceCardImage/ServiceCardImage";

export interface IServiceCardProps {
  //   serviceName: string;
  //   serviceRate: number;
  //   workingDays: string;
  //   workingHours: number;
  //   serviceNote: string;
  //   serviceDistance: string;
  //   companyName: string;
  //   companyAdress: string;
  //   companyAdressDetail: string;
  //   companyFollowingState: string;
}

const ServiceCard = (props: IServiceCardProps) => {
  return (
    <div className={serviceCard.container}>
      <ServiceCardImage />
      <div className={serviceCard.info}>
        <ServiceCardInfo />
        <ServiceCardDevider />
        <ServiceCardBusiness />
      </div>
    </div>
  );
};

export default ServiceCard;
