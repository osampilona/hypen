import React, { ReactNode } from "react";
import menuIcon from "@/components/MenuIcon/menuIcon.module.scss";

export interface IMenuIconProps {
  children: ReactNode;
  label: string;
}

const MenuIcon = (props: IMenuIconProps) => {
  return (
    <div className={menuIcon.container}>
      {props.children}
      {props.label}
    </div>
  );
};

export default MenuIcon;
