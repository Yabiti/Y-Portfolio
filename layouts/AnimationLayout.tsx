"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AOSProvider() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

    AOS.refreshHard();

    const onLoad = () => AOS.refreshHard();
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        AOS.refreshHard();
      }
    };

    window.addEventListener("load", onLoad);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.removeEventListener("load", onLoad);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [pathname]);

  return null;
}