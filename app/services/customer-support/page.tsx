import Link from "next/link";
import {
    Headphones,
    MessageCircle,
    ShoppingCart,
    ClipboardList,
    RefreshCcw,
    Users,
    CheckCircle2,
    ArrowUpRight,
    ChevronDown,
    Clock3,
    CalendarDays,
    FileText,
    ShieldCheck,
    ArrowRight,
} from "lucide-react";

/* ==================================
   WHAT THE SERVICE INCLUDES
================================== */

const services = [
    {
        icon: MessageCircle,
        title: "Customer Enquiries",
        description:
            "Assist customers with product information, service questions, and general support requests.",
    },
    {
        icon: ShoppingCart,
        title: "Order Assistance",
        description:
            "Help customers with order status, delivery updates, returns, and refund enquiries.",
    },
    {
        icon: Headphones,
        title: "Complaint Handling",
        description:
            "Address customer concerns professionally and escalate issues requiring further attention.",
    },
    {
        icon: ClipboardList,
        title: "Ticket Management",
        description:
            "Organise support requests, track pending issues, and maintain customer interaction records.",
    },
    {
        icon: RefreshCcw,
        title: "Customer Follow-Ups",
        description:
            "Follow up on unresolved requests and communicate updates based on agreed procedures.",
    },
    {
        icon: Users,
        title: "Multichannel Coordination",
        description:
            "Coordinate customer requests across agreed communication channels and support systems.",
    },
];

/* ==================================
   WHO NEEDS THIS SERVICE
================================== */

const audiences = [
    "E-commerce businesses managing orders and customer enquiries",
    "D2C brands building structured customer service operations",
    "Growing companies receiving increasing support requests",
    "Product-based businesses managing returns and complaints",
];

/* ==================================
   HOW RIMAX DELIVERS
================================== */

const process = [
    {
        number: "01",
        title: "Understand",
        description:
            "We review your business, customer support requirements, and existing processes.",
    },
    {
        number: "02",
        title: "Prepare",
        description:
            "We establish communication guidelines, support workflows, and escalation procedures.",
    },
    {
        number: "03",
        title: "Support",
        description:
            "Our assigned resources handle customer requests through agreed channels and schedules.",
    },
    {
        number: "04",
        title: "Review",
        description:
            "We share agreed updates, review recurring issues, and refine support processes.",
    },
];

/* ==================================
   CLIENT REQUIREMENTS
================================== */

const requirements = [
    "Product details, service information, and company policies",
    "Access to agreed customer support platforms",
    "Approved response guidelines and escalation procedures",
    "A designated contact for approvals and complex issues",
];

/* ==================================
   ENGAGEMENT MODELS
================================== */

const packages = [
    {
        title: "Part-Time Support",
        subtitle: "For businesses with moderate support needs",
        icon: Clock3,
        features: [
            "Scheduled customer assistance",
            "General enquiry handling",
            "Basic support coordination",
        ],
    },
    {
        title: "Dedicated Support",
        subtitle: "For businesses needing consistent assistance",
        icon: Users,
        features: [
            "Assigned support resources",
            "Customer issue and ticket management",
            "Regular communication and reporting",
        ],
    },
    {
        title: "Custom Coverage",
        subtitle: "For growing or complex support requirements",
        icon: CalendarDays,
        features: [
            "Flexible staffing arrangements",
            "Extended or 24/7 coverage options",
            "Custom support workflows",
        ],
    },
];

/* ==================================
   FAQs
================================== */

const faqs = [
    {
        question: "What customer support activities can RiMax handle?",
        answer:
            "We can assist with general enquiries, product questions, order updates, returns, complaints, ticket management, and customer follow-ups based on the agreed service scope.",
    },
    {
        question: "Can RiMax support customers across multiple channels?",
        answer:
            "Yes. We can discuss coordinating support across email, live chat, and other agreed communication channels, depending on your systems and operational requirements.",
    },
    {
        question: "Can you provide 24/7 customer support?",
        answer:
            "Extended or 24/7 coverage can be arranged depending on expected support volume, staffing requirements, onboarding timelines, and the agreed service arrangement.",
    },
    {
        question: "How are complicated customer complaints handled?",
        answer:
            "Our team follows your approved complaint-handling procedures. Issues requiring management decisions, exceptions, or specialised assistance are escalated to your designated contact.",
    },
    {
        question: "Will your team follow our brand guidelines?",
        answer:
            "Yes. During onboarding, we review your communication standards, approved responses, business policies, and customer service procedures.",
    },
    {
        question: "Can we increase support as our business grows?",
        answer:
            "Yes. We can review support requirements and discuss adjusting staffing, working hours, and service responsibilities as your business needs change.",
    },
];

