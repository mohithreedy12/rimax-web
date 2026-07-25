"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

type FormData = {
    name: string;
    company: string;
    email: string;
    phone: string;
    country: string;
    service: string;
    message: string;
};

type Errors = {
    name?: string;
    company?: string;
    email?: string;
    phone?: string;
    country?: string;
    service?: string;
    message?: string;
};

const initialForm: FormData = {
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    message: "",
};

export default function ContactCTA() {
    const [formData, setFormData] = useState<FormData>(initialForm);
    const [errors, setErrors] = useState<Errors>({});
    const [loading, setLoading] = useState(false);

    const emailRegex =
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const phoneRegex =
        /^[+]?[0-9()\-\s]{7,20}$/;

    const validate = () => {
        const newErrors: Errors = {};

        if (formData.name.trim().length < 3) {
            newErrors.name = "Enter your full name.";
        }

        if (formData.company.trim().length < 2) {
            newErrors.company = "Company name is required.";
        }

        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Enter a valid work email.";
        }

        if (
            formData.phone &&
            !phoneRegex.test(formData.phone)
        ) {
            newErrors.phone = "Enter a valid phone number.";
        }

        if (!formData.country) {
            newErrors.country = "Select a country.";
        }

        if (!formData.service) {
            newErrors.service = "Select a service.";
        }

        if (formData.message.trim().length < 20) {
            newErrors.message =
                "Please enter at least 20 characters.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (!validate()) {
            toast.error("Please fix the highlighted fields.");
            return;
        }

        try {
            setLoading(true);

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!result.success) {
                throw new Error();
            }

            toast.success(
                "Message sent successfully! We'll contact you soon."
            );

            setFormData(initialForm);
            setErrors({});
        } catch (err) {
            toast.error(
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    const inputClass = (field: keyof Errors) =>
        `w-full rounded-xl border px-4 py-3 outline-none transition ${
            errors[field]
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-600"
        }`;

    return (
        <>
            <Toaster position="top-right" />

            <section
                id="contact"
                className="scroll-mt-20 bg-slate-50 py-24"
            >
                <div className="mx-auto max-w-7xl px-6">

                    <div className="mb-14 text-center">

                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                            CONTACT US
                        </p>

                        <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
                            Let's Build Something Great Together
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                            Whether you need customer support, technical assistance,
                            or a dedicated support team, RiMax Technologies is ready
                            to help your business grow.
                        </p>

                    </div>

                    <div className="grid gap-10 lg:grid-cols-2">

                        <div className="rounded-3xl bg-white p-8 shadow-xl">

                            <h3 className="mb-8 text-2xl font-bold text-gray-900">
                                Send Us a Message
                            </h3>

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-5"
                            >
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name *"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={inputClass("name")}
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Company Name *"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className={inputClass("company")}
                                    />
                                    {errors.company && (
                                        <p className="mt-1 text-sm text-red-600">{errors.company}</p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Work Email *"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={inputClass("email")}
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone Number (Optional)"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={inputClass("phone")}
                                    />
                                    {errors.phone && (
                                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                                    )}
                                </div>

                                <div>
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className={inputClass("country")}
                                    >
                                        <option value="">Select Country</option>
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>United Kingdom</option>
                                        <option>India</option>
                                        <option>Australia</option>
                                        <option>Netherlands</option>
                                        <option>Germany</option>
                                        <option>Singapore</option>
                                        <option>United Arab Emirates</option>
                                        <option>Other</option>
                                    </select>

                                    {errors.country && (
                                        <p className="mt-1 text-sm text-red-600">{errors.country}</p>
                                    )}
                                </div>

                                <div>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className={inputClass("service")}
                                    >
                                        <option value="">Select Service</option>
                                        <option>Customer Support</option>
                                        <option>Live Chat Support</option>
                                        <option>Email Support</option>
                                        <option>Technical Support</option>
                                        <option>Dedicated Support Team</option>
                                        <option>AI Customer Support</option>
                                        <option>Business Process Outsourcing (BPO)</option>
                                        <option>Software Development</option>
                                        <option>Cloud & DevOps</option>
                                        <option>Other</option>
                                    </select>

                                    {errors.service && (
                                        <p className="mt-1 text-sm text-red-600">{errors.service}</p>
                                    )}
                                </div>

                                <div>
                  <textarea
                      rows={5}
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      className={inputClass("message")}
                  />

                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </button>

                            </form>

                        </div>

                        <div className="rounded-3xl bg-blue-700 p-10 text-white shadow-xl">

                            <h3 className="text-3xl font-bold">
                                Contact Information
                            </h3>

                            <p className="mt-5 leading-8 text-blue-100">
                                We'd love to hear about your project and discuss how
                                RiMax Technologies can support your business.
                            </p>

                            <div className="mt-10 space-y-6">

                                <div>
                                    <h4 className="font-semibold">📧 Email</h4>
                                    <p className="text-blue-100">
                                        contact@rimaxtech.com
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold">📍 Headquarters</h4>
                                    <p className="text-blue-100">
                                        Hyderabad, India
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold">🌍 Serving</h4>
                                    <p className="text-blue-100">
                                        USA • UK • Netherlands • Australia • Middle East
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold">🕒 Business Hours</h4>
                                    <p className="text-blue-100">
                                        Monday - Friday
                                    </p>
                                </div>

                            </div>

                            <div className="mt-12 rounded-2xl bg-white/10 p-6">

                                <h4 className="mb-4 text-xl font-bold">
                                    Why Choose RiMax?
                                </h4>

                                <ul className="space-y-3 text-blue-100">
                                    <li>✔ Fast Response Time</li>
                                    <li>✔ Dedicated Support Team</li>
                                    <li>✔ Scalable Solutions</li>
                                    <li>✔ Customer-First Approach</li>
                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}