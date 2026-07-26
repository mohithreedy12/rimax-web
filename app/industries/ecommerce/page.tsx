import Hero from "@/components/industries/ecommerce/Hero";
import Overview from "@/components/industries/ecommerce/Overview";
import ChallengesSolutions from "@/components/industries/ecommerce/ChallengesSolutions";
import Benefits from "@/components/industries/ecommerce/Benefits";
import Organizations from "@/components/industries/ecommerce/Organizations";
import FAQ from "@/components/industries/ecommerce/FAQ";
import CTA from "@/components/industries/ecommerce/CTA";

export default function EcommercePage() {
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