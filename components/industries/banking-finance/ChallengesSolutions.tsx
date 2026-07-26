import {
    ShieldAlert,
    CreditCard,
    Landmark,
    CircleDollarSign,
    Smartphone,
    Lock,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";

const challenges = [
    {
        icon: ShieldAlert,
        title: "Fraud & Security Concerns",
    },
    {
        icon: CreditCard,
        title: "Card & Payment Issues",
    },
    {
        icon: Landmark,
        title: "Loan & Mortgage Inquiries",
    },
    {
        icon: CircleDollarSign,
        title: "Transaction Questions",
    },
    {
        icon: Smartphone,
        title: "Online Banking Assistance",
    },
    {
        icon: Lock,
        title: "Account Access Problems",
    },
];

const solutions = [
    "24/7 Customer Assistance",
    "Payment & Card Support",
    "Account Verification Guidance",
    "Loan & Banking Information",
    "Digital Banking Support",
    "Secure Customer Communication",
];

export default function ChallengesSolutions() {
    return (
        <section className="bg-gray-50 py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-blue-700">
                        Challenges We Solve
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        Supporting Financial Institutions with Confidence
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Financial organizations must provide fast, secure,
                        and accurate customer support while maintaining trust
                        and regulatory standards. RiMax Technologies helps
                        businesses improve customer satisfaction through
                        professional and reliable support services.
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
                                        className="flex items-center gap-4 rounded-xl border border-gray-100 p-4 transition hover:border-blue-200 hover:bg-blue-50"
                                    >

                                        <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
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

                    <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-slate-800 p-10 text-white shadow-xl">

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
                                        className="text-yellow-300"
                                        size={24}
                                    />

                                    <span className="text-lg">
                                        {solution}
                                    </span>

                                </div>

                            ))}

                        </div>

                        <div className="mt-10 flex items-center gap-3 rounded-2xl bg-white/10 p-5 backdrop-blur">

                            <ArrowRight className="text-yellow-300" />

                            <p className="leading-7 text-blue-100">
                                We help banks, credit unions, fintech companies,
                                and financial service providers deliver secure,
                                efficient, and customer-focused support across
                                every interaction.
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}