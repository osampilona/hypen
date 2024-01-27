"use client";

import React, { useState, useEffect } from "react";
import navigationBar from "@/components/NavigationBar/navigationBar.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import ProfileIcon from "@/icons/ProfileIcon";
import BigScreenLogoIcon from "@/icons/BigScreenLogoIcon";

export interface INavigationBarProps {
  labelPartner: string;
}

const NavigationBar = (props: INavigationBarProps) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={navigationBar.container}>
      <div className={navigationBar.screen}>
        {viewportWidth <= 769 ? null : (
          <div className={navigationBar.icons}>
            <BigScreenLogoIcon />
            <div className={navigationBar.label}>
              <p>{props.labelPartner}</p>
              <ProfileIcon />
            </div>
          </div>
        )}
      </div>
      <SearchBar labelWhat={"What"} labelWhere={"Where"} labelWhen={"When"} />
    </div>
  );
};

export default NavigationBar;
