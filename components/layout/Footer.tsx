import Image from "next/image";
import Link from "next/link";
import {
    Mail,
    MapPin,
    ArrowRight,
} from "lucide-react";

/* ==========================================
   QUICK LINKS
========================================== */

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },

    // Temporarily hidden until RiMax expands
    // { label: "Industries", href: "/#industries" },

    { label: "Why RiMax", href: "/#why-rimax" },
    { label: "Our Process", href: "/#process" },
    { label: "Contact", href: "/#contact" },
];

/* ==========================================
   SERVICES
========================================== */

const services = [
    {
        label: "Live Chat Support",
        href: "/services/live-chat-support",
    },
    {
        label: "Email Support",
        href: "/services/email-support",
    },
    {
        label: "Customer Support",
        href: "/services/customer-support",
    },
    {
        label: "Business Operations Support",
        href: "/services/business-operations-support",
    },
    {
        label: "Social Media Management",
        href: "/services/social-media-management",
    },
    {
        label: "Digital Marketing Support",
        href: "/services/digital-marketing-support",
    },
];

/* ==========================================
   FOOTER COMPONENT
========================================== */

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white">

            {/* MAIN FOOTER */}

            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">

                {/* COMPANY */}

                <div className="lg:col-span-2">

                    <Link href="/" className="inline-block">

                        <Image
                            src="/logos/rimax-logo-v2.png"
                            alt="RiMax Technologies"
                            width={180}
                            height={70}
                            className="mb-6 rounded-xl bg-white p-3"
                        />

                    </Link>

                    <p className="mb-8 max-w-md text-sm leading-8 text-gray-400">
                        RiMax Technologies provides flexible business
                        support solutions, including customer service,
                        live chat, email support, business operations,
                        social media management, and digital marketing
                        support. We help businesses streamline daily
                        operations and strengthen customer experiences.
                    </p>

                    {/* CONTACT DETAILS */}

                    <div className="space-y-4">

                        <div className="flex items-center gap-3">

                            <Mail
                                size={18}
                                className="shrink-0 text-blue-400"
                            />

                            <a
                                href="mailto:contact@rimaxtech.com"
                                className="text-sm text-gray-300 transition hover:text-white"
                            >
                                contact@rimaxtech.com
                            </a>

                        </div>

                        <div className="flex items-center gap-3">

                            <MapPin
                                size={18}
                                className="shrink-0 text-blue-400"
                            />

                            <span className="text-sm text-gray-300">
                                Hyderabad, India
                            </span>

                        </div>

                    </div>

                </div>

                {/* QUICK LINKS */}

                <div>

                    <h3 className="mb-6 text-lg font-bold">
                        Quick Links
                    </h3>

                    <ul className="space-y-4">

                        {quickLinks.map((link) => (
                            <li key={link.label}>

                                <Link
                                    href={link.href}
                                    className="group flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                                >

                                    <ArrowRight
                                        size={15}
                                        className="text-blue-400 transition group-hover:translate-x-1"
                                    />

                                    {link.label}

                                </Link>

                            </li>
                        ))}

                    </ul>

                </div>

                {/* SERVICES */}

                <div>

                    <h3 className="mb-6 text-lg font-bold">
                        Our Services
                    </h3>

                    <ul className="space-y-4">

                        {services.map((service) => (
                            <li key={service.label}>

                                <Link
                                    href={service.href}
                                    className="group flex items-start gap-2 text-sm text-gray-400 transition hover:text-white"
                                >

                                    <ArrowRight
                                        size={15}
                                        className="mt-0.5 shrink-0 text-blue-400 transition group-hover:translate-x-1"
                                    />

                                    <span>
                                        {service.label}
                                    </span>

                                </Link>

                            </li>
                        ))}

                    </ul>

                </div>

                {/* ==================================
                    INDUSTRIES - TEMPORARILY HIDDEN

                    Restore this section when
                    RiMax launches industry pages.
                ================================== */}

                {/*
                <div>
                    <h3 className="mb-6 text-lg font-bold">
                        Industries
                    </h3>

                    <ul className="space-y-4 text-gray-400">
                        <li>Healthcare</li>
                        <li>E-Commerce</li>
                        <li>Banking</li>
                        <li>SaaS</li>
                        <li>Logistics</li>
                    </ul>
                </div>
                */}

            </div>

            {/* BOTTOM FOOTER */}

            <div className="border-t border-slate-800">

                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center md:flex-row md:text-left">

                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} RiMax Technologies.
                        All Rights Reserved.
                    </p>

                    <p className="text-sm text-gray-400">
                        Designed with ❤️ by RiMax Technologies
                    </p>

                </div>

            </div>

        </footer>
    );
}