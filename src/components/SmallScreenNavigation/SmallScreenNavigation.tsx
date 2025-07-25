import styles from "@/components/SmallScreenNavigation/smallScreenNavigation.module.scss";
import { RxSketchLogo } from "react-icons/rx";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { toggleTheme } from "@/lib/features/theme/theme";
import { useState, useEffect } from "react";
import ItemsList from "@/components/ItemsList/ItemsList";
import Modal from "@/components/Modal/Modal";
import { TbListSearch } from "react-icons/tb";
import FilterCard from "@/components/FilterCard/FilterCard";
import HamburgerMenuButton from "@/components/Buttons/HamburgerMenuButton/HamburgerMenuButton";

const SmallScreenNavigation = () => {
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme,
  );
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [filterCardVisible, setFilterCardVisible] = useState(false);

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

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleFilterClose = () => {
    setFilterCardVisible(false);
  };

  const handleItemClick = () => {
    setMenuOpen(false);
  };

  const toggleFilterCard = () => {
    setFilterCardVisible(!filterCardVisible);
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
            <TbListSearch
              size={24}
              onClick={toggleFilterCard}
              className={styles.icon}
            />
            <HamburgerMenuButton isOpen={menuOpen} onClick={handleMenuToggle} />
          </div>
        </div>
      </div>

      {/* Menu Modal */}
      <Modal
        isOpen={menuOpen}
        onClose={handleMenuClose}
        title="Menu"
        size="small"
        closeOnBackdropClick={true}
        closeOnEscape={true}
      >
        <ItemsList items={menuItems} onItemClicked={handleItemClick} />
      </Modal>

      {/* Filter Modal */}
      <Modal
        isOpen={filterCardVisible}
        onClose={handleFilterClose}
        title="Filters"
        size="large"
        closeOnBackdropClick={true}
        closeOnEscape={true}
      >
        <FilterCard onClose={handleFilterClose} />
      </Modal>
    </>
  );
};

export default SmallScreenNavigation;
