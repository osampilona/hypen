import React, { ReactNode } from "react";
import menuIcon from "@/components/MenuIcon/menuIcon.module.scss";

export interface IMenuIconProps {
  children: ReactNode;
}

const MenuIcon: React.FC<IMenuIconProps> = ({ children }) => {
  return <div className={menuIcon.container}>{children}</div>;
};

export default MenuIcon;
