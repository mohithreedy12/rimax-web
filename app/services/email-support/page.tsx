import Link from "next/link";

import {
    Mail,
    Inbox,
    Clock3,
    CheckCircle2,
    ArrowUpRight,
    ChevronDown,
    ShoppingCart,
    MessageSquare,
    FileText,
    BarChart3,
    Users,
    Settings,
    ClipboardList,
    Send,
    ShieldCheck,
    CalendarDays,
} from "lucide-react";

/* ==================================
   WHAT EMAIL SUPPORT INCLUDES
================================== */

const services = [
    {
        icon: Inbox,
        title: "Inbox Management",
        description:
            "Organise incoming emails, categorise requests, and prioritise important customer enquiries.",
    },
    {
        icon: MessageSquare,
        title: "Customer Enquiries",
        description:
            "Respond to product questions, service enquiries, and general customer requests.",
    },
    {
        icon: ShoppingCart,
        title: "Order & Refund Support",
        description:
            "Assist with order updates, delivery questions, returns, and refund requests.",
    },
    {
        icon: ClipboardList,
        title: "Ticket Management",
        description:
            "Track customer issues, maintain records, and escalate unresolved requests.",
    },
    {
        icon: Send,
        title: "Follow-Up Emails",
        description:
            "Send approved follow-ups and keep customers informed about pending requests.",
    },
    {
        icon: BarChart3,
        title: "Email Reporting",
        description:
            "Share agreed reports on email volumes, pending requests, and recurring issues.",
    },
];

/* ==================================
   WHO NEEDS EMAIL SUPPORT
================================== */

const audiences = [
    "E-commerce stores managing orders and returns",
    "D2C brands handling product enquiries",
    "Growing businesses with increasing email volumes",
    "Service providers managing customer requests",
];

/* ==================================
   HOW RIMAX DELIVERS
================================== */

const process = [
    {
        number: "01",
        title: "Understand",
        description:
            "We review your email volume, customer needs, policies, and preferred support hours.",
    },
    {
        number: "02",
        title: "Set Up",
        description:
            "We configure agreed workflows, email templates, access, and escalation procedures.",
    },
    {
        number: "03",
        title: "Manage",
        description:
            "Our team handles customer emails according to your approved guidelines.",
    },
    {
        number: "04",
        title: "Improve",
        description:
            "We review pending requests, share updates, and refine communication processes.",
    },
];

/* ==================================
   CLIENT REQUIREMENTS
================================== */

const requirements = [
    "Access to your email inbox or helpdesk platform",
    "Product details, policies, and customer FAQs",
    "Approved email templates and brand guidelines",
    "Escalation contacts and response expectations",
];

/* ==================================
   ENGAGEMENT MODELS
================================== */

const packages = [
    {
        title: "Part-Time Support",
        subtitle: "For smaller email volumes",
        icon: Clock3,
        features: [
            "Scheduled inbox monitoring",
            "Customer email responses",
            "Basic follow-up management",
        ],
    },
    {
        title: "Dedicated Email Support",
        subtitle: "For regular customer enquiries",
        icon: Users,
        features: [
            "Assigned email support resources",
            "Organised ticket handling",
            "Regular reporting and coordination",
        ],
    },
    {
        title: "Custom Coverage",
        subtitle: "For specific business requirements",
        icon: CalendarDays,
        features: [
            "Flexible staffing arrangements",
            "Extended or 24/7 coverage options",
            "Custom workflows and escalation rules",
        ],
    },
];

/* ==================================
   EMAIL SUPPORT FAQs
================================== */

const faqs = [
    {
        question: "Can RiMax manage our existing email inbox?",
        answer:
            "Yes. We can work with your existing email or helpdesk platform, subject to the required access and system capabilities.",
    },
    {
        question: "Can you handle order and refund emails?",
        answer:
            "Yes. We can assist with order updates, returns, and refund enquiries according to your approved business policies.",
    },
    {
        question: "Can you provide 24/7 email support?",
        answer:
            "Yes. Extended or 24/7 coverage can be arranged based on your requirements, onboarding timeline, and agreed staffing plan.",
    },
    {
        question: "How do you maintain our brand voice?",
        answer:
            "We follow your approved email templates, communication guidelines, product information, and escalation procedures.",
    },
    {
        question: "What happens to complicated customer requests?",
        answer:
            "Requests outside the agreed support scope are documented and escalated to your designated contact or responsible team.",
    },
    {
        question: "Can we start with a smaller package?",
        answer:
            "Yes. We can discuss limited-hours support initially and adjust the arrangement as your email volume grows.",
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

            <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-emerald-700">
                {label}
            </p>

            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {title}
            </h2>

            {description && (
                <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                    {description}
                </p>
            )}

        </div>
    );
}

/* ==================================
   MAIN COMPONENT
================================== */

