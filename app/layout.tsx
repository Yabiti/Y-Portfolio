import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/general/navbar/Navbar";
import Footer from "./components/footer/footer";
import ScrollButton from "./components/general/scrollButton";
import AosInit from "./components/AosInit";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Yab's Portfolio",
  description: "Yab's Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} antialiased bg-[#050709] text-white`}>
        <AosInit />
        <Navbar />
        {children}
        <Footer />
        <ScrollButton />
      </body>
    </html>
  );
}
