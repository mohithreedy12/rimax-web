import Link from "next/link";
import {
    BriefcaseBusiness,
    ClipboardList,
    Package,
    FileSpreadsheet,
    Workflow,
    CalendarCheck,
    BarChart3,
    Users,
    CheckCircle2,
    ArrowUpRight,
    ArrowRight,
    ChevronDown,
    Clock3,
    CalendarDays,
    FileText,
    ShieldCheck,
} from "lucide-react";

/* ==================================
   WHAT THE SERVICE INCLUDES
================================== */

const services = [
    {
        icon: Package,
        title: "Order Coordination",
        description:
            "Track order information, coordinate updates, and assist with routine order-related processes.",
    },
    {
        icon: ClipboardList,
        title: "Administrative Assistance",
        description:
            "Support data entry, document organisation, scheduling, and everyday administrative tasks.",
    },
    {
        icon: Workflow,
        title: "Workflow Management",
        description:
            "Organise recurring tasks, track progress, and coordinate activities across agreed workflows.",
    },
    {
        icon: FileSpreadsheet,
        title: "Data & Record Management",
        description:
            "Maintain spreadsheets, update business records, and organise operational information.",
    },
    {
        icon: CalendarCheck,
        title: "Task Follow-Ups",
        description:
            "Monitor pending tasks, follow up with responsible teams, and share relevant updates.",
    },
    {
        icon: BarChart3,
        title: "Operational Reporting",
        description:
            "Prepare agreed activity summaries, task reports, and operational status updates.",
    },
];

/* ==================================
   WHO NEEDS THIS SERVICE
================================== */

const audiences = [
    "E-commerce businesses managing orders and daily operations",
    "D2C brands coordinating fulfilment and administrative tasks",
    "Growing businesses needing organised back-office support",
    "Small teams looking to reduce repetitive operational work",
];

/* ==================================
   HOW RIMAX DELIVERS
================================== */

const process = [
    {
        number: "01",
        title: "Understand",
        description:
            "We review your daily operations, recurring tasks, and support priorities.",
    },
    {
        number: "02",
        title: "Organise",
        description:
            "We define responsibilities, workflows, access requirements, and reporting methods.",
    },
    {
        number: "03",
        title: "Execute",
        description:
            "Our assigned resources handle agreed operational tasks and coordinate updates.",
    },
    {
        number: "04",
        title: "Review",
        description:
            "We share progress reports, review pending activities, and refine workflows.",
    },
];

/* ==================================
   CLIENT REQUIREMENTS
================================== */

const requirements = [
    "Clear task descriptions and operational guidelines",
    "Appropriate access to required business tools",
    "Existing workflows, templates, and reference documents",
    "A designated contact for approvals and coordination",
];

/* ==================================
   ENGAGEMENT MODELS
================================== */

const packages = [
    {
        title: "Part-Time Assistance",
        subtitle: "For occasional operational tasks",
        icon: Clock3,
        features: [
            "Scheduled administrative support",
            "Routine task coordination",
            "Basic activity updates",
        ],
    },
    {
        title: "Dedicated Operations Support",
        subtitle: "For consistent daily assistance",
        icon: Users,
        features: [
            "Assigned operational resources",
            "Recurring workflow management",
            "Regular reporting and coordination",
        ],
    },
    {
        title: "Custom Operations Support",
        subtitle: "For changing business requirements",
        icon: CalendarDays,
        features: [
            "Flexible staffing arrangements",
            "Customised task responsibilities",
            "Scalable operational coverage",
        ],
    },
];

/* ==================================
   FAQs
================================== */

