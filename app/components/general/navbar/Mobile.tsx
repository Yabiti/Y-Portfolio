"use client";
import Link from "next/link";
import { LuX, LuDownload } from "react-icons/lu";
import { navlinks } from "./Navbar";
import LinkButton from "../linkButton";

interface Props {
  navOpen: boolean;
  closeNav: () => void;
}

export default function MobileNav({ navOpen, closeNav }: Props) {
  const navAnimation = navOpen ? "translate-x-0" : "translate-x-full";

  return (
    <div>
      <div
        onClick={closeNav}
        className={`fixed ${
          navOpen ? "block" : "hidden"
        } inset-0 z-60 bg-black/60 backdrop-blur-sm w-full h-full`}
      />

      <div
        className={`fixed ${navAnimation} transition-transform duration-500 ease-in-out
        inset-y-0 right-0 z-70 w-[80%] max-w-sm bg-[#050709] h-full flex flex-col pt-20 px-8`}
      >
        <button
          onClick={closeNav}
          className="absolute top-6 left-8 text-white w-8 h-8"
        >
          <LuX size={30} />
        </button>

        <div className="flex flex-col gap-8">
          {navlinks.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              onClick={closeNav}
              className="text-white text-2xl font-semibold hover:text-gray-400 transition-colors
              w-fit">
              {link.label}
            </Link>
          ))}
          
          <div className="mt-4">
            <LinkButton
              href="/documents/udacity.pdf"
              text="Download Cv"
              download
              icon={LuDownload}
              iconPosition="left"
            />
          </div>
        </div>
      </div>
    </div>
  );
}