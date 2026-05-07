"use client";
import Link from "next/link";
import Logo from "./logo";
import { LuDownload, LuMenu } from "react-icons/lu";
import LinkButton from "../linkButton";
import { useEffect, useState } from "react";
import MobileNav from "./Mobile";

export const navlinks = [
  { url: "#home", label: "Home" },
  { url: "#services", label: "Services" },
  { url: "#resume", label: "Resume" },
  { url: "#projects", label: "Projects" },
  { url: "#skills", label: "Skills" },
  { url: "#contact", label: "Contact" }
];

export default function Navbar() {
  const [navOpen, setNavopen] = useState(false);
  const [navbackground, setnavbackground] = useState(false);
  
  useEffect(() => {
    const navhandler = () => {
        if(window.scrollY >= 90) setnavbackground(true);
        if(window.scrollY < 90) setnavbackground(false);
    }
    window.addEventListener("scroll",navhandler)

    return () => {
        return window.removeEventListener("scroll", navhandler)
    }
  }, [])
  return (
    <nav className={`h-18 z-50 w-full transition-all duration-300 ${navbackground ? 
        "bg-slate-900 shadow-md" : ""}`}>
      <div className="flex items-center h-full justify-between max-w-7xl mx-auto px-8 md:px-12">
        <Logo />

        <ul className="hidden lg:flex items-center gap-6 md:gap-10">
          {navlinks.map((link) => (
            <li key={link.url}>
              <Link
                className="text-gray-400 hover:text-white font-medium transition-all duration-300 text-sm md:text-base"
                href={link.url}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <LinkButton
            href="/documents/udacity.pdf"
            text="Download Cv"
            download
            icon={LuDownload}
            iconPosition="left"
          />
        </div>

        <button
          onClick={() => setNavopen(!navOpen)}
          className="w-8 h-8 cursor-pointer text-white z-50 lg:hidden flex items-center justify-center">
          <LuMenu size={30} />
        </button>
      </div>

      <MobileNav
        navOpen={navOpen}
        closeNav={() => setNavopen(false)}
      />
    </nav>
  );
}