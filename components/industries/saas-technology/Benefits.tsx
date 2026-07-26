import {
    Smile,
    Zap,
    Users,
    Rocket,
} from "lucide-react";

const benefits = [
    {
        icon: Smile,
        title: "Better Customer Experience",
        description:
            "Deliver fast, knowledgeable, and consistent support that improves user satisfaction and builds long-term customer relationships.",
    },
    {
        icon: Zap,
        title: "Faster Technical Resolution",
        description:
            "Resolve technical issues, onboarding questions, subscription inquiries, and product-related requests quickly and efficiently.",
    },
    {
        icon: Users,
        title: "Increase Customer Retention",
        description:
            "Provide exceptional support that boosts customer loyalty, reduces churn, and encourages long-term platform adoption.",
    },
    {
        icon: Rocket,
        title: "Scalable SaaS Growth",
        description:
            "Expand your customer support operations as your user base grows while maintaining consistent service quality across every interaction.",
    },
];

export default function Benefits() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-violet-700">
                        Why Choose RiMax
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        Benefits for SaaS & Technology Companies
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Technology companies require customer support that is
                        fast, scalable, and technically proficient. RiMax
                        Technologies helps software businesses deliver
                        outstanding customer experiences while supporting
                        sustainable business growth.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {benefits.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.title}
                                className="rounded-3xl border border-gray-200 bg-gray-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-200 hover:bg-white hover:shadow-xl"
                            >

                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">

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