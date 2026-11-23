import Link from "next/link";
import {
    Megaphone,
    Target,
    PenTool,
    Image,
    CalendarDays,
    BarChart3,
    ClipboardList,
    Users,
    CheckCircle2,
    ArrowUpRight,
    ArrowRight,
    ChevronDown,
    Clock3,
    FileText,
    ShieldCheck,
    Send,
} from "lucide-react";

/* ==================================
   WHAT THE SERVICE INCLUDES
================================== */

const services = [
    {
        icon: Megaphone,
        title: "Campaign Coordination",
        description:
            "Assist with planning, organising, and coordinating digital marketing campaigns across agreed channels.",
    },
    {
        icon: PenTool,
        title: "Marketing Content",
        description:
            "Prepare promotional copy, campaign messages, product descriptions, and marketing materials.",
    },
    {
        icon: Image,
        title: "Advertising Creatives",
        description:
            "Create promotional graphics, banners, and ad creatives using your brand assets and guidelines.",
    },
    {
        icon: Target,
        title: "Advertising Support",
        description:
            "Assist with ad preparation, campaign setup, and monitoring based on approved budgets and instructions.",
    },
    {
        icon: Send,
        title: "Promotional Activities",
        description:
            "Coordinate approved offers, product launches, and promotional communications.",
    },
    {
        icon: BarChart3,
        title: "Marketing Reporting",
        description:
            "Prepare reports covering campaign activity, available performance metrics, and marketing updates.",
    },
];

/* ==================================
   WHO NEEDS THIS SERVICE
================================== */

const audiences = [
    "E-commerce businesses promoting products and offers",
    "D2C brands planning digital marketing campaigns",
    "Startups needing marketing execution assistance",
    "Growing businesses with limited in-house marketing resources",
];

/* ==================================
   HOW RIMAX DELIVERS
================================== */

const process = [
    {
        number: "01",
        title: "Discover",
        description:
            "We understand your business goals, audience, marketing channels, and campaign requirements.",
    },
    {
        number: "02",
        title: "Plan",
        description:
            "We prepare campaign tasks, content requirements, timelines, and approval workflows.",
    },
    {
        number: "03",
        title: "Execute",
        description:
            "We create approved marketing materials and coordinate agreed campaign activities.",
    },
    {
        number: "04",
        title: "Review",
        description:
            "We share campaign updates, review available metrics, and discuss improvements.",
    },
];

/* ==================================
   CLIENT REQUIREMENTS
================================== */

const requirements = [
    "Brand guidelines, product details, and marketing objectives",
    "Approved access to relevant marketing platforms",
    "Campaign budgets, offers, and promotional information",
    "A designated contact for creative and campaign approvals",
];

/* ==================================
   ENGAGEMENT MODELS
================================== */

const packages = [
    {
        title: "Campaign-Based Support",
        subtitle: "For individual promotions or launches",
        icon: Clock3,
        features: [
            "Specific campaign assistance",
            "Promotional content preparation",
            "Campaign activity updates",
        ],
    },
    {
        title: "Ongoing Marketing Support",
        subtitle: "For regular marketing activities",
        icon: Users,
        features: [
            "Recurring campaign coordination",
            "Marketing creatives and content",
            "Regular activity reporting",
        ],
    },
    {
        title: "Custom Marketing Support",
        subtitle: "For specific business requirements",
        icon: CalendarDays,
        features: [
            "Flexible campaign arrangements",
            "Custom marketing responsibilities",
            "Multi-channel coordination",
        ],
    },
];

/* ==================================
   FAQs
================================== */

const faqs = [
    {
        question: "What digital marketing activities can RiMax support?",
        answer:
            "We can assist with campaign coordination, marketing content, promotional creatives, advertising preparation, product promotions, and reporting based on the agreed scope.",
    },
    {
        question: "Can RiMax help with paid advertising?",
        answer:
            "Yes. We can discuss supporting campaign preparation, creative development, setup, and monitoring on agreed advertising platforms. Advertising budgets and approvals remain under your control.",
    },
    {
        question: "Do you create advertising graphics and promotional content?",
        answer:
            "Yes. We can prepare banners, promotional graphics, captions, and marketing copy using your brand assets and approved guidelines.",
    },
    {
        question: "Will RiMax guarantee leads or sales?",
        answer:
            "No specific leads, sales, or advertising results are guaranteed. Campaign performance depends on factors such as audience, budget, market conditions, and the marketing strategy.",
    },
    {
        question: "Do we need to provide an advertising budget?",
        answer:
            "For paid campaigns, your business determines and approves the advertising budget. Media spending is separate from RiMax service fees unless otherwise agreed.",
    },
    {
        question: "Can we hire RiMax for a single marketing campaign?",
        answer:
            "Yes. We can discuss campaign-based support for product launches, seasonal promotions, or individual marketing projects.",
    },
];

/* ==================================
   REUSABLE SECTION HEADING
================================== */

