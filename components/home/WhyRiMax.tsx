import {
    Coins,
    CalendarDays,
    MessagesSquare,
    SlidersHorizontal,
    TrendingUp,
    Headphones,
    BriefcaseBusiness,
    Megaphone,
    Clock3,
} from "lucide-react";

/* ==================================
   WHY RIMAX FEATURES
================================== */

const features = [
    {
        icon: Coins,
        title: "Cost-Effective Business Support",
        description:
            "Access practical business support solutions designed to help manage operational costs without compromising service quality.",
    },
    {
        icon: CalendarDays,
        title: "Flexible Engagement Models",
        description:
            "Choose support arrangements that align with your business requirements, workload, and growth plans.",
    },
    {
        icon: MessagesSquare,
        title: "Dedicated Communication",
        description:
            "Stay connected through clear communication channels, regular updates, and coordinated workflows.",
    },
    {
        icon: SlidersHorizontal,
        title: "Customised Service Solutions",
        description:
            "Receive support tailored to your business processes, customer needs, and operational priorities.",
    },
    {
        icon: TrendingUp,
        title: "Scalable Business Operations",
        description:
            "Adapt your support arrangements as your business requirements and customer demand evolve.",
    },
];

/* ==================================
   RIMAX BUSINESS SOLUTIONS
================================== */

const solutions = [
    {
        icon: Headphones,
        title: "Customer Experience",
        description:
            "Live chat, email handling, and customer assistance.",
        background: "bg-blue-50",
        iconColor: "text-blue-700",
    },
    {
        icon: BriefcaseBusiness,
        title: "Business Operations",
        description:
            "Order coordination, administrative tasks, and workflow support.",
        background: "bg-orange-50",
        iconColor: "text-orange-600",
    },
    {
        icon: Megaphone,
        title: "Digital Marketing",
        description:
            "Social media management, content creation, and promotional support.",
        background: "bg-purple-50",
        iconColor: "text-purple-700",
    },
];

/* ==================================
   WHY RIMAX COMPONENT
================================== */

