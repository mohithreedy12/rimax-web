import Link from "next/link";
import {
    Building2,
    ShieldCheck,
    CreditCard,
    Landmark,
    TrendingUp,
    ArrowRight,
    Wallet,
} from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-yellow-50 py-24">
            <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

                {/* Left */}

                <div>

                    <div className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
                        Banking & Finance Industry Solutions
                    </div>

                    <h1 className="mt-8 text-5xl font-bold leading-tight text-gray-900 lg:text-6xl">
                        Customer Support Solutions for
                        <span className="block text-blue-700">
                            Banking & Financial Services
                        </span>
                    </h1>

                    <p className="mt-8 text-xl leading-9 text-gray-600">
                        Deliver secure, reliable, and responsive customer
                        support for banks, credit unions, fintech companies,
                        insurance providers, and financial institutions. RiMax
                        helps organizations improve customer trust while
                        providing exceptional assistance across every customer
                        interaction.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-800"
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
                            <h3 className="text-3xl font-bold text-blue-700">
                                Secure
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Customer Support
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-blue-700">
                                24/7
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Financial Assistance
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-blue-700">
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

                    <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-2xl">

                        <div className="mb-8 flex items-center justify-between">

                            <h3 className="text-xl font-bold">
                                Banking Dashboard
                            </h3>

                            <Building2 className="text-blue-700" />

                        </div>

                        <div className="space-y-5">

                            <div className="flex items-center justify-between rounded-xl bg-blue-50 p-4">

                                <div className="flex items-center gap-3">
                                    <CreditCard className="text-blue-700" />
                                    <span>Card Requests</span>
                                </div>

                                <strong>842</strong>

                            </div>

                            <div className="flex items-center justify-between rounded-xl bg-yellow-50 p-4">

                                <div className="flex items-center gap-3">
                                    <Wallet className="text-yellow-600" />
                                    <span>Account Inquiries</span>
                                </div>

                                <strong>512</strong>

                            </div>

                            <div className="flex items-center justify-between rounded-xl bg-green-50 p-4">

                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="text-green-600" />
                                    <span>Fraud Alerts</span>
                                </div>

                                <strong>37</strong>

                            </div>

                            <div className="flex items-center justify-between rounded-xl bg-indigo-50 p-4">

                                <div className="flex items-center gap-3">
                                    <Landmark className="text-indigo-600" />
                                    <span>Loan Applications</span>
                                </div>

                                <strong>124</strong>

                            </div>

                        </div>

                    </div>

                    <div className="absolute -right-6 -top-6 rounded-2xl bg-blue-700 p-5 text-white shadow-xl">
                        <TrendingUp size={36} />
                    </div>

                </div>

            </div>
        </section>
    );
}