import styles from "@/components/SmallScreenNavigation/smallScreenNavigation.module.scss";
import { RxSketchLogo } from "react-icons/rx";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { toggleTheme } from "@/lib/features/theme/theme";
import { useState, useEffect } from "react";
import ItemsList from "@/components/ItemsList/ItemsList";
import Overlay from "@/components/Overlay/Overlay";

const SmallScreenNavigation = () => {
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme,
  );
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { text: "Profile", href: "/login" },
    { text: "Settings", href: "/settings" },
    { text: "Become a Partner", href: "/become-a-partner" },
  ];

  useEffect(() => {
    if (currentTheme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [currentTheme]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOverlayClick = () => {
    setMenuOpen(false);
  };

  const handleItemClick = () => {
    setMenuOpen(false);
  };

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
            <button
              onClick={handleMenuToggle}
              className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
              aria-label="Toggle menu"
            >
              <div />
              <div />
              <div />
            </button>
          </div>
        </div>
      </div>
      <Overlay
        show={menuOpen}
        onClose={handleOverlayClick}
        className={styles.overlay}
      >
        <ItemsList items={menuItems} onItemClicked={handleItemClick} />
      </Overlay>
    </>
  );
};

export default SmallScreenNavigation;
