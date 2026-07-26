import Link from "next/link";
import {
    MessageSquare,
    Mail,
    Headphones,
    Monitor,
    Users,
    Bot,
} from "lucide-react";

const services = [
    {
        icon: MessageSquare,
        title: "Live Chat Support",
        description:
            "Real-time customer engagement across websites and applications.",
        color: "bg-blue-50 text-blue-700",
        link: "/services/live-chat-support",
    },
    {
        icon: Mail,
        title: "Email Support",
        description:
            "Professional email handling with fast response times.",
        color: "bg-green-50 text-green-700",
        link: "/services/email-support",
    },
    {
        icon: Headphones,
        title: "Customer Support",
        description:
            "Friendly multi-channel customer assistance available 24/7.",
        color: "bg-orange-50 text-orange-700",
        link: "/services/customer-support",
    },
    {
        icon: Monitor,
        title: "Technical Support",
        description:
            "Troubleshooting software and technical issues efficiently.",
        color: "bg-purple-50 text-purple-700",
        link: "/services/technical-support",
    },
    {
        icon: Users,
        title: "Dedicated Teams",
        description:
            "Build an extended support team tailored to your business.",
        color: "bg-cyan-50 text-cyan-700",
        link: "/services/dedicated-teams",
    },
    {
        icon: Bot,
        title: "AI & Automation",
        description:
            "Coming soon — AI-powered customer support automation.",
        color: "bg-pink-50 text-pink-700",
        link: "/services/ai-automation",
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="scroll-mt-24 bg-white pt-8 pb-16"
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <p className="mb-4 font-semibold uppercase tracking-widest text-blue-700">
                        Our Services
                    </p>

                    <h2 className="mb-6 text-5xl font-bold text-gray-900">
                        Professional Business Solutions
                    </h2>

                    <p className="text-lg leading-8 text-gray-600">
                        RiMax Technologies delivers reliable customer support,
                        technical assistance, and scalable business solutions
                        for companies around the world.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {services.map((service) => {
                        const Icon = service.icon;

                        const Card = (
                            <div
                                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
                            >
                                <div
                                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${service.color}`}
                                >
                                    <Icon size={32} />
                                </div>

                                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                    {service.title}
                                </h3>

                                <p className="leading-7 text-gray-600">
                                    {service.description}
                                </p>

                                {service.link !== "#" && (
                                    <p className="mt-6 font-semibold text-blue-700 transition group-hover:translate-x-1">
                                        Learn More →
                                    </p>
                                )}
                            </div>
                        );

                        return service.link === "#" ? (
                            <div key={service.title}>
                                {Card}
                            </div>
                        ) : (
                            <Link
                                key={service.title}
                                href={service.link}
                            >
                                {Card}
                            </Link>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}