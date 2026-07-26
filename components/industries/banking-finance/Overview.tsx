import {
    ShieldCheck,
    Landmark,
    CreditCard,
    TrendingUp,
} from "lucide-react";

const highlights = [
    {
        icon: ShieldCheck,
        title: "Secure Customer Support",
        description:
            "Deliver responsive and trustworthy customer service while maintaining confidentiality and compliance for every interaction.",
    },
    {
        icon: Landmark,
        title: "Banking Operations",
        description:
            "Support customers with account services, loan inquiries, transaction assistance, and general banking questions efficiently.",
    },
    {
        icon: CreditCard,
        title: "Financial Assistance",
        description:
            "Handle payment inquiries, card-related requests, account verification, and digital banking support across multiple channels.",
    },
    {
        icon: TrendingUp,
        title: "Business Growth",
        description:
            "Enhance customer satisfaction, strengthen trust, and improve operational efficiency with scalable support solutions.",
    },
];

export default function Overview() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto max-w-3xl text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-blue-700">
                        Banking & Finance Support
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        Building Trust Through Exceptional Financial Customer Support
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Financial institutions require fast, accurate, and secure
                        customer service. RiMax Technologies helps banks, credit
                        unions, fintech companies, insurance providers, and
                        financial organizations deliver outstanding customer
                        experiences while maintaining professionalism, compliance,
                        and operational excellence.
                    </p>

                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {highlights.map((item) => {

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