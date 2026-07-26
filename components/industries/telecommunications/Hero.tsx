import Link from "next/link";
import {
    Wifi,
    Smartphone,
    Headphones,
    Signal,
    Globe,
    ArrowRight,
    Activity,
} from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-24">
            <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

                {/* Left */}

                <div>

                    <div className="inline-flex items-center rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
                        Telecommunications Industry Solutions
                    </div>

                    <h1 className="mt-8 text-5xl font-bold leading-tight text-gray-900 lg:text-6xl">
                        Reliable Customer Support for
                        <span className="block text-cyan-700">
                            Telecommunications Companies
                        </span>
                    </h1>

                    <p className="mt-8 text-xl leading-9 text-gray-600">
                        Deliver exceptional customer experiences with dedicated
                        support for telecom providers, internet service
                        companies, mobile operators, broadband providers, and
                        communication businesses. RiMax Technologies helps your
                        customers stay connected with fast, professional, and
                        reliable support.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center rounded-xl bg-cyan-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-cyan-700"
                        >
                            Get Free Consultation
                            <ArrowRight className="ml-2" size={20} />
                        </Link>

                        <Link
                            href="/#process"
                            className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition hover:bg-gray-100"
                        >
                            See How We Work
                        </Link>

                    </div>

                    <div className="mt-12 grid grid-cols-3 gap-6">

                        <div>
                            <h3 className="text-3xl font-bold text-cyan-700">
                                24/7
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Customer Support
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-cyan-700">
                                Fast
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Issue Resolution
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-cyan-700">
                                Scale
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Dedicated Teams
                            </p>
                        </div>

                    </div>

                </div>

                {/* Right Dashboard */}

                <div className="relative">

                    <div className="rounded-3xl border border-cyan-100 bg-white p-8 shadow-2xl">

                        <div className="mb-8 flex items-center justify-between">

                            <h3 className="text-xl font-bold">
                                Telecom Support Dashboard
                            </h3>

                            <Wifi className="text-cyan-700" />

                        </div>

                        <div className="space-y-5">

                            <div className="flex items-center justify-between rounded-xl bg-cyan-50 p-4">

                                <div className="flex items-center gap-3">
                                    <Headphones className="text-cyan-700" />
                                    <span>Support Tickets</span>
                                </div>

                                <strong>1,248</strong>

                            </div>

                            <div className="flex items-center justify-between rounded-xl bg-blue-50 p-4">

                                <div className="flex items-center gap-3">
                                    <Signal className="text-blue-700" />
                                    <span>Network Status</span>
                                </div>

                                <strong>99.9%</strong>

                            </div>

                            <div className="flex items-center justify-between rounded-xl bg-green-50 p-4">

                                <div className="flex items-center gap-3">
                                    <Smartphone className="text-green-600" />
                                    <span>Mobile Services</span>
                                </div>

                                <strong>684</strong>

                            </div>

                            <div className="flex items-center justify-between rounded-xl bg-indigo-50 p-4">

                                <div className="flex items-center gap-3">
                                    <Globe className="text-indigo-600" />
                                    <span>Broadband Requests</span>
                                </div>

                                <strong>392</strong>

                            </div>

                        </div>

                    </div>

                    <div className="absolute -right-6 -top-6 rounded-2xl bg-cyan-600 p-5 text-white shadow-xl">
                        <Activity size={36} />
                    </div>

                </div>

            </div>
        </section>
    );
}