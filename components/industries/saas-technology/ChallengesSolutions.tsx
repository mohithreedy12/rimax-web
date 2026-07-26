import {
    ServerCrash,
    ShieldAlert,
    Wrench,
    CreditCard,
    Rocket,
    Code2,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";

const challenges = [
    {
        icon: ServerCrash,
        title: "Platform Downtime",
    },
    {
        icon: ShieldAlert,
        title: "Login & Account Access Issues",
    },
    {
        icon: Wrench,
        title: "Technical Troubleshooting",
    },
    {
        icon: CreditCard,
        title: "Subscription & Billing Questions",
    },
    {
        icon: Rocket,
        title: "Product Onboarding",
    },
    {
        icon: Code2,
        title: "Feature & API Support",
    },
];

const solutions = [
    "24/7 Technical Customer Support",
    "Account & Subscription Assistance",
    "Product Onboarding Guidance",
    "API & Feature Support",
    "Technical Troubleshooting",
    "Multi-Channel Customer Communication",
];

export default function ChallengesSolutions() {
    return (
        <section className="bg-gray-50 py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-violet-700">
                        Challenges We Solve
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        Supporting Modern Software Companies
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        SaaS businesses must deliver exceptional customer
                        experiences while managing rapid product updates,
                        technical issues, and growing user expectations.
                        RiMax Technologies helps software companies provide
                        fast, knowledgeable, and reliable customer support
                        that drives customer success.
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
                                        className="flex items-center gap-4 rounded-xl border border-gray-100 p-4 transition hover:border-violet-200 hover:bg-violet-50"
                                    >

                                        <div className="rounded-xl bg-violet-100 p-3 text-violet-700">
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

                    <div className="rounded-3xl bg-gradient-to-br from-violet-700 to-indigo-800 p-10 text-white shadow-xl">

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
                                        className="text-violet-200"
                                        size={24}
                                    />

                                    <span className="text-lg">
                                        {solution}
                                    </span>

                                </div>

                            ))}

                        </div>

                        <div className="mt-10 flex items-center gap-3 rounded-2xl bg-white/10 p-5 backdrop-blur">

                            <ArrowRight className="text-violet-200" />

                            <p className="leading-7 text-violet-50">
                                We help SaaS companies, software providers,
                                cloud platforms, AI businesses, and technology
                                organizations deliver responsive, scalable,
                                and customer-focused support across every stage
                                of the customer journey.
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}