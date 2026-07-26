import Link from "next/link";
import {
    MessageSquare,
    Clock3,
    ShieldCheck,
    Globe2,
    Users,
    TrendingUp,
    ArrowRight,
    CheckCircle2,
    Headset,
    Zap,
} from "lucide-react";

const features = [
    {
        icon: Clock3,
        title: "24/7 Live Chat Coverage",
        description:
            "Provide round-the-clock assistance so your customers always receive timely responses.",
    },
    {
        icon: MessageSquare,
        title: "Instant Customer Responses",
        description:
            "Engage customers immediately through real-time conversations and reduce waiting time.",
    },
    {
        icon: Users,
        title: "Dedicated Support Agents",
        description:
            "Our trained professionals work as an extension of your business and represent your brand.",
    },
    {
        icon: Globe2,
        title: "Global Customer Support",
        description:
            "Serve customers across multiple countries and time zones with consistent quality.",
    },
    {
        icon: TrendingUp,
        title: "Lead Qualification",
        description:
            "Identify potential customers, answer pre-sales questions, and improve conversions.",
    },
    {
        icon: ShieldCheck,
        title: "Secure & Professional",
        description:
            "Every customer interaction is handled with professionalism and confidentiality.",
    },
];

const benefits = [
    "Improve customer satisfaction",
    "Reduce response time",
    "Increase customer retention",
    "Professional brand representation",
    "Scalable support teams",
    "Cost-effective customer service",
    "Reliable communication",
    "Business growth support",
];

export default function LiveChatSupportPage() {
    return (
        <main className="bg-white">

            {/* HERO */}

            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

                {/* Background Effects */}

                <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>

                <div className="absolute right-0 top-24 h-[450px] w-[450px] rounded-full bg-cyan-400/20 blur-3xl"></div>

                <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl"></div>

                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right,#2563eb 1px,transparent 1px),linear-gradient(to bottom,#2563eb 1px,transparent 1px)",
                        backgroundSize: "45px 45px",
                    }}
                />

                <div className="relative mx-auto max-w-7xl px-6 py-24">

                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        {/* LEFT */}

                        <div>

              <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
                RiMax Technologies
              </span>

                            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl">
                                Professional
                                <span className="block bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  Live Chat Support
                </span>
                            </h1>

                            <p className="mt-8 text-xl leading-9 text-gray-600">

                                Deliver exceptional customer experiences through
                                professional live chat support.

                                Our trained specialists answer customer questions,
                                resolve issues instantly,
                                qualify leads,
                                and represent your business with professionalism,
                                helping you improve customer satisfaction and build long-term relationships.

                            </p>

                            <div className="mt-10 flex flex-wrap gap-5">

                                <Link
                                    href="/#contact"
                                    className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
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
                                    <h3 className="text-3xl font-bold text-blue-700">24/7</h3>
                                    <p className="mt-2 text-gray-600">
                                        Live Support
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-blue-700">
                                        Multi
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        Time Zones
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-blue-700">
                                        Fast
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        Response
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="relative">

                            <div className="absolute -right-4 -top-4 rounded-2xl bg-white px-6 py-4 shadow-xl">
                                <p className="font-semibold text-green-600">
                                    ✓ 24/7 Available
                                </p>
                            </div>

                            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-6 py-4 shadow-xl">
                                <p className="font-semibold text-blue-700">
                                    ⚡ Instant Response
                                </p>
                            </div>

                            <div className="rounded-[32px] border border-white/50 bg-white/70 p-10 shadow-2xl backdrop-blur-xl">

                                <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-100 to-cyan-100">

                                    <Headset
                                        size={48}
                                        className="text-blue-700"
                                    />

                                </div>

                                <h2 className="text-4xl font-bold text-gray-900">
                                    Your Customers Deserve Better Support
                                </h2>

                                <p className="mt-6 text-lg leading-8 text-gray-600">

                                    Our experienced live chat specialists provide
                                    immediate assistance,
                                    resolve customer concerns,
                                    answer product questions,
                                    and deliver friendly support that improves
                                    customer satisfaction and trust.

                                </p>

                                <div className="mt-10 space-y-4">

                                    <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4">
                                        <CheckCircle2 className="text-blue-700" />
                                        <span>Professional Customer Communication</span>
                                    </div>

                                    <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4">
                                        <CheckCircle2 className="text-blue-700" />
                                        <span>Quick Issue Resolution</span>
                                    </div>

                                    <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4">
                                        <CheckCircle2 className="text-blue-700" />
                                        <span>Real-Time Customer Assistance</span>
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

          <span className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            WHAT WE OFFER
          </span>

                    <h2 className="mt-4 text-5xl font-bold text-gray-900">
                        Professional Live Chat Support
                    </h2>

                    <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-600">

                        Live chat has become one of the fastest and most preferred ways
                        for customers to connect with businesses. At RiMax Technologies,
                        we provide highly trained support professionals who engage visitors,
                        answer questions, resolve customer concerns, guide purchasing
                        decisions, and create positive customer experiences that strengthen
                        your brand reputation.

                    </p>

                </div>

            </section>

            {/* FEATURES */}

            <section className="bg-gray-50 py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-widest text-blue-700">
              FEATURES
            </span>

                        <h2 className="mt-4 text-5xl font-bold text-gray-900">
                            Everything You Need
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                            RiMax Technologies provides comprehensive live chat support
                            solutions designed to improve customer engagement,
                            increase satisfaction,
                            and help businesses deliver exceptional customer service.
                        </p>

                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (

                                <div
                                    key={feature.title}
                                    className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl"
                                >

                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">

                                        <Icon
                                            size={32}
                                            className="text-blue-700 transition group-hover:text-white"
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

              <span className="text-sm font-semibold uppercase tracking-widest text-blue-700">
                WHY RIMAX
              </span>

                            <h2 className="mt-4 text-5xl font-bold text-gray-900">
                                Why Businesses Choose RiMax
                            </h2>

                            <p className="mt-8 text-lg leading-8 text-gray-600">

                                We don't simply answer customer questions.

                                We become an extension of your business,
                                representing your brand with professionalism,
                                empathy,
                                and consistent communication that strengthens
                                customer trust.

                            </p>

                            <div className="mt-10 grid gap-5">

                                {benefits.map((benefit) => (

                                    <div
                                        key={benefit}
                                        className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                                    >

                                        <CheckCircle2
                                            className="text-blue-700"
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

                            <div className="rounded-[32px] bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-white shadow-2xl">

                                <Zap
                                    size={60}
                                    className="mb-8"
                                />

                                <h3 className="text-4xl font-bold">
                                    Faster Responses.
                                    Better Experiences.
                                </h3>

                                <p className="mt-6 text-lg leading-8 text-blue-100">

                                    Customers expect quick,
                                    friendly,
                                    and professional support.

                                    Our dedicated live chat specialists help
                                    your business provide instant assistance,
                                    reduce waiting times,
                                    and create memorable customer experiences
                                    that encourage loyalty and long-term growth.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-indigo-700 py-24 text-white">

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
                        Ready to Transform Your Customer Support?
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-blue-100">

                        Let RiMax Technologies provide professional,
                        reliable,
                        and customer-focused live chat support that
                        helps your business improve customer satisfaction
                        while allowing your team to focus on growth.

                    </p>

                    <Link
                        href="/#contact"
                        className="mt-12 inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 text-lg font-bold text-blue-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >

                        Contact RiMax Today

                        <ArrowRight size={22} />

                    </Link>

                </div>

            </section>

        </main>

    );

}