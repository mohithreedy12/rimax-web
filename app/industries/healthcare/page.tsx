import Hero from "@/components/industries/healthcare/Hero";
import Overview from "@/components/industries/healthcare/Overview";
import ChallengesSolutions from "@/components/industries/healthcare/ChallengesSolutions";
import Benefits from "@/components/industries/healthcare/Benefits";
import Organizations from "@/components/industries/healthcare/Organizations";
import FAQ from "@/components/industries/healthcare/FAQ";
import CTA from "@/components/industries/healthcare/CTA";

export default function HealthcarePage() {
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