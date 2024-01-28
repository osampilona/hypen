"use client";
import React from "react";
import menuBar from "@/components/MenuBar/menuBar.module.scss";
import MenuIcon from "../MenuIcon/MenuIcon";
import FeedIcon from "@/icons/FeedIcon";
import LikeIcon from "@/icons/LikeIcon";
import UserIcon from "@/icons/UserIcon";
import SettingsIcon from "@/icons/SettingsIcon";

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
