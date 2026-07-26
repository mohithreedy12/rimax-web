import {
    Truck,
    Package,
    Bus,
    Warehouse,
    Mail,
    Globe,
} from "lucide-react";

const organizations = [
    {
        icon: Truck,
        title: "Logistics Companies",
        description:
            "Support logistics providers with shipment inquiries, customer communication, order updates, and operational assistance that improves customer satisfaction.",
    },
    {
        icon: Package,
        title: "Freight & Cargo Providers",
        description:
            "Help freight companies manage customer requests related to cargo movement, shipment status, documentation, and delivery coordination.",
    },
    {
        icon: Bus,
        title: "Transportation Companies",
        description:
            "Provide responsive customer support for transportation businesses by assisting with delivery schedules, service inquiries, and operational communication.",
    },
    {
        icon: Warehouse,
        title: "Supply Chain & Distribution Centers",
        description:
            "Improve communication between warehouses, fulfillment centers, and customers by providing timely updates and efficient support services.",
    },
    {
        icon: Mail,
        title: "Courier & Delivery Services",
        description:
            "Deliver professional customer support for courier companies, helping customers with tracking, delivery updates, returns, and shipping questions.",
    },
    {
        icon: Globe,
        title: "Third-Party Logistics (3PL)",
        description:
            "Scale customer support for 3PL providers with dedicated teams that handle shipment inquiries, client communication, and multi-channel customer service.",
    },
];

export default function Organizations() {
    return (
        <section className="bg-gray-50 py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-emerald-700">
                        Organizations We Support
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        Logistics Organizations We Partner With
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        RiMax Technologies partners with logistics providers,
                        freight operators, transportation companies, courier
                        services, warehouses, and supply chain organizations to
                        deliver dependable customer support that improves
                        communication, enhances customer experiences, and
                        supports business growth.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {organizations.map((organization) => {

                        const Icon = organization.icon;

                        return (

                            <div
                                key={organization.title}
                                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl"
                            >

                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">

                                    <Icon size={30} />

                                </div>

                                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                    {organization.title}
                                </h3>

                                <p className="leading-8 text-gray-600">
                                    {organization.description}
                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>
        </section>
    );
}