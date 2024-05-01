"use client";
import React, { useState, useEffect } from "react";
import navigationBar from "@/components/NavigationBar/navigationBar.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import { HiOutlineUserCircle } from "react-icons/hi2";
import BigScreenLogoIcon from "@/assets/icons/BigScreenLogoIcon";
import SubNavigationBar from "../SubNavigationBar/SubNavigationBar";
import { serviceItems } from "@/data/serviceList";

export interface INavigationBarProps {
  labelPartner: string;
}

const NavigationBar = (props: INavigationBarProps) => {
  const [viewportWidth, setViewportWidth] = useState<number | undefined>(
    undefined,
  );

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={navigationBar.main}>
      <div className={navigationBar.container}>
        <div className={navigationBar.screen}>
          {(viewportWidth ?? 0) <= 1024 ? null : (
            <div className={navigationBar.icons}>
              <BigScreenLogoIcon />
              <div className={navigationBar.label}>
                <p>{props.labelPartner}</p>
                <HiOutlineUserCircle size={36} />
              </div>
            </div>
          )}
        </div>
        <SearchBar labelWhat={"What"} labelWhere={"Where"} labelWhen={"When"} />
      </div>
      <SubNavigationBar items={serviceItems} />
    </div>
  );
};

export default NavigationBar;
