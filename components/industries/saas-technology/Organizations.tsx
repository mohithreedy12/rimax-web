import {
    Laptop,
    Cloud,
    Bot,
    Code2,
    Shield,
    Rocket,
} from "lucide-react";

const organizations = [
    {
        icon: Laptop,
        title: "SaaS Companies",
        description:
            "Support software-as-a-service providers with customer onboarding, subscription assistance, product guidance, and technical support.",
    },
    {
        icon: Cloud,
        title: "Cloud Service Providers",
        description:
            "Deliver responsive customer support for cloud platforms, infrastructure services, hosting solutions, and enterprise cloud applications.",
    },
    {
        icon: Bot,
        title: "AI & Machine Learning Companies",
        description:
            "Help AI businesses provide exceptional customer experiences through technical assistance, onboarding, and customer success support.",
    },
    {
        icon: Code2,
        title: "Software Development Firms",
        description:
            "Support software companies with product inquiries, implementation guidance, feature assistance, and technical troubleshooting.",
    },
    {
        icon: Shield,
        title: "Cybersecurity Companies",
        description:
            "Provide professional customer support for cybersecurity platforms, identity management solutions, and security service providers.",
    },
    {
        icon: Rocket,
        title: "Technology Startups",
        description:
            "Scale customer support as your startup grows, ensuring every customer receives timely, knowledgeable, and reliable assistance.",
    },
];

export default function Organizations() {
    return (
        <section className="bg-gray-50 py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-violet-700">
                        Organizations We Support
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        Technology Companies We Partner With
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        RiMax Technologies partners with software companies,
                        SaaS providers, AI businesses, cloud platforms, and
                        technology organizations to deliver scalable,
                        customer-focused support that enhances user
                        satisfaction and drives long-term success.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {organizations.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.title}
                                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-xl"
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