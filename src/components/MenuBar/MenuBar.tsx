"use client";
import React, { useState, useEffect } from "react";
import menuBar from "@/components/Menubar/menuBar.module.scss";
import FeedIcon from "@/icons/FeedIcon";
import MenuIcon from "../MenuIcon/MenuIcon";
import LikeIcon from "@/icons/LikeIcon";
import UserIcon from "@/icons/UserIcon";
import SettingsIcon from "@/icons/SettingsIcon";

const MenuBar = () => {
  return (
    <div className={menuBar.container}>
      <MenuIcon icon={<FeedIcon />} label="Feed" />
      <MenuIcon icon={<LikeIcon />} label="Favourites" />
      <MenuIcon icon={<UserIcon />} label="Profile" />
      <MenuIcon icon={<SettingsIcon />} label="Settings" />
    </div>
  );
};

export default MenuBar;
