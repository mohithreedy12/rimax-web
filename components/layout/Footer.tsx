import Image from "next/image";
import Link from "next/link";
import {
    Mail,
    MapPin,
    Phone,
    ArrowRight,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white">

            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-5">

                {/* Company */}

                <div className="lg:col-span-2">

                    <Image
                        src="/logos/rimax-logo-v2.png"
                        alt="RiMax Technologies"
                        width={180}
                        height={70}
                        className="mb-6 rounded bg-white p-2"
                    />

                    <p className="mb-8 max-w-md leading-8 text-gray-400">
                        RiMax Technologies provides customer support,
                        technical assistance, dedicated teams, and
                        technology solutions that help businesses
                        deliver exceptional customer experiences.
                    </p>

                    <div className="space-y-4">

                        <div className="flex items-center gap-3">

                            <Mail size={18} className="text-blue-400" />

                            <a
                                href="mailto:contact@rimaxtech.com"
                                className="text-gray-300 transition hover:text-white"
                            >
                                contact@rimaxtech.com
                            </a>

                        </div>

                        <div className="flex items-center gap-3">

                            <MapPin size={18} className="text-blue-400" />

                            <span className="text-gray-300">
                Hyderabad, India
              </span>

                        </div>

                        <div className="flex items-center gap-3">

                            <Phone size={18} className="text-blue-400" />

                            <span className="text-gray-300">
                Available Upon Request
              </span>

                        </div>

                    </div>

                </div>

                {/* Quick Links */}

                <div>

                    <h3 className="mb-6 text-xl font-bold">
                        Quick Links
                    </h3>

                    <ul className="space-y-4">

                        <li>
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-gray-400 transition hover:text-white"
                            >
                                <ArrowRight size={16} />
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/#about"
                                className="flex items-center gap-2 text-gray-400 transition hover:text-white"
                            >
                                <ArrowRight size={16} />
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/#services"
                                className="flex items-center gap-2 text-gray-400 transition hover:text-white"
                            >
                                <ArrowRight size={16} />
                                Services
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/#industries"
                                className="flex items-center gap-2 text-gray-400 transition hover:text-white"
                            >
                                <ArrowRight size={16} />
                                Industries
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/#contact"
                                className="flex items-center gap-2 text-gray-400 transition hover:text-white"
                            >
                                <ArrowRight size={16} />
                                Contact
                            </Link>
                        </li>

                    </ul>

                </div>

                {/* Services */}

                <div>

                    <h3 className="mb-6 text-xl font-bold">
                        Services
                    </h3>

                    <ul className="space-y-4 text-gray-400">

                        <li>Live Chat Support</li>
                        <li>Email Support</li>
                        <li>Technical Support</li>
                        <li>Dedicated Teams</li>
                        <li>AI Automation</li>

                    </ul>

                </div>

                {/* Industries */}

                <div>

                    <h3 className="mb-6 text-xl font-bold">
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

            </div>

            <div className="border-t border-slate-800">

                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-gray-400 md:flex-row">

                    <p>
                        © 2026 RiMax Technologies. All Rights Reserved.
                    </p>

                    <p>
                        Designed with ❤️ by RiMax Technologies
                    </p>

                </div>

            </div>

        </footer>
    );
}