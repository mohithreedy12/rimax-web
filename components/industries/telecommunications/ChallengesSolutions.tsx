import {
    WifiOff,
    Smartphone,
    Globe,
    CreditCard,
    Wrench,
    RadioTower,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";

const challenges = [
    {
        icon: WifiOff,
        title: "Network Outages",
    },
    {
        icon: Smartphone,
        title: "Mobile Service Issues",
    },
    {
        icon: Globe,
        title: "Internet Connectivity Problems",
    },
    {
        icon: CreditCard,
        title: "Billing & Payment Questions",
    },
    {
        icon: Wrench,
        title: "Technical Troubleshooting",
    },
    {
        icon: RadioTower,
        title: "Service Activation & Upgrades",
    },
];

const solutions = [
    "24/7 Customer Assistance",
    "Technical Support & Troubleshooting",
    "Billing & Account Support",
    "Service Activation Guidance",
    "Mobile & Broadband Assistance",
    "Multi-Channel Customer Communication",
];

export default function ChallengesSolutions() {
    return (
        <section className="bg-gray-50 py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-cyan-700">
                        Challenges We Solve
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        Delivering Better Telecom Customer Experiences
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Telecommunications providers must deliver fast,
                        dependable support while managing growing customer
                        expectations. RiMax Technologies helps businesses
                        resolve issues efficiently, improve customer
                        satisfaction, and strengthen long-term customer
                        relationships.
                    </p>

                </div>

                <div className="grid gap-12 lg:grid-cols-2">

                    {/* Challenges */}

                    <div className="rounded-3xl bg-white p-10 shadow-lg">

                        <h3 className="mb-8 text-3xl font-bold text-gray-900">
                            Common Industry Challenges
                        </h3>

                        <div className="space-y-5">

                            {challenges.map((item) => {

                                const Icon = item.icon;

                                return (

                                    <div
                                        key={item.title}
                                        className="flex items-center gap-4 rounded-xl border border-gray-100 p-4 transition hover:border-cyan-200 hover:bg-cyan-50"
                                    >

                                        <div className="rounded-xl bg-cyan-100 p-3 text-cyan-700">
                                            <Icon size={24} />
                                        </div>

                                        <span className="text-lg font-medium text-gray-700">
                                            {item.title}
                                        </span>

                                    </div>

                                );

                            })}

                        </div>

                    </div>

                    {/* Solutions */}

                    <div className="rounded-3xl bg-gradient-to-br from-cyan-600 to-blue-700 p-10 text-white shadow-xl">

                        <h3 className="mb-8 text-3xl font-bold">
                            How RiMax Helps
                        </h3>

                        <div className="space-y-6">

                            {solutions.map((solution) => (

                                <div
                                    key={solution}
                                    className="flex items-center gap-4"
                                >

                                    <CheckCircle2
                                        className="text-cyan-200"
                                        size={24}
                                    />

                                    <span className="text-lg">
                                        {solution}
                                    </span>

                                </div>

                            ))}

                        </div>

                        <div className="mt-10 flex items-center gap-3 rounded-2xl bg-white/10 p-5 backdrop-blur">

                            <ArrowRight className="text-cyan-200" />

                            <p className="leading-7 text-cyan-50">
                                We help telecommunications providers,
                                internet service companies, broadband
                                operators, and mobile networks deliver
                                responsive, reliable, and customer-focused
                                support across every interaction.
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}