import NavigationBar from "@/components/NavigationBar/NavigationBar";
import "@/styles/globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <NavigationBar labelPartner="Become a partner" />
      </nav>
      <main>{children}</main>
    </>
  );
}
