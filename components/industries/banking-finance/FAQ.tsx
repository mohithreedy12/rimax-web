"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Can RiMax support banks and financial institutions?",
        answer:
            "Yes. RiMax Technologies provides dedicated customer support solutions for banks, credit unions, fintech companies, insurance providers, and other financial organizations with professional and customer-focused service.",
    },
    {
        question: "Do you provide support for digital banking customers?",
        answer:
            "Absolutely. Our teams assist customers with online banking, mobile banking, account access, payment inquiries, transaction questions, and general digital banking support.",
    },
    {
        question: "Can your team assist with loan and account inquiries?",
        answer:
            "Yes. We help customers with loan inquiries, account-related questions, banking services, and general customer assistance while following your organization's support processes.",
    },
    {
        question: "Can RiMax scale customer support during high-demand periods?",
        answer:
            "Yes. Whether it's month-end processing, tax season, promotional campaigns, or periods of increased customer activity, our scalable support teams can expand quickly to maintain excellent service levels.",
    },
    {
        question: "Which communication channels do you support?",
        answer:
            "We provide customer support through live chat, email, help desk platforms, and other digital communication channels to deliver fast and reliable assistance for your customers.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-5xl px-6">

                <div className="mb-16 text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-blue-700">
                        Frequently Asked Questions
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        Banking & Finance FAQs
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Find answers to common questions about our banking and
                        financial customer support solutions.
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