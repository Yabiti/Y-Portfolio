"use client"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function AnimationLayout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: false,
        });
        AOS.refresh();
    }, []);

    return <>{children}</>;
}
