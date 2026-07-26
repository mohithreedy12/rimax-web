import {
    Landmark,
    Building2,
    CreditCard,
    TrendingUp,
    ShieldCheck,
    Wallet,
} from "lucide-react";

const organizations = [
    {
        icon: Landmark,
        title: "Banks",
        description:
            "Support retail, commercial, and private banks with secure customer service, account assistance, and banking inquiries.",
    },
    {
        icon: Building2,
        title: "Credit Unions",
        description:
            "Provide personalized member support for account management, loans, digital banking, and financial services.",
    },
    {
        icon: CreditCard,
        title: "FinTech Companies",
        description:
            "Deliver responsive customer support for digital payment platforms, online banking solutions, and financial technology services.",
    },
    {
        icon: TrendingUp,
        title: "Investment Firms",
        description:
            "Assist clients with investment account inquiries, portfolio support, onboarding, and financial service communications.",
    },
    {
        icon: ShieldCheck,
        title: "Insurance Providers",
        description:
            "Handle policy inquiries, claims assistance, customer communication, and general support for insurance organizations.",
    },
    {
        icon: Wallet,
        title: "Payment Service Providers",
        description:
            "Support customers with payment processing questions, transaction updates, billing assistance, and account-related requests.",
    },
];

export default function Organizations() {
    return (
        <section className="bg-gray-50 py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-blue-700">
                        Organizations We Support
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        Financial Organizations We Partner With
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        RiMax Technologies partners with financial institutions
                        of all sizes to provide secure, responsive, and
                        customer-focused support that strengthens trust and
                        enhances the overall customer experience.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {organizations.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.title}
                                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                            >

                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">

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