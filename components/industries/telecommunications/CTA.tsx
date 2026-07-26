import Link from "next/link";
import { ArrowRight, RadioTower } from "lucide-react";

export default function CTA() {
    return (
        <section className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 py-24">
            <div className="mx-auto max-w-6xl px-6 text-center text-white">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                    <RadioTower size={40} />
                </div>

                <h2 className="mt-8 text-5xl font-bold">
                    Ready to Transform Your Telecommunications Customer Support?
                </h2>

                <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-cyan-50">
                    Whether you're a telecommunications provider, internet
                    service provider, mobile network operator, broadband
                    company, or communication services business, RiMax
                    Technologies delivers dedicated customer support teams
                    that improve customer satisfaction, reduce operational
                    workload, and help your customers stay connected.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

                    <Link
                        href="/#contact"
                        className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-cyan-700 transition hover:scale-105"
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