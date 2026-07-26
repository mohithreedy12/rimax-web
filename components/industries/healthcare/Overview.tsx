import {
    HeartPulse,
    Users,
    ShieldCheck,
    Clock3,
} from "lucide-react";

const highlights = [
    {
        icon: HeartPulse,
        title: "Patient-First Support",
        description:
            "Deliver compassionate and professional assistance that improves every patient interaction across multiple communication channels.",
    },
    {
        icon: Users,
        title: "Dedicated Support Teams",
        description:
            "Extend your healthcare operations with trained customer support specialists who work as an extension of your organization.",
    },
    {
        icon: ShieldCheck,
        title: "Reliable Operations",
        description:
            "Structured support processes help healthcare providers maintain consistent service quality while reducing administrative workload.",
    },
    {
        icon: Clock3,
        title: "Scalable Availability",
        description:
            "Increase or decrease support capacity based on seasonal demand, business growth, or operational requirements.",
    },
];

export default function Overview() {
    return (
        <section className="relative overflow-hidden bg-white py-24">

            <div className="absolute inset-0">
                <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-red-50 blur-3xl" />
                <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto max-w-4xl text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-red-600">
                        Healthcare Industry
                    </p>

                    <h2 className="mb-8 text-5xl font-bold text-gray-900">
                        Supporting Better Patient Experiences Through Exceptional Customer Service
                    </h2>

                    <p className="text-lg leading-9 text-gray-600">

                        Modern healthcare extends far beyond medical treatment.
                        Patients expect timely communication, clear guidance,
                        responsive support, and a seamless experience throughout
                        their healthcare journey. Every appointment, inquiry,
                        follow-up, and support interaction contributes to patient
                        satisfaction and operational efficiency.

                    </p>

                    <p className="mt-8 text-lg leading-9 text-gray-600">

                        RiMax Technologies partners with hospitals, clinics,
                        telehealth providers, diagnostic laboratories,
                        pharmacies, and healthcare organizations by managing
                        non-clinical customer interactions. Our dedicated
                        healthcare support teams enable medical professionals to
                        spend more time focusing on patient care while we deliver
                        responsive, compassionate, and professional customer
                        support.

                    </p>

                </div>

                {/* Highlights */}

                <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {highlights.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.title}
                                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >

                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-600 transition duration-300 group-hover:bg-red-600 group-hover:text-white">

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