const faqs = [
    {
        question: "What business operations can RiMax manage?",
        answer:
            "We can assist with order coordination, administrative tasks, data entry, record management, workflow tracking, follow-ups, and operational reporting based on the agreed service scope.",
    },
    {
        question: "Can RiMax work with our existing business tools?",
        answer:
            "Yes. We can discuss using your existing spreadsheets, task management platforms, order management systems, and other tools, subject to access and system compatibility.",
    },
    {
        question: "Do you support e-commerce operations?",
        answer:
            "Yes. Our proposed support arrangements can include order tracking, fulfilment coordination, record updates, and routine administrative activities for e-commerce businesses.",
    },
    {
        question: "How will tasks be assigned and monitored?",
        answer:
            "We establish agreed task lists, priorities, communication channels, and reporting procedures during onboarding.",
    },
    {
        question: "Will RiMax make business decisions on our behalf?",
        answer:
            "We handle agreed operational activities according to your instructions. Decisions requiring management approval, financial authorisation, or policy exceptions remain with your designated team.",
    },
    {
        question: "Can we start with part-time support?",
        answer:
            "Yes. We can discuss a part-time arrangement initially and review additional support requirements as your operations grow.",
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
            <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-purple-700">
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

export default function BusinessOperationsPage() {
    return (
        <main className="overflow-hidden bg-white">

            {/* ==================================
                HERO
            ================================== */}

            <section className="bg-gradient-to-br from-purple-50 via-indigo-50 to-white">

                <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:py-20">

                    {/* LEFT */}

                    <div>
                        <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-purple-700">
                            RiMax Business Operations Solutions
                        </p>

                        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            Simplify Your
                            <span className="block text-purple-700">
                                Business Operations
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                            Keep daily operations organised with
                            practical administrative assistance,
                            order coordination, workflow management,
                            and reliable back-office support.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">

                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-2 rounded-xl bg-purple-700 px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-purple-800"
                            >
                                Get Free Consultation
                                <ArrowUpRight size={19} />
                            </Link>

                            <a
                                href="#operations-services"
                                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-7 py-4 font-semibold text-gray-800 transition hover:border-purple-400"
                            >
                                Explore Our Services
                                <ArrowRight size={18} />
                            </a>

                        </div>

                        <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-gray-700">

                            <span className="flex items-center gap-2">
                                <CheckCircle2
                                    size={18}
                                    className="text-purple-700"
                                />
                                Flexible Support
                            </span>

                            <span className="flex items-center gap-2">
                                <CheckCircle2
                                    size={18}
                                    className="text-purple-700"
                                />
                                Organised Workflows
                            </span>

                            <span className="flex items-center gap-2">
                                <CheckCircle2
                                    size={18}
                                    className="text-purple-700"
                                />
                                Task Coordination
                            </span>

                        </div>
                    </div>

                    {/* RIGHT - OPERATIONS PREVIEW */}

                    <div className="rounded-3xl border border-purple-100 bg-white p-6 shadow-xl sm:p-8">

                        <div className="flex items-center gap-4 border-b border-gray-100 pb-5">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100">
                                <BriefcaseBusiness
                                    size={29}
                                    className="text-purple-700"
                                />
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-gray-900">
                                    Operations Overview
                                </h2>

                                <p className="text-sm text-gray-500">
                                    Example task workflow
                                </p>
                            </div>

                        </div>

                        <div className="mt-6 space-y-4">

                            <div className="flex items-start gap-4 rounded-xl bg-purple-50 p-4">

                                <ClipboardList
                                    size={22}
                                    className="mt-1 shrink-0 text-purple-700"
                                />

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Task Received
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        Review task details, priority, and required information.
                                    </p>
                                </div>

                            </div>

                            <div className="flex items-start gap-4 rounded-xl bg-gray-50 p-4">

                                <Workflow
                                    size={22}
                                    className="mt-1 shrink-0 text-purple-700"
                                />

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Work in Progress
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        Follow approved steps and coordinate with relevant teams.
                                    </p>
                                </div>

                            </div>

                            <div className="flex items-start gap-4 rounded-xl bg-purple-50 p-4">

                                <CheckCircle2
                                    size={22}
                                    className="mt-1 shrink-0 text-purple-700"
                                />

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Update & Report
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        Record progress, flag blockers, and share task updates.
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="mt-5 flex items-center gap-2 text-sm font-medium text-purple-700">
                            <ShieldCheck size={18} />
                            Structured, process-driven operations
                        </div>

                    </div>

                </div>
            </section>

            {/* ==================================
                WHAT THE SERVICE INCLUDES
            ================================== */}

            <section
                id="operations-services"
                className="scroll-mt-24 py-14 sm:py-16"
            >

                <div className="mx-auto max-w-7xl px-6">

                    <SectionHeading
                        label="What's Included"
                        title="What Our Operations Support Covers"
                        description="Practical back-office assistance tailored to your daily business requirements."
                    />

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {services.map((service) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={service.title}
                                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-purple-300 hover:shadow-md"
                                >

                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50">
                                        <Icon
                                            size={24}
                                            className="text-purple-700"
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
                                className="text-purple-700"
                            />

                            <h2 className="text-2xl font-bold text-gray-900">
                                Who Needs Operations Support?
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
                                        className="mt-1 shrink-0 text-purple-700"
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
                                className="text-purple-700"
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
                                        className="mt-1 shrink-0 text-purple-700"
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
                        title="How RiMax Supports Your Operations"
                    />

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {process.map((step) => (
                            <div
                                key={step.number}
                                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                            >

                                <span className="text-3xl font-extrabold text-purple-700">
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
                        title="Business Operations Support Options"
                        description="Choose an arrangement based on your workload, priorities, and operational requirements."
                    />

                    <div className="grid gap-5 md:grid-cols-3">

                        {packages.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className={`flex flex-col rounded-2xl border p-6 shadow-sm ${
                                        index === 1
                                            ? "border-purple-400 bg-purple-50"
                                            : "border-gray-200 bg-white"
                                    }`}
                                >

                                    <Icon
                                        size={30}
                                        className="text-purple-700"
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
                                                    className="mt-1 shrink-0 text-purple-700"
                                                />

                                                <span className="text-sm leading-6 text-gray-700">
                                                    {feature}
                                                </span>

                                            </div>
                                        ))}

                                    </div>

                                    <Link
                                        href="/#contact"
                                        className="mt-7 rounded-xl bg-purple-700 px-5 py-3 text-center font-semibold text-white transition hover:bg-purple-800"
                                    >
                                        Discuss This Option
                                    </Link>

                                </div>
                            );
                        })}

                    </div>

                    <p className="mt-5 text-center text-sm text-gray-500">
                        Staffing, schedules, pricing, and responsibilities
                        are confirmed during consultation.
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
                        title="Business Operations FAQs"
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
                                        className="shrink-0 text-purple-700 transition group-open:rotate-180"
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

            <section className="bg-gradient-to-r from-purple-700 to-indigo-700 py-14 text-white">

                <div className="mx-auto max-w-4xl px-6 text-center">

                    <h2 className="text-3xl font-extrabold sm:text-4xl">
                        Ready to Simplify Your Daily Operations?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-8 text-purple-100">
                        Tell us about your operational tasks, workload,
                        and support requirements. We'll discuss a
                        suitable business operations support arrangement.
                    </p>

                    <Link
                        href="/#contact"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-purple-700 shadow-lg transition hover:-translate-y-1"
                    >
                        Get Free Consultation
                        <ArrowUpRight size={19} />
                    </Link>

                </div>
            </section>

        </main>
    );
}