import styles from "./page.module.css";
import NavigationBar from "@/components/NavigationBar/NavigationBar";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavigationBar labelPartner="Become a partner" />
    </main>
  );
}
