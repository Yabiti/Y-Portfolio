import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/general/navbar/Navbar";
import Footer from "./components/footer/footer";
import ScrollButton from "./components/general/scrollButton";

const poppins= Poppins({
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" className="scroll-smooth">
      <body className={`${poppins.className} h-full antialiased: bg-slate-950`}>
        <Navbar />
        {children}
        <Footer />
        <ScrollButton />
        </body>
    </html>
  );
}
