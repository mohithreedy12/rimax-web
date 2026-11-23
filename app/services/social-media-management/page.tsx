import Link from "next/link";
import {
    Camera,
    CalendarDays,
    PenTool,
    MessageCircle,
    Image,
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
        icon: CalendarDays,
        title: "Content Planning",
        description:
            "Plan social media content around your products, promotions, and brand communication goals.",
    },
    {
        icon: PenTool,
        title: "Captions & Copywriting",
        description:
            "Prepare engaging captions, post descriptions, and promotional messages aligned with your brand voice.",
    },
    {
        icon: Image,
        title: "Social Media Creatives",
        description:
            "Create graphics and visual content using your brand assets, approved materials, and design guidelines.",
    },
    {
        icon: Send,
        title: "Post Scheduling",
        description:
            "Organise and schedule approved content across your selected social media platforms.",
    },
    {
        icon: MessageCircle,
        title: "Audience Engagement",
        description:
            "Assist with comments, messages, and routine community interactions using approved response guidelines.",
    },
    {
        icon: BarChart3,
        title: "Performance Reporting",
        description:
            "Prepare reports covering content activity, engagement trends, and available platform insights.",
    },
];

/* ==================================
   WHO NEEDS THIS SERVICE
================================== */

const audiences = [
    "D2C brands building a consistent social media presence",
    "E-commerce businesses promoting products and offers",
    "Startups needing organised social media content",
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
            "We understand your brand, target audience, platforms, and content goals.",
    },
    {
        number: "02",
        title: "Plan",
        description:
            "We prepare a content calendar, creative ideas, and posting schedule for approval.",
    },
    {
        number: "03",
        title: "Publish",
        description:
            "We create and schedule approved posts and handle agreed community activities.",
    },
    {
        number: "04",
        title: "Review",
        description:
            "We share performance updates and refine future content based on available insights.",
    },
];

/* ==================================
   CLIENT REQUIREMENTS
================================== */

const requirements = [
    "Brand logo, colours, guidelines, and product information",
    "Approved access to relevant social media accounts",
    "Images, videos, offers, and promotional details",
    "A contact person for content reviews and approvals",
];

/* ==================================
   ENGAGEMENT MODELS
================================== */

const packages = [
    {
        title: "Basic Management",
        subtitle: "For businesses starting their social presence",
        icon: Clock3,
        features: [
            "Limited monthly content planning",
            "Post creation and scheduling",
            "Basic activity updates",
        ],
    },
    {
        title: "Ongoing Management",
        subtitle: "For brands needing regular content",
        icon: Users,
        features: [
            "Recurring content calendars",
            "Post creation and publishing",
            "Community engagement and reporting",
        ],
    },
    {
        title: "Custom Management",
        subtitle: "For specific platform and campaign needs",
        icon: CalendarDays,
        features: [
            "Flexible platform coverage",
            "Custom content and posting schedules",
            "Campaign coordination and reporting",
        ],
    },
];

/* ==================================
   FAQs
================================== */

