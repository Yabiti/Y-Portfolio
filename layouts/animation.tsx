"use client"
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function AnimationLayout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const initAOS = async () => {
            const AOS = (await import("aos")).default;
            AOS.init({
                duration: 1000,
                easing: "ease",
                once: true,
                anchorPlacement: 'top-bottom',
            });
            AOS.refresh(); 
        };
        initAOS();
    }, []);

    return <>{children}</>;
}
