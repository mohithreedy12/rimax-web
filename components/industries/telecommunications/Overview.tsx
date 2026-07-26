import {
    Wifi,
    Headphones,
    Smartphone,
    TrendingUp,
} from "lucide-react";

const highlights = [
    {
        icon: Wifi,
        title: "Reliable Connectivity",
        description:
            "Help customers stay connected with responsive support for internet, broadband, wireless, and communication services.",
    },
    {
        icon: Headphones,
        title: "Exceptional Customer Service",
        description:
            "Provide fast, professional assistance for service inquiries, technical issues, billing questions, and account management.",
    },
    {
        icon: Smartphone,
        title: "Mobile & Broadband Support",
        description:
            "Support mobile subscribers and broadband customers with plan information, activation, troubleshooting, and service requests.",
    },
    {
        icon: TrendingUp,
        title: "Scalable Operations",
        description:
            "Scale your customer support teams to manage increasing customer demand while maintaining excellent service quality.",
    },
];

export default function Overview() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto max-w-3xl text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-cyan-700">
                        Telecommunications Support
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        Keeping Customers Connected with Outstanding Support
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Telecommunications companies serve millions of customers
                        who expect fast resolutions and uninterrupted service.
                        RiMax Technologies provides dedicated customer support
                        solutions that improve customer satisfaction, streamline
                        operations, and help telecom businesses deliver reliable
                        service experiences across every interaction.
                    </p>

                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {highlights.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.title}
                                className="rounded-3xl border border-gray-200 bg-gray-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:bg-white hover:shadow-xl"
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