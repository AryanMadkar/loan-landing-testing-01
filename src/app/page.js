import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StudentTrustSection from "@/components/StudentTrustSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StudentTrustSection />
      <ServicesSection />
    </div>
  );
}
