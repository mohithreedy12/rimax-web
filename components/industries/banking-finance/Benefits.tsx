import {
    ShieldCheck,
    Clock3,
    Users,
    TrendingUp,
} from "lucide-react";

const benefits = [
    {
        icon: ShieldCheck,
        title: "Strengthen Customer Trust",
        description:
            "Provide secure, reliable, and professional customer support that builds confidence and long-term relationships with customers.",
    },
    {
        icon: Clock3,
        title: "Faster Issue Resolution",
        description:
            "Reduce response times for account inquiries, payment questions, loan requests, and banking support through dedicated service teams.",
    },
    {
        icon: Users,
        title: "Improve Customer Retention",
        description:
            "Deliver exceptional customer experiences that increase satisfaction, encourage loyalty, and improve customer retention.",
    },
    {
        icon: TrendingUp,
        title: "Scalable Financial Support",
        description:
            "Quickly scale your customer support operations as your financial institution grows without compromising service quality.",
    },
];

export default function Benefits() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-blue-700">
                        Why Choose RiMax
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        Benefits for Banking & Financial Organizations
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Financial institutions require dependable customer
                        support that enhances trust, improves operational
                        efficiency, and delivers outstanding service across
                        every customer interaction.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {benefits.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.title}
                                className="rounded-3xl border border-gray-200 bg-gray-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-xl"
                            >

                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">

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