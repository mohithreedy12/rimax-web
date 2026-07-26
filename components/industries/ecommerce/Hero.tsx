import Link from "next/link";
import {
    ShoppingCart,
    Package,
    MessageCircle,
    Truck,
    Star,
    ArrowRight,
    BarChart3,
} from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-orange-50 py-24">
            <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

                {/* Left */}

                <div>

                    <div className="inline-flex items-center rounded-full bg-purple-100 px-5 py-2 text-sm font-semibold text-purple-700">
                        E-Commerce Industry Solutions
                    </div>

                    <h1 className="mt-8 text-5xl font-bold leading-tight text-gray-900 lg:text-6xl">
                        Customer Support Solutions for
                        <span className="block text-purple-600">
                            E-Commerce Businesses
                        </span>
                    </h1>

                    <p className="mt-8 text-xl leading-9 text-gray-600">
                        Deliver exceptional shopping experiences with dedicated
                        customer support for order tracking, returns, product
                        inquiries, shipping updates, live chat, and email
                        assistance. RiMax helps online businesses build trust,
                        improve customer satisfaction, and increase repeat
                        purchases.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-purple-700"
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
                            <h3 className="text-3xl font-bold text-purple-600">
                                24/7
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Customer Support
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-purple-600">
                                Multi
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Channel Support
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-purple-600">
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

                    <div className="rounded-3xl border border-purple-100 bg-white p-8 shadow-2xl">

                        <div className="mb-8 flex items-center justify-between">

                            <h3 className="text-xl font-bold">
                                E-Commerce Dashboard
                            </h3>

                            <ShoppingCart className="text-purple-600" />

                        </div>

                        <div className="space-y-5">

                            <div className="flex items-center justify-between rounded-xl bg-purple-50 p-4">

                                <div className="flex items-center gap-3">
                                    <Package className="text-purple-600" />
                                    <span>Orders Today</span>
                                </div>

                                <strong>1,248</strong>

                            </div>

                            <div className="flex items-center justify-between rounded-xl bg-orange-50 p-4">

                                <div className="flex items-center gap-3">
                                    <Truck className="text-orange-500" />
                                    <span>Shipping Updates</span>
                                </div>

                                <strong>326</strong>

                            </div>

                            <div className="flex items-center justify-between rounded-xl bg-blue-50 p-4">

                                <div className="flex items-center gap-3">
                                    <MessageCircle className="text-blue-600" />
                                    <span>Live Chats</span>
                                </div>

                                <strong>184</strong>

                            </div>

                            <div className="flex items-center justify-between rounded-xl bg-green-50 p-4">

                                <div className="flex items-center gap-3">
                                    <Star className="text-green-600" />
                                    <span>Customer Rating</span>
                                </div>

                                <strong>4.9/5</strong>

                            </div>

                        </div>

                    </div>

                    <div className="absolute -right-6 -top-6 rounded-2xl bg-purple-600 p-5 text-white shadow-xl">
                        <BarChart3 size={36} />
                    </div>

                </div>

            </div>
        </section>
    );
}