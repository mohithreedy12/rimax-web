import Link from "next/link";
import {
    Mail,
    Clock3,
    ShieldCheck,
    Globe2,
    Users,
    TrendingUp,
    ArrowRight,
    CheckCircle2,
    Inbox,
    Zap,
} from "lucide-react";

const features = [
    {
        icon: Mail,
        title: "Professional Email Handling",
        description:
            "Our specialists professionally manage incoming customer emails while maintaining your brand voice.",
    },
    {
        icon: Clock3,
        title: "Fast Response Times",
        description:
            "Deliver timely responses that improve customer satisfaction and build trust.",
    },
    {
        icon: Users,
        title: "Dedicated Email Agents",
        description:
            "Experienced professionals work as an extension of your business and represent your company professionally.",
    },
    {
        icon: Globe2,
        title: "Global Customer Coverage",
        description:
            "Support customers across multiple countries and time zones with reliable service.",
    },
    {
        icon: TrendingUp,
        title: "Ticket Management",
        description:
            "Efficiently organize, prioritize, and resolve customer requests with structured workflows.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Communication",
        description:
            "Customer information is handled with confidentiality and professional security practices.",
    },
];

const benefits = [
    "Professional email communication",
    "Reduced response times",
    "Improved customer satisfaction",
    "Consistent brand voice",
    "Scalable support teams",
    "Organized ticket management",
    "Reliable business communication",
    "Higher customer retention",
];

export default function EmailSupportPage() {
    return (
        <main className="bg-white">

            {/* HERO */}

            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-emerald-50 to-cyan-100">

                <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl"></div>

                <div className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-3xl"></div>

                <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"></div>

                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right,#10b981 1px,transparent 1px),linear-gradient(to bottom,#10b981 1px,transparent 1px)",
                        backgroundSize: "45px 45px",
                    }}
                />

                <div className="relative mx-auto max-w-7xl px-6 py-24">

                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        {/* LEFT */}

                        <div>

              <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-emerald-700">
                RiMax Technologies
              </span>

                            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl">
                                Professional
                                <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent">
                  Email Support
                </span>
                            </h1>

                            <p className="mt-8 text-xl leading-9 text-gray-600">

                                Deliver exceptional customer experiences through
                                reliable, professional email support.

                                Our experienced email specialists respond quickly,
                                resolve customer issues efficiently,
                                manage support tickets,
                                and ensure every interaction reflects your brand's professionalism.

                            </p>

                            <div className="mt-10 flex flex-wrap gap-5">

                                <Link
                                    href="/#contact"
                                    className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
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
                                    <h3 className="text-3xl font-bold text-emerald-700">
                                        24/7
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        Email Coverage
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-emerald-700">
                                        Fast
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        Responses
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-emerald-700">
                                        Global
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        Support
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="relative">

                            <div className="absolute -right-4 -top-4 rounded-2xl bg-white px-6 py-4 shadow-xl">
                                <p className="font-semibold text-emerald-600">
                                    ✓ Fast Replies
                                </p>
                            </div>

                            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-6 py-4 shadow-xl">
                                <p className="font-semibold text-teal-700">
                                    📧 Inbox Managed
                                </p>
                            </div>

                            <div className="rounded-[32px] border border-white/50 bg-white/70 p-10 shadow-2xl backdrop-blur-xl">

                                <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-100 to-cyan-100">

                                    <Inbox
                                        size={48}
                                        className="text-emerald-700"
                                    />

                                </div>

                                <h2 className="text-4xl font-bold text-gray-900">
                                    Every Email Matters
                                </h2>

                                <p className="mt-6 text-lg leading-8 text-gray-600">

                                    Our email support specialists ensure every customer
                                    receives accurate,
                                    timely,
                                    and professional responses while maintaining
                                    your company's communication standards.

                                </p>

                                <div className="mt-10 space-y-4">

                                    <div className="flex items-center gap-3 rounded-xl bg-emerald-50 p-4">
                                        <CheckCircle2 className="text-emerald-700" />
                                        <span>Professional Email Communication</span>
                                    </div>

                                    <div className="flex items-center gap-3 rounded-xl bg-emerald-50 p-4">
                                        <CheckCircle2 className="text-emerald-700" />
                                        <span>Organized Ticket Handling</span>
                                    </div>

                                    <div className="flex items-center gap-3 rounded-xl bg-emerald-50 p-4">
                                        <CheckCircle2 className="text-emerald-700" />
                                        <span>Quick Customer Resolution</span>
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

          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            WHAT WE OFFER
          </span>

                    <h2 className="mt-4 text-5xl font-bold text-gray-900">
                        Professional Email Support Services
                    </h2>

                    <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-600">

                        Email remains one of the most important communication channels
                        between businesses and customers. RiMax Technologies delivers
                        professional email support that helps companies manage customer
                        inquiries, technical questions, complaints, billing requests,
                        and service-related conversations with speed, accuracy,
                        and professionalism.

                    </p>

                </div>

            </section>

            {/* FEATURES */}

            <section className="bg-gray-50 py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              FEATURES
            </span>

                        <h2 className="mt-4 text-5xl font-bold text-gray-900">
                            Complete Email Support Solutions
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                            RiMax Technologies delivers reliable email support services
                            that help businesses respond faster, organize customer
                            requests, and maintain excellent communication with every
                            customer.
                        </p>

                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (

                                <div
                                    key={feature.title}
                                    className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl"
                                >

                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 transition group-hover:bg-emerald-600">

                                        <Icon
                                            size={32}
                                            className="text-emerald-700 transition group-hover:text-white"
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

              <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                WHY RIMAX
              </span>

                            <h2 className="mt-4 text-5xl font-bold text-gray-900">
                                Why Choose Our Email Support?
                            </h2>

                            <p className="mt-8 text-lg leading-8 text-gray-600">

                                Email communication often creates the first impression of
                                your company. Our trained support professionals respond
                                professionally, resolve customer concerns quickly, and
                                ensure every email reflects your brand's commitment to
                                excellent customer service.

                            </p>

                            <div className="mt-10 grid gap-5">

                                {benefits.map((benefit) => (

                                    <div
                                        key={benefit}
                                        className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                                    >

                                        <CheckCircle2
                                            className="text-emerald-700"
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

                            <div className="rounded-[32px] bg-gradient-to-br from-emerald-600 to-teal-700 p-10 text-white shadow-2xl">

                                <Zap
                                    size={60}
                                    className="mb-8"
                                />

                                <h3 className="text-4xl font-bold">
                                    Professional.
                                    Organized.
                                    Reliable.
                                </h3>

                                <p className="mt-6 text-lg leading-8 text-emerald-100">

                                    Our email specialists ensure customer inquiries never go
                                    unanswered. We organize incoming requests, prioritize
                                    urgent issues, maintain professional communication,
                                    and provide timely resolutions that improve customer
                                    satisfaction and business efficiency.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-700 py-24 text-white">

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
                        Ready to Improve Your Email Support?
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-emerald-100">

                        Let RiMax Technologies manage your customer email support
                        with professionalism, speed, and consistency, ensuring every
                        customer receives the attention they deserve while your team
                        focuses on growing the business.

                    </p>

                    <Link
                        href="/#contact"
                        className="mt-12 inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 text-lg font-bold text-emerald-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >

                        Contact RiMax Today

                        <ArrowRight size={22} />

                    </Link>

                </div>

            </section>

        </main>

    );

}