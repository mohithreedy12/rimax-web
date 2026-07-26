"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Can RiMax support logistics and transportation companies?",
        answer:
            "Yes. RiMax Technologies provides dedicated customer support for logistics providers, transportation companies, freight operators, courier services, and supply chain organizations. Our teams help improve customer communication while reducing the workload on your internal operations.",
    },
    {
        question: "Do you provide shipment tracking and delivery support?",
        answer:
            "Absolutely. We assist customers with shipment tracking, delivery status updates, estimated arrival information, order inquiries, and general shipping questions across multiple communication channels.",
    },
    {
        question: "Can your team manage high volumes of customer inquiries?",
        answer:
            "Yes. Our scalable customer support teams can efficiently manage seasonal demand, peak shipping periods, and large volumes of customer inquiries while maintaining fast response times and high service quality.",
    },
    {
        question: "Which communication channels do you support?",
        answer:
            "We provide customer support through live chat, email, help desk platforms, ticketing systems, and other digital communication channels to ensure customers receive timely assistance wherever they reach out.",
    },
    {
        question: "Can RiMax grow with our logistics business?",
        answer:
            "Yes. Whether you're expanding into new regions, increasing shipment volumes, or adding new services, our flexible support teams scale alongside your business to deliver consistent, high-quality customer experiences.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-5xl px-6">

                <div className="mb-16 text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-emerald-700">
                        Frequently Asked Questions
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        Logistics Support FAQs
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Find answers to common questions about our logistics,
                        transportation, and supply chain customer support
                        services.
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