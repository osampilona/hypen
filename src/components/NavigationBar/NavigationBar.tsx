"use client";
import React from "react";
import navigationBar from "@/components/NavigationBar/navigationBar.module.scss";
import SearchBar from "@/components/SearchBar/SearchBar";
import { HiOutlineUserCircle } from "react-icons/hi2";
import BigScreenLogoIcon from "@/assets/icons/BigScreenLogoIcon";
import SubNavigationBar from "@/components/SubNavigationBar/SubNavigationBar";
import { serviceItems } from "@/data/serviceList";
import Link from "next/link";

export interface INavigationBarProps {
  labelPartner: string;
}

const NavigationBar = (props: INavigationBarProps) => {
  return (
    <div className={navigationBar.main}>
      <div className={navigationBar.container}>
        <div className={navigationBar.screen}>
          <div className={navigationBar.icons}>
            <Link href="/">
              <BigScreenLogoIcon />
            </Link>
            <div className={navigationBar.label}>
              <p>{props.labelPartner}</p>
              <Link href="/login">
                <HiOutlineUserCircle size={36} data-testid="user-icon" />
              </Link>
            </div>
          </div>
        </div>
        <SearchBar labelWhat={"What"} labelWhere={"Where"} labelWhen={"When"} />
      </div>
      <SubNavigationBar items={serviceItems} />
    </div>
  );
};

export default NavigationBar;
