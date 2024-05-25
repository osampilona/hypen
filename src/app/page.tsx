import ServiceCardList from "@/components/ServiceCardList/ServiceCardList";
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