export default function EmailSupportPage() {
    return (
        <main className="overflow-hidden bg-white">

            {/* ==================================
                HERO
            ================================== */}

            <section className="bg-gradient-to-br from-slate-50 via-emerald-50 to-white">

                <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:py-20">

                    {/* LEFT */}

                    <div>

                        <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-emerald-700">
                            RiMax Customer Experience Solutions
                        </p>

                        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            Professional
                            <span className="block text-emerald-700">
                                Email Support
                            </span>
                            for Your Business
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                            Keep customer communication organised
                            with professional email management,
                            timely responses, structured ticket handling,
                            and reliable follow-ups.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">

                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-emerald-800"
                            >
                                Get Free Consultation
                                <ArrowUpRight size={19} />
                            </Link>

                            <a
                                href="#email-services"
                                className="rounded-xl border border-gray-300 bg-white px-7 py-4 font-semibold text-gray-800 transition hover:border-emerald-500"
                            >
                                Explore Email Support
                            </a>

                        </div>

                        <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-gray-700">

                            <span className="flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-emerald-700" />
                                Organised Inbox
                            </span>

                            <span className="flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-emerald-700" />
                                Professional Replies
                            </span>

                            <span className="flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-emerald-700" />
                                Flexible Coverage
                            </span>

                        </div>

                    </div>

                    {/* RIGHT - EMAIL PREVIEW */}

                    <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-xl">

                        <div className="flex items-center gap-3 border-b border-gray-100 pb-5">

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                                <Mail size={25} className="text-emerald-700" />
                            </div>

                            <div>
                                <h2 className="font-bold text-gray-900">
                                    Customer Email Support
                                </h2>

                                <p className="text-sm text-gray-500">
                                    Example email response
                                </p>
                            </div>

                        </div>

                        <div className="mt-6 space-y-4">

                            <div className="rounded-xl bg-gray-50 p-4">

                                <p className="text-xs font-semibold uppercase text-gray-500">
                                    Customer Enquiry
                                </p>

                                <p className="mt-2 font-semibold text-gray-900">
                                    Subject: Order Delivery Update
                                </p>

                                <p className="mt-3 text-sm leading-7 text-gray-600">
                                    Hello, I placed an order recently.
                                    Could you please help me check
                                    its delivery status?
                                </p>

                            </div>

                            <div className="rounded-xl bg-emerald-50 p-4">

                                <p className="text-xs font-semibold uppercase text-emerald-700">
                                    Support Response
                                </p>

                                <p className="mt-3 text-sm leading-7 text-gray-700">
                                    Hello! Thank you for contacting us.
                                    Please share your order number so
                                    we can review the available shipping
                                    information and assist you further.
                                </p>

                            </div>

                        </div>

                        <div className="mt-5 flex items-center gap-2 text-sm font-medium text-emerald-700">
                            <ShieldCheck size={18} />
                            Brand-aligned customer communication
                        </div>

                    </div>

                </div>

            </section>

            {/* ==================================
                WHAT SERVICE INCLUDES
            ================================== */}

            <section
                id="email-services"
                className="scroll-mt-24 py-14 sm:py-16"
            >

                <div className="mx-auto max-w-7xl px-6">

                    <SectionHeading
                        label="What's Included"
                        title="What Our Email Support Covers"
                        description="Practical email management solutions tailored to your customer communication needs."
                    />

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {services.map((service) => {

                            const Icon = service.icon;

                            return (
                                <div
                                    key={service.title}
                                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
                                >

                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50">
                                        <Icon size={24} className="text-emerald-700" />
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

                            <Users size={26} className="text-emerald-700" />

                            <h2 className="text-2xl font-bold text-gray-900">
                                Who Needs Email Support?
                            </h2>

                        </div>

                        <div className="space-y-4">

                            {audiences.map((item) => (
                                <div key={item} className="flex items-start gap-3">

                                    <CheckCircle2
                                        size={20}
                                        className="mt-1 shrink-0 text-emerald-700"
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

                            <FileText size={26} className="text-emerald-700" />

                            <h2 className="text-2xl font-bold text-gray-900">
                                What We Need From You
                            </h2>

                        </div>

                        <div className="space-y-4">

                            {requirements.map((item) => (
                                <div key={item} className="flex items-start gap-3">

                                    <CheckCircle2
                                        size={20}
                                        className="mt-1 shrink-0 text-emerald-700"
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
                        title="How RiMax Manages Your Emails"
                    />

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {process.map((step) => (
                            <div
                                key={step.number}
                                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                            >

                                <span className="text-3xl font-extrabold text-emerald-600">
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
                        title="Email Support Engagement Models"
                        description="Choose an arrangement based on your email volume, support schedule, and business needs."
                    />

                    <div className="grid gap-5 md:grid-cols-3">

                        {packages.map((item, index) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className={`flex flex-col rounded-2xl border p-6 shadow-sm ${
                                        index === 1
                                            ? "border-emerald-400 bg-emerald-50"
                                            : "border-gray-200 bg-white"
                                    }`}
                                >

                                    <Icon size={30} className="text-emerald-700" />

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
                                                    className="mt-1 shrink-0 text-emerald-700"
                                                />

                                                <span className="text-sm leading-6 text-gray-700">
                                                    {feature}
                                                </span>

                                            </div>
                                        ))}

                                    </div>

                                    <Link
                                        href="/#contact"
                                        className="mt-7 rounded-xl bg-emerald-700 px-5 py-3 text-center font-semibold text-white transition hover:bg-emerald-800"
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
                        title="Email Support FAQs"
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
                                        className="shrink-0 text-emerald-700 transition group-open:rotate-180"
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

            <section className="bg-gradient-to-r from-emerald-700 to-teal-700 py-14 text-white">

                <div className="mx-auto max-w-4xl px-6 text-center">

                    <h2 className="text-3xl font-extrabold sm:text-4xl">
                        Ready to Simplify Your Email Support?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-8 text-emerald-50">
                        Let RiMax help manage customer emails,
                        organise requests, and maintain professional
                        communication while you focus on growing
                        your business.
                    </p>

                    <Link
                        href="/#contact"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-lg transition hover:-translate-y-1"
                    >
                        Get Free Consultation
                        <ArrowUpRight size={19} />
                    </Link>

                </div>

            </section>

        </main>
    );
}