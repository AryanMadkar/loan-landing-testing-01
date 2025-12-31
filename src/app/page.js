import Footer from "@/components/common/Footer";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StudentTrustSection from "@/components/StudentTrustSection";
import TestimonialCarousel from "@/components/Testimonial";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhyRemitoutSection from "@/components/Whyremitout";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyRemitoutSection />
      <StudentTrustSection />
      <ServicesSection />
      <TestimonialCarousel />
      <FaqSection />
      <ContactSection />
      <Footer/>
      <WhatsAppButton />
      
    </div>
  );
}
