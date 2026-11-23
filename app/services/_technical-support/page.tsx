import Link from "next/link";
import {
    Wrench,
    MonitorCog,
    Clock3,
    ShieldCheck,
    Globe2,
    Users,
    Cpu,
    ArrowRight,
    CheckCircle2,
    Zap,
} from "lucide-react";

const features = [
    {
        icon: MonitorCog,
        title: "Technical Troubleshooting",
        description:
            "Quickly diagnose and resolve software, application, and technical issues for your customers.",
    },
    {
        icon: Clock3,
        title: "24/7 Technical Assistance",
        description:
            "Provide continuous technical support whenever customers need expert help.",
    },
    {
        icon: Users,
        title: "Experienced Engineers",
        description:
            "Our skilled technical specialists become an extension of your internal support team.",
    },
    {
        icon: Globe2,
        title: "Global Technical Support",
        description:
            "Support customers across multiple locations and time zones with reliable assistance.",
    },
    {
        icon: Cpu,
        title: "System Monitoring",
        description:
            "Identify issues quickly and minimize downtime with proactive technical support.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Support",
        description:
            "Every technical interaction follows secure processes and industry best practices.",
    },
];

const benefits = [
    "Reduced system downtime",
    "Faster issue resolution",
    "Improved customer confidence",
    "Professional technical assistance",
    "24/7 expert availability",
    "Scalable technical teams",
    "Reliable incident management",
    "Better business continuity",
];

export default function TechnicalSupportPage() {
    return (
        <main className="bg-white">

            {/* HERO */}

            <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-100">

                <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>

                <div className="absolute right-0 top-24 h-[450px] w-[450px] rounded-full bg-purple-500/20 blur-3xl"></div>

                <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl"></div>

                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right,#6366f1 1px,transparent 1px),linear-gradient(to bottom,#6366f1 1px,transparent 1px)",
                        backgroundSize: "45px 45px",
                    }}
                />

                <div className="relative mx-auto max-w-7xl px-6 py-24">

                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        {/* LEFT */}

                        <div>

              <span className="rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-indigo-700">
                RiMax Technologies
              </span>

                            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl">
                                Professional
                                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500 bg-clip-text text-transparent">
                  Technical Support
                </span>
                            </h1>

                            <p className="mt-8 text-xl leading-9 text-gray-600">

                                Keep your business running smoothly with
                                professional technical support services.

                                Our experienced specialists troubleshoot
                                software issues, assist customers,
                                resolve technical incidents,
                                and ensure systems remain reliable,
                                secure, and operational.

                            </p>

                            <div className="mt-10 flex flex-wrap gap-5">

                                <Link
                                    href="/#contact"
                                    className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
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
                                    <h3 className="text-3xl font-bold text-indigo-700">
                                        24/7
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        Technical Help
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-indigo-700">
                                        Expert
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        Engineers
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-indigo-700">
                                        Secure
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        Solutions
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="relative">

                            <div className="absolute -right-4 -top-4 rounded-2xl bg-white px-6 py-4 shadow-xl">
                                <p className="font-semibold text-indigo-600">
                                    ⚡ Rapid Resolution
                                </p>
                            </div>

                            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-6 py-4 shadow-xl">
                                <p className="font-semibold text-purple-700">
                                    🛠 Expert Support
                                </p>
                            </div>

                            <div className="rounded-[32px] border border-white/50 bg-white/70 p-10 shadow-2xl backdrop-blur-xl">

                                <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-100 to-violet-100">

                                    <Wrench
                                        size={48}
                                        className="text-indigo-700"
                                    />

                                </div>

                                <h2 className="text-4xl font-bold text-gray-900">
                                    Solving Technical Challenges
                                </h2>

                                <p className="mt-6 text-lg leading-8 text-gray-600">

                                    Our technical experts diagnose issues,
                                    resolve incidents,
                                    support software platforms,
                                    and ensure your customers receive fast,
                                    reliable technical assistance whenever they need it.

                                </p>

                                <div className="mt-10 space-y-4">

                                    <div className="flex items-center gap-3 rounded-xl bg-indigo-50 p-4">
                                        <CheckCircle2 className="text-indigo-700" />
                                        <span>Professional Troubleshooting</span>
                                    </div>

                                    <div className="flex items-center gap-3 rounded-xl bg-indigo-50 p-4">
                                        <CheckCircle2 className="text-indigo-700" />
                                        <span>Incident Resolution</span>
                                    </div>

                                    <div className="flex items-center gap-3 rounded-xl bg-indigo-50 p-4">
                                        <CheckCircle2 className="text-indigo-700" />
                                        <span>Reliable Technical Assistance</span>
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

          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
            WHAT WE OFFER
          </span>

                    <h2 className="mt-4 text-5xl font-bold text-gray-900">
                        Professional Technical Support Services
                    </h2>

                    <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-600">

                        RiMax Technologies delivers dependable technical support
                        services for businesses that need expert assistance with
                        software, applications, platforms, troubleshooting,
                        incident management, and customer technical issues.
                        Our specialists work as an extension of your team to
                        keep operations running smoothly while providing an
                        outstanding support experience.

                    </p>

                </div>

            </section>

            {/* FEATURES */}

            <section className="bg-gray-50 py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
              FEATURES
            </span>

                        <h2 className="mt-4 text-5xl font-bold text-gray-900">
                            Complete Technical Support Solutions
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                            RiMax Technologies provides dependable technical support
                            services that help businesses resolve incidents quickly,
                            reduce downtime, and keep customers productive with
                            expert technical assistance.
                        </p>

                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (

                                <div
                                    key={feature.title}
                                    className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-300 hover:shadow-2xl"
                                >

                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 transition group-hover:bg-indigo-600">

                                        <Icon
                                            size={32}
                                            className="text-indigo-700 transition group-hover:text-white"
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

              <span className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
                WHY RIMAX
              </span>

                            <h2 className="mt-4 text-5xl font-bold text-gray-900">
                                Why Businesses Trust Our Technical Experts
                            </h2>

                            <p className="mt-8 text-lg leading-8 text-gray-600">

                                Technical problems can disrupt operations and affect
                                customer satisfaction. Our experienced support engineers
                                provide fast, reliable troubleshooting, proactive
                                monitoring, and professional assistance that minimizes
                                downtime and keeps your business moving.

                            </p>

                            <div className="mt-10 grid gap-5">

                                {benefits.map((benefit) => (

                                    <div
                                        key={benefit}
                                        className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                                    >

                                        <CheckCircle2
                                            className="text-indigo-700"
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

                            <div className="rounded-[32px] bg-gradient-to-br from-indigo-600 to-purple-700 p-10 text-white shadow-2xl">

                                <Zap
                                    size={60}
                                    className="mb-8"
                                />

                                <h3 className="text-4xl font-bold">
                                    Faster Resolution.
                                    Less Downtime.
                                </h3>

                                <p className="mt-6 text-lg leading-8 text-indigo-100">

                                    Our technical specialists identify issues quickly,
                                    resolve incidents efficiently,
                                    and provide dependable support that keeps your
                                    systems running smoothly while improving customer
                                    confidence and operational performance.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 py-24 text-white">

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
                        Need Reliable Technical Support?
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-indigo-100">

                        Partner with RiMax Technologies for professional technical
                        support that keeps your systems reliable, resolves issues
                        quickly, and delivers exceptional service to your customers.

                    </p>

                    <Link
                        href="/#contact"
                        className="mt-12 inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 text-lg font-bold text-indigo-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >

                        Contact RiMax Today

                        <ArrowRight size={22} />

                    </Link>

                </div>

            </section>

        </main>

    );

}