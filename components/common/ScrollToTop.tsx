"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 350);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="
                fixed
                bottom-8
                right-8
                z-[9999]

                flex
                items-center
                justify-center

                h-14
                w-14

                rounded-full

                bg-gradient-to-br
                from-blue-600
                to-blue-700

                text-white

                shadow-[0_10px_30px_rgba(37,99,235,0.35)]

                transition-all
                duration-300

                hover:scale-110
                hover:-translate-y-1
                hover:shadow-[0_16px_40px_rgba(37,99,235,0.45)]

                active:scale-95
            "
        >
            <ChevronUp size={28} strokeWidth={2.8} />
        </button>
    );
}