"use client";
import { Roboto } from "next/font/google";
import SmallScreenNavigation from "@/components/SmallScreenNavigation/SmallScreenNavigation";
import BigScreenNavigation from "@/components/BigScreenNavigation/BigScreenNavigation";
import FloatingNavigation from "@/components/FloatingNavigation/FloatingNavigation";
import ThemeWrapper from "@/components/ThemeWrapper/ThemeWrapper";
import "@/styles/globals.scss";
import "@/styles/variables.globals.scss";
import styles from "@/app/styles.module.scss";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Paths that should not display SubNavigationBar
  const noSubNavigationPaths = ["/login", "/register"];

  // Check if current path is in the array of noSubNavigationPaths
  const shouldHideSubNavigation = noSubNavigationPaths.includes(pathname);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Provider store={store}>
          <ThemeWrapper className={styles.layoutContainer}>
            <main className={styles.main}>{children}</main>
            <FloatingNavigation />
          </ThemeWrapper>
        </Provider>
      </body>
    </html>
  );
}
