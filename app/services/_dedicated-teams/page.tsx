import Link from "next/link";
import {
    Users,
    UserCheck,
    Clock3,
    Globe2,
    ShieldCheck,
    Briefcase,
    ArrowRight,
    CheckCircle2,
    Building2,
    Zap,
} from "lucide-react";

const features = [
    {
        icon: Users,
        title: "Dedicated Support Teams",
        description:
            "Build a dedicated team that works exclusively for your business and becomes an extension of your organization.",
    },
    {
        icon: UserCheck,
        title: "Skilled Professionals",
        description:
            "Experienced customer support specialists trained to follow your company processes and brand guidelines.",
    },
    {
        icon: Clock3,
        title: "Flexible Working Hours",
        description:
            "Choose business hours, overnight coverage, or 24/7 operations based on your business needs.",
    },
    {
        icon: Globe2,
        title: "Global Team Coverage",
        description:
            "Serve customers across different regions with teams operating in multiple time zones.",
    },
    {
        icon: Briefcase,
        title: "Scalable Workforce",
        description:
            "Quickly increase or reduce team size as your business grows without recruitment challenges.",
    },
    {
        icon: ShieldCheck,
        title: "Reliable & Secure",
        description:
            "Dedicated professionals follow strict security, confidentiality, and quality standards.",
    },
];

const benefits = [
    "Dedicated professionals",
    "Lower operational costs",
    "Flexible team scaling",
    "Consistent service quality",
    "Business-focused training",
    "Long-term customer relationships",
    "Reliable daily operations",
    "Faster business growth",
];

