import {
    HeartHandshake,
    Stethoscope,
    TrendingUp,
    ShieldCheck,
} from "lucide-react";

const benefits = [
    {
        icon: HeartHandshake,
        title: "Improve Patient Satisfaction",
        description:
            "Deliver faster, more responsive customer support that enhances every patient interaction and builds long-term trust in your healthcare organization.",
    },
    {
        icon: Stethoscope,
        title: "Reduce Administrative Workload",
        description:
            "Free doctors, nurses, and administrative staff from routine customer inquiries so they can focus on delivering exceptional patient care.",
    },
    {
        icon: TrendingUp,
        title: "Scale Support as You Grow",
        description:
            "Whether opening new locations or handling seasonal demand, RiMax scales your support operations without disrupting patient services.",
    },
    {
        icon: ShieldCheck,
        title: "Consistent Service Quality",
        description:
            "Provide every patient with professional, accurate, and timely assistance across phone, email, live chat, and other communication channels.",
    },
];

export default function Benefits() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-red-600">
                        Business Benefits
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        Why Healthcare Organizations Choose RiMax
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        RiMax Technologies helps healthcare providers improve
                        patient experiences while reducing operational workload.
                        Our dedicated support teams become a seamless extension
                        of your organization, delivering reliable customer
                        service that supports long-term growth.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2">

                    {benefits.map((benefit) => {

                        const Icon = benefit.icon;

                        return (

                            <div
                                key={benefit.title}
                                className="group rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >

                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-600 transition duration-300 group-hover:bg-red-600 group-hover:text-white">

                                    <Icon size={30} />

                                </div>

                                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                    {benefit.title}
                                </h3>

                                <p className="leading-8 text-gray-600">
                                    {benefit.description}
                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>
        </section>
    );
}