import {
    Wifi,
    Zap,
    Users,
    TrendingUp,
} from "lucide-react";

const benefits = [
    {
        icon: Wifi,
        title: "Reliable Customer Support",
        description:
            "Provide dependable customer service that keeps subscribers informed, connected, and satisfied across every interaction.",
    },
    {
        icon: Zap,
        title: "Faster Issue Resolution",
        description:
            "Resolve technical issues, billing inquiries, service requests, and connectivity problems quickly with dedicated support teams.",
    },
    {
        icon: Users,
        title: "Improve Customer Loyalty",
        description:
            "Deliver outstanding customer experiences that increase satisfaction, reduce churn, and strengthen long-term customer relationships.",
    },
    {
        icon: TrendingUp,
        title: "Scalable Telecom Operations",
        description:
            "Expand your customer support capabilities as your subscriber base grows while maintaining consistent service quality.",
    },
];

export default function Benefits() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-cyan-700">
                        Why Choose RiMax
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        Benefits for Telecommunications Companies
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Telecommunications businesses require responsive,
                        dependable customer support that improves customer
                        satisfaction, strengthens loyalty, and helps deliver
                        seamless communication experiences.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {benefits.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.title}
                                className="rounded-3xl border border-gray-200 bg-gray-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:bg-white hover:shadow-xl"
                            >

                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">

                                    <Icon size={30} />

                                </div>

                                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                    {item.title}
                                </h3>

                                <p className="leading-8 text-gray-600">
                                    {item.description}
                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>
        </section>
    );
}