import { RxScissors } from "react-icons/rx";
import { GiEyelashes } from "react-icons/gi";
import { FiSun } from "react-icons/fi";
import { TbMassage } from "react-icons/tb";
import { LiaHatCowboySideSolid } from "react-icons/lia";
import { BsBrush } from "react-icons/bs";

export const serviceItems = [
  { serviceLink: "/#", serviceLabel: "Hair", serviceIcon: RxScissors },
  { serviceLink: "/#", serviceLabel: "Lashes", serviceIcon: GiEyelashes },
  { serviceLink: "/#", serviceLabel: "Tanning", serviceIcon: FiSun },
  { serviceLink: "/#", serviceLabel: "Massage", serviceIcon: TbMassage },
  {
    serviceLink: "/#",
    serviceLabel: "Barber",
    serviceIcon: LiaHatCowboySideSolid,
  },
  { serviceLink: "/#", serviceLabel: "Beauty", serviceIcon: BsBrush },
];
