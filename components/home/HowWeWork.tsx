import {
    Search,
    Users,
    Headphones,
    Rocket,
    TrendingUp,
} from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Free Consultation",
        description:
            "We understand your business goals, support needs, and customer expectations.",
    },
    {
        icon: Users,
        title: "Team Setup",
        description:
            "We build a dedicated support team trained specifically for your business.",
    },
    {
        icon: Headphones,
        title: "Operations Launch",
        description:
            "Our agents begin handling live chat, email, and customer support operations.",
    },
    {
        icon: Rocket,
        title: "Scale Faster",
        description:
            "Expand your support team quickly as your business grows.",
    },
    {
        icon: TrendingUp,
        title: "Continuous Improvement",
        description:
            "We monitor performance and continuously optimize quality and customer satisfaction.",
    },
];

export default function HowWeWork() {
    return (
        <section
            id="process"
            className="scroll-mt-12 bg-white pt-20 pb-10"
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-20 text-center">
                    <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-blue-700">
                        Our Process
                    </p>

                    <h2 className="mb-6 text-5xl font-bold text-gray-900">
                        How We Work
                    </h2>

                    <p className="mx-auto max-w-3xl text-xl leading-8 text-gray-600">
                        A simple and transparent process that helps businesses
                        onboard quickly and deliver outstanding customer experiences.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-5">

                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={index}
                                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                                    <Icon
                                        size={32}
                                        className="text-blue-700"
                                    />
                                </div>

                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
                                    {index + 1}
                                </div>

                                <h3 className="mb-4 text-2xl font-bold">
                                    {step.title}
                                </h3>

                                <p className="leading-7 text-gray-600">
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}