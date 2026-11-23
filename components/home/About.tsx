import Image from "next/image";

import {
    CheckCircle2,
    ChevronDown,
    Handshake,
    HeartHandshake,
    TrendingUp,
} from "lucide-react";

/* ==================================
   ABOUT FAQ DATA
================================== */

const faqs = [
    {
        question: "Who founded RiMax Technologies?",
        answer:
            "RiMax Technologies was founded by Veera (Founder) and Harshavardhan Reddy (Co-Founder) with a shared vision of helping businesses grow through reliable operational support and effective digital solutions.",
    },
    {
        question: "Why was RiMax established?",
        answer:
            "RiMax was established to help existing D2C brands, e-commerce businesses, and other growing companies reach their maximum potential. We understand that managing customer support, daily operations, and marketing can take valuable time away from business growth. Our goal is to take these responsibilities off our clients’ shoulders so they can focus on building and scaling their businesses.",
    },
    {
        question: "What does RiMax believe in?",
        answer:
            "We believe every business deserves the opportunity to grow without being held back by operational challenges. We value reliability, transparency, customer satisfaction, continuous improvement, and long-term partnerships. Our success is measured by the growth and success of the businesses we support.",
    },
    {
        question: "How does RiMax manage client operations?",
        answer:
            "We work as an extension of our clients’ teams. After understanding each business’s requirements, workflows, and goals, we develop a structured approach to managing customer support and other agreed operational responsibilities. We focus on clear communication, consistent service delivery, and regular performance monitoring.",
    },
    {
        question: "Where is the RiMax team based?",
        answer:
            "RiMax Technologies operates remotely from its own dedicated setup in India. Our remote delivery model allows us to support businesses efficiently while maintaining structured workflows, communication, and service quality.",
    },
    {
        question: "Which businesses does RiMax work with?",
        answer:
            "We primarily focus on D2C brands, e-commerce businesses, and product-based companies. We also work with other businesses looking to improve their customer experience, streamline operations, and strengthen their digital presence.",
    },
    {
        question: "What services does RiMax offer?",
        answer:
            "RiMax provides customer support and business operations services, along with digital marketing solutions. Our services include customer query management, order-related support, social media management, content creation, brand promotions, advertising creatives, and digital marketing support.",
    },
    {
        question: "Can RiMax handle both customer support and marketing?",
        answer:
            "Yes. We aim to provide businesses with a reliable partner for both customer experience and marketing support. This helps businesses reduce the burden of managing multiple service providers while keeping their operations and brand communication more coordinated.",
    },
    {
        question: "How does RiMax get started with a new client?",
        answer:
            "We begin by understanding your business, customer base, operational challenges, and growth objectives. Based on your requirements, we discuss the right services, define responsibilities, establish workflows, and create a plan to begin working together.",
    },
    {
        question: "Why should a business choose RiMax?",
        answer:
            "RiMax focuses on understanding your business rather than offering one-size-fits-all solutions. We aim to become a dependable extension of your team, helping you manage essential operations, improve customer experiences, and create more room for business growth.",
    },
];

/* ==================================
   COMPANY VALUES
================================== */

const values = [
    {
        icon: Handshake,
        title: "Reliability",
        description:
            "Dependable operational support built around your business needs.",
    },
    {
        icon: HeartHandshake,
        title: "Transparency",
        description:
            "Clear communication and long-term relationships based on trust.",
    },
    {
        icon: CheckCircle2,
        title: "Customer Satisfaction",
        description:
            "A commitment to delivering better customer experiences.",
    },
    {
        icon: TrendingUp,
        title: "Continuous Improvement",
        description:
            "Improving workflows and service delivery as your business grows.",
    },
];

/* ==================================
   FOUNDERS DATA
================================== */

const founders = [
    {
        name: "Veera",
        role: "Founder",
        image: "/images/veera.jpg",
        description:
            "Committed to helping growing businesses simplify operations and reach their maximum potential.",
    },
    {
        name: "Harshavardhan Reddy",
        role: "Co-Founder",
        image: "/images/harsha.png",
        description:
            "Focused on building reliable services and effective digital solutions for growing businesses.",
    },
];

/* ==================================
   ABOUT COMPONENT
================================== */

