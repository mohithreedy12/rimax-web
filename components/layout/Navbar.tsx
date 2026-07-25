"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Why RiMax", href: "#why-rimax" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-20 lg:px-8">

                    <a href="#home" className="flex items-center" onClick={closeMenu}>
                        <Image
                            src="/logos/rimax-logo-v2.png"
                            alt="RiMax Technologies"
                            width={145}
                            height={52}
                            priority
                            style={{ height: "auto" }}
                            className="w-[110px] sm:w-[125px] lg:w-[145px]"
                        />
                    </a>

                    <nav className="hidden lg:flex items-center gap-10">
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="font-medium text-gray-700 hover:text-blue-700 transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <a
                        href="#contact"
                        className="hidden lg:block rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 transition"
                    >
                        Get Free Consultation
                    </a>

                    <button
                        type="button"
                        aria-label="Toggle Menu"
                        onClick={() => setIsOpen((v) => !v)}
                        className="lg:hidden rounded-lg p-2 text-gray-700"
                    >
                        {isOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </header>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                        onClick={closeMenu}
                    />

                    <div className="fixed top-16 left-0 right-0 z-50 bg-white border-t shadow-xl lg:hidden">
                        <div className="flex flex-col p-5">

                            {menuItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="rounded-lg px-4 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                                >
                                    {item.label}
                                </a>
                            ))}

                            <a
                                href="#contact"
                                onClick={closeMenu}
                                className="mt-4 rounded-xl bg-blue-700 py-3 text-center font-semibold text-white hover:bg-blue-800"
                            >
                                Get Free Consultation
                            </a>

                        </div>
                    </div>
                </>
            )}
        </>
    );
}