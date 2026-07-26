import {
    Truck,
    Package,
    Globe,
    MessageSquare,
} from "lucide-react";

const services = [
    {
        icon: Truck,
        title: "Logistics & Transportation Support",
        description:
            "Deliver responsive customer service for transportation providers, freight companies, and logistics organizations with timely shipment assistance and customer communication.",
    },
    {
        icon: Package,
        title: "Order & Shipment Assistance",
        description:
            "Help customers with order inquiries, shipment tracking, delivery updates, return requests, and logistics-related questions across multiple support channels.",
    },
    {
        icon: Globe,
        title: "Supply Chain Operations",
        description:
            "Support supply chain businesses by improving communication between customers, warehouses, transportation teams, and fulfillment operations.",
    },
    {
        icon: MessageSquare,
        title: "Multi-Channel Customer Support",
        description:
            "Provide professional customer assistance through live chat, email, help desk systems, and digital communication platforms to ensure seamless customer experiences.",
    },
];

export default function Overview() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-emerald-700">
                        Logistics Customer Support
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        Reliable Customer Support for Logistics & Supply Chain Businesses
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        RiMax Technologies helps logistics companies improve
                        customer satisfaction by providing dependable support
                        for shipment tracking, delivery inquiries, order
                        management, transportation services, and supply chain
                        communication. Our scalable support teams ensure every
                        customer receives timely, accurate, and professional
                        assistance.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2">

                    {services.map((service) => {

                        const Icon = service.icon;

                        return (

                            <div
                                key={service.title}
                                className="rounded-3xl border border-gray-200 bg-gray-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:bg-white hover:shadow-xl"
                            >

                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">

                                    <Icon size={30} />

                                </div>

                                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                    {service.title}
                                </h3>

                                <p className="leading-8 text-gray-600">
                                    {service.description}
                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>
        </section>
    );
}