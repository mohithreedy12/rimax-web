import {
    Building2,
    Hospital,
    MonitorSmartphone,
    Pill,
    Microscope,
    FileHeart,
} from "lucide-react";

const organizations = [
    {
        icon: Hospital,
        title: "Hospitals",
        description:
            "Support patient inquiries, appointments, billing assistance, and general customer communication.",
    },
    {
        icon: Building2,
        title: "Medical Clinics",
        description:
            "Provide responsive customer service for appointments, follow-ups, and administrative assistance.",
    },
    {
        icon: MonitorSmartphone,
        title: "Telehealth Providers",
        description:
            "Assist patients through virtual care support, live chat, and digital healthcare communication.",
    },
    {
        icon: Pill,
        title: "Pharmacies",
        description:
            "Help customers with prescription inquiries, refill requests, and order-related support.",
    },
    {
        icon: Microscope,
        title: "Diagnostic Laboratories",
        description:
            "Support appointment scheduling, report inquiries, and customer communication services.",
    },
    {
        icon: FileHeart,
        title: "Healthcare Administrators",
        description:
            "Reduce administrative workload through dedicated customer support and operational assistance.",
    },
];

export default function Organizations() {
    return (
        <section className="bg-gray-50 py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-red-600">
                        Organizations We Support
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        Healthcare Organizations We Partner With
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        RiMax Technologies supports healthcare organizations of
                        every size by delivering reliable customer support,
                        administrative assistance, and scalable communication
                        solutions.
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

                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-600">

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