import {
    Cloud,
    Bot,
    Laptop,
    TrendingUp,
} from "lucide-react";

const highlights = [
    {
        icon: Cloud,
        title: "Cloud & SaaS Solutions",
        description:
            "Support cloud-based platforms and SaaS products with responsive customer service that keeps users productive and engaged.",
    },
    {
        icon: Bot,
        title: "AI-Powered Support",
        description:
            "Assist customers using modern support workflows enhanced by AI, automation, and intelligent service processes.",
    },
    {
        icon: Laptop,
        title: "Technical Assistance",
        description:
            "Help users with onboarding, account management, troubleshooting, feature guidance, and day-to-day technical support.",
    },
    {
        icon: TrendingUp,
        title: "Scalable Operations",
        description:
            "Grow your customer support capabilities as your software business expands while maintaining exceptional service quality.",
    },
];

export default function Overview() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto max-w-3xl text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-violet-700">
                        SaaS & Technology Support
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        Helping Technology Companies Deliver Outstanding Customer Experiences
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Today's software companies need customer support that
                        scales with their products. RiMax Technologies helps
                        SaaS providers, cloud platforms, AI businesses, and
                        technology organizations deliver fast, knowledgeable,
                        and reliable customer assistance that drives user
                        satisfaction and long-term growth.
                    </p>

                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {highlights.map((item) => {

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