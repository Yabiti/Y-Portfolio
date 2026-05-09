"use client"
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation' // Add this

export default function AnimationLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname(); // Track current URL

    useEffect(() => {
        const initAOS = async () => {
            const AOS = (await import("aos")).default;
            AOS.init({
                duration: 1000,
                once: true,
                mirror: false,
                anchorPlacement: 'top-bottom',
            });
            AOS.refresh();
        };
        initAOS();
    }, [pathname]); // 🔥 Re-run every time the page/URL changes

    return <>{children}</>;
}
