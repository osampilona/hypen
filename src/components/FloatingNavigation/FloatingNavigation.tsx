"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAppDispatch } from "@/lib/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { toggleTheme } from "@/lib/features/theme/theme";

// Icons
import { RxSketchLogo } from "react-icons/rx";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { TbListSearch } from "react-icons/tb";
import { HiOutlineBriefcase, HiOutlineUserCircle } from "react-icons/hi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

// Components
import Modal from "@/components/Modal/Modal";
import FilterCard from "@/components/FilterCard/FilterCard";

// Styles
import styles from "./floatingNavigation.module.scss";

const FloatingNavigation: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme,
  );
  const [filterCardVisible, setFilterCardVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFilterToggle = () => {
    setFilterCardVisible(!filterCardVisible);
  };

  const handleCloseModal = () => {
    setFilterCardVisible(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuExpanded(!mobileMenuExpanded);
  };

  // Dynamic icon size based on screen size
  const iconSize = isMobile ? 20 : 24;

  return (
    <>
      <nav className={styles.container} data-testid="floatingNavigation">
        {/* Mobile FAB menu toggle - only visible on mobile */}
        {isMobile && (
          <button
            className={`${styles.fabToggle} ${mobileMenuExpanded ? styles.expanded : ""}`}
            onClick={toggleMobileMenu}
            aria-label={mobileMenuExpanded ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuExpanded}
          >
            {mobileMenuExpanded ? (
              <HiOutlineX size={24} className={styles.icon} />
            ) : (
              <HiOutlineMenu size={24} className={styles.icon} />
            )}
          </button>
        )}

        {/* Navigation content */}
        <div
          className={`${styles.content} ${isMobile && mobileMenuExpanded ? styles.mobileExpanded : ""} ${isMobile && !mobileMenuExpanded ? styles.mobileCollapsed : ""}`}
        >
          <Link
            href="/"
            className={styles.navItem}
            aria-label="Beautify - Home"
          >
            <RxSketchLogo size={iconSize} className={styles.icon} />
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
              <MdOutlineLightMode size={iconSize} className={styles.icon} />
            ) : (
              <MdOutlineDarkMode size={iconSize} className={styles.icon} />
            )}
          </button>

          <button
            className={`${styles.navItem} ${filterCardVisible ? styles.active : ""}`}
            onClick={handleFilterToggle}
            aria-label="Toggle filters"
            aria-expanded={filterCardVisible}
          >
            <TbListSearch size={iconSize} className={styles.icon} />
          </button>

          <button className={styles.navItem} aria-label="Partner">
            <HiOutlineBriefcase size={iconSize} className={styles.icon} />
          </button>

          <Link href="/login" className={styles.navItem} aria-label="Login">
            <HiOutlineUserCircle size={iconSize} className={styles.icon} />
          </Link>
        </div>
      </nav>

      <Modal
        isOpen={filterCardVisible}
        onClose={handleCloseModal}
        title="Filters"
        size={isMobile ? "fullscreen" : "large"}
        closeOnBackdropClick={true}
        closeOnEscape={true}
      >
        <FilterCard onClose={handleCloseModal} />
      </Modal>
    </>
  );
};

export default FloatingNavigation;
