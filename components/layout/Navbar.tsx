"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },

    // Temporarily hidden until RiMax expands
    // { label: "Industries", href: "/#industries" },

    { label: "Why RiMax", href: "/#why-rimax" },
    { label: "Our Process", href: "/#process" },
    { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">

                <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 lg:h-[68px] lg:px-8">

                    {/* Logo */}

                    <Link
                        href="/"
                        className="flex items-center"
                        onClick={closeMenu}
                    >
                        <Image
                            src="/logos/rimax-logo-v2.png"
                            alt="RiMax Technologies"
                            width={90}
                            height={32}
                            priority
                            className="h-auto w-[70px] sm:w-[80px] lg:w-[90px]"
                        />
                    </Link>

                    {/* Desktop Navigation */}

                    <nav className="hidden items-center gap-8 lg:flex">

                        {menuItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="whitespace-nowrap font-medium text-gray-700 transition-colors hover:text-blue-700"
                            >
                                {item.label}
                            </Link>
                        ))}

                    </nav>

                    {/* Desktop CTA */}

                    <Link
                        href="/#contact"
                        className="hidden whitespace-nowrap rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800 lg:block"
                    >
                        Get Free Consultation
                    </Link>

                    {/* Mobile Menu Button */}

                    <button
                        type="button"
                        aria-label={isOpen ? "Close Menu" : "Open Menu"}
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                        className="mr-1 rounded-lg p-2 text-gray-700 lg:hidden"
                    >
                        {isOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>

                </div>

            </header>

            {/* Mobile Menu */}

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                        onClick={closeMenu}
                    />

                    <div className="fixed left-0 right-0 top-14 z-50 border-t bg-white shadow-xl lg:hidden">

                        <div className="flex max-h-[calc(100vh-3.5rem)] flex-col overflow-y-auto p-5">

                            {menuItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="rounded-lg px-4 py-4 text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <Link
                                href="/#contact"
                                onClick={closeMenu}
                                className="mt-4 rounded-xl bg-blue-700 py-3 text-center font-semibold text-white transition hover:bg-blue-800"
                            >
                                Get Free Consultation
                            </Link>

                        </div>

                    </div>
                </>
            )}
        </>
    );
}