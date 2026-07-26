"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Can RiMax support hospitals and clinics of any size?",
        answer:
            "Yes. We work with healthcare organizations ranging from small clinics to large hospitals by providing scalable customer support teams.",
    },
    {
        question: "Do you provide appointment scheduling support?",
        answer:
            "Yes. Our teams can assist patients with appointment scheduling, rescheduling, reminders, and general inquiries.",
    },
    {
        question: "Can RiMax handle patient billing questions?",
        answer:
            "Absolutely. We assist with billing inquiries, payment guidance, insurance-related questions, and other non-clinical support requests.",
    },
    {
        question: "Do you offer 24/7 healthcare customer support?",
        answer:
            "Yes. Depending on your business requirements, we can provide round-the-clock customer support coverage.",
    },
    {
        question: "Can your support team integrate with our existing systems?",
        answer:
            "Yes. Our teams can work with your existing CRM, help desk, ticketing platform, and communication tools to ensure a seamless workflow.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-5xl px-6">

                <div className="text-center mb-16">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-red-600">
                        Frequently Asked Questions
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        Healthcare Support FAQs
                    </h2>

                    <p className="mt-6 text-lg text-gray-600 leading-8">
                        Find answers to common questions about our healthcare
                        customer support solutions.
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

                                <div className="border-t border-gray-100 px-6 py-5 text-gray-600 leading-8">

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