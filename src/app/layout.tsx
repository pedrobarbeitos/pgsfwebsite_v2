import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/styles.sass";
import Navbar from "./components/Navbar/navbar";
import "./layout.scss";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "PGSF Architects",
  description: "London based architecture practice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={roboto.className}>
        <div className="layoutContainer">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