export default function DedicatedTeamsPage() {
    return (
        <main className="bg-white">

            {/* HERO */}

            <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-100">

                <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

                <div className="absolute right-0 top-24 h-[450px] w-[450px] rounded-full bg-sky-500/20 blur-3xl"></div>

                <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>

                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right,#0891b2 1px,transparent 1px),linear-gradient(to bottom,#0891b2 1px,transparent 1px)",
                        backgroundSize: "45px 45px",
                    }}
                />

                <div className="relative mx-auto max-w-7xl px-6 py-24">

                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        {/* LEFT */}

                        <div>

              <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-700">
                RiMax Technologies
              </span>

                            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl">
                                Dedicated
                                <span className="block bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 bg-clip-text text-transparent">
                  Support Teams
                </span>
                            </h1>

                            <p className="mt-8 text-xl leading-9 text-gray-600">

                                Build a dedicated customer support team that works
                                exclusively for your business. Our professionals
                                integrate with your company, understand your
                                processes, and provide consistent, high-quality
                                support that feels like an in-house team.

                            </p>

                            <div className="mt-10 flex flex-wrap gap-5">

                                <Link
                                    href="/#contact"
                                    className="rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
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
                                    <h3 className="text-3xl font-bold text-cyan-700">
                                        Dedicated
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        Team
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-cyan-700">
                                        Flexible
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        Scaling
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-cyan-700">
                                        24/7
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
                                <p className="font-semibold text-cyan-700">
                                    👥 Your Own Team
                                </p>
                            </div>

                            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-6 py-4 shadow-xl">
                                <p className="font-semibold text-sky-700">
                                    🚀 Scalable Workforce
                                </p>
                            </div>

                            <div className="rounded-[32px] border border-white/50 bg-white/70 p-10 shadow-2xl backdrop-blur-xl">

                                <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-100 to-blue-100">

                                    <Building2
                                        size={48}
                                        className="text-cyan-700"
                                    />

                                </div>

                                <h2 className="text-4xl font-bold text-gray-900">
                                    Your Team. Our Expertise.
                                </h2>

                                <p className="mt-6 text-lg leading-8 text-gray-600">

                                    We recruit, train, and manage professionals
                                    who work exclusively for your business,
                                    ensuring consistent customer experiences,
                                    seamless collaboration,
                                    and long-term operational success.

                                </p>

                                <div className="mt-10 space-y-4">

                                    <div className="flex items-center gap-3 rounded-xl bg-cyan-50 p-4">
                                        <CheckCircle2 className="text-cyan-700" />
                                        <span>Dedicated Staff</span>
                                    </div>

                                    <div className="flex items-center gap-3 rounded-xl bg-cyan-50 p-4">
                                        <CheckCircle2 className="text-cyan-700" />
                                        <span>Business Process Training</span>
                                    </div>

                                    <div className="flex items-center gap-3 rounded-xl bg-cyan-50 p-4">
                                        <CheckCircle2 className="text-cyan-700" />
                                        <span>Long-Term Team Stability</span>
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

          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-700">
            WHAT WE OFFER
          </span>

                    <h2 className="mt-4 text-5xl font-bold text-gray-900">
                        Dedicated Teams Built For Your Business
                    </h2>

                    <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-600">

                        RiMax Technologies provides dedicated support teams
                        that integrate with your business, follow your
                        workflows, and represent your brand professionally.
                        Whether you need customer support, technical
                        assistance, back-office operations, or specialized
                        teams, we provide skilled professionals focused
                        entirely on your business goals.

                    </p>

                </div>

            </section>

            {/* FEATURES */}

            <section className="bg-gray-50 py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-widest text-cyan-700">
              FEATURES
            </span>

                        <h2 className="mt-4 text-5xl font-bold text-gray-900">
                            Dedicated Teams That Grow With Your Business
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                            RiMax Technologies builds dedicated support teams that
                            operate as part of your company, providing consistent,
                            scalable, and high-quality service while adapting to
                            your business growth.
                        </p>

                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (

                                <div
                                    key={feature.title}
                                    className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
                                >

                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 transition group-hover:bg-cyan-600">

                                        <Icon
                                            size={32}
                                            className="text-cyan-700 transition group-hover:text-white"
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

              <span className="text-sm font-semibold uppercase tracking-widest text-cyan-700">
                WHY RIMAX
              </span>

                            <h2 className="mt-4 text-5xl font-bold text-gray-900">
                                Build a Team Without the Hiring Burden
                            </h2>

                            <p className="mt-8 text-lg leading-8 text-gray-600">

                                Hiring, training, and managing a support team takes
                                time and resources. RiMax Technologies provides
                                dedicated professionals who work exclusively for your
                                business, allowing you to scale faster while
                                maintaining exceptional service quality.

                            </p>

                            <div className="mt-10 grid gap-5">

                                {benefits.map((benefit) => (

                                    <div
                                        key={benefit}
                                        className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                                    >

                                        <CheckCircle2
                                            className="text-cyan-700"
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

                            <div className="rounded-[32px] bg-gradient-to-br from-cyan-600 to-sky-700 p-10 text-white shadow-2xl">

                                <Zap
                                    size={60}
                                    className="mb-8"
                                />

                                <h3 className="text-4xl font-bold">
                                    Scale Faster.
                                    Operate Smarter.
                                </h3>

                                <p className="mt-6 text-lg leading-8 text-cyan-100">

                                    Whether you need one specialist or an entire
                                    department, our dedicated teams help your business
                                    expand quickly while maintaining consistent quality,
                                    operational efficiency, and excellent customer
                                    experiences.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="relative overflow-hidden bg-gradient-to-r from-cyan-600 to-sky-700 py-24 text-white">

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
                        Ready to Build Your Dedicated Team?
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-cyan-100">

                        Let RiMax Technologies provide a dedicated team that
                        works exclusively for your business, helping you reduce
                        operational costs, improve service quality, and scale
                        with confidence.

                    </p>

                    <Link
                        href="/#contact"
                        className="mt-12 inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 text-lg font-bold text-cyan-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >

                        Contact RiMax Today

                        <ArrowRight size={22} />

                    </Link>

                </div>

            </section>

        </main>

    );

}