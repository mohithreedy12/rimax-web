import Hero from "@/components/industries/telecommunications/Hero";
import Overview from "@/components/industries/telecommunications/Overview";
import ChallengesSolutions from "@/components/industries/telecommunications/ChallengesSolutions";
import Benefits from "@/components/industries/telecommunications/Benefits";
import Organizations from "@/components/industries/telecommunications/Organizations";
import FAQ from "@/components/industries/telecommunications/FAQ";
import CTA from "@/components/industries/telecommunications/CTA";

export default function TelecommunicationsPage() {
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