import LandingNavbar from "../components/landing/LandingPage";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Stats from "@/components/landing/Stats";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030B1F] text-white">

      <LandingNavbar />

      <Hero />

      <Features />

      <Stats />

      <CTA />

      <Footer />

    </div>
  );
}