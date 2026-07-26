import Hero from "@/components/industries/logistics/Hero";
import Overview from "@/components/industries/logistics/Overview";
import ChallengesSolutions from "@/components/industries/logistics/ChallengesSolutions";
import Benefits from "@/components/industries/logistics/Benefits";
import Organizations from "@/components/industries/logistics/Organizations";
import FAQ from "@/components/industries/logistics/FAQ";
import CTA from "@/components/industries/logistics/CTA";

export default function LogisticsPage() {
    return (
        <main className="bg-white">
            <Hero />
            <Overview />
            <ChallengesSolutions />
            <Benefits />
            <Organizations />
            <FAQ />
            <CTA />
        </main>
    );
}