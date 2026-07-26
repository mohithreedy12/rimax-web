import Link from "next/link";
import {
    Cloud,
    Bot,
    Server,
    Activity,
    Cpu,
    ArrowRight,
    ShieldCheck,
} from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-indigo-50 py-24">
            <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

                {/* Left */}

                <div>

                    <div className="inline-flex items-center rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-700">
                        SaaS & Technology Industry Solutions
                    </div>

                    <h1 className="mt-8 text-5xl font-bold leading-tight text-gray-900 lg:text-6xl">
                        Customer Support for
                        <span className="block text-violet-700">
                            SaaS & Technology Companies
                        </span>
                    </h1>

                    <p className="mt-8 text-xl leading-9 text-gray-600">
                        Empower your software business with reliable customer
                        support designed for SaaS platforms, cloud providers,
                        AI companies, and technology organizations. RiMax
                        Technologies helps you deliver exceptional customer
                        experiences while your team focuses on innovation.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center rounded-xl bg-violet-700 px-8 py-4 text-lg font-semibold text-white transition hover:bg-violet-800"
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
                            <h3 className="text-3xl font-bold text-violet-700">
                                99.9%
                            </h3>
                            <p className="mt-2 text-gray-600">
                                System Reliability
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-violet-700">
                                24/7
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Customer Support
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-violet-700">
                                Scale
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Growth Ready
                            </p>
                        </div>

                    </div>

                </div>

                {/* Right Dashboard */}

                <div className="relative">

                    <div className="rounded-3xl border border-violet-100 bg-white p-8 shadow-2xl">

                        <div className="mb-8 flex items-center justify-between">

                            <h3 className="text-xl font-bold">
                                SaaS Operations Dashboard
                            </h3>

                            <Cloud className="text-violet-700" />

                        </div>

                        <div className="space-y-5">

                            <div className="flex items-center justify-between rounded-xl bg-violet-50 p-4">

                                <div className="flex items-center gap-3">
                                    <Activity className="text-violet-700" />
                                    <span>Support Tickets</span>
                                </div>

                                <strong>1,532</strong>

                            </div>

                            <div className="flex items-center justify-between rounded-xl bg-blue-50 p-4">

                                <div className="flex items-center gap-3">
                                    <Server className="text-blue-700" />
                                    <span>Cloud Services</span>
                                </div>

                                <strong>128</strong>

                            </div>

                            <div className="flex items-center justify-between rounded-xl bg-green-50 p-4">

                                <div className="flex items-center gap-3">
                                    <Bot className="text-green-600" />
                                    <span>AI Automation</span>
                                </div>

                                <strong>94%</strong>

                            </div>

                            <div className="flex items-center justify-between rounded-xl bg-indigo-50 p-4">

                                <div className="flex items-center gap-3">
                                    <Cpu className="text-indigo-600" />
                                    <span>API Requests</span>
                                </div>

                                <strong>2.8M</strong>

                            </div>

                        </div>

                    </div>

                    <div className="absolute -right-6 -top-6 rounded-2xl bg-violet-700 p-5 text-white shadow-xl">
                        <ShieldCheck size={36} />
                    </div>

                </div>

            </div>
        </section>
    );
}