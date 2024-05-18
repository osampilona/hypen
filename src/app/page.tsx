import MenuBar from "@/components/MenuBar/MenuBar";
import styles from "@/app/page.module.scss";
import ServiceCardList from "@/components/ServiceCardList/ServiceCardList";

export default function Home() {
  return (
    <main className={styles.main}>
      <ServiceCardList />
      <MenuBar />
    </main>
  );
}
