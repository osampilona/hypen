import React from "react";
import subNavigation from "@/components/SubNavigationBar/subNavigationBar.module.scss";
import Link from "next/link";
import { RxScissors } from "react-icons/rx";
import { GiEyelashes } from "react-icons/gi";
import { FiSun } from "react-icons/fi";
import { TbMassage } from "react-icons/tb";
import { LiaHatCowboySideSolid } from "react-icons/lia";
import { BsBrush } from "react-icons/bs";

const SubNavigationBar = () => {
  return (
    <div className={subNavigation.container}>
      <div className={subNavigation.links}>
        <Link href="#">
          <RxScissors size={24} />
          Hair
        </Link>
        <Link href="#">
          <GiEyelashes size={24} />
          Lashes
        </Link>
        <Link href="#">
          <BsBrush size={24} />
          Makeup
        </Link>
        <Link href="#">
          <LiaHatCowboySideSolid size={24} />
          Barber
        </Link>
        <Link href="#">
          <FiSun size={24} />
          Tanning
        </Link>
        <Link href="#">
          <TbMassage size={24} />
          Massage
        </Link>
      </div>
    </div>
  );
};

export default SubNavigationBar;
