import ServiceCardList from "@/components/ServiceCardList/ServiceCardList";
import styles from "@/app/styles.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js",
};

export default function Page() {
  return (
    <main>
      <ServiceCardList />
    </main>
  );
}
