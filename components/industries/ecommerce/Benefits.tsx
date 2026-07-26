import {
    Repeat,
    SmilePlus,
    TrendingUp,
    Headset,
} from "lucide-react";

const benefits = [
    {
        icon: SmilePlus,
        title: "Improve Customer Satisfaction",
        description:
            "Provide fast, professional support that creates a seamless shopping experience and builds long-term customer trust.",
    },
    {
        icon: Repeat,
        title: "Increase Repeat Purchases",
        description:
            "Excellent customer service encourages shoppers to return, helping your business grow through repeat orders and customer loyalty.",
    },
    {
        icon: TrendingUp,
        title: "Support Business Growth",
        description:
            "Scale your customer support operations during peak shopping seasons, product launches, and business expansion without compromising service quality.",
    },
    {
        icon: Headset,
        title: "Consistent Multi-Channel Support",
        description:
            "Deliver reliable customer assistance across live chat, email, social media, and help desk platforms with a dedicated RiMax support team.",
    },
];

export default function Benefits() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-purple-600">
                        Business Benefits
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        Why E-Commerce Businesses Choose RiMax
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Great customer support directly impacts customer
                        satisfaction, repeat purchases, and long-term business
                        success. RiMax helps online businesses deliver
                        exceptional service while reducing operational workload.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2">

                    {benefits.map((benefit) => {

                        const Icon = benefit.icon;

                        return (

                            <div
                                key={benefit.title}
                                className="group rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >

                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 transition duration-300 group-hover:bg-purple-600 group-hover:text-white">

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