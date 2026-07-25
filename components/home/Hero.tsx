import HeroIllustration from "./HeroIllustration";

export default function Hero() {
    return (
        <section
            id="home"
            className="scroll-mt-24 relative overflow-hidden bg-white"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-100 opacity-50 blur-3xl"></div>

                <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-orange-100 opacity-40 blur-3xl"></div>

                <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-100 opacity-40 blur-3xl"></div>
            </div>

            <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 pt-10 pb-16 lg:flex-row">

                {/* Left Side */}
                <div className="max-w-xl">

                    <p className="mb-5 text-sm font-bold uppercase tracking-[4px] text-blue-700">
                        Welcome to RiMax Technologies
                    </p>

                    <h1 className="mb-8 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
                        Customer Support
                        <br />
                        & Technology
                        <br />
                        <span className="text-blue-700">
                            Solutions
                        </span>
                    </h1>

                    <p className="mb-10 text-lg leading-9 text-gray-600">
                        Helping businesses deliver exceptional customer
                        experiences through reliable customer support,
                        live chat, email support, technical assistance,
                        and scalable technology solutions.
                    </p>

                    <div className="flex flex-wrap gap-5">

                        {/* Get Free Consultation */}
                        <a
                            href="#contact"
                            className="rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-xl"
                        >
                            Get Free Consultation
                        </a>

                        {/* Explore Services */}
                        <a
                            href="#services"
                            className="rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-700 hover:shadow-lg"
                        >
                            Explore Services
                        </a>

                    </div>

                </div>

                {/* Right Side */}
                <div className="relative w-full max-w-xl">
                    <HeroIllustration />
                </div>

            </div>
        </section>
    );
}