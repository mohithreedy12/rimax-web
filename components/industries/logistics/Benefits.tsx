import {
    Zap,
    Smile,
    Package,
    TrendingUp,
} from "lucide-react";

const benefits = [
    {
        icon: Zap,
        title: "Faster Customer Response",
        description:
            "Provide quick, accurate responses to shipment inquiries, delivery updates, and logistics questions, reducing customer wait times and improving service efficiency.",
    },
    {
        icon: Smile,
        title: "Higher Customer Satisfaction",
        description:
            "Deliver professional, responsive support that builds customer trust, improves communication, and creates a positive shipping experience from order to delivery.",
    },
    {
        icon: Package,
        title: "Better Shipment Visibility",
        description:
            "Keep customers informed with timely shipment tracking, delivery notifications, and proactive communication that reduces uncertainty and support requests.",
    },
    {
        icon: TrendingUp,
        title: "Scalable Support Operations",
        description:
            "Grow your customer support capabilities alongside your logistics business without compromising response quality, operational efficiency, or customer experience.",
    },
];

export default function Benefits() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-emerald-700">
                        Why Choose RiMax
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        Benefits for Logistics & Supply Chain Companies
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        RiMax Technologies helps logistics organizations improve
                        customer satisfaction, streamline communication, and
                        scale support operations through reliable, responsive,
                        and customer-focused service solutions.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {benefits.map((benefit) => {

                        const Icon = benefit.icon;

                        return (

                            <div
                                key={benefit.title}
                                className="rounded-3xl border border-gray-200 bg-gray-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:bg-white hover:shadow-xl"
                            >

                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">

                                    <Icon size={30} />

                                </div>

                                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                    {benefit.title}
                                </h3>

                                <p className="leading-8 text-gray-600">
                                    {benefit.description}
                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>
        </section>
    );
}