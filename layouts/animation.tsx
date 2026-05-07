"use client"

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function AnimationLayout(
    { children }: 
    { children: React.ReactNode }) {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: "ease",
            once: true,
            anchorPlacement: "top-center"
        });
    }, []);

    return <>{children}</>;
}
