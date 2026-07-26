import {
    RadioTower,
    Globe,
    Smartphone,
    Cable,
    Cloud,
    Satellite,
} from "lucide-react";

const organizations = [
    {
        icon: RadioTower,
        title: "Telecommunications Providers",
        description:
            "Support telecom companies with customer inquiries, service requests, account management, and technical assistance across communication services.",
    },
    {
        icon: Globe,
        title: "Internet Service Providers",
        description:
            "Provide responsive customer support for broadband, fiber, and internet service providers, helping customers stay connected.",
    },
    {
        icon: Smartphone,
        title: "Mobile Network Operators",
        description:
            "Assist mobile subscribers with plan changes, billing inquiries, SIM activation, device support, and service-related questions.",
    },
    {
        icon: Cable,
        title: "Cable & Broadband Providers",
        description:
            "Deliver customer support for television, broadband, and bundled communication services while improving customer satisfaction.",
    },
    {
        icon: Cloud,
        title: "Communication Service Providers",
        description:
            "Support cloud communication platforms, VoIP providers, and unified communication businesses with reliable customer assistance.",
    },
    {
        icon: Satellite,
        title: "Satellite & Network Companies",
        description:
            "Provide dedicated support for satellite communication providers and network infrastructure companies serving residential and enterprise customers.",
    },
];

export default function Organizations() {
    return (
        <section className="bg-gray-50 py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-cyan-700">
                        Organizations We Support
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        Telecommunications Businesses We Partner With
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        RiMax Technologies partners with telecommunications
                        companies, internet providers, and communication
                        businesses to deliver responsive, reliable, and
                        customer-focused support that enhances every customer
                        interaction.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {organizations.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.title}
                                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl"
                            >

                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">

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