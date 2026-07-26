"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Can RiMax support telecommunications and internet service providers?",
        answer:
            "Yes. RiMax Technologies provides dedicated customer support solutions for telecommunications companies, internet service providers, broadband providers, mobile operators, and communication service businesses.",
    },
    {
        question: "Do you provide technical support for telecom customers?",
        answer:
            "Absolutely. Our teams assist customers with internet connectivity issues, mobile services, technical troubleshooting, service activation, account management, and general customer inquiries.",
    },
    {
        question: "Can your team handle billing and account-related questions?",
        answer:
            "Yes. We provide support for billing inquiries, payment assistance, account updates, plan changes, and other customer service requests while following your organization's support processes.",
    },
    {
        question: "Can RiMax scale support during service outages or peak demand?",
        answer:
            "Yes. Our customer support teams can quickly scale during network outages, new product launches, promotional campaigns, or periods of increased customer demand while maintaining excellent service quality.",
    },
    {
        question: "Which communication channels do you support?",
        answer:
            "We provide customer support through live chat, email, help desk platforms, and other digital communication channels, delivering fast and professional assistance across multiple touchpoints.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-5xl px-6">

                <div className="mb-16 text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-cyan-700">
                        Frequently Asked Questions
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        Telecommunications FAQs
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Find answers to common questions about our
                        telecommunications customer support solutions.
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