/* ==================================
   SECTION HEADING
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
            <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-orange-700">
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

export default function CustomerSupportPage() {
    return (
        <main className="overflow-hidden bg-white">

            {/* ==================================
                HERO
            ================================== */}

            <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-white">

                <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:py-20">

                    {/* LEFT */}

                    <div>
                        <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-orange-700">
                            RiMax Customer Experience Solutions
                        </p>

                        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            Professional
                            <span className="block text-orange-700">
                                Customer Support
                            </span>
                            for Your Business
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                            Build stronger customer relationships with
                            organised support, professional communication,
                            complaint handling, and reliable assistance
                            throughout the customer journey.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">

                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-orange-700"
                            >
                                Get Free Consultation
                                <ArrowUpRight size={19} />
                            </Link>

                            <a
                                href="#customer-services"
                                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-7 py-4 font-semibold text-gray-800 transition hover:border-orange-400"
                            >
                                Explore Customer Support
                                <ArrowRight size={18} />
                            </a>

                        </div>

                        <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-gray-700">

                            <span className="flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-orange-600" />
                                Flexible Coverage
                            </span>

                            <span className="flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-orange-600" />
                                Structured Workflows
                            </span>

                            <span className="flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-orange-600" />
                                Brand-Aligned Support
                            </span>

                        </div>
                    </div>

                    {/* RIGHT */}

                    <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-xl sm:p-8">

                        <div className="flex items-center gap-4 border-b border-gray-100 pb-5">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
                                <Headphones size={29} className="text-orange-700" />
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-gray-900">
                                    Customer Care Overview
                                </h2>

                                <p className="text-sm text-gray-500">
                                    Example support workflow
                                </p>
                            </div>

                        </div>

                        <div className="mt-6 space-y-4">

                            <div className="flex items-start gap-4 rounded-xl bg-orange-50 p-4">
                                <MessageCircle
                                    size={22}
                                    className="mt-1 shrink-0 text-orange-700"
                                />

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Customer Request
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        Receive and understand the customer's enquiry.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 rounded-xl bg-gray-50 p-4">
                                <ClipboardList
                                    size={22}
                                    className="mt-1 shrink-0 text-orange-700"
                                />

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Review & Assist
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        Check available information and follow approved procedures.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 rounded-xl bg-orange-50 p-4">
                                <RefreshCcw
                                    size={22}
                                    className="mt-1 shrink-0 text-orange-700"
                                />

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Resolve or Escalate
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        Provide the next steps or refer the issue to the responsible team.
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="mt-5 flex items-center gap-2 text-sm font-medium text-orange-700">
                            <ShieldCheck size={18} />
                            Clear, professional customer communication
                        </div>

                    </div>

                </div>
            </section>

            {/* ==================================
                WHAT SERVICE INCLUDES
            ================================== */}

            <section
                id="customer-services"
                className="scroll-mt-24 py-14 sm:py-16"
            >

                <div className="mx-auto max-w-7xl px-6">

                    <SectionHeading
                        label="What's Included"
                        title="What Our Customer Support Covers"
                        description="Practical assistance designed around your customers, products, and business processes."
                    />

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {services.map((service) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={service.title}
                                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-md"
                                >

                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50">
                                        <Icon size={24} className="text-orange-700" />
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
                            <Users size={26} className="text-orange-700" />

                            <h2 className="text-2xl font-bold text-gray-900">
                                Who Needs Customer Support?
                            </h2>
                        </div>

                        <div className="space-y-4">

                            {audiences.map((item) => (
                                <div key={item} className="flex items-start gap-3">

                                    <CheckCircle2
                                        size={20}
                                        className="mt-1 shrink-0 text-orange-600"
                                    />

                                    <p className="leading-7 text-gray-600">
                                        {item}
                                    </p>

                                </div>
                            ))}

                        </div>
                    </div>

                    {/* REQUIREMENTS */}

                    <div className="rounded-3xl bg-white p-7 shadow-sm">

                        <div className="mb-5 flex items-center gap-3">
                            <FileText size={26} className="text-orange-700" />

                            <h2 className="text-2xl font-bold text-gray-900">
                                What We Need From You
                            </h2>
                        </div>

                        <div className="space-y-4">

                            {requirements.map((item) => (
                                <div key={item} className="flex items-start gap-3">

                                    <CheckCircle2
                                        size={20}
                                        className="mt-1 shrink-0 text-orange-600"
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
                        title="How RiMax Delivers Customer Support"
                    />

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {process.map((step) => (
                            <div
                                key={step.number}
                                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                            >

                                <span className="text-3xl font-extrabold text-orange-600">
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
                        label="Flexible Support"
                        title="Customer Support Engagement Models"
                        description="Support arrangements designed around your operational needs."
                    />

                    <div className="grid gap-5 md:grid-cols-3">

                        {packages.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className={`flex flex-col rounded-2xl border p-6 shadow-sm ${
                                        index === 1
                                            ? "border-orange-400 bg-orange-50"
                                            : "border-gray-200 bg-white"
                                    }`}
                                >

                                    <Icon size={30} className="text-orange-700" />

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
                                                    className="mt-1 shrink-0 text-orange-600"
                                                />

                                                <span className="text-sm leading-6 text-gray-700">
                                                    {feature}
                                                </span>

                                            </div>
                                        ))}

                                    </div>

                                    <Link
                                        href="/#contact"
                                        className="mt-7 rounded-xl bg-orange-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-orange-700"
                                    >
                                        Discuss This Option
                                    </Link>

                                </div>
                            );
                        })}

                    </div>

                    <p className="mt-5 text-center text-sm text-gray-500">
                        Coverage, staffing, pricing, and responsibilities
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
                        title="Customer Support FAQs"
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
                                        className="shrink-0 text-orange-700 transition group-open:rotate-180"
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

            <section className="bg-gradient-to-r from-orange-600 to-amber-600 py-14 text-white">

                <div className="mx-auto max-w-4xl px-6 text-center">

                    <h2 className="text-3xl font-extrabold sm:text-4xl">
                        Ready to Improve Your Customer Support?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-8 text-orange-50">
                        Tell us about your customers, support volume,
                        and operational requirements. We'll discuss
                        a suitable customer support arrangement
                        for your business.
                    </p>

                    <Link
                        href="/#contact"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-orange-700 shadow-lg transition hover:-translate-y-1"
                    >
                        Get Free Consultation
                        <ArrowUpRight size={19} />
                    </Link>

                </div>
            </section>

        </main>
    );
}