import styles from "@/components/SmallScreenNavigation/smallScreenNavigation.module.scss";
import { RxSketchLogo } from "react-icons/rx";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { toggleTheme } from "@/lib/features/theme/theme";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect } from "react";

const SmallScreenNavigation = () => {
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentTheme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [currentTheme]);

  return (
    <>
      <div className={styles.container} data-testid="smallScreenSelector">
        <div className={styles.content}>
          <Link href="/">
            <RxSketchLogo size={36} className={styles.icon} />
          </Link>
          <div className={styles.mobileGroup}>
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
            <RxHamburgerMenu size={24} className={styles.icon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallScreenNavigation;
