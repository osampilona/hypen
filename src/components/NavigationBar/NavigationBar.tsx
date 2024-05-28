"use client";
import { useEffect } from "react";
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

export interface INavigationBarProps {
  labelPartner: string;
}

const NavigationBar = (props: INavigationBarProps) => {
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentTheme === "dark") {
      document.body.classList.add("dark-theme");
      console.log("Dark theme applied");
    } else {
      document.body.classList.remove("dark-theme");
      console.log("Light theme applied");
    }

    // Log the computed styles for an element
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
              <p>{props.labelPartner}</p>
              <Link href="/login">
                <HiOutlineUserCircle size={36} data-testid="user-icon" />
              </Link>
            </div>
          </div>
        </div>
        <SearchBar labelWhat={"What"} labelWhere={"Where"} labelWhen={"When"} />
      </div>
      <SubNavigationBar items={serviceItems} />
    </div>
  );
};

export default NavigationBar;
