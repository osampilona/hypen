import { useEffect, useState } from "react";
import navigationBar from "@/components/NavigationBar/navigationBar.module.scss";
import SearchBar from "@/components/SearchBar/SearchBar";
import { HiOutlineUserCircle } from "react-icons/hi2";
import BigScreenLogoIcon from "@/assets/icons/BigScreenLogoIcon";
import SubNavigationBar from "@/components/SubNavigationBar/SubNavigationBar";
import { serviceItems } from "@/data/serviceList";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { toggleTheme } from "@/lib/features/theme/theme";
import { debounce } from "lodash";

export interface INavigationBarProps {
  labelPartner: string;
  isSimpleNavbar?: boolean;
}

const NavigationBar = ({
  labelPartner,
  isSimpleNavbar = false,
}: INavigationBarProps) => {
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme,
  );
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      setIsScrolled(window.scrollY > 50);
    }, 150); // Debouncing with 150ms delay

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (currentTheme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }

    const bodyStyles = getComputedStyle(document.body);
    console.log("Background color:", bodyStyles.backgroundColor);
    console.log("Text color:", bodyStyles.color);
  }, [currentTheme]);

  return (
    <div className={navigationBar.main}>
      <div className={navigationBar.container}>
        <div className={navigationBar.screen}>
          <div className={navigationBar.icons}>
            <Link href="/">
              <BigScreenLogoIcon />
            </Link>
            <div className={navigationBar.label}>
              <button onClick={() => dispatch(toggleTheme())}>
                {currentTheme === "light" ? (
                  <MdOutlineLightMode />
                ) : (
                  <MdOutlineDarkMode />
                )}
              </button>
              <p>{labelPartner}</p>
              <Link href="/login">
                <HiOutlineUserCircle size={36} data-testid="user-icon" />
              </Link>
            </div>
          </div>
        </div>
        {!isSimpleNavbar && (
          <SearchBar
            labelWhat={"What"}
            labelWhere={"Where"}
            labelWhen={"When"}
          />
        )}
        {!isSimpleNavbar && !isScrolled && (
          <SubNavigationBar items={serviceItems} />
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
