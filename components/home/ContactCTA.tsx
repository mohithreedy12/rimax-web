"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
    Mail,
    MapPin,
    Globe2,
    Clock3,
    ChevronDown,
    Search,
    ArrowUpRight,
    MessageCircle,
    Headphones,
    CheckCircle2,
} from "lucide-react";

/* ==================================================
   SERVICES
================================================== */

const services = [
    "Live Chat Support",
    "Email Support",
    "Customer Support",
    "Business Operations Support",
    "Social Media Management",
    "Digital Marketing Support",
    "Other",
];

/* ==================================================
   COUNTRIES
================================================== */

const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
];

/* ==================================================
   TYPES
================================================== */

type FormData = {
    name: string;
    company: string;
    email: string;
    phone: string;
    country: string;
    service: string;
    otherService: string;
    message: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    otherService: "",
    message: "",
};

/* ==================================================
   COMPONENT
================================================== */

export default function ContactCTA() {
    const [formData, setFormData] = useState<FormData>(initialForm);
    const [errors, setErrors] = useState<Errors>({});
    const [loading, setLoading] = useState(false);

    const [countrySearch, setCountrySearch] = useState("");
    const [countryOpen, setCountryOpen] = useState(false);

    const emailRegex =
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const phoneRegex =
        /^[+]?[0-9()\-\s]{7,20}$/;

    /* ==================================================
       VALIDATION
    ================================================== */

    const validate = () => {
        const newErrors: Errors = {};

        if (formData.name.trim().length < 3) {
            newErrors.name = "Please enter your full name.";
        }

        if (formData.company.trim().length < 2) {
            newErrors.company = "Please enter your company name.";
        }

        if (!emailRegex.test(formData.email.trim())) {
            newErrors.email = "Please enter a valid work email.";
        }

        if (!phoneRegex.test(formData.phone.trim())) {
            newErrors.phone = "Please enter a valid contact number.";
        }

        if (!formData.country) {
            newErrors.country = "Please select your country.";
        }

        if (!formData.service) {
            newErrors.service = "Please select a service.";
        }

        if (
            formData.service === "Other" &&
            formData.otherService.trim().length < 3
        ) {
            newErrors.otherService =
                "Please specify the service you need.";
        }

        if (formData.message.trim().length < 20) {
            newErrors.message =
                "Please describe your requirements in at least 20 characters.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    /* ==================================================
       HANDLE CHANGE
    ================================================== */

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
            ...(name === "service" && value !== "Other"
                ? { otherService: "" }
                : {}),
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    /* ==================================================
       SUBMIT
    ================================================== */

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (!validate()) {
            toast.error("Please complete all required fields.");
            return;
        }

        try {
            setLoading(true);

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    otherService:
                        formData.service === "Other"
                            ? formData.otherService.trim()
                            : "",
                }),
            });

            if (!response.ok) {
                throw new Error("Submission failed");
            }

            const result = await response.json();

            if (!result.success) {
                throw new Error("Submission failed");
            }

            toast.success(
                "Thank you! Your enquiry has been submitted successfully."
            );

            setFormData(initialForm);
            setCountrySearch("");
            setCountryOpen(false);
            setErrors({});
        } catch {
            toast.error(
                "Unable to send your message. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    /* ==================================================
       INPUT STYLES
    ================================================== */

    const inputClass = (field: keyof Errors) =>
        `w-full rounded-xl border bg-white px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 ${
            errors[field]
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-blue-600"
        }`;

    const filteredCountries = countries.filter((country) =>
        country.toLowerCase().includes(countrySearch.toLowerCase())
    );

    return (
        <>
            <Toaster position="top-right" />

            <section
                id="contact"
                className="scroll-mt-20 bg-[#f8fafc] px-6 py-16 sm:py-20"
            >
                <div className="mx-auto max-w-7xl">

                    {/* HEADER */}

                    <div className="mb-12 text-center">

            <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-blue-700">
              Contact RiMax
            </span>

                        <h2 className="mt-5 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                            Let's Discuss Your Business Needs
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                            Share your requirements with us and explore
                            how RiMax Technologies can support your business.
                        </p>

                    </div>

                    {/* MAIN GRID */}

                    <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">

                        {/* ==================================================
                LEFT - CONTACT FORM
            ================================================== */}

                        <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-9">

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Send Us a Message
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-gray-500">
                                    Fill out the form below and tell us what you're looking for.
                                </p>
                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-5"
                                noValidate
                            >

                                {/* NAME + COMPANY */}

                                <div className="grid gap-5 sm:grid-cols-2">

                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-2 block text-sm font-semibold text-gray-700"
                                        >
                                            Full Name *
                                        </label>

                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            autoComplete="name"
                                            placeholder="Your full name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={inputClass("name")}
                                        />

                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="company"
                                            className="mb-2 block text-sm font-semibold text-gray-700"
                                        >
                                            Company Name *
                                        </label>

                                        <input
                                            id="company"
                                            type="text"
                                            name="company"
                                            autoComplete="organization"
                                            placeholder="Your company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className={inputClass("company")}
                                        />

                                        {errors.company && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.company}
                                            </p>
                                        )}
                                    </div>

                                </div>

                                {/* EMAIL + PHONE */}

                                <div className="grid gap-5 sm:grid-cols-2">

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-sm font-semibold text-gray-700"
                                        >
                                            Work Email *
                                        </label>

                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            autoComplete="email"
                                            placeholder="name@company.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={inputClass("email")}
                                        />

                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="mb-2 block text-sm font-semibold text-gray-700"
                                        >
                                            Contact Number *
                                        </label>

                                        <input
                                            id="phone"
                                            type="tel"
                                            name="phone"
                                            autoComplete="tel"
                                            placeholder="+1 555 123 4567"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={inputClass("phone")}
                                        />

                                        {errors.phone && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.phone}
                                            </p>
                                        )}
                                    </div>

                                </div>

                                {/* COUNTRY + SERVICE */}

                                <div className="grid gap-5 sm:grid-cols-2">

                                    {/* COUNTRY */}

                                    <div className="relative">

                                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                                            Country *
                                        </label>

                                        <button
                                            type="button"
                                            onClick={() => {
                                                setCountryOpen(!countryOpen);
                                                setCountrySearch("");
                                            }}
                                            className={`${inputClass("country")} flex items-center justify-between text-left`}
                                            aria-expanded={countryOpen}
                                            aria-haspopup="listbox"
                                        >
                      <span
                          className={
                              formData.country
                                  ? "text-gray-900"
                                  : "text-gray-400"
                          }
                      >
                        {formData.country || "Select country"}
                      </span>

                                            <ChevronDown
                                                size={18}
                                                className="shrink-0 text-gray-500"
                                            />
                                        </button>

                                        {countryOpen && (
                                            <div className="absolute left-0 right-0 z-30 mt-2 rounded-xl border border-gray-200 bg-white p-3 shadow-xl">

                                                <div className="relative">

                                                    <Search
                                                        size={17}
                                                        className="absolute left-3 top-3 text-gray-400"
                                                    />

                                                    <input
                                                        type="text"
                                                        value={countrySearch}
                                                        onChange={(e) =>
                                                            setCountrySearch(e.target.value)
                                                        }
                                                        placeholder="Search country..."
                                                        className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-3 text-sm text-gray-900 outline-none focus:border-blue-600"
                                                    />

                                                </div>

                                                <div
                                                    role="listbox"
                                                    aria-label="Countries"
                                                    className="mt-2 max-h-52 overflow-y-auto"
                                                >
                                                    {filteredCountries.length ? (
                                                        filteredCountries.map((country) => (
                                                            <button
                                                                key={country}
                                                                type="button"
                                                                role="option"
                                                                aria-selected={
                                                                    formData.country === country
                                                                }
                                                                onClick={() => {
                                                                    setFormData((prev) => ({
                                                                        ...prev,
                                                                        country,
                                                                    }));

                                                                    setErrors((prev) => ({
                                                                        ...prev,
                                                                        country: "",
                                                                    }));

                                                                    setCountryOpen(false);
                                                                    setCountrySearch("");
                                                                }}
                                                                className="w-full rounded-lg px-3 py-2 text-left text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                                                            >
                                                                {country}
                                                            </button>
                                                        ))
                                                    ) : (
                                                        <p className="px-3 py-3 text-sm text-gray-500">
                                                            No country found.
                                                        </p>
                                                    )}
                                                </div>

                                            </div>
                                        )}

                                        {errors.country && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.country}
                                            </p>
                                        )}
                                    </div>

                                    {/* SERVICE */}

                                    <div>
                                        <label
                                            htmlFor="service"
                                            className="mb-2 block text-sm font-semibold text-gray-700"
                                        >
                                            Service Required *
                                        </label>

                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className={inputClass("service")}
                                        >
                                            <option value="">
                                                Select service
                                            </option>

                                            {services.map((service) => (
                                                <option
                                                    key={service}
                                                    value={service}
                                                >
                                                    {service}
                                                </option>
                                            ))}
                                        </select>

                                        {errors.service && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.service}
                                            </p>
                                        )}
                                    </div>

                                </div>

                                {/* OTHER SERVICE */}

                                {formData.service === "Other" && (
                                    <div>
                                        <label
                                            htmlFor="otherService"
                                            className="mb-2 block text-sm font-semibold text-gray-700"
                                        >
                                            What Service Do You Need? *
                                        </label>

                                        <input
                                            id="otherService"
                                            type="text"
                                            name="otherService"
                                            placeholder="Enter the service you're looking for"
                                            value={formData.otherService}
                                            onChange={handleChange}
                                            className={inputClass("otherService")}
                                        />

                                        {errors.otherService && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.otherService}
                                            </p>
                                        )}
                                    </div>
                                )}

                                {/* MESSAGE */}

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-sm font-semibold text-gray-700"
                                    >
                                        Tell Us About Your Project *
                                    </label>

                                    <textarea
                                        id="message"
                                        rows={5}
                                        name="message"
                                        placeholder="Describe the support you need, your expected workload, preferred support hours, and any specific business requirements..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`${inputClass("message")} resize-y`}
                                    />

                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                {/* SUBMIT */}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </button>

                                <p className="text-center text-xs leading-5 text-gray-500">
                                    We'll review your enquiry and get back to you
                                    as soon as possible.
                                </p>

                            </form>
                        </div>

                        {/* ==================================================
                RIGHT - REDESIGNED CONTACT PANEL
            ================================================== */}

                        <div className="space-y-6">

                            {/* MAIN CONTACT CARD */}

                            <div className="rounded-[28px] border border-gray-200 bg-white p-7 shadow-sm sm:p-9">

                                <div className="mb-8">

                  <span className="text-xs font-bold uppercase tracking-[3px] text-blue-700">
                    Get In Touch
                  </span>

                                    <h3 className="mt-3 text-3xl font-extrabold text-gray-900">
                                        Contact Information
                                    </h3>

                                    <p className="mt-4 leading-7 text-gray-600">
                                        Have a question or a business requirement?
                                        Connect with RiMax Technologies and
                                        let's explore how we can work together.
                                    </p>

                                </div>

                                {/* EMAIL */}

                                <div className="flex items-start gap-4 rounded-2xl bg-blue-50 p-5">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                                        <Mail size={23} />
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-gray-900">
                                            Email Us
                                        </h4>

                                        <a
                                            href="mailto:contact@rimaxtech.com"
                                            className="mt-1 block break-all text-blue-700 hover:underline"
                                        >
                                            contact@rimaxtech.com
                                        </a>

                                        <p className="mt-1 text-sm text-gray-500">
                                            For business enquiries and consultations
                                        </p>
                                    </div>

                                </div>

                                {/* HEADQUARTERS */}

                                <div className="mt-4 flex items-start gap-4 rounded-2xl bg-slate-50 p-5">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                                        <MapPin size={23} />
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-gray-900">
                                            Headquarters
                                        </h4>

                                        <p className="mt-1 text-gray-700">
                                            Hyderabad, India
                                        </p>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Remote-first business support
                                        </p>
                                    </div>

                                </div>

                                {/* REGIONS */}

                                <div className="mt-4 flex items-start gap-4 rounded-2xl bg-slate-50 p-5">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                                        <Globe2 size={23} />
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-gray-900">
                                            Regions We Serve
                                        </h4>

                                        <p className="mt-1 leading-7 text-gray-700">
                                            USA • UK • Netherlands • Australia • Middle East
                                        </p>
                                    </div>

                                </div>

                                {/* BUSINESS HOURS */}

                                <div className="mt-4 flex items-start gap-4 rounded-2xl bg-slate-50 p-5">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                                        <Clock3 size={23} />
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-gray-900">
                                            Business Hours
                                        </h4>

                                        <p className="mt-1 text-gray-700">
                                            Monday – Friday
                                        </p>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Flexible support schedules available
                                        </p>
                                    </div>

                                </div>

                            </div>

                            {/* SECONDARY CTA CARD */}

                            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-7 text-white shadow-lg sm:p-9">

                                {/* Decorative circles */}

                                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/20"></div>

                                <div className="absolute -bottom-20 right-12 h-40 w-40 rounded-full bg-white/5"></div>

                                <div className="relative">

                                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                                        <MessageCircle size={28} />
                                    </div>

                                    <h3 className="text-2xl font-bold">
                                        Let's Talk About Your Business
                                    </h3>

                                    <p className="mt-4 leading-8 text-blue-100">
                                        Every business has different support needs.
                                        Share your requirements and we'll discuss
                                        an arrangement tailored to your operations.
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-3">

                    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm">
                      <CheckCircle2 size={16} />
                      Flexible Support
                    </span>

                                        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm">
                      <CheckCircle2 size={16} />
                      Custom Solutions
                    </span>

                                    </div>

                                    <a
                                        href="mailto:contact@rimaxtech.com"
                                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-blue-700 transition hover:bg-blue-50"
                                    >
                                        Email Our Team
                                        <ArrowUpRight size={19} />
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}