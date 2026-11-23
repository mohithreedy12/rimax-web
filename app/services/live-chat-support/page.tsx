import Link from "next/link";

import {
    MessageSquare,
    Mail,
    ShoppingCart,
    HelpCircle,
    Users,
    Clock3,
    CheckCircle2,
    ArrowUpRight,
    ChevronDown,
    Headphones,
    ClipboardList,
    Settings,
    PlayCircle,
    BarChart3,
    ShieldCheck,
    FileText,
    BookOpen,
    KeyRound,
    CalendarDays,
    UserRound,
    Layers,
    ArrowRight,
} from "lucide-react";

/* ==================================
   WHAT THE SERVICE INCLUDES
================================== */

const inclusions = [
    {
        icon: MessageSquare,
        title: "Customer Enquiries",
        description:
            "Respond to customer questions about products, services, pricing, availability, and general business information.",
    },
    {
        icon: ShoppingCart,
        title: "Order Assistance",
        description:
            "Help customers with order status, shipping updates, delivery enquiries, and return or refund procedures.",
    },
    {
        icon: Headphones,
        title: "Issue Resolution",
        description:
            "Handle common customer concerns using your approved guidelines and escalate complex issues to the appropriate team.",
    },
    {
        icon: Users,
        title: "Pre-Sales Assistance",
        description:
            "Guide potential customers through product information, purchasing questions, and relevant service options.",
    },
    {
        icon: ClipboardList,
        title: "Conversation Management",
        description:
            "Organise customer conversations, maintain relevant records, and document issues requiring follow-up.",
    },
    {
        icon: BarChart3,
        title: "Support Reporting",
        description:
            "Provide agreed reporting on chat volumes, common enquiries, response performance, and recurring customer issues.",
    },
];

/* ==================================
   WHO NEEDS THIS SERVICE
================================== */

const audiences = [
    {
        icon: ShoppingCart,
        title: "E-commerce Stores",
        description:
            "Online stores handling product questions, order updates, shipping enquiries, and returns.",
    },
    {
        icon: Layers,
        title: "D2C Brands",
        description:
            "Direct-to-consumer brands looking to build stronger relationships with their customers.",
    },
    {
        icon: MessageSquare,
        title: "Growing Businesses",
        description:
            "Businesses receiving increasing customer enquiries that need a structured support process.",
    },
    {
        icon: Globe2Icon,
        title: "Online Service Providers",
        description:
            "Service-based businesses that need assistance answering website visitor and customer questions.",
    },
];

/* ==================================
   HOW RIMAX DELIVERS
================================== */

const process = [
    {
        number: "01",
        icon: ClipboardList,
        title: "Understand Your Business",
        description:
            "We discuss your products, customers, common enquiries, support requirements, and preferred coverage hours.",
    },
    {
        number: "02",
        icon: Settings,
        title: "Set Up Workflows",
        description:
            "We establish response guidelines, escalation procedures, chat platform access, and communication processes.",
    },
    {
        number: "03",
        icon: PlayCircle,
        title: "Begin Chat Support",
        description:
            "Our assigned team starts handling customer conversations according to the agreed scope and schedule.",
    },
    {
        number: "04",
        icon: BarChart3,
        title: "Monitor & Improve",
        description:
            "We review service activity, share agreed updates, and refine workflows based on customer needs and feedback.",
    },
];

/* ==================================
   CLIENT REQUIREMENTS
================================== */

const requirements = [
    {
        icon: BookOpen,
        title: "Product & Service Information",
        description:
            "Product details, pricing information, policies, and answers to frequently asked customer questions.",
    },
    {
        icon: KeyRound,
        title: "Chat Platform Access",
        description:
            "Appropriate access to your website chat platform or customer support software.",
    },
    {
        icon: FileText,
        title: "Support Guidelines",
        description:
            "Approved response instructions, refund policies, escalation contacts, and communication preferences.",
    },
    {
        icon: Users,
        title: "Point of Contact",
        description:
            "A designated person from your business to coordinate onboarding, approvals, and escalations.",
    },
];

/* ==================================
   ENGAGEMENT MODELS
================================== */