function SectionHeading({
                            label,
                            title,
                            description,
                        }: {
    label: string;
    title: string;
    description?: string;
}) {
    return (
        <div className="mb-9 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-pink-700">
                {label}
            </p>

            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {title}
            </h2>

            {description && (
                <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
                    {description}
                </p>
            )}
        </div>
    );
}

/* ==================================
   MAIN PAGE
================================== */

export default function DigitalMarketingPage() {
    return (
        <main className="overflow-hidden bg-white">

            {/* ==================================
                HERO
            ================================== */}

            <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-white">

                <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:py-20">

                    {/* LEFT */}

                    <div>
                        <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-pink-700">
                            RiMax Digital Marketing Solutions
                        </p>

                        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            Grow Your Brand With
                            <span className="block text-pink-700">
                                Digital Marketing Support
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                            Support your marketing goals with
                            organised campaign coordination,
                            promotional content, advertising creatives,
                            and practical digital marketing assistance.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">

                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-2 rounded-xl bg-pink-700 px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-pink-800"
                            >
                                Get Free Consultation
                                <ArrowUpRight size={19} />
                            </Link>

                            <a
                                href="#marketing-services"
                                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-7 py-4 font-semibold text-gray-800 transition hover:border-pink-400"
                            >
                                Explore Our Services
                                <ArrowRight size={18} />
                            </a>

                        </div>

                        <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-gray-700">

                            <span className="flex items-center gap-2">
                                <CheckCircle2
                                    size={18}
                                    className="text-pink-700"
                                />
                                Campaign Support
                            </span>

                            <span className="flex items-center gap-2">
                                <CheckCircle2
                                    size={18}
                                    className="text-pink-700"
                                />
                                Creative Content
                            </span>

                            <span className="flex items-center gap-2">
                                <CheckCircle2
                                    size={18}
                                    className="text-pink-700"
                                />
                                Flexible Engagement
                            </span>

                        </div>
                    </div>

                    {/* RIGHT - MARKETING PREVIEW */}

                    <div className="rounded-3xl border border-pink-100 bg-white p-6 shadow-xl sm:p-8">

                        <div className="flex items-center gap-4 border-b border-gray-100 pb-5">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100">
                                <Megaphone
                                    size={29}
                                    className="text-pink-700"
                                />
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-gray-900">
                                    Marketing Campaign Planner
                                </h2>

                                <p className="text-sm text-gray-500">
                                    Example campaign workflow
                                </p>
                            </div>

                        </div>

                        <div className="mt-6 space-y-4">

                            <div className="flex items-start gap-4 rounded-xl bg-pink-50 p-4">

                                <Target
                                    size={22}
                                    className="mt-1 shrink-0 text-pink-700"
                                />

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Campaign Objectives
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        Define the campaign goal, audience, and approved budget.
                                    </p>
                                </div>

                            </div>

                            <div className="flex items-start gap-4 rounded-xl bg-gray-50 p-4">

                                <PenTool
                                    size={22}
                                    className="mt-1 shrink-0 text-pink-700"
                                />

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Creative Preparation
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        Prepare promotional content, graphics, and campaign materials.
                                    </p>
                                </div>

                            </div>

                            <div className="flex items-start gap-4 rounded-xl bg-pink-50 p-4">

                                <BarChart3
                                    size={22}
                                    className="mt-1 shrink-0 text-pink-700"
                                />

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Campaign Monitoring
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        Review available performance data and share updates.
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="mt-5 flex items-center gap-2 text-sm font-medium text-pink-700">
                            <ShieldCheck size={18} />
                            Brand-aligned marketing coordination
                        </div>

                    </div>

                </div>
            </section>

            {/* ==================================
                WHAT THE SERVICE INCLUDES
            ================================== */}

            <section
                id="marketing-services"
                className="scroll-mt-24 py-14 sm:py-16"
            >

                <div className="mx-auto max-w-7xl px-6">

                    <SectionHeading
                        label="What's Included"
                        title="What Our Digital Marketing Support Covers"
                        description="Practical marketing assistance tailored to your campaigns and business goals."
                    />

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {services.map((service) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={service.title}
                                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-pink-300 hover:shadow-md"
                                >

                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50">
                                        <Icon
                                            size={24}
                                            className="text-pink-700"
                                        />
                                    </div>

                                    <h3 className="mb-2 text-lg font-bold text-gray-900">
                                        {service.title}
                                    </h3>

                                    <p className="text-sm leading-7 text-gray-600">
                                        {service.description}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>
            </section>

            {/* ==================================
                WHO NEEDS + CLIENT REQUIREMENTS
            ================================== */}

            <section className="bg-gray-50 py-14 sm:py-16">

                <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">

                    {/* WHO NEEDS */}

                    <div className="rounded-3xl bg-white p-7 shadow-sm">

                        <div className="mb-5 flex items-center gap-3">
                            <Users
                                size={26}
                                className="text-pink-700"
                            />

                            <h2 className="text-2xl font-bold text-gray-900">
                                Who Needs Digital Marketing Support?
                            </h2>
                        </div>

                        <div className="space-y-4">

                            {audiences.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-start gap-3"
                                >

                                    <CheckCircle2
                                        size={20}
                                        className="mt-1 shrink-0 text-pink-700"
                                    />

                                    <p className="leading-7 text-gray-600">
                                        {item}
                                    </p>

                                </div>
                            ))}

                        </div>
                    </div>

                    {/* CLIENT REQUIREMENTS */}

                    <div className="rounded-3xl bg-white p-7 shadow-sm">

                        <div className="mb-5 flex items-center gap-3">
                            <FileText
                                size={26}
                                className="text-pink-700"
                            />

                            <h2 className="text-2xl font-bold text-gray-900">
                                What We Need From You
                            </h2>
                        </div>

                        <div className="space-y-4">

                            {requirements.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-start gap-3"
                                >

                                    <CheckCircle2
                                        size={20}
                                        className="mt-1 shrink-0 text-pink-700"
                                    />

                                    <p className="leading-7 text-gray-600">
                                        {item}
                                    </p>

                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </section>

            {/* ==================================
                HOW RIMAX DELIVERS
            ================================== */}

            <section className="py-14 sm:py-16">

                <div className="mx-auto max-w-7xl px-6">

                    <SectionHeading
                        label="Our Process"
                        title="How RiMax Supports Your Marketing"
                    />

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {process.map((step) => (
                            <div
                                key={step.number}
                                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                            >

                                <span className="text-3xl font-extrabold text-pink-700">
                                    {step.number}
                                </span>

                                <h3 className="mt-4 text-xl font-bold text-gray-900">
                                    {step.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-gray-600">
                                    {step.description}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>
            </section>

            {/* ==================================
                ENGAGEMENT MODELS
            ================================== */}

            <section className="bg-gray-50 py-14 sm:py-16">

                <div className="mx-auto max-w-7xl px-6">

                    <SectionHeading
                        label="Flexible Engagement"
                        title="Digital Marketing Support Options"
                        description="Choose an arrangement based on your campaigns, marketing workload, and business requirements."
                    />

                    <div className="grid gap-5 md:grid-cols-3">

                        {packages.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className={`flex flex-col rounded-2xl border p-6 shadow-sm ${
                                        index === 1
                                            ? "border-pink-400 bg-pink-50"
                                            : "border-gray-200 bg-white"
                                    }`}
                                >

                                    <Icon
                                        size={30}
                                        className="text-pink-700"
                                    />

                                    <h3 className="mt-4 text-xl font-bold text-gray-900">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-gray-600">
                                        {item.subtitle}
                                    </p>

                                    <div className="mt-5 flex-grow space-y-3">

                                        {item.features.map((feature) => (
                                            <div
                                                key={feature}
                                                className="flex items-start gap-2"
                                            >

                                                <CheckCircle2
                                                    size={18}
                                                    className="mt-1 shrink-0 text-pink-700"
                                                />

                                                <span className="text-sm leading-6 text-gray-700">
                                                    {feature}
                                                </span>

                                            </div>
                                        ))}

                                    </div>

                                    <Link
                                        href="/#contact"
                                        className="mt-7 rounded-xl bg-pink-700 px-5 py-3 text-center font-semibold text-white transition hover:bg-pink-800"
                                    >
                                        Discuss This Option
                                    </Link>

                                </div>
                            );
                        })}

                    </div>

                    <p className="mt-5 text-center text-sm text-gray-500">
                        Campaign scope, pricing, advertising budgets,
                        and responsibilities are confirmed during consultation.
                    </p>

                </div>
            </section>

            {/* ==================================
                FAQ
            ================================== */}

            <section className="py-14 sm:py-16">

                <div className="mx-auto max-w-6xl px-6">

                    <SectionHeading
                        label="Common Questions"
                        title="Digital Marketing Support FAQs"
                    />

                    <div className="grid items-start gap-4 md:grid-cols-2">

                        {faqs.map((faq) => (
                            <details
                                key={faq.question}
                                className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                            >

                                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">

                                    <span>{faq.question}</span>

                                    <ChevronDown
                                        size={19}
                                        className="shrink-0 text-pink-700 transition group-open:rotate-180"
                                    />

                                </summary>

                                <p className="mt-4 border-t border-gray-100 pt-4 text-sm leading-7 text-gray-600">
                                    {faq.answer}
                                </p>

                            </details>
                        ))}

                    </div>

                </div>
            </section>

            {/* ==================================
                CONSULTATION CTA
            ================================== */}

            <section className="bg-gradient-to-r from-pink-700 to-rose-700 py-14 text-white">

                <div className="mx-auto max-w-4xl px-6 text-center">

                    <h2 className="text-3xl font-extrabold sm:text-4xl">
                        Ready to Support Your Next Marketing Campaign?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-8 text-pink-50">
                        Tell us about your business, marketing goals,
                        and campaign requirements. We'll discuss
                        a suitable digital marketing support arrangement.
                    </p>

                    <Link
                        href="/#contact"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-pink-700 shadow-lg transition hover:-translate-y-1"
                    >
                        Get Free Consultation
                        <ArrowUpRight size={19} />
                    </Link>

                </div>
            </section>

        </main>
    );
}