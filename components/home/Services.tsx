import Link from "next/link";

import {
    MessageSquare,
    Mail,
    Headphones,
    BriefcaseBusiness,
    Camera,
    Megaphone,
    ArrowUpRight,
} from "lucide-react";

/* ==================================
   SERVICES DATA
================================== */

const services = [
    {
        icon: MessageSquare,
        title: "Live Chat Support",
        description:
            "Engage website visitors, answer customer questions, and provide timely assistance through professional live chat support.",
        color: "bg-blue-50 text-blue-700",
        link: "/services/live-chat-support",
    },
    {
        icon: Mail,
        title: "Email Support",
        description:
            "Manage customer emails, respond to enquiries, handle follow-ups, and maintain organised communication with your customers.",
        color: "bg-green-50 text-green-700",
        link: "/services/email-support",
    },
    {
        icon: Headphones,
        title: "Customer Support",
        description:
            "Support customers with product enquiries, order updates, returns, refunds, and general assistance across agreed communication channels.",
        color: "bg-orange-50 text-orange-700",
        link: "/services/customer-support",
    },
    {
        icon: BriefcaseBusiness,
        title: "Business Operations Support",
        description:
            "Simplify daily business operations through order coordination, administrative assistance, workflow management, and operational support.",
        color: "bg-purple-50 text-purple-700",
        link: "/services/business-operations",
    },
    {
        icon: Camera,
        title: "Social Media Management",
        description:
            "Strengthen your brand presence through content planning, social media posting, audience engagement, and consistent brand communication.",
        color: "bg-cyan-50 text-cyan-700",
        link: "/services/social-media-management",
    },
    {
        icon: Megaphone,
        title: "Digital Marketing Support",
        description:
            "Support business growth through digital campaigns, advertising creatives, promotional content, and marketing coordination.",
        color: "bg-pink-50 text-pink-700",
        link: "/services/digital-marketing",
    },
];

/* ==================================
   SERVICES COMPONENT
================================== */

export default function Services() {
    return (
        <section
            id="services"
            className="scroll-mt-24 bg-white pt-12 pb-20"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* SECTION HEADING */}

                <div className="mx-auto mb-12 max-w-3xl text-center">

                    <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-blue-700">
                        Our Services
                    </p>

                    <h2 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
                        Solutions Designed for{" "}
                        <span className="text-blue-700">
                            Your Business Growth
                        </span>
                    </h2>

                    <p className="text-lg leading-8 text-gray-600">
                        From customer support and daily business operations
                        to social media and digital marketing, RiMax
                        Technologies provides flexible solutions that
                        help businesses improve customer experiences,
                        simplify operations, and focus on growth.
                    </p>

                </div>

                {/* SERVICES GRID */}

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {services.map((service) => {

                        const Icon = service.icon;

                        return (
                            <Link
                                key={service.title}
                                href={service.link}
                                className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-xl"
                            >

                                {/* SERVICE ICON */}

                                <div
                                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${service.color}`}
                                >
                                    <Icon size={28} />
                                </div>

                                {/* SERVICE TITLE */}

                                <h3 className="mb-4 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
                                    {service.title}
                                </h3>

                                {/* SERVICE DESCRIPTION */}

                                <p className="mb-6 flex-grow text-sm leading-7 text-gray-600 sm:text-base">
                                    {service.description}
                                </p>

                                {/* LEARN MORE */}

                                <div className="mt-auto flex items-center gap-2 font-semibold text-blue-700">

                                    <span>
                                        Learn More
                                    </span>

                                    <ArrowUpRight
                                        size={18}
                                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />

                                </div>

                            </Link>
                        );

                    })}

                </div>

            </div>
        </section>
    );
}