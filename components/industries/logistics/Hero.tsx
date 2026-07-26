import Link from "next/link";
import {
    Truck,
    Package,
    MapPinned,
    Clock3,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-teal-700 to-cyan-800">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_35%)]" />

            <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">

                {/* Left Content */}

                <div className="text-white">

                    <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-emerald-200">
                        Logistics Industry Solutions
                    </p>

                    <h1 className="text-5xl font-extrabold leading-tight lg:text-6xl">
                        Customer Support for Logistics &
                        <span className="block text-emerald-200">
                            Supply Chain Companies
                        </span>
                    </h1>

                    <p className="mt-8 max-w-2xl text-xl leading-9 text-emerald-100">
                        RiMax Technologies helps logistics providers,
                        transportation companies, freight operators, and supply
                        chain businesses deliver exceptional customer support
                        through live chat, email support, shipment assistance,
                        and operational support services.
                    </p>

                    <div className="mt-10 flex flex-col gap-5 sm:flex-row">

                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-emerald-700 transition hover:scale-105"
                        >
                            Get Free Consultation
                            <ArrowRight className="ml-2" size={20} />
                        </Link>

                        <Link
                            href="/#process"
                            className="inline-flex items-center justify-center rounded-xl border border-white/30 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
                        >
                            See How We Work
                        </Link>

                    </div>

                    <div className="mt-12 grid gap-5 sm:grid-cols-2">

                        {[
                            "24/7 Shipment Support",
                            "Live Chat & Email Support",
                            "Order & Delivery Assistance",
                            "Scalable Support Teams",
                        ].map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle2
                                    size={22}
                                    className="text-emerald-200"
                                />
                                <span className="text-lg">{item}</span>
                            </div>
                        ))}

                    </div>

                </div>

                {/* Right Dashboard */}

                <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

                    <div className="mb-8 flex items-center justify-between">

                        <h3 className="text-2xl font-bold text-white">
                            Logistics Support Dashboard
                        </h3>

                        <Truck className="text-emerald-200" size={34} />

                    </div>

                    <div className="space-y-5">

                        <div className="flex items-center justify-between rounded-2xl bg-white/10 p-5">
                            <div className="flex items-center gap-4">
                                <Package className="text-emerald-200" />
                                <span className="font-medium text-white">
                                    Shipment Tracking
                                </span>
                            </div>
                            <span className="font-bold text-emerald-200">
                                Active
                            </span>
                        </div>

                        <div className="flex items-center justify-between rounded-2xl bg-white/10 p-5">
                            <div className="flex items-center gap-4">
                                <MapPinned className="text-emerald-200" />
                                <span className="font-medium text-white">
                                    Delivery Updates
                                </span>
                            </div>
                            <span className="font-bold text-emerald-200">
                                Live
                            </span>
                        </div>

                        <div className="flex items-center justify-between rounded-2xl bg-white/10 p-5">
                            <div className="flex items-center gap-4">
                                <Clock3 className="text-emerald-200" />
                                <span className="font-medium text-white">
                                    Customer Requests
                                </span>
                            </div>
                            <span className="font-bold text-emerald-200">
                                24/7
                            </span>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}