const packages = [
    {
        icon: Clock3,
        title: "Part-Time Support",
        subtitle: "For businesses with moderate chat volumes",
        features: [
            "Scheduled support hours",
            "Customer enquiry handling",
            "Basic conversation reporting",
            "Agreed escalation procedures",
        ],
        highlighted: false,
    },
    {
        icon: UserRound,
        title: "Dedicated Support",
        subtitle: "For businesses needing consistent assistance",
        features: [
            "Assigned support resources",
            "Agreed daily coverage",
            "Brand-specific response guidelines",
            "Regular communication and reporting",
        ],
        highlighted: true,
    },
    {
        icon: CalendarDays,
        title: "Custom Coverage",
        subtitle: "For businesses with specific operational needs",
        features: [
            "Flexible staffing arrangements",
            "Extended or 24/7 coverage options",
            "Custom workflows and escalation rules",
            "Support scaled to expected chat demand",
        ],
        highlighted: false,
    },
];

/* ==================================
   LIVE CHAT FAQs
================================== */

const faqs = [
    {
        question: "What types of customer enquiries can RiMax handle?",
        answer:
            "We can assist with product questions, order updates, delivery enquiries, returns, refunds, general customer assistance, and pre-sales questions. The exact responsibilities are agreed upon during onboarding.",
    },
    {
        question: "Can RiMax provide 24/7 live chat support?",
        answer:
            "Yes. We can discuss arranging 24/7 coverage based on your business requirements, expected chat volume, onboarding timeline, and agreed staffing arrangements.",
    },
    {
        question: "Do I need to change my existing live chat platform?",
        answer:
            "Not necessarily. We can discuss working with your existing chat platform, subject to its capabilities and the access required for our team.",
    },
    {
        question: "How will your team learn about my business?",
        answer:
            "We begin with an onboarding process covering your products, services, customer policies, frequently asked questions, brand communication guidelines, and escalation procedures.",
    },
    {
        question: "How are complicated customer issues handled?",
        answer:
            "We follow your approved escalation procedures. Issues outside the agreed support scope are documented and referred to your designated internal contact or responsible team.",
    },
    {
        question: "Can I start with a small support package?",
        answer:
            "Yes. We can discuss part-time or limited-hours support initially and review opportunities to expand coverage as your customer enquiry volume grows.",
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
        <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-blue-700">
                {label}
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {title}
            </h2>

            {description && (
                <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
                    {description}
                </p>
            )}
        </div>
    );
}

/* ==================================
   MAIN PAGE
================================== */

