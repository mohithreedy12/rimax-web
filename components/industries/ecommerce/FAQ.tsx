"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Can RiMax support Shopify and WooCommerce stores?",
        answer:
            "Yes. Our support teams work with Shopify, WooCommerce, Magento, BigCommerce, and other leading e-commerce platforms to provide seamless customer service.",
    },
    {
        question: "Can you handle order tracking and shipping inquiries?",
        answer:
            "Absolutely. We assist customers with order status updates, shipping information, delivery issues, and post-purchase communication.",
    },
    {
        question: "Do you provide support for returns and refunds?",
        answer:
            "Yes. RiMax manages return requests, refund inquiries, exchange processes, and related customer communications to ensure a smooth experience.",
    },
    {
        question: "Can your team manage seasonal shopping peaks like Black Friday?",
        answer:
            "Yes. Our scalable support teams can quickly expand during peak shopping seasons, promotional events, and product launches without compromising service quality.",
    },
    {
        question: "Which communication channels do you support?",
        answer:
            "We provide customer support through live chat, email, help desk platforms, social media messaging, and other digital communication channels based on your business needs.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-5xl px-6">

                <div className="mb-16 text-center">

                    <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-purple-600">
                        Frequently Asked Questions
                    </p>

                    <h2 className="text-5xl font-bold text-gray-900">
                        E-Commerce Support FAQs
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Find answers to the most common questions about our
                        e-commerce customer support solutions.
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