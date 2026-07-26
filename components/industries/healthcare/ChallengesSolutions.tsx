import {
    CalendarDays,
    CircleHelp,
    CreditCard,
    FileText,
    Clock3,
    MessageCircle,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";

const items = [
    {
        challenge: "Missed appointments and scheduling requests",
        solution: "Appointment scheduling and reminder support",
        icon: CalendarDays,
    },
    {
        challenge: "High volume of patient inquiries",
        solution: "Live chat and email customer support",
        icon: MessageCircle,
    },
    {
        challenge: "Billing and payment questions",
        solution: "Dedicated billing assistance teams",
        icon: CreditCard,
    },
    {
        challenge: "Insurance verification and claim guidance",
        solution: "Patient support for insurance-related inquiries",
        icon: CircleHelp,
    },
    {
        challenge: "Medical record and portal assistance",
        solution: "Customer guidance for patient portals and requests",
        icon: FileText,
    },
    {
        challenge: "Long response times during peak hours",
        solution: "24/7 scalable support operations",
        icon: Clock3,
    },
];

export default function ChallengesSolutions() {
    return (
        <section className="bg-gray-50 py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-red-600">
                        Healthcare Challenges
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        Challenges We Help Healthcare Organizations Solve
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Every healthcare organization faces operational
                        challenges that affect patient satisfaction and staff
                        productivity. RiMax Technologies provides dedicated
                        customer support teams that solve these everyday
                        challenges efficiently.
                    </p>

                </div>

                <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">

                    <div className="grid bg-gradient-to-r from-red-600 to-blue-600 text-white md:grid-cols-2">

                        <div className="p-8">
                            <h3 className="text-3xl font-bold">
                                Healthcare Challenges
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
                                className="grid border-t border-gray-100 transition hover:bg-red-50/40 md:grid-cols-2"
                            >

                                <div className="flex items-center gap-5 p-8">

                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 text-red-600">

                                        <Icon size={26} />

                                    </div>

                                    <p className="text-lg font-medium text-gray-800">
                                        {item.challenge}
                                    </p>

                                </div>

                                <div className="flex items-center gap-5 border-t border-gray-100 p-8 md:border-l md:border-t-0">

                                    <ArrowRight
                                        size={22}
                                        className="text-blue-600"
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