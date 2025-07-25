"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleTheme } from "@/lib/features/theme/theme";

// Icons
import { RxSketchLogo } from "react-icons/rx";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { TbListSearch } from "react-icons/tb";
import { HiOutlineBriefcase, HiOutlineUserCircle } from "react-icons/hi";

// Components
import Modal from "@/components/Modal/Modal";
import FilterCard from "@/components/FilterCard/FilterCard";

// Styles
import styles from "./floatingNavigation.module.scss";

const FloatingNavigation: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state: any) => state.theme.currentTheme);
  const [filterCardVisible, setFilterCardVisible] = useState(false);

  const handleFilterToggle = () => {
    setFilterCardVisible(!filterCardVisible);
  };

  const handleCloseModal = () => {
    setFilterCardVisible(false);
  };

  return (
    <>
      <nav className={styles.container} data-testid="floatingNavigation">
        <div className={styles.content}>
          <Link
            href="/"
            className={styles.navItem}
            aria-label="Beautify - Home"
          >
            <RxSketchLogo size={24} className={styles.icon} />
          </Link>

          <button
            onClick={() => dispatch(toggleTheme())}
            aria-label={
              currentTheme === "light"
                ? "Switch to dark mode"
                : "Switch to light mode"
            }
            className={styles.navItem}
          >
            {currentTheme === "light" ? (
              <MdOutlineLightMode size={24} className={styles.icon} />
            ) : (
              <MdOutlineDarkMode size={24} className={styles.icon} />
            )}
          </button>

          <button
            className={`${styles.navItem} ${filterCardVisible ? styles.active : ""}`}
            onClick={handleFilterToggle}
            aria-label="Toggle filters"
            aria-expanded={filterCardVisible}
          >
            <TbListSearch size={24} className={styles.icon} />
          </button>

          <button className={styles.navItem} aria-label="Partner">
            <HiOutlineBriefcase size={24} className={styles.icon} />
          </button>

          <Link href="/login" className={styles.navItem} aria-label="Login">
            <HiOutlineUserCircle size={24} className={styles.icon} />
          </Link>
        </div>
      </nav>

      <Modal
        isOpen={filterCardVisible}
        onClose={handleCloseModal}
        title="Filters"
        size="large"
        closeOnBackdropClick={true}
        closeOnEscape={true}
      >
        <FilterCard onClose={handleCloseModal} />
      </Modal>
    </>
  );
};

export default FloatingNavigation;
