import Hero from "@/components/industries/saas-technology/Hero";
import Overview from "@/components/industries/saas-technology/Overview";
import ChallengesSolutions from "@/components/industries/saas-technology/ChallengesSolutions";
import Benefits from "@/components/industries/saas-technology/Benefits";
import Organizations from "@/components/industries/saas-technology/Organizations";
import FAQ from "@/components/industries/saas-technology/FAQ";
import CTA from "@/components/industries/saas-technology/CTA";

export default function SaaSTechnologyPage() {
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