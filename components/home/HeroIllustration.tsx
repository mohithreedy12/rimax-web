import {
    MessageSquare,
    Mail,
    Headphones,
    Star,
    Activity,
} from "lucide-react";

export default function HeroIllustration() {
    return (
        <div className="relative">

            {/* Background Glow */}
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-blue-100 via-white to-orange-100 blur-3xl opacity-70"></div>

            {/* Dashboard */}
            <div className="relative rounded-[32px] border border-gray-200 bg-white p-8 shadow-2xl">

                <div className="mb-8 flex items-center justify-between">

                    <div>
                        <h2 className="text-3xl font-bold">
                            Support Dashboard
                        </h2>

                        <p className="text-gray-500">
                            Live Operations
                        </p>
                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">

                        <Activity
                            size={16}
                            className="text-green-600"
                        />

                        <span className="text-sm font-semibold text-green-700">
              Live
            </span>

                    </div>

                </div>

                <div className="space-y-4">

                    <DashboardItem
                        icon={<MessageSquare className="text-blue-600" />}
                        title="Live Chats"
                        value="248"
                        bg="bg-blue-50"
                        color="text-blue-700"
                    />

                    <DashboardItem
                        icon={<Mail className="text-green-600" />}
                        title="Emails"
                        value="112"
                        bg="bg-green-50"
                        color="text-green-700"
                    />

                    <DashboardItem
                        icon={<Headphones className="text-orange-600" />}
                        title="Support Agents"
                        value="32"
                        bg="bg-orange-50"
                        color="text-orange-700"
                    />

                    <DashboardItem
                        icon={<Star className="text-yellow-500" />}
                        title="Satisfaction"
                        value="98%"
                        bg="bg-purple-50"
                        color="text-purple-700"
                    />

                </div>

            </div>

        </div>
    );
}

type DashboardItemProps = {
    icon: React.ReactNode;
    title: string;
    value: string;
    bg: string;
    color: string;
};

function DashboardItem({
                           icon,
                           title,
                           value,
                           bg,
                           color,
                       }: DashboardItemProps) {
    return (
        <div className={`flex items-center justify-between rounded-2xl ${bg} p-4`}>

            <div className="flex items-center gap-3">
                {icon}
                <span>{title}</span>
            </div>

            <span className={`font-bold ${color}`}>
        {value}
      </span>

        </div>
    );
}