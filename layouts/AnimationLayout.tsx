"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnimationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: false,
      anchorPlacement: "top-center",
    });

    AOS.refreshHard();
  }, [pathname]);

  return <>{children}</>;
}