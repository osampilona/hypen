"use client";
import React from "react";
import menuBar from "@/components/MenuBar/menuBar.module.scss";
import MenuIcon from "../MenuIcon/MenuIcon";
import FeedIcon from "@/assets/icons/FeedIcon";
import LikeIcon from "@/assets/icons/LikeIcon";
import UserIcon from "@/assets/icons/UserIcon";
import SettingsIcon from "@/assets/icons/SettingsIcon";

const MenuBar = () => {
  return (
    <div className={menuBar.container}>
      <MenuIcon label="Feed">
        <FeedIcon />
      </MenuIcon>
      <MenuIcon label="Favourites">
        <LikeIcon />
      </MenuIcon>
      <MenuIcon label="Profile">
        <UserIcon />
      </MenuIcon>
      <MenuIcon label="Settings">
        <SettingsIcon />
      </MenuIcon>
    </div>
  );
};

export default MenuBar;