export default function About() {
    return (
        <section
            id="about"
            className="scroll-mt-24 overflow-hidden bg-gray-50 py-16 sm:py-20"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* ==================================
                    SECTION INTRODUCTION
                ================================== */}

                <div className="mx-auto mb-14 max-w-3xl text-center">

                    <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-blue-700">
                        About RiMax Technologies
                    </p>

                    <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        Get to Know{" "}
                        <span className="text-blue-700">
                            RiMax
                        </span>
                    </h2>

                    <p className="text-lg leading-8 text-gray-600">
                        Helping businesses reach their maximum potential
                        through reliable operational support, exceptional
                        customer experiences, and effective digital solutions.
                    </p>

                </div>

                {/* ==================================
                    OUR STORY + FOUNDERS
                ================================== */}

                <div className="mb-16 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">

                    {/* LEFT COLUMN - OUR STORY */}

                    <div>

                        <p className="mb-4 font-semibold uppercase tracking-widest text-blue-700">
                            Our Story
                        </p>

                        <h3 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                            Your Growth Is at the Heart of{" "}
                            <span className="text-blue-700">
                                What We Do.
                            </span>
                        </h3>

                        <p className="mb-4 leading-8 text-gray-600">
                            RiMax Technologies was founded by Mohith Reddy
                            and Harshavardhan Reddy with a shared vision
                            of helping businesses grow through reliable
                            operational support and effective digital solutions.
                        </p>

                        <p className="mb-4 leading-8 text-gray-600">
                            We established RiMax to help D2C brands,
                            e-commerce businesses, and growing companies
                            reach their maximum potential.
                        </p>

                        <p className="leading-8 text-gray-600">
                            By supporting customer service, daily operations,
                            and digital marketing, we aim to take essential
                            responsibilities off our clients&apos; shoulders
                            so they can focus on building and scaling
                            their businesses.
                        </p>

                    </div>

                    {/* RIGHT COLUMN - FOUNDERS */}

                    <div>

                        <div className="mb-7 text-center">

                            <p className="mb-3 font-semibold uppercase tracking-widest text-blue-700">
                                The People Behind RiMax
                            </p>

                            <h3 className="text-3xl font-bold text-gray-900">
                                Meet Our{" "}
                                <span className="text-blue-700">
                                    Founders
                                </span>
                            </h3>

                            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-600">
                                United by a shared vision to help businesses
                                grow through dependable support and
                                meaningful partnerships.
                            </p>

                        </div>

                        {/* FOUNDER CARDS */}

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                            {founders.map((founder) => (

                                <div
                                    key={founder.name}
                                    className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >

                                    {/* FOUNDER IMAGE */}

                                    <div className="relative h-64 w-full bg-gray-100">

                                        <Image
                                            src={founder.image}
                                            alt={`${founder.name} - ${founder.role} of RiMax Technologies`}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                                            className="object-cover object-top"
                                        />

                                    </div>

                                    {/* FOUNDER DETAILS */}

                                    <div className="p-5 text-center">

                                        <h4 className="text-lg font-bold text-gray-900">
                                            {founder.name}
                                        </h4>

                                        <p className="mt-1 font-semibold text-blue-700">
                                            {founder.role}
                                        </p>

                                        <p className="mt-3 text-sm leading-6 text-gray-600">
                                            {founder.description}
                                        </p>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

                {/* ==================================
                    MISSION & VALUES
                ================================== */}

                <div className="mb-16">

                    <div className="mb-9 text-center">

                        <p className="mb-3 font-semibold uppercase tracking-widest text-blue-700">
                            What Drives Us
                        </p>

                        <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Our Mission &{" "}
                            <span className="text-blue-700">
                                Values
                            </span>
                        </h3>

                    </div>

                    {/* MISSION */}

                    <div className="mb-7 rounded-3xl bg-blue-700 p-7 text-white sm:p-9">

                        <h4 className="mb-3 text-2xl font-bold">
                            Our Mission
                        </h4>

                        <p className="max-w-4xl text-lg leading-8 text-blue-50">
                            To help growing businesses focus on expansion
                            by providing reliable customer support,
                            structured business operations, and
                            effective digital marketing solutions.
                            We aim to build lasting partnerships
                            that support sustainable business growth.
                        </p>

                    </div>

                    {/* VALUES */}

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {values.map((value) => {

                            const Icon = value.icon;

                            return (

                                <div
                                    key={value.title}
                                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                                >

                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">

                                        <Icon
                                            size={24}
                                            className="text-blue-700"
                                        />

                                    </div>

                                    <h4 className="mb-3 text-lg font-bold text-gray-900">
                                        {value.title}
                                    </h4>

                                    <p className="text-sm leading-7 text-gray-600">
                                        {value.description}
                                    </p>

                                </div>

                            );

                        })}

                    </div>

                </div>

                {/* ==================================
                    FAQ SECTION
                ================================== */}

                <div className="mx-auto max-w-7xl">

                    {/* FAQ HEADING */}

                    <div className="mb-8 text-center">

                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">
                            Learn More About Us
                        </p>

                        <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Frequently Asked{" "}
                            <span className="text-blue-700">
                                Questions
                            </span>
                        </h3>

                        <p className="mt-3 text-sm text-gray-600">
                            Everything you need to know about
                            RiMax Technologies and how we work.
                        </p>

                    </div>

                    {/* TWO-COLUMN FAQ GRID */}

                    <div className="grid grid-cols-1 items-start gap-3 md:grid-cols-2">

                        {faqs.map((faq, index) => (

                            <details
                                key={faq.question}
                                className="group min-w-0 rounded-xl border border-gray-200 bg-white px-4 py-4 shadow-sm transition-all duration-300 hover:border-blue-200 open:border-blue-300 open:shadow-md"
                            >

                                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">

                                    <span className="flex min-w-0 items-start gap-3">

                                        <span className="shrink-0 font-bold text-blue-700">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="leading-6">
                                            {faq.question}
                                        </span>

                                    </span>

                                    <ChevronDown
                                        size={18}
                                        className="shrink-0 text-blue-700 transition-transform duration-300 group-open:rotate-180"
                                    />

                                </summary>

                                {/* EXPANDABLE ANSWER */}

                                <div className="mt-4 border-t border-gray-100 pt-4 text-sm leading-7 text-gray-600">
                                    {faq.answer}
                                </div>

                            </details>

                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
}