import {
    ShieldCheck,
    Clock3,
    Globe2,
    Users,
    TrendingUp,
    BadgeCheck,
} from "lucide-react";

const features = [
    {
        icon: Clock3,
        title: "24/7 Availability",
        description:
            "Round-the-clock customer support whenever your customers need assistance.",
    },
    {
        icon: Users,
        title: "Dedicated Teams",
        description:
            "Experienced support professionals working as an extension of your business.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Operations",
        description:
            "Enterprise-grade security and confidentiality for every customer interaction.",
    },
    {
        icon: Globe2,
        title: "Global Delivery",
        description:
            "Serving businesses across multiple countries with scalable support solutions.",
    },
    {
        icon: TrendingUp,
        title: "Scalable Services",
        description:
            "Easily scale your customer support as your business grows.",
    },
    {
        icon: BadgeCheck,
        title: "Quality Assurance",
        description:
            "Continuous monitoring to maintain exceptional service quality.",
    },
];

export default function WhyRiMax() {
    return (
        <section
            id="why-rimax"
            className="scroll-mt-24 bg-gray-50 py-28"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mb-16 text-center">

                    <p className="mb-3 font-semibold uppercase tracking-widest text-blue-700">
                        WHY CHOOSE RIMAX
                    </p>

                    <h2 className="mb-6 text-4xl sm:text-5xl font-bold text-gray-900">
                        Built For Long-Term Business Success
                    </h2>

                    <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600">
                        We combine experienced customer support professionals
                        with modern technology to help businesses improve
                        customer satisfaction, reduce operational costs,
                        and scale confidently.
                    </p>

                </div>

                <div className="grid gap-10 lg:grid-cols-2">

                    {/* LEFT */}

                    <div className="grid gap-6">

                        {features.map((item) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={item.title}
                                    className="flex gap-5 rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                                >

                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50">

                                        <Icon
                                            size={32}
                                            className="text-blue-700"
                                        />

                                    </div>

                                    <div className="min-w-0">

                                        <h3 className="mb-2 text-2xl font-bold">
                                            {item.title}
                                        </h3>

                                        <p className="leading-7 text-gray-600">
                                            {item.description}
                                        </p>

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                    {/* RIGHT */}

                    <div className="flex items-center">

                        <div className="w-full overflow-hidden rounded-[36px] bg-white p-6 sm:p-8 lg:p-10 shadow-2xl">

                            <div className="grid grid-cols-2 gap-4 sm:gap-6">

                                <div className="rounded-3xl bg-blue-50 p-4 sm:p-6 lg:p-8 text-center min-w-0">

                                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-700">
                                        98%
                                    </h3>

                                    <p className="mt-3 text-sm sm:text-base text-gray-600">
                                        Customer Satisfaction
                                    </p>

                                </div>

                                <div className="rounded-3xl bg-green-50 p-4 sm:p-6 lg:p-8 text-center min-w-0">

                                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-700">
                                        24/7
                                    </h3>

                                    <p className="mt-3 text-sm sm:text-base text-gray-600">
                                        Support Coverage
                                    </p>

                                </div>

                                <div className="rounded-3xl bg-orange-50 p-4 sm:p-6 lg:p-8 text-center min-w-0">

                                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-700">
                                        100%
                                    </h3>

                                    <p className="mt-3 text-sm sm:text-base text-gray-600">
                                        Dedicated Teams
                                    </p>

                                </div>

                                <div className="rounded-3xl bg-purple-50 p-4 sm:p-6 lg:p-8 text-center min-w-0">

                                    <h3 className="break-words text-2xl sm:text-4xl lg:text-5xl font-bold text-purple-700">
                                        Global
                                    </h3>

                                    <p className="mt-3 text-sm sm:text-base text-gray-600">
                                        Service Delivery
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}