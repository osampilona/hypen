"use client";
import { Roboto } from "next/font/google";
import MenuBar from "@/components/MenuBar/MenuBar";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import "@/styles/globals.scss";
import "@/styles/variables.globals.scss";
import styles from "@/app/styles.module.scss";
import { Provider } from "react-redux";
import { store } from "@/lib/store";

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
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Provider store={store}>
          <NavigationBar labelPartner="Become a partner" />
          <main className={styles.main}>{children}</main>
          <MenuBar />
        </Provider>
      </body>
    </html>
  );
}
