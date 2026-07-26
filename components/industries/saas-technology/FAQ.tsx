"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Can RiMax support SaaS and technology companies?",
        answer:
            "Yes. RiMax Technologies provides dedicated customer support solutions for SaaS companies, software providers, cloud platforms, AI businesses, cybersecurity firms, and technology organizations of all sizes.",
    },
    {
        question: "Do you provide technical customer support?",
        answer:
            "Absolutely. Our teams assist users with product onboarding, account management, technical troubleshooting, subscription inquiries, feature guidance, and general product support while following your support processes.",
    },
    {
        question: "Can your team handle subscription and billing inquiries?",
        answer:
            "Yes. We help customers with subscription management, billing questions, payment issues, account updates, renewals, and licensing inquiries to ensure a smooth customer experience.",
    },
    {
        question: "Can RiMax scale support as our user base grows?",
        answer:
            "Yes. Whether you're launching new features, expanding globally, or experiencing rapid customer growth, our scalable support teams can grow alongside your business while maintaining consistent service quality.",
    },
    {
        question: "Which communication channels do you support?",
        answer:
            "We provide customer support through live chat, email, help desk platforms, ticketing systems, and other digital communication channels, delivering fast and professional assistance for your users.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-5xl px-6">

                <div className="mb-16 text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-violet-700">
                        Frequently Asked Questions
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        SaaS & Technology FAQs
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Find answers to common questions about our SaaS and
                        technology customer support solutions.
                    </p>

                </div>

                <div className="space-y-5">

                    {faqs.map((faq, index) => (

                        <div
                            key={index}
                            className="rounded-2xl border border-gray-200"
                        >

                            <button
                                onClick={() =>
                                    setOpen(open === index ? null : index)
                                }
                                className="flex w-full items-center justify-between p-6 text-left"
                            >

                                <span className="text-lg font-semibold text-gray-900">
                                    {faq.question}
                                </span>

                                <ChevronDown
                                    className={`transition-transform ${
                                        open === index ? "rotate-180" : ""
                                    }`}
                                />

                            </button>

                            {open === index && (

                                <div className="border-t border-gray-100 px-6 py-5 leading-8 text-gray-600">

                                    {faq.answer}

                                </div>

                            )}

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}