const faqs = [
    {
        question: "Which social media platforms can RiMax manage?",
        answer:
            "We can discuss managing platforms such as Instagram, Facebook, LinkedIn, and other relevant channels depending on your business requirements and available account access.",
    },
    {
        question: "Will RiMax create social media posts?",
        answer:
            "Yes. We can prepare captions, graphics, and promotional content using your brand information, approved assets, and communication guidelines.",
    },
    {
        question: "Do I need to approve content before publishing?",
        answer:
            "We can establish an approval process during onboarding so your designated team reviews content before it is scheduled or published.",
    },
    {
        question: "Can RiMax respond to comments and messages?",
        answer:
            "Yes. Routine audience interactions can be included in the agreed scope. Sensitive complaints or questions requiring business decisions are escalated.",
    },
    {
        question: "Will you guarantee followers or engagement growth?",
        answer:
            "No specific follower or engagement results are guaranteed. We focus on consistent content management, audience communication, and reviewing available performance data.",
    },
    {
        question: "Can I start with one social media platform?",
        answer:
            "Yes. We can discuss managing one platform initially and expanding the arrangement as your requirements change.",
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
            <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-cyan-700">
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

export default function SocialMediaManagementPage() {
    return (
        <main className="overflow-hidden bg-white">

            {/* ==================================
                HERO
            ================================== */}

            <section className="bg-gradient-to-br from-cyan-50 via-sky-50 to-white">

                <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:py-20">

                    {/* LEFT */}

                    <div>
                        <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-cyan-700">
                            RiMax Digital Presence Solutions
                        </p>

                        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            Build a Stronger
                            <span className="block text-cyan-700">
                                Social Media Presence
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                            Keep your brand active and consistent
                            with organised content planning,
                            creative social media posts,
                            scheduled publishing, and audience engagement.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">

                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-2 rounded-xl bg-cyan-700 px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-cyan-800"
                            >
                                Get Free Consultation
                                <ArrowUpRight size={19} />
                            </Link>

                            <a
                                href="#social-services"
                                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-7 py-4 font-semibold text-gray-800 transition hover:border-cyan-400"
                            >
                                Explore Our Services
                                <ArrowRight size={18} />
                            </a>

                        </div>

                        <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-gray-700">

                            <span className="flex items-center gap-2">
                                <CheckCircle2
                                    size={18}
                                    className="text-cyan-700"
                                />
                                Content Planning
                            </span>

                            <span className="flex items-center gap-2">
                                <CheckCircle2
                                    size={18}
                                    className="text-cyan-700"
                                />
                                Consistent Posting
                            </span>

                            <span className="flex items-center gap-2">
                                <CheckCircle2
                                    size={18}
                                    className="text-cyan-700"
                                />
                                Audience Engagement
                            </span>

                        </div>
                    </div>

                    {/* RIGHT - SOCIAL MEDIA PREVIEW */}

                    <div className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-xl sm:p-8">

                        <div className="flex items-center gap-4 border-b border-gray-100 pb-5">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                                <Camera
                                    size={29}
                                    className="text-cyan-700"
                                />
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-gray-900">
                                    Social Media Planner
                                </h2>

                                <p className="text-sm text-gray-500">
                                    Example content workflow
                                </p>
                            </div>

                        </div>

                        <div className="mt-6 space-y-4">

                            <div className="flex items-start gap-4 rounded-xl bg-cyan-50 p-4">

                                <CalendarDays
                                    size={22}
                                    className="mt-1 shrink-0 text-cyan-700"
                                />

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Content Calendar
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        Plan upcoming posts, promotions, and content themes.
                                    </p>
                                </div>

                            </div>

                            <div className="flex items-start gap-4 rounded-xl bg-gray-50 p-4">

                                <PenTool
                                    size={22}
                                    className="mt-1 shrink-0 text-cyan-700"
                                />

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Creative Preparation
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        Prepare captions, visuals, and posts for review.
                                    </p>
                                </div>

                            </div>

                            <div className="flex items-start gap-4 rounded-xl bg-cyan-50 p-4">

                                <Send
                                    size={22}
                                    className="mt-1 shrink-0 text-cyan-700"
                                />

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Schedule & Publish
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        Publish approved content and monitor engagement.
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="mt-5 flex items-center gap-2 text-sm font-medium text-cyan-700">
                            <ShieldCheck size={18} />
                            Brand-aligned content management
                        </div>

                    </div>

                </div>
            </section>

            {/* ==================================
                WHAT THE SERVICE INCLUDES
            ================================== */}

            <section
                id="social-services"
                className="scroll-mt-24 py-14 sm:py-16"
            >

                <div className="mx-auto max-w-7xl px-6">

                    <SectionHeading
                        label="What's Included"
                        title="What Our Social Media Service Covers"
                        description="Practical social media management tailored to your brand and communication goals."
                    />

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {services.map((service) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={service.title}
                                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-md"
                                >

                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                                        <Icon
                                            size={24}
                                            className="text-cyan-700"
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
                                className="text-cyan-700"
                            />

                            <h2 className="text-2xl font-bold text-gray-900">
                                Who Needs Social Media Management?
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
                                        className="mt-1 shrink-0 text-cyan-700"
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
                                className="text-cyan-700"
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
                                        className="mt-1 shrink-0 text-cyan-700"
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
                        title="How RiMax Manages Your Social Media"
                    />

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {process.map((step) => (
                            <div
                                key={step.number}
                                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                            >

                                <span className="text-3xl font-extrabold text-cyan-700">
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
                        title="Social Media Management Options"
                        description="Choose an arrangement based on your platforms, content requirements, and posting frequency."
                    />

                    <div className="grid gap-5 md:grid-cols-3">

                        {packages.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className={`flex flex-col rounded-2xl border p-6 shadow-sm ${
                                        index === 1
                                            ? "border-cyan-400 bg-cyan-50"
                                            : "border-gray-200 bg-white"
                                    }`}
                                >

                                    <Icon
                                        size={30}
                                        className="text-cyan-700"
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
                                                    className="mt-1 shrink-0 text-cyan-700"
                                                />

                                                <span className="text-sm leading-6 text-gray-700">
                                                    {feature}
                                                </span>

                                            </div>
                                        ))}

                                    </div>

                                    <Link
                                        href="/#contact"
                                        className="mt-7 rounded-xl bg-cyan-700 px-5 py-3 text-center font-semibold text-white transition hover:bg-cyan-800"
                                    >
                                        Discuss This Option
                                    </Link>

                                </div>
                            );
                        })}

                    </div>

                    <p className="mt-5 text-center text-sm text-gray-500">
                        Platform coverage, content volume, pricing, and
                        responsibilities are confirmed during consultation.
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
                        title="Social Media Management FAQs"
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
                                        className="shrink-0 text-cyan-700 transition group-open:rotate-180"
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

            <section className="bg-gradient-to-r from-cyan-700 to-blue-700 py-14 text-white">

                <div className="mx-auto max-w-4xl px-6 text-center">

                    <h2 className="text-3xl font-extrabold sm:text-4xl">
                        Ready to Strengthen Your Social Media Presence?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-8 text-cyan-50">
                        Tell us about your brand, platforms, and content
                        goals. We'll discuss a social media management
                        arrangement that fits your business.
                    </p>

                    <Link
                        href="/#contact"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-cyan-700 shadow-lg transition hover:-translate-y-1"
                    >
                        Get Free Consultation
                        <ArrowUpRight size={19} />
                    </Link>

                </div>
            </section>

        </main>
    );
}