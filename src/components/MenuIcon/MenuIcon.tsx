import React, { ReactNode } from "react";
import menuIcon from "@/components/MenuIcon/menuIcon.module.scss";

interface IMenuIconProps {
  children: ReactNode;
  label: string;
}

const MenuIcon: React.FC<IMenuIconProps> = ({ children, label }) => {
  return (
    <div className={menuIcon.container}>
      {children}
      {label}
    </div>
  );
};

export default MenuIcon;
