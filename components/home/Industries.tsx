import Link from "next/link";
import {
    HeartPulse,
    ShoppingCart,
    Landmark,
    RadioTower,
    Cloud,
    Truck,
    ArrowRight,
} from "lucide-react";

const industries = [
    {
        icon: HeartPulse,
        title: "Healthcare",
        description:
            "HIPAA-aware customer support, appointment assistance, and patient engagement.",
        color: "bg-red-50 text-red-600",
        href: "/industries/healthcare",
    },
    {
        icon: ShoppingCart,
        title: "E-Commerce",
        description:
            "Live chat, order tracking, returns, and customer service for online stores.",
        color: "bg-blue-50 text-blue-600",
        href: "/industries/ecommerce",
    },
    {
        icon: Landmark,
        title: "Banking & Finance",
        description:
            "Secure support operations for banking, insurance, and financial services.",
        color: "bg-green-50 text-green-600",
        href: "/industries/banking-finance",
    },
    {
        icon: RadioTower,
        title: "Telecommunications",
        description:
            "Technical support and customer assistance for telecom providers.",
        color: "bg-orange-50 text-orange-600",
        href: "/industries/telecommunications",
    },
    {
        icon: Cloud,
        title: "SaaS & Technology",
        description:
            "Technical support, onboarding, and customer success for software companies.",
        color: "bg-purple-50 text-purple-600",
        href: "/industries/saas-technology",
    },
    {
        icon: Truck,
        title: "Logistics",
        description:
            "Shipment tracking, dispatch support, and supply chain customer service.",
        color: "bg-cyan-50 text-cyan-600",
        href: "/industries/logistics",
    },
];

export default function Industries() {
    return (
        <section
            id="industries"
            className="scroll-mt-24 bg-gray-50 py-28"
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16 text-center">
                    <p className="mb-3 font-semibold uppercase tracking-widest text-blue-700">
                        Industries We Serve
                    </p>

                    <h2 className="mb-6 text-5xl font-bold text-gray-900">
                        Trusted Across Multiple Industries
                    </h2>

                    <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600">
                        RiMax Technologies provides customer support and technology
                        solutions tailored for businesses across a wide range of
                        industries.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {industries.map((industry) => {
                        const Icon = industry.icon;

                        return (
                            <Link
                                key={industry.title}
                                href={industry.href}
                                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                            >
                                <div
                                    className={`mb-6 inline-flex rounded-2xl p-4 ${industry.color}`}
                                >
                                    <Icon size={34} />
                                </div>

                                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                    {industry.title}
                                </h3>

                                <p className="mb-6 leading-7 text-gray-600">
                                    {industry.description}
                                </p>

                                <div className="flex items-center font-semibold text-blue-700 transition-all duration-300 group-hover:translate-x-1">
                                    Learn More
                                    <ArrowRight
                                        size={18}
                                        className="ml-2"
                                    />
                                </div>
                            </Link>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}