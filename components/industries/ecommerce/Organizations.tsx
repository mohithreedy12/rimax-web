import {
    Store,
    ShoppingBag,
    Shirt,
    Smartphone,
    Sparkles,
    Warehouse,
} from "lucide-react";

const organizations = [
    {
        icon: Store,
        title: "Online Retailers",
        description:
            "Deliver responsive customer support for online stores of all sizes, improving customer satisfaction and loyalty.",
    },
    {
        icon: ShoppingBag,
        title: "Marketplace Sellers",
        description:
            "Support Amazon, eBay, Walmart Marketplace, and other sellers with customer inquiries, returns, and order assistance.",
    },
    {
        icon: Shirt,
        title: "Fashion & Apparel",
        description:
            "Assist shoppers with sizing, order tracking, exchanges, returns, and product-related questions.",
    },
    {
        icon: Smartphone,
        title: "Electronics Stores",
        description:
            "Provide customer assistance for product information, warranties, deliveries, and technical inquiries.",
    },
    {
        icon: Sparkles,
        title: "Beauty & Cosmetics",
        description:
            "Help customers with product recommendations, subscriptions, shipping updates, and post-purchase support.",
    },
    {
        icon: Warehouse,
        title: "Wholesale & D2C Brands",
        description:
            "Scale customer support operations for direct-to-consumer brands and wholesale businesses during business growth.",
    },
];

export default function Organizations() {
    return (
        <section className="bg-gray-50 py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-purple-600">
                        Businesses We Support
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        E-Commerce Businesses We Partner With
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        RiMax Technologies partners with online businesses
                        across multiple industries, helping them deliver
                        exceptional customer experiences before, during,
                        and after every purchase.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {organizations.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.title}
                                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >

                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">

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