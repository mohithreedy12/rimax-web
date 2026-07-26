import {
    ShoppingBag,
    Package,
    Headset,
    TrendingUp,
} from "lucide-react";

const highlights = [
    {
        icon: ShoppingBag,
        title: "Exceptional Shopping Experience",
        description:
            "Customers expect fast responses, accurate information, and seamless support throughout their online shopping journey.",
    },
    {
        icon: Package,
        title: "Order & Delivery Support",
        description:
            "Provide customers with real-time assistance for order tracking, shipping updates, returns, and delivery-related questions.",
    },
    {
        icon: Headset,
        title: "Dedicated Customer Support",
        description:
            "Extend your e-commerce operations with professional support teams handling live chat, email, and customer inquiries.",
    },
    {
        icon: TrendingUp,
        title: "Business Growth",
        description:
            "Improve customer satisfaction, increase repeat purchases, strengthen brand loyalty, and support long-term business growth.",
    },
];

export default function Overview() {
    return (
        <section className="relative overflow-hidden bg-white py-24">

            <div className="absolute inset-0">
                <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-purple-50 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-50 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6">

                <div className="mx-auto max-w-4xl text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-purple-600">
                        E-Commerce Industry
                    </p>

                    <h2 className="mb-8 text-5xl font-bold text-gray-900">
                        Deliver Shopping Experiences Customers Remember
                    </h2>

                    <p className="text-lg leading-9 text-gray-600">
                        Today's online shoppers expect instant responses,
                        transparent communication, and reliable assistance
                        before, during, and after every purchase. From product
                        inquiries and order tracking to returns and customer
                        support, every interaction influences purchasing
                        decisions and long-term customer loyalty.
                    </p>

                    <p className="mt-8 text-lg leading-9 text-gray-600">
                        RiMax Technologies helps e-commerce businesses deliver
                        exceptional customer experiences by providing dedicated
                        support teams that manage customer inquiries, shipping
                        updates, returns, refunds, and multi-channel
                        communication while allowing your internal teams to
                        focus on growing the business.
                    </p>

                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {highlights.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.title}
                                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >

                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 transition duration-300 group-hover:bg-purple-600 group-hover:text-white">

                                    <Icon size={30} />

                                </div>

                                <h3 className="mb-4 text-xl font-bold text-gray-900">
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