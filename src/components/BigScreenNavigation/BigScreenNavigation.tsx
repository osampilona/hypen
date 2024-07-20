import styles from "@/components/BigScreenNavigation/bigScreenNavigation.module.scss";
import { HiOutlineUserCircle, HiOutlineBriefcase } from "react-icons/hi2";
import { RxSketchLogo } from "react-icons/rx";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { toggleTheme } from "@/lib/features/theme/theme";
import { TbListSearch } from "react-icons/tb";
import FilterCard from "@/components/FilterCard/FilterCard";
import { useEffect, useState } from "react";
import Overlay from "@/components/Overlay/Overlay";

const BigScreenNavigation = () => {
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme,
  );
  const dispatch = useDispatch();
  const [activePageIcon, setActivePageIcon] = useState<string | null>(
    "beautify",
  );
  const [filterCardVisible, setFilterCardVisible] = useState(false);

  useEffect(() => {
    if (currentTheme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [currentTheme]);

  const handleIconClick = (iconName: string) => {
    if (iconName === "filters") {
      setFilterCardVisible(!filterCardVisible);
    } else {
      setActivePageIcon(iconName);
    }
  };

  const handleCloseOverlay = () => {
    setFilterCardVisible(false);
  };

  return (
    <>
      <div className={styles.container} data-testid="bigScreenNavigation">
        <div className={styles.content}>
          <div className={styles.groupIcons}>
            <Link
              href="/"
              className={`${styles.navIcons} ${activePageIcon === "beautify" ? styles.active : ""}`}
              onClick={() => handleIconClick("beautify")}
            >
              <RxSketchLogo size={24} className={styles.icon} />
              <p>Beautify</p>
            </Link>
            <div className={styles.navIcons}>
              <button
                onClick={() => dispatch(toggleTheme())}
                aria-label={
                  currentTheme === "light"
                    ? "Switch to dark mode"
                    : "Switch to light mode"
                }
                className={styles.themeToggle}
              >
                {currentTheme === "light" ? (
                  <MdOutlineLightMode />
                ) : (
                  <MdOutlineDarkMode />
                )}
              </button>
            </div>
            <div
              className={`${styles.navIcons} ${filterCardVisible ? styles.activeFilters : ""}`}
              onClick={() => handleIconClick("filters")}
            >
              <TbListSearch size={24} className={styles.icon} />
              <p>Filters</p>
            </div>
          </div>
          <div className={styles.groupIcons}>
            <div
              className={`${styles.navIcons} ${activePageIcon === "partner" ? styles.active : ""}`}
              onClick={() => handleIconClick("partner")}
            >
              <HiOutlineBriefcase size={24} className={styles.icon} />
              <p>Partner</p>
            </div>
            <Link
              href="/login"
              className={`${styles.navIcons} ${activePageIcon === "login" ? styles.active : ""}`}
              onClick={() => handleIconClick("login")}
            >
              <HiOutlineUserCircle
                aria-label="profile-icon"
                size={24}
                data-testid="user-icon"
              />
              <p>Log in</p>
            </Link>
          </div>
        </div>
      </div>
      <Overlay show={filterCardVisible} onClose={() => handleCloseOverlay()}>
        <FilterCard />
      </Overlay>
    </>
  );
};

export default BigScreenNavigation;