export default function LiveChatSupportPage() {
    return (
        <main className="overflow-hidden bg-white">

            {/* ==================================
                HERO SECTION
            ================================== */}

            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white">

                <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-20">

                    {/* LEFT */}

                    <div>

                        <p className="mb-5 text-sm font-bold uppercase tracking-[3px] text-blue-700">
                            RiMax Customer Experience Solutions
                        </p>

                        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            Professional
                            <span className="block text-blue-700">
                                Live Chat Support
                            </span>
                            for Your Business
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                            Give your customers a reliable way to connect
                            with your business. RiMax helps manage live chat
                            conversations, answer enquiries, assist with
                            orders, and escalate issues through structured,
                            brand-aligned support.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">

                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-7 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-800"
                            >
                                Get Free Consultation
                                <ArrowUpRight size={19} />
                            </Link>

                            <a
                                href="#service-includes"
                                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-7 py-4 font-semibold text-gray-800 transition hover:border-blue-500 hover:text-blue-700"
                            >
                                Explore Live Chat Support
                                <ArrowRight size={18} />
                            </a>

                        </div>

                        <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-gray-700">

                            <span className="flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-blue-700" />
                                Flexible Coverage
                            </span>

                            <span className="flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-blue-700" />
                                Brand-Aligned Responses
                            </span>

                            <span className="flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-blue-700" />
                                Structured Escalations
                            </span>

                        </div>

                    </div>

                    {/* RIGHT - CHAT PREVIEW */}

                    <div className="relative mx-auto w-full max-w-lg">

                        <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-2xl sm:p-7">

                            <div className="flex items-center gap-4 border-b border-gray-100 pb-5">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                                    <MessageSquare size={28} className="text-blue-700" />
                                </div>

                                <div>
                                    <h2 className="text-lg font-bold text-gray-900">
                                        Customer Support
                                    </h2>

                                    <p className="text-sm text-gray-500">
                                        Example customer conversation
                                    </p>
                                </div>

                            </div>

                            <div className="space-y-5 py-7">

                                <div className="flex justify-end">

                                    <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-blue-700 px-5 py-4 text-sm leading-6 text-white">
                                        Hi! Can you help me check the
                                        delivery status of my order?
                                    </div>

                                </div>

                                <div className="flex justify-start">

                                    <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-gray-100 px-5 py-4 text-sm leading-6 text-gray-800">
                                        Of course! Please share your
                                        order number so I can check
                                        the available details.
                                    </div>

                                </div>

                                <div className="flex justify-end">

                                    <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-blue-700 px-5 py-4 text-sm leading-6 text-white">
                                        Sure, my order number is #12345.
                                    </div>

                                </div>

                                <div className="flex justify-start">

                                    <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-gray-100 px-5 py-4 text-sm leading-6 text-gray-800">
                                        Thank you! I'll check the
                                        order information and guide
                                        you through the next steps.
                                    </div>

                                </div>

                            </div>

                            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4">

                                <ShieldCheck size={21} className="text-blue-700" />

                                <p className="text-sm font-medium text-gray-700">
                                    Professional, brand-aligned customer conversations
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* ==================================
                1. WHAT SERVICE INCLUDES
            ================================== */}

            <section
                id="service-includes"
                className="scroll-mt-24 py-16 sm:py-20"
            >

                <div className="mx-auto max-w-7xl px-6">

                    <SectionHeading
                        label="What's Included"
                        title="What Our Live Chat Support Covers"
                        description="Practical customer-facing assistance tailored to your business processes and support guidelines."
                    />

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                        {inclusions.map((item) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                                >

                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                                        <Icon size={24} className="text-blue-700" />
                                    </div>

                                    <h3 className="mb-3 text-lg font-bold text-gray-900">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm leading-7 text-gray-600">
                                        {item.description}
                                    </p>

                                </div>
                            );

                        })}

                    </div>

                </div>

            </section>

            {/* ==================================
                2. WHO NEEDS THIS SERVICE
            ================================== */}

            <section className="bg-gray-50 py-16 sm:py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <SectionHeading
                        label="Who We Help"
                        title="Who Needs Live Chat Support?"
                        description="Designed for businesses that want to make customer communication more organised and accessible."
                    />

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {audiences.map((item) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                                >

                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                                        <Icon size={24} className="text-blue-700" />
                                    </div>

                                    <h3 className="mb-3 text-lg font-bold text-gray-900">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm leading-7 text-gray-600">
                                        {item.description}
                                    </p>

                                </div>
                            );

                        })}

                    </div>

                </div>

            </section>

            {/* ==================================
                3. HOW RIMAX DELIVERS IT
            ================================== */}

            <section className="py-16 sm:py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <SectionHeading
                        label="Our Delivery Process"
                        title="How RiMax Delivers Live Chat Support"
                        description="A structured onboarding and delivery approach designed around your business requirements."
                    />

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

                        {process.map((step) => {

                            const Icon = step.icon;

                            return (
                                <div
                                    key={step.number}
                                    className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                                >

                                    <div className="mb-5 flex items-center justify-between">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                                            <Icon size={24} className="text-blue-700" />
                                        </div>

                                        <span className="text-3xl font-extrabold text-blue-100">
                                            {step.number}
                                        </span>

                                    </div>

                                    <h3 className="mb-3 text-lg font-bold text-gray-900">
                                        {step.title}
                                    </h3>

                                    <p className="text-sm leading-7 text-gray-600">
                                        {step.description}
                                    </p>

                                </div>
                            );

                        })}

                    </div>

                </div>

            </section>

            {/* ==================================
                4. CLIENT REQUIREMENTS
            ================================== */}

            <section className="bg-gray-50 py-16 sm:py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <SectionHeading
                        label="Getting Started"
                        title="What We Need From Your Business"
                        description="A few essential details help us prepare your support workflows and represent your brand accurately."
                    />

                    <div className="grid gap-5 md:grid-cols-2">

                        {requirements.map((item) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                                >

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                                        <Icon size={24} className="text-blue-700" />
                                    </div>

                                    <div>

                                        <h3 className="mb-2 text-lg font-bold text-gray-900">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm leading-7 text-gray-600">
                                            {item.description}
                                        </p>

                                    </div>

                                </div>
                            );

                        })}

                    </div>

                    <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50 p-5">

                        <p className="text-sm leading-7 text-blue-900">
                            <strong>Note:</strong> Required access and onboarding
                            information depend on your existing systems,
                            support scope, and agreed responsibilities.
                        </p>

                    </div>

                </div>

            </section>

            {/* ==================================
                5. ENGAGEMENT MODELS
            ================================== */}

            <section className="py-16 sm:py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <SectionHeading
                        label="Flexible Engagement"
                        title="Choose the Right Support Arrangement"
                        description="We discuss staffing, coverage, and responsibilities based on your customer demand and business goals."
                    />

                    <div className="grid gap-6 lg:grid-cols-3">

                        {packages.map((item) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className={`flex h-full flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                                        item.highlighted
                                            ? "border-blue-500 bg-blue-50 shadow-lg"
                                            : "border-gray-200 bg-white shadow-sm"
                                    }`}
                                >

                                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                                        <Icon size={27} className="text-blue-700" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-gray-600">
                                        {item.subtitle}
                                    </p>

                                    <div className="my-6 border-t border-gray-200" />

                                    <ul className="mb-8 flex-grow space-y-4">

                                        {item.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-start gap-3 text-sm leading-6 text-gray-700"
                                            >
                                                <CheckCircle2
                                                    size={19}
                                                    className="mt-0.5 shrink-0 text-blue-700"
                                                />

                                                <span>{feature}</span>
                                            </li>
                                        ))}

                                    </ul>

                                    <Link
                                        href="/#contact"
                                        className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition ${
                                            item.highlighted
                                                ? "bg-blue-700 text-white hover:bg-blue-800"
                                                : "border border-blue-200 bg-white text-blue-700 hover:bg-blue-50"
                                        }`}
                                    >
                                        Discuss This Option
                                        <ArrowUpRight size={18} />
                                    </Link>

                                </div>
                            );

                        })}

                    </div>

                    <p className="mt-6 text-center text-sm leading-6 text-gray-500">
                        Coverage schedules, staffing, pricing, and service
                        responsibilities are confirmed during consultation.
                    </p>

                </div>

            </section>

            {/* ==================================
                6. FAQ SECTION
            ================================== */}

            <section className="bg-gray-50 py-16 sm:py-20">

                <div className="mx-auto max-w-6xl px-6">

                    <SectionHeading
                        label="Common Questions"
                        title="Live Chat Support FAQs"
                        description="Answers to common questions about our live chat services and onboarding process."
                    />

                    <div className="grid items-start gap-4 md:grid-cols-2">

                        {faqs.map((faq, index) => (

                            <details
                                key={faq.question}
                                className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm open:border-blue-200 open:shadow-md"
                            >

                                <summary className="flex cursor-pointer list-none items-start justify-between gap-3 font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">

                                    <span className="flex items-start gap-3">

                                        <span className="text-blue-700">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="text-sm leading-6 sm:text-base">
                                            {faq.question}
                                        </span>

                                    </span>

                                    <ChevronDown
                                        size={19}
                                        className="mt-1 shrink-0 text-blue-700 transition-transform group-open:rotate-180"
                                    />

                                </summary>

                                <div className="mt-4 border-t border-gray-100 pt-4 text-sm leading-7 text-gray-600">
                                    {faq.answer}
                                </div>

                            </details>

                        ))}

                    </div>

                </div>

            </section>

            {/* ==================================
                7. CONSULTATION CTA
            ================================== */}

            <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-indigo-700 py-16 text-white sm:py-20">

                <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

                <div className="relative mx-auto max-w-4xl px-6 text-center">

                    <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-blue-100">
                        Let's Work Together
                    </p>

                    <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                        Ready to Improve Your Customer Conversations?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
                        Tell us about your business, expected chat volume,
                        and support requirements. We'll discuss a suitable
                        live chat support arrangement for your team.
                    </p>

                    <Link
                        href="/#contact"
                        className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-blue-700 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                    >
                        Get Free Consultation
                        <ArrowUpRight size={20} />
                    </Link>

                </div>

            </section>

        </main>
    );
}

/* ==================================
   SMALL CUSTOM ICON COMPONENT
================================== */

function Globe2Icon({ size = 24, className = "" }: {
    size?: number;
    className?: string;
}) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    );
}