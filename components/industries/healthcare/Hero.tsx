"use client";

import Link from "next/link";
import {
    HeartPulse,
    CalendarDays,
    ShieldCheck,
    MessageCircleHeart,
    Users,
    Activity,
    CheckCircle2,
} from "lucide-react";

type DashboardCardProps = {
    icon: React.ElementType;
    title: string;
    value: string;
    color: string;
};

function DashboardCard({
                           icon: Icon,
                           title,
                           value,
                           color,
                       }: DashboardCardProps) {
    return (
        <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition duration-300 hover:shadow-lg">

            <div className={`rounded-xl p-3 ${color}`}>
                <Icon size={22} />
            </div>

            <div>
                <p className="text-sm text-gray-500">{title}</p>

                <h4 className="font-semibold text-gray-900">
                    {value}
                </h4>
            </div>

        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-blue-50">

            {/* Background Blur */}

            <div className="absolute inset-0">

                <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-red-100 blur-3xl opacity-60" />

                <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-60" />

            </div>

            <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-24 lg:flex-row">

                {/* Left */}

                <div className="flex-1">

                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-5 py-2">

                        <HeartPulse
                            size={18}
                            className="text-red-600"
                        />

                        <span className="text-sm font-semibold uppercase tracking-wide text-red-700">
                            Healthcare Industry Solutions
                        </span>

                    </div>

                    <h1 className="mb-8 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">

                        Customer Support Solutions

                        <span className="block text-red-600">
                            for Healthcare Providers
                        </span>

                    </h1>

                    <p className="mb-10 max-w-2xl text-lg leading-8 text-gray-600">

                        RiMax Technologies helps hospitals, clinics,
                        telehealth providers, pharmacies, diagnostic
                        laboratories, and healthcare organizations deliver
                        faster, more compassionate, and professional patient
                        support while reducing administrative workload and
                        improving patient satisfaction.

                    </p>

                    {/* Buttons */}

                    <div className="flex flex-wrap gap-4">

                        <Link
                            href="/#contact"
                            className="rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
                        >
                            Get Free Consultation
                        </Link>

                        <Link
                            href="/#process"
                            className="rounded-xl border border-gray-300 bg-white px-7 py-4 font-semibold text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
                        >
                            See How We Work
                        </Link>

                    </div>

                    {/* Trust Points */}

                    <div className="mt-10 flex flex-wrap gap-6">

                        <div className="flex items-center gap-2">

                            <CheckCircle2
                                size={18}
                                className="text-green-600"
                            />

                            <span className="text-gray-700">
                                Dedicated Healthcare Teams
                            </span>

                        </div>

                        <div className="flex items-center gap-2">

                            <CheckCircle2
                                size={18}
                                className="text-green-600"
                            />

                            <span className="text-gray-700">
                                24/7 Patient Support
                            </span>

                        </div>

                        <div className="flex items-center gap-2">

                            <CheckCircle2
                                size={18}
                                className="text-green-600"
                            />

                            <span className="text-gray-700">
                                Scalable Operations
                            </span>

                        </div>

                    </div>

                </div>

                {/* Right Dashboard */}

                <div className="flex-1">

                    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">

                        <div className="mb-8 flex items-center justify-between">

                            <div>

                                <p className="text-sm text-gray-500">
                                    Healthcare Operations
                                </p>

                                <h3 className="text-2xl font-bold text-gray-900">
                                    RiMax Support Dashboard
                                </h3>

                            </div>

                            <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

                                Live

                            </div>

                        </div>

                        <div className="grid gap-5">

                            <DashboardCard
                                icon={CalendarDays}
                                title="Appointments"
                                value="138 Scheduled Today"
                                color="bg-blue-100 text-blue-600"
                            />

                            <DashboardCard
                                icon={MessageCircleHeart}
                                title="Patient Chats"
                                value="27 Active Conversations"
                                color="bg-red-100 text-red-600"
                            />

                            <DashboardCard
                                icon={Users}
                                title="Support Specialists"
                                value="18 Agents Online"
                                color="bg-green-100 text-green-600"
                            />

                            <DashboardCard
                                icon={ShieldCheck}
                                title="Secure Assistance"
                                value="Protected Patient Support"
                                color="bg-purple-100 text-purple-600"
                            />

                            <DashboardCard
                                icon={Activity}
                                title="Patient Satisfaction"
                                value="98.6% Positive Rating"
                                color="bg-cyan-100 text-cyan-600"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}