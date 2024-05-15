import MenuBar from "@/components/MenuBar/MenuBar";
import styles from "./page.module.css";
import ServiceCardList from "@/components/ServiceCardList/ServiceCardList";

export default function Home() {
  return (
    <main className={styles.main}>
      <ServiceCardList />
      <MenuBar />
    </main>
  );
}
