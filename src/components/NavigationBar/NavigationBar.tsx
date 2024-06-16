import { useEffect, useState } from "react";
import { useRouter } from "next/router";
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
import { throttle } from "lodash";

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
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 50);
    }, 100); // Throttling with 100ms delay

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (currentTheme === "dark") {
      document.body.classList.add("dark-theme");
      console.log("Dark theme applied");
    } else {
      document.body.classList.remove("dark-theme");
      console.log("Light theme applied");
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
        {!isSimpleNavbar && ( // Only render SearchBar if not on login page
          <SearchBar
            labelWhat={"What"}
            labelWhere={"Where"}
            labelWhen={"When"}
          />
        )}
      </div>
      {!isSimpleNavbar &&
        !isScrolled && ( // Only render SubNavigationBar if not on login page and not scrolled
          <div className={navigationBar.subNavigationBar}>
            <SubNavigationBar items={serviceItems} />
          </div>
        )}
    </div>
  );
};

export default NavigationBar;
