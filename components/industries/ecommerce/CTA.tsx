import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

export default function CTA() {
    return (
        <section className="bg-gradient-to-r from-purple-600 via-purple-500 to-orange-500 py-24">
            <div className="mx-auto max-w-6xl px-6 text-center text-white">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                    <ShoppingBag size={40} />
                </div>

                <h2 className="mt-8 text-5xl font-bold">
                    Ready to Elevate Your E-Commerce Customer Experience?
                </h2>

                <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-purple-50">
                    Whether you're an online retailer, marketplace seller,
                    D2C brand, or growing e-commerce business, RiMax
                    Technologies provides dedicated customer support teams
                    that improve customer satisfaction, reduce operational
                    workload, and help you build long-term customer loyalty.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

                    <Link
                        href="/#contact"
                        className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-purple-600 transition hover:scale-105"
                    >
                        Get Free Consultation
                        <ArrowRight className="ml-2" size={20} />
                    </Link>

                    <Link
                        href="/#process"
                        className="inline-flex items-center rounded-xl border border-white/30 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
                    >
                        See How We Work
                    </Link>

                </div>

            </div>
        </section>
    );
}