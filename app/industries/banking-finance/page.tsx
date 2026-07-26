import Hero from "@/components/industries/banking-finance/Hero";
import Overview from "@/components/industries/banking-finance/Overview";
import ChallengesSolutions from "@/components/industries/banking-finance/ChallengesSolutions";
import Benefits from "@/components/industries/banking-finance/Benefits";
import Organizations from "@/components/industries/banking-finance/Organizations";
import FAQ from "@/components/industries/banking-finance/FAQ";
import CTA from "@/components/industries/banking-finance/CTA";

export default function BankingFinancePage() {
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