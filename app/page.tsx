import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Industries from "@/components/home/Industries";
import WhyRiMax from "@/components/home/WhyRiMax";
import HowWeWork from "@/components/home/HowWeWork";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
    return (
        <main className="min-h-screen">

            {/* Hero */}
            <Hero />

            {/* About */}
            <About />

            {/* Services */}
            <Services />

            {/* Industries */}
            <Industries />

            {/* Why RiMax */}
            <WhyRiMax />

            {/* Process */}
            <HowWeWork />

            {/* Contact */}
            <ContactCTA />

        </main>
    );
}