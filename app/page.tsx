import LandingNavbar from "../components/landing/LandingPage";
import Hero from "@/components/landing/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030B1F] text-white">

      <LandingNavbar />

      <Hero />

    </div>
  );
}