import Link from "next/link";
import {
    Headphones,
    Clock3,
    ShieldCheck,
    Globe2,
    Users,
    Phone,
    ArrowRight,
    CheckCircle2,
    MessageCircle,
    Zap,
} from "lucide-react";

const features = [
    {
        icon: Headphones,
        title: "Omnichannel Customer Support",
        description:
            "Deliver consistent customer service across chat, email, phone, and ticketing platforms.",
    },
    {
        icon: Clock3,
        title: "24/7 Availability",
        description:
            "Support your customers anytime with dedicated teams working around the clock.",
    },
    {
        icon: Users,
        title: "Dedicated Support Specialists",
        description:
            "Experienced customer support representatives become an extension of your business.",
    },
    {
        icon: Globe2,
        title: "Worldwide Coverage",
        description:
            "Serve customers across different countries and time zones without interruption.",
    },
    {
        icon: Phone,
        title: "Issue Resolution",
        description:
            "Resolve customer concerns quickly while maintaining a professional brand image.",
    },
    {
        icon: ShieldCheck,
        title: "Reliable & Secure",
        description:
            "Every customer interaction is handled with professionalism, confidentiality, and care.",
    },
];

const benefits = [
    "Exceptional customer satisfaction",
    "Faster issue resolution",
    "Professional brand representation",
    "24/7 customer assistance",
    "Scalable support operations",
    "Reduced operational costs",
    "Improved customer loyalty",
    "Consistent service quality",
];

