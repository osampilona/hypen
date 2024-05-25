import { Roboto } from "next/font/google";
import MenuBar from "@/components/MenuBar/MenuBar";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import "@/styles/globals.scss";
import styles from "@/app/styles.module.scss";

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
        <NavigationBar labelPartner="Become a partner" />
        <main className={styles.main}>{children}</main>
        <MenuBar />
      </body>
    </html>
  );
}
