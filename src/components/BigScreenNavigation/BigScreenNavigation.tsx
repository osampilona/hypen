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
import { SetStateAction, useEffect, useState } from "react";
import Overlay from "../Overlay/Overlay";

const BigScreenNavigation = () => {
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme,
  );
  const dispatch = useDispatch();
  const [filterCardVisible, setFilterCardVisible] = useState(false);

  useEffect(() => {
    if (currentTheme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [currentTheme]);

  const toggleFilterCard = () => {
    setFilterCardVisible(!filterCardVisible);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.groupIcons}>
            <Link href="/">
              <RxSketchLogo size={36} className={styles.icon} />
            </Link>
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
            <TbListSearch
              size={24}
              onClick={toggleFilterCard}
              className={styles.icon}
            />
          </div>
          <div className={styles.groupIcons}>
            <HiOutlineBriefcase size={24} className={styles.icon} />
            <Link href="/login">
              <HiOutlineUserCircle
                aria-label="profile-icon"
                size={36}
                data-testid="user-icon"
              />
            </Link>
          </div>
        </div>
      </div>
      <Overlay show={filterCardVisible} onClose={toggleFilterCard}>
        <FilterCard
          isVisible={false}
          setIsVisible={function (value: SetStateAction<boolean>): void {}}
        />
      </Overlay>
    </>
  );
};

export default BigScreenNavigation;
