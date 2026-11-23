import {
    Headset,
    Layers,
    Users,
    TrendingUp,
} from "lucide-react";

export default function HeroIllustration() {
    return (
        <div className="relative">

            {/* Background Glow */}
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-blue-100 via-white to-orange-100 opacity-70 blur-3xl"></div>

            {/* Business Solutions Panel */}
            <div className="relative rounded-[28px] border border-gray-200 bg-white p-7 shadow-xl">

                {/* Panel Heading */}
                <div className="mb-8">

                    <h2 className="text-3xl font-bold text-gray-900">
                        Built to Support Your Growth
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Reliable solutions for growing businesses
                    </p>

                </div>

                {/* Business Benefits */}
                <div className="space-y-4">

                    {/* Dedicated Business Support */}
                    <div className="flex items-center gap-4 rounded-2xl bg-blue-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                        <Headset
                            size={26}
                            className="shrink-0 text-blue-600"
                        />

                        <span className="text-lg font-medium text-gray-800">
                            Dedicated Business Support
                        </span>

                    </div>

                    {/* Flexible Service Packages */}
                    <div className="flex items-center gap-4 rounded-2xl bg-green-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                        <Layers
                            size={26}
                            className="shrink-0 text-green-600"
                        />

                        <span className="text-lg font-medium text-gray-800">
                            Flexible Service Packages
                        </span>

                    </div>

                    {/* Trained Professionals */}
                    <div className="flex items-center gap-4 rounded-2xl bg-orange-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                        <Users
                            size={26}
                            className="shrink-0 text-orange-600"
                        />

                        <span className="text-lg font-medium text-gray-800">
                            Trained Professionals
                        </span>

                    </div>

                    {/* Scalable Operations */}
                    <div className="flex items-center gap-4 rounded-2xl bg-purple-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                        <TrendingUp
                            size={26}
                            className="shrink-0 text-purple-600"
                        />

                        <span className="text-lg font-medium text-gray-800">
                            Scalable Operations
                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
}