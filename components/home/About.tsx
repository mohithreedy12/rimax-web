export default function About() {
    return (
        <section
            id="about"
            className="scroll-mt-24 bg-gray-50 py-28"
        >
            <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

                {/* Left */}

                <div>

                    <p className="mb-4 font-semibold uppercase tracking-widest text-blue-700">
                        About RiMax
                    </p>

                    <h2 className="mb-8 text-5xl font-bold text-gray-900">
                        Your Trusted Partner for
                        <span className="text-blue-700"> Customer Support </span>
                        &
                        <span className="text-blue-700"> Technology Solutions</span>
                    </h2>

                    <p className="mb-8 text-lg leading-8 text-gray-600">
                        RiMax Technologies helps businesses deliver world-class
                        customer experiences through live chat, email support,
                        technical assistance, and scalable technology services.
                        We combine skilled professionals with modern technology
                        to help companies grow faster while reducing operational costs.
                    </p>

                    <div className="grid grid-cols-2 gap-6">

                        <div className="flex items-center gap-3">
                            ✅
                            <span>24/7 Customer Support</span>
                        </div>

                        <div className="flex items-center gap-3">
                            ✅
                            <span>Technical Support</span>
                        </div>

                        <div className="flex items-center gap-3">
                            ✅
                            <span>Dedicated Teams</span>
                        </div>

                        <div className="flex items-center gap-3">
                            ✅
                            <span>Global Delivery</span>
                        </div>

                    </div>

                </div>

                {/* Right */}

                <div className="rounded-3xl bg-white p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden">

                    <div className="grid grid-cols-2 gap-4 sm:gap-6">

                        <div className="rounded-2xl bg-blue-50 p-5 sm:p-8 text-center min-w-0">
                            <h3 className="text-4xl font-bold text-blue-700">
                                24/7
                            </h3>

                            <p className="mt-2 text-gray-600">
                                Customer Support
                            </p>
                        </div>

                        <div className="rounded-2xl bg-green-50 p-5 sm:p-8 text-center min-w-0">
                            <h3 className="text-4xl font-bold text-green-700">
                                100%
                            </h3>

                            <p className="mt-2 text-gray-600">
                                Dedicated Teams
                            </p>
                        </div>

                        <div className="rounded-2xl bg-orange-50 p-5 sm:p-8 text-center min-w-0">
                            <h3 className="text-4xl font-bold text-orange-700">
                                Global
                            </h3>

                            <p className="mt-2 text-gray-600">
                                Service Delivery
                            </p>
                        </div>

                        <div className="rounded-2xl bg-purple-50 p-5 sm:p-8 text-center min-w-0">
                            <h3 className="text-4xl font-bold text-purple-700">
                                Secure
                            </h3>

                            <p className="mt-2 text-gray-600">
                                Operations
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}