export default function CustomerSupportPage() {
    return (
        <main className="bg-white">

            {/* HERO */}

            <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100">

                <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-orange-400/20 blur-3xl"></div>

                <div className="absolute right-0 top-24 h-[450px] w-[450px] rounded-full bg-yellow-400/20 blur-3xl"></div>

                <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl"></div>

                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right,#f97316 1px,transparent 1px),linear-gradient(to bottom,#f97316 1px,transparent 1px)",
                        backgroundSize: "45px 45px",
                    }}
                />

                <div className="relative mx-auto max-w-7xl px-6 py-24">

                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        {/* LEFT */}

                        <div>

              <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-orange-700">
                RiMax Technologies
              </span>

                            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl">
                                Professional
                                <span className="block bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500 bg-clip-text text-transparent">
                  Customer Support
                </span>
                            </h1>

                            <p className="mt-8 text-xl leading-9 text-gray-600">

                                Deliver exceptional customer experiences through
                                responsive, friendly, and professional customer support.

                                Our specialists assist customers across multiple
                                communication channels, resolve issues efficiently,
                                and ensure every interaction strengthens trust
                                in your brand.

                            </p>

                            <div className="mt-10 flex flex-wrap gap-5">

                                <Link
                                    href="/#contact"
                                    className="rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
                                >
                                    Get Free Consultation
                                </Link>

                                <Link
                                    href="/#services"
                                    className="rounded-xl border border-gray-300 bg-white/80 px-8 py-4 font-semibold text-gray-700 backdrop-blur transition hover:bg-white"
                                >
                                    Explore Services
                                </Link>

                            </div>

                            <div className="mt-14 grid grid-cols-3 gap-6">

                                <div>
                                    <h3 className="text-3xl font-bold text-orange-700">
                                        24/7
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        Customer Care
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-orange-700">
                                        Multi
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        Channels
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-orange-700">
                                        Global
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        Coverage
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="relative">

                            <div className="absolute -right-4 -top-4 rounded-2xl bg-white px-6 py-4 shadow-xl">
                                <p className="font-semibold text-orange-600">
                                    ★ Customer First
                                </p>
                            </div>

                            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-6 py-4 shadow-xl">
                                <p className="font-semibold text-amber-700">
                                    💬 Always Available
                                </p>
                            </div>

                            <div className="rounded-[32px] border border-white/50 bg-white/70 p-10 shadow-2xl backdrop-blur-xl">

                                <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-100 to-yellow-100">

                                    <MessageCircle
                                        size={48}
                                        className="text-orange-700"
                                    />

                                </div>

                                <h2 className="text-4xl font-bold text-gray-900">
                                    Customer Success Starts Here
                                </h2>

                                <p className="mt-6 text-lg leading-8 text-gray-600">

                                    We help businesses build long-term customer
                                    relationships through responsive support,
                                    clear communication,
                                    and quick issue resolution.

                                </p>

                                <div className="mt-10 space-y-4">

                                    <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4">
                                        <CheckCircle2 className="text-orange-700" />
                                        <span>Friendly Customer Assistance</span>
                                    </div>

                                    <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4">
                                        <CheckCircle2 className="text-orange-700" />
                                        <span>Fast Problem Resolution</span>
                                    </div>

                                    <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4">
                                        <CheckCircle2 className="text-orange-700" />
                                        <span>Professional Brand Experience</span>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* ABOUT */}

            <section className="py-20">

                <div className="mx-auto max-w-6xl px-6 text-center">

          <span className="text-sm font-semibold uppercase tracking-widest text-orange-700">
            WHAT WE OFFER
          </span>

                    <h2 className="mt-4 text-5xl font-bold text-gray-900">
                        Professional Customer Support Services
                    </h2>

                    <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-600">

                        RiMax Technologies provides reliable customer support
                        services that help businesses deliver outstanding
                        customer experiences. From answering product questions
                        and resolving issues to guiding customers throughout
                        their journey, our dedicated teams ensure every
                        interaction reflects your company's commitment
                        to excellence.

                    </p>

                </div>

            </section>

            {/* FEATURES */}

            <section className="bg-gray-50 py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-widest text-orange-700">
              FEATURES
            </span>

                        <h2 className="mt-4 text-5xl font-bold text-gray-900">
                            Complete Customer Support Solutions
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                            RiMax Technologies provides professional customer support
                            solutions that help businesses deliver exceptional service,
                            strengthen customer relationships, and improve overall
                            customer satisfaction.
                        </p>

                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (

                                <div
                                    key={feature.title}
                                    className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl"
                                >

                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 transition group-hover:bg-orange-600">

                                        <Icon
                                            size={32}
                                            className="text-orange-700 transition group-hover:text-white"
                                        />

                                    </div>

                                    <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                        {feature.title}
                                    </h3>

                                    <p className="leading-8 text-gray-600">
                                        {feature.description}
                                    </p>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </section>

            {/* BENEFITS */}

            <section className="py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid items-center gap-20 lg:grid-cols-2">

                        <div>

              <span className="text-sm font-semibold uppercase tracking-widest text-orange-700">
                WHY RIMAX
              </span>

                            <h2 className="mt-4 text-5xl font-bold text-gray-900">
                                Why Businesses Trust RiMax
                            </h2>

                            <p className="mt-8 text-lg leading-8 text-gray-600">

                                Great customer support creates loyal customers.
                                Our experienced support professionals provide
                                responsive, friendly, and reliable assistance
                                that helps businesses increase customer
                                satisfaction while building long-term trust.

                            </p>

                            <div className="mt-10 grid gap-5">

                                {benefits.map((benefit) => (

                                    <div
                                        key={benefit}
                                        className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                                    >

                                        <CheckCircle2
                                            className="text-orange-700"
                                            size={24}
                                        />

                                        <span className="text-lg font-medium text-gray-800">
                      {benefit}
                    </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                        <div>

                            <div className="rounded-[32px] bg-gradient-to-br from-orange-600 to-amber-600 p-10 text-white shadow-2xl">

                                <Zap
                                    size={60}
                                    className="mb-8"
                                />

                                <h3 className="text-4xl font-bold">
                                    Happy Customers.
                                    Stronger Business.
                                </h3>

                                <p className="mt-6 text-lg leading-8 text-orange-100">

                                    Every customer interaction is an opportunity
                                    to strengthen your reputation.
                                    Our dedicated customer support teams provide
                                    fast, professional assistance that improves
                                    customer experiences and helps businesses grow
                                    with confidence.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-amber-600 py-24 text-white">

                <div className="absolute inset-0 opacity-10">

                    <div
                        className="h-full w-full"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)",
                            backgroundSize: "45px 45px",
                        }}
                    />

                </div>

                <div className="relative mx-auto max-w-5xl px-6 text-center">

                    <h2 className="text-5xl font-bold">
                        Ready to Elevate Your Customer Experience?
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-orange-100">

                        Partner with RiMax Technologies to deliver responsive,
                        professional customer support that keeps customers
                        satisfied, strengthens your brand reputation,
                        and allows your business to scale with confidence.

                    </p>

                    <Link
                        href="/#contact"
                        className="mt-12 inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 text-lg font-bold text-orange-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >

                        Contact RiMax Today

                        <ArrowRight size={22} />

                    </Link>

                </div>

            </section>

        </main>

    );

}