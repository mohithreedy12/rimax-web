import {
    PackageSearch,
    RotateCcw,
    ShoppingCart,
    Truck,
    MessageCircle,
    BadgeDollarSign,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";

const items = [
    {
        challenge: "Customers constantly asking where their order is",
        solution: "Real-time order tracking and shipping assistance",
        icon: PackageSearch,
    },
    {
        challenge: "High volume of returns and refund requests",
        solution: "Dedicated returns and refund support",
        icon: RotateCcw,
    },
    {
        challenge: "Shopping cart abandonment before checkout",
        solution: "Live chat engagement to assist buyers",
        icon: ShoppingCart,
    },
    {
        challenge: "Shipping delays and delivery concerns",
        solution: "Proactive customer communication",
        icon: Truck,
    },
    {
        challenge: "Large number of product inquiries",
        solution: "Live chat and email product support",
        icon: MessageCircle,
    },
    {
        challenge: "Payment and billing questions",
        solution: "Dedicated customer billing assistance",
        icon: BadgeDollarSign,
    },
];

export default function ChallengesSolutions() {
    return (
        <section className="bg-gray-50 py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-purple-600">
                        E-Commerce Challenges
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        Challenges We Help Online Businesses Solve
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Every online store receives hundreds of customer
                        inquiries every day. RiMax Technologies helps
                        e-commerce businesses deliver faster responses,
                        happier customers, and seamless shopping
                        experiences.
                    </p>

                </div>

                <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">

                    <div className="grid bg-gradient-to-r from-purple-600 to-orange-500 text-white md:grid-cols-2">

                        <div className="p-8">
                            <h3 className="text-3xl font-bold">
                                Customer Challenges
                            </h3>
                        </div>

                        <div className="border-t border-white/20 p-8 md:border-l md:border-t-0">
                            <h3 className="text-3xl font-bold">
                                RiMax Solutions
                            </h3>
                        </div>

                    </div>

                    {items.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={index}
                                className="grid border-t border-gray-100 transition hover:bg-purple-50 md:grid-cols-2"
                            >

                                <div className="flex items-center gap-5 p-8">

                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-purple-600">

                                        <Icon size={26} />

                                    </div>

                                    <p className="text-lg font-medium text-gray-800">
                                        {item.challenge}
                                    </p>

                                </div>

                                <div className="flex items-center gap-5 border-t border-gray-100 p-8 md:border-l md:border-t-0">

                                    <ArrowRight
                                        size={22}
                                        className="text-orange-500"
                                    />

                                    <div className="flex items-center gap-3">

                                        <CheckCircle2
                                            size={22}
                                            className="text-green-600"
                                        />

                                        <p className="text-lg font-semibold text-gray-900">
                                            {item.solution}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        );

                    })}

                </div>

            </div>
        </section>
    );
}