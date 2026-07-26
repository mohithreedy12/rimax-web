import {
    Truck,
    PackageX,
    MapPinned,
    Clock3,
    GitBranch,
    MessageSquare,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";

const challenges = [
    {
        icon: Truck,
        title: "Shipment Delays",
        description:
            "Customers expect timely updates when deliveries are delayed due to weather, transportation issues, or operational challenges.",
    },
    {
        icon: PackageX,
        title: "Lost or Damaged Shipments",
        description:
            "Managing customer concerns regarding lost packages, damaged goods, and replacement requests requires fast and professional communication.",
    },
    {
        icon: MapPinned,
        title: "Tracking & Delivery Questions",
        description:
            "High volumes of shipment tracking inquiries can overwhelm internal teams without dedicated customer support resources.",
    },
    {
        icon: Clock3,
        title: "High Inquiry Volumes",
        description:
            "Seasonal demand and large shipping volumes increase customer requests for delivery updates and order status information.",
    },
    {
        icon: GitBranch,
        title: "Supply Chain Coordination",
        description:
            "Keeping customers informed across warehouses, carriers, and fulfillment partners requires efficient communication processes.",
    },
    {
        icon: MessageSquare,
        title: "Multi-Channel Support",
        description:
            "Customers expect consistent assistance across live chat, email, help desks, and digital communication channels.",
    },
];

const solutions = [
    "24/7 Shipment Tracking Assistance",
    "Delivery Status & Order Updates",
    "Returns & Claims Support",
    "Live Chat & Email Customer Service",
    "Order Management Assistance",
    "Scalable Multi-Channel Support Teams",
];

export default function ChallengesSolutions() {
    return (
        <section className="bg-gradient-to-br from-emerald-700 to-teal-800 py-24 text-white">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-emerald-200">
                        Challenges We Solve
                    </p>

                    <h2 className="text-5xl font-bold">
                        Supporting Logistics Companies Every Step of the Way
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-emerald-100">
                        RiMax Technologies helps logistics providers improve
                        customer satisfaction by delivering responsive support
                        for shipment inquiries, delivery updates, order
                        management, and transportation-related customer
                        communication.
                    </p>

                </div>

                <div className="grid gap-12 lg:grid-cols-2">

                    <div className="space-y-6">

                        {challenges.map((item) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={item.title}
                                    className="rounded-3xl bg-white/10 p-6 backdrop-blur"
                                >

                                    <div className="flex items-start gap-5">

                                        <div className="rounded-2xl bg-white/10 p-4">

                                            <Icon
                                                size={28}
                                                className="text-emerald-200"
                                            />

                                        </div>

                                        <div>

                                            <h3 className="text-2xl font-bold">
                                                {item.title}
                                            </h3>

                                            <p className="mt-3 leading-8 text-emerald-100">
                                                {item.description}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                    <div className="rounded-3xl bg-white p-10 text-gray-900 shadow-2xl">

                        <p className="font-semibold uppercase tracking-[0.3em] text-emerald-700">
                            Our Solutions
                        </p>

                        <h3 className="mt-4 text-4xl font-bold">
                            Reliable Customer Support for Logistics Operations
                        </h3>

                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Our experienced customer support teams help logistics
                            organizations provide accurate information, resolve
                            customer concerns quickly, and improve overall
                            service quality while allowing your operations team
                            to stay focused on logistics execution.
                        </p>

                        <div className="mt-10 space-y-5">

                            {solutions.map((item) => (

                                <div
                                    key={item}
                                    className="flex items-center gap-4"
                                >

                                    <CheckCircle2
                                        className="text-emerald-600"
                                        size={22}
                                    />

                                    <span className="text-lg font-medium">
                                        {item}
                                    </span>

                                </div>

                            ))}

                        </div>

                        <div className="mt-10 inline-flex items-center font-semibold text-emerald-700">

                            Scalable Customer Support Solutions

                            <ArrowRight className="ml-2" size={20} />

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}