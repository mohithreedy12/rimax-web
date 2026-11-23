import Link from "next/link";
import {
    Bot,
    BrainCircuit,
    Workflow,
    MessageSquare,
    Cpu,
    Sparkles,
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    Zap,
} from "lucide-react";

const features = [
    {
        icon: Bot,
        title: "AI Chatbots",
        description:
            "Deploy intelligent AI chatbots that provide instant responses, answer common questions, and improve customer engagement 24/7.",
    },
    {
        icon: Workflow,
        title: "Workflow Automation",
        description:
            "Automate repetitive business processes to increase efficiency, reduce manual work, and improve productivity.",
    },
    {
        icon: BrainCircuit,
        title: "AI-Powered Assistance",
        description:
            "Leverage artificial intelligence to assist customers, employees, and support teams with faster decision-making.",
    },
    {
        icon: MessageSquare,
        title: "Smart Conversations",
        description:
            "Deliver natural, human-like conversations across live chat, email, and customer support channels.",
    },
    {
        icon: Cpu,
        title: "Business Process Optimization",
        description:
            "Use AI to streamline operations, improve response times, and enhance overall customer experience.",
    },
    {
        icon: ShieldCheck,
        title: "Secure AI Solutions",
        description:
            "Enterprise-grade AI implementations designed with security, privacy, and reliability in mind.",
    },
];

const benefits = [
    "24/7 automated customer support",
    "Reduced operational costs",
    "Faster customer response times",
    "Improved employee productivity",
    "Scalable AI solutions",
    "Smarter business decisions",
    "Higher customer satisfaction",
    "Future-ready business operations",
];

export default function AIAutomationPage() {
    return (
        <main className="bg-white">

            {/* HERO */}

            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white">

                <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

                <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-violet-500/20 blur-3xl"></div>

                <div className="absolute bottom-0 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>

                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)",
                        backgroundSize: "45px 45px",
                    }}
                />

                <div className="relative mx-auto max-w-7xl px-6 py-24">

                    <div className="grid items-center gap-20 lg:grid-cols-2">

                        {/* LEFT */}

                        <div>

              <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-300">
                RiMax Technologies
              </span>

                            <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-7xl">
                                AI &
                                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Automation
                </span>
                            </h1>

                            <p className="mt-8 text-xl leading-9 text-slate-300">

                                Transform your business with intelligent AI-powered
                                automation solutions that streamline operations,
                                improve customer experiences, reduce repetitive work,
                                and help your teams focus on what matters most.

                            </p>

                            <div className="mt-10 flex flex-wrap gap-5">

                                <Link
                                    href="/#contact"
                                    className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
                                >
                                    Get Free Consultation
                                </Link>

                                <Link
                                    href="/#services"
                                    className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
                                >
                                    Explore Services
                                </Link>

                            </div>

                            <div className="mt-14 grid grid-cols-3 gap-6">

                                <div>
                                    <h3 className="text-3xl font-bold text-cyan-300">
                                        AI
                                    </h3>
                                    <p className="mt-2 text-slate-400">
                                        Powered
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-cyan-300">
                                        Smart
                                    </h3>
                                    <p className="mt-2 text-slate-400">
                                        Automation
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-cyan-300">
                                        24/7
                                    </h3>
                                    <p className="mt-2 text-slate-400">
                                        Assistance
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="relative">

                            <div className="absolute -right-4 -top-4 rounded-2xl border border-cyan-400/20 bg-slate-900/80 px-6 py-4 backdrop-blur-xl">
                                <p className="font-semibold text-cyan-300">
                                    🤖 AI Working 24/7
                                </p>
                            </div>

                            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-violet-400/20 bg-slate-900/80 px-6 py-4 backdrop-blur-xl">
                                <p className="font-semibold text-violet-300">
                                    ⚡ Intelligent Automation
                                </p>
                            </div>

                            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">

                                <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20">

                                    <Bot
                                        size={50}
                                        className="text-cyan-300"
                                    />

                                </div>

                                <h2 className="text-4xl font-bold">
                                    Intelligent Digital Workforce
                                </h2>

                                <p className="mt-6 text-lg leading-8 text-slate-300">

                                    From AI chatbots to workflow automation,
                                    RiMax helps businesses automate repetitive
                                    tasks, deliver instant customer support,
                                    and improve operational efficiency using
                                    modern artificial intelligence technologies.

                                </p>

                                <div className="mt-10 space-y-4">

                                    <div className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">
                                        <CheckCircle2 className="text-cyan-300" />
                                        <span>AI Chatbots</span>
                                    </div>

                                    <div className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">
                                        <CheckCircle2 className="text-cyan-300" />
                                        <span>Workflow Automation</span>
                                    </div>

                                    <div className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">
                                        <CheckCircle2 className="text-cyan-300" />
                                        <span>Smart Business Solutions</span>
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

          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-600">
            WHAT WE OFFER
          </span>

                    <h2 className="mt-4 text-5xl font-bold text-gray-900">
                        AI Solutions That Drive Business Growth
                    </h2>

                    <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-600">

                        RiMax Technologies helps businesses embrace the future with
                        AI-powered automation solutions. From intelligent chatbots
                        and automated workflows to AI-assisted customer support,
                        we help organizations increase productivity, reduce costs,
                        improve response times, and deliver exceptional customer
                        experiences through innovative technology.

                    </p>

                </div>

            </section>

            {/* FEATURES */}

            <section className="bg-slate-50 py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-widest text-cyan-600">
              FEATURES
            </span>

                        <h2 className="mt-4 text-5xl font-bold text-gray-900">
                            Intelligent AI Solutions For Modern Businesses
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                            RiMax Technologies combines artificial intelligence with
                            automation to help businesses improve efficiency, deliver
                            better customer experiences, and accelerate digital
                            transformation.
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

              <span className="text-sm font-semibold uppercase tracking-widest text-cyan-600">
                WHY RIMAX
              </span>

                            <h2 className="mt-4 text-5xl font-bold text-gray-900">
                                Transform Your Business With AI
                            </h2>

                            <p className="mt-8 text-lg leading-8 text-gray-600">

                                Artificial intelligence is changing how businesses
                                operate. RiMax Technologies helps organizations adopt
                                AI solutions that automate repetitive work, improve
                                customer interactions, increase productivity, and
                                enable smarter business decisions.

                            </p>

                            <div className="mt-10 grid gap-5">

                                {benefits.map((benefit) => (

                                    <div
                                        key={benefit}
                                        className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                                    >

                                        <CheckCircle2
                                            className="text-cyan-600"
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

                            <div className="rounded-[32px] bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 p-10 text-white shadow-2xl">

                                <Sparkles
                                    size={60}
                                    className="mb-8 text-cyan-300"
                                />

                                <h3 className="text-4xl font-bold">
                                    Smarter Processes.
                                    Better Results.
                                </h3>

                                <p className="mt-6 text-lg leading-8 text-slate-300">

                                    From AI-powered customer interactions to intelligent
                                    workflow automation, we help businesses reduce costs,
                                    improve efficiency, and deliver exceptional customer
                                    experiences while preparing for the future.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 py-24 text-white">

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
                        Ready to Automate Your Business?
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">

                        Partner with RiMax Technologies to implement intelligent AI
                        and automation solutions that improve customer experiences,
                        streamline operations, and help your business scale with
                        confidence.

                    </p>

                    <Link
                        href="/#contact"
                        className="mt-12 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-5 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >

                        Start Your AI Journey

                        <ArrowRight size={22} />

                    </Link>

                </div>

            </section>

        </main>

    );

}