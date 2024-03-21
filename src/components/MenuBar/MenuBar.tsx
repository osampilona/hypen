"use client";
import React from "react";
import menuBar from "@/components/MenuBar/menuBar.module.scss";
import { GoHome } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";

const MenuBar = () => {
  return (
    <div className={menuBar.container}>
      <Link href="#">
        <GoHome size={24} />
      </Link>
      <Link href="#">
        <GoHeart size={24} />
      </Link>
      <Link href="#">
        <AiOutlineUser size={24} />
      </Link>
      <Link href="#">
        <IoSettingsOutline size={24} />
      </Link>
    </div>
  );
};

export default MenuBar;
