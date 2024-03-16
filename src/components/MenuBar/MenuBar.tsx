"use client";
import React from "react";
import menuBar from "@/components/MenuBar/menuBar.module.scss";
import { GoHome } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

const MenuBar = () => {
  return (
    <div className={menuBar.container}>
      <button>
        <GoHome size={24} />
      </button>
      <button>
        <GoHeart size={24} />
      </button>
      <button>
        <AiOutlineUser size={24} />
      </button>
      <button>
        <IoSettingsOutline size={24} />
      </button>
    </div>
  );
};

export default MenuBar;
