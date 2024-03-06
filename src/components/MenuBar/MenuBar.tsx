"use client";
import React from "react";
import menuBar from "@/components/MenuBar/menuBar.module.scss";
import MenuIcon from "../MenuIcon/MenuIcon";
import { GoHome } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

const MenuBar = () => {
  return (
    <div className={menuBar.container}>
      <MenuIcon label="Feed">
        <GoHome size={24} />
      </MenuIcon>
      <MenuIcon label="Favourites">
        <GoHeart size={24} />
      </MenuIcon>
      <MenuIcon label="Profile">
        <AiOutlineUser size={24} />
      </MenuIcon>
      <MenuIcon label="Settings">
        <IoSettingsOutline size={24} />
      </MenuIcon>
    </div>
  );
};

export default MenuBar;
