import Image from "next/image";
import styles from "./page.module.css";
import SearchBar from "@/components/SearchBar/SearchBar";

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Empty page</p>
      <SearchBar labelWhat={"What"} labelWhere={"Where"} labelWhen={"When"} />
    </main>
  );
}