export default function WhyRiMax() {
    return (
        <section
            id="why-rimax"
            className="scroll-mt-24 bg-[#f8fafc] py-12 sm:py-16 lg:py-20"
        >
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

                {/* ==================================
                    SECTION HEADING
                ================================== */}

                <div className="mx-auto mb-12 max-w-5xl text-center lg:mb-14">

                    <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-blue-700 sm:text-base">
                        WHY CHOOSE RIMAX
                    </p>

                    <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[46px]">
                        Why Growing Businesses Choose{" "}
                        <span className="text-blue-700">
                            RiMax
                        </span>
                    </h2>

                    <p className="mx-auto max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                        Flexible business support solutions designed to
                        simplify operations, strengthen customer experiences,
                        and help your business grow.
                    </p>

                </div>

                {/* ==================================
                    MAIN TWO COLUMN LAYOUT
                ================================== */}

                <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_1.08fr]">

                    {/* ==================================
                        LEFT SIDE - FEATURE CARDS
                    ================================== */}

                    <div className="flex flex-col gap-3">

                        {features.map((feature) => {

                            const Icon = feature.icon;

                            return (

                                <div
                                    key={feature.title}
                                    className="
                                        group
                                        flex
                                        flex-1
                                        items-center
                                        gap-5
                                        rounded-[22px]
                                        border
                                        border-slate-200/80
                                        bg-white
                                        px-6
                                        py-4
                                        shadow-[0_3px_12px_rgba(15,23,42,0.06)]
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-blue-200
                                        hover:shadow-lg
                                    "
                                >

                                    {/* FEATURE ICON */}

                                    <div
                                        className="
                                            flex
                                            h-[66px]
                                            w-[66px]
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-[20px]
                                            bg-blue-50
                                        "
                                    >

                                        <Icon
                                            size={30}
                                            strokeWidth={2}
                                            className="text-blue-700"
                                        />

                                    </div>

                                    {/* FEATURE CONTENT */}

                                    <div className="min-w-0">

                                        <h3 className="mb-1.5 text-lg font-bold leading-snug text-slate-950 sm:text-xl">
                                            {feature.title}
                                        </h3>

                                        <p className="text-sm leading-6 text-slate-600 sm:text-[15px]">
                                            {feature.description}
                                        </p>

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                    {/* ==================================
                        RIGHT SIDE - RIMAX ADVANTAGE
                    ================================== */}

                    <div
                        className="
                            relative
                            flex
                            h-full
                            flex-col
                            justify-between
                            overflow-hidden
                            rounded-[26px]
                            border
                            border-blue-100
                            bg-white
                            p-6
                            shadow-[0_8px_28px_rgba(15,23,42,0.08)]
                            sm:p-8
                        "
                    >

                        {/* DECORATIVE BACKGROUND */}

                        <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rotate-45 rounded-[60px] bg-blue-100/60" />

                        <div className="pointer-events-none absolute -right-28 -top-36 h-72 w-72 rotate-45 rounded-[60px] bg-blue-50/80" />

                        {/* ==================================
                            ADVANTAGE HEADING
                        ================================== */}

                        <div className="relative z-10">

                            <div className="mb-5 flex items-center gap-4">

                                <div className="h-[3px] w-12 bg-blue-700" />

                                <p className="text-lg font-bold text-blue-700 sm:text-xl">
                                    The RiMax Advantage
                                </p>

                            </div>

                            <h3 className="mb-4 max-w-lg text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                                One Partner. Multiple
                                <br className="hidden sm:block" />
                                {" "}Business Solutions.
                            </h3>

                            <p className="mb-6 max-w-xl text-base leading-7 text-slate-600">
                                From managing customer interactions to
                                supporting daily operations and digital
                                marketing, RiMax brings essential business
                                services together so you can focus on
                                growing your brand.
                            </p>

                        </div>

                        {/* ==================================
                            THREE SOLUTION CARDS
                        ================================== */}

                        <div className="relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-3">

                            {solutions.map((solution) => {

                                const Icon = solution.icon;

                                return (

                                    <div
                                        key={solution.title}
                                        className={`
                                            flex
                                            flex-col
                                            items-center
                                            rounded-[24px]
                                            ${solution.background}
                                            px-4
                                            py-6
                                            text-center
                                            transition-all
                                            duration-300
                                            hover:-translate-y-1
                                        `}
                                    >

                                        {/* SOLUTION ICON */}

                                        <Icon
                                            size={34}
                                            strokeWidth={2}
                                            className={`mb-4 ${solution.iconColor}`}
                                        />

                                        {/* SOLUTION TITLE */}

                                        <h4 className="mb-3 min-h-[48px] text-base font-extrabold leading-tight text-slate-950">
                                            {solution.title}
                                        </h4>

                                        {/* SOLUTION DESCRIPTION */}

                                        <p className="text-sm leading-5 text-slate-600">
                                            {solution.description}
                                        </p>

                                    </div>

                                );

                            })}

                        </div>

                        {/* ==================================
                            24/7 SUPPORT READINESS
                        ================================== */}

                        <div
                            className="
                                relative
                                z-10
                                mt-4
                                flex
                                flex-col
                                gap-4
                                rounded-[22px]
                                bg-blue-50
                                px-5
                                py-5
                                sm:flex-row
                                sm:items-center
                                sm:gap-5
                            "
                        >

                            {/* LEFT */}

                            <div className="flex shrink-0 items-center gap-3">

                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80">

                                    <Clock3
                                        size={24}
                                        className="text-blue-700"
                                    />

                                </div>

                                <h4 className="text-base font-bold text-blue-700">
                                    24/7 Support Readiness
                                </h4>

                            </div>

                            {/* DIVIDER */}

                            <div className="hidden h-10 w-px bg-slate-300 sm:block" />

                            {/* DESCRIPTION */}

                            <p className="text-sm leading-6 text-slate-600">
                                Scalable team support to meet your
                                business needs, including 24/7 coverage.
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}