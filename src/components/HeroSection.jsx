"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { FaCheck, FaStar } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { FaClock, FaShieldAlt, FaExchangeAlt } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLoading } from "../context/LoadingContext";

import Link from "next/link";
import Navbar from "./common/Navbar";

const HeroSection = () => {
  const container = useRef();
  const { isFinished } = useLoading();

  useGSAP(
    () => {
      if (!isFinished) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Staggered entrance for hero content
      tl.fromTo(
        ".hero-badge",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
        .fromTo(
          ".hero-title h1",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          ".hero-subtitle",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.5"
        )
        .fromTo(
          ".hero-desc",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.5"
        )
        .fromTo(
          ".hero-cta",
          { y: 20, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6 },
          "-=0.5"
        );

      // Animate floating floating elements with a slight delay
      tl.fromTo(
        ".floating-card",
        { scale: 0.8, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
        },
        "-=0.8"
      );

      // Bottom features stagger
      tl.fromTo(
        ".feature-item",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
        "-=0.6"
      );
    },
    { scope: container, dependencies: [isFinished] }
  );

  return (
    <div
      ref={container}
      className="min-h-screen bg-white relative overflow-hidden"
    >
      <Navbar />

      <section className="px-4 py-8 md:py-16 md:px-[131px]">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Hero Text */}
          <div className="space-y-8 relative z-10">
            <div className="hero-badge opacity-0 bg-[#45267F]/10 backdrop-blur-sm border border-[#45267F]/20 w-fit p-3 px-4 flex items-center space-x-2 rounded-full">
              <FaCheck className="w-4 h-4 text-[#45267F] flex-shrink-0" />
              <span className="text-[#45267F] text-sm md:text-base font-bold tracking-wide">
                Trusted by 10,000+ Students
              </span>
            </div>

            <div className="space-y-4">
              <div className="hero-title text-[32px] md:text-[56px] font-bold text-[#1A1A1A] tracking-[-1.5px] leading-[1.1] space-y-2">
                <h1 className="leading-[1.1] opacity-0">
                  Secure Education Loans for Your{" "}
                  <span className="text-[#45267F]">Dream University</span>
                </h1>
                <span className="hero-subtitle block text-[18px] md:text-[22px] font-medium text-[#FF7A00] mt-6 opacity-0">
                  Compare rates from top banks in India
                </span>
              </div>

              <p className="hero-desc text-[#666666] text-base md:text-xl max-w-lg leading-relaxed opacity-0">
                Fast approval, low interest, no hidden fees. Start your
                application in 2 minutes and get funded for your studies abroad
                or in India.
              </p>
            </div>

            <div className="hero-cta opacity-0">
              <Link href="/pages/contact-us">
                <button className="bg-[#FF7A00] text-white text-lg font-bold px-12 py-5 rounded-xl cursor-pointer hover:bg-[#FF8A1A] hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-orange-500/20 group">
                  Get Started
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1 inline-block">
                    →
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Hero Image + CTAs */}
          <div className="relative h-[50vh] md:h-[90vh] flex items-center justify-center">
            {/* Circular Glow Effect behind image - REFINED for circularity */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#45267F]/40 blur-[100px] rounded-full pointer-events-none z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-[#FF7A00]/30 blur-[80px] rounded-full pointer-events-none z-0" />

            <div className="w-full h-full relative z-10 p-4">
              <div className="w-full h-full rounded-[40px] overflow-hidden shadow-2xl relative">
                <Image
                  src="/hero_section_banner.webp"
                  alt="Education loan comparison"
                  width={800}
                  height={1000}
                  priority={true}
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#45267F]/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Elements with GSAP classes */}
            <div className="floating-card absolute top-[45%] right-[-5%] bg-[#45267F] text-white px-8 py-4 rounded-2xl z-[21] shadow-2xl font-bold hover:-translate-y-1 transition-transform duration-300 cursor-default opacity-0">
              Join Us Today
            </div>

            <div className="floating-card absolute top-[28%] left-[-10%] bg-white/90 backdrop-blur-md border border-white/50 text-[#45267F] px-8 py-4 rounded-2xl shadow-xl font-bold hover:-translate-y-1 transition-transform duration-300 flex items-center space-x-2 z-20 cursor-default opacity-0">
              <FaCheck className="w-5 h-5 text-[#FF7A00]" />
              <span>Expert Advisors</span>
            </div>

            {/* Testimonial Card */}
            <div className="floating-card hidden md:block absolute bottom-[10%] left-[-5%] p-6 bg-white/90 backdrop-blur-md shadow-2xl rounded-[32px] max-w-xs z-[21] border border-white/20 opacity-0">
              <div className="space-y-4">
                <p className="text-[#1A1A1A] text-lg font-bold leading-snug">
                  "Amazing service! Approved in 24 hours with best rates."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#45267F] to-[#FF7A00] rounded-full flex-shrink-0 flex items-center justify-center text-white font-black text-sm shadow-lg">
                      PS
                    </div>
                    <div>
                      <p className="font-bold text-[#1A1A1A] text-sm">
                        Priya Sharma
                      </p>
                      <div className="flex items-center space-x-0.5">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="w-3 h-3 text-[#FF7A00]" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Bar - Revamped for Orange/White/Purple Theme */}
      <section className="bg-white py-24 relative z-[20]">
        <div className="max-w-7xl mx-auto px-6 lg:px-[131px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaChartSimple,
                title: "Loan Comparison",
                desc: "Compare rates from 20+ banks instantly and find the best education loan.",
              },
              {
                icon: FaClock,
                title: "Instant Approval",
                desc: "Get loan approval in under 24 hours with our AI-powered processing system.",
              },
              {
                icon: FaShieldAlt,
                title: "Secure KYC",
                desc: "Fast and secure document verification using AI for 99% accuracy.",
              },
              {
                icon: FaExchangeAlt,
                title: "Remittance",
                desc: "Seamless international money transfers at lowest rates for study abroad.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="feature-item opacity-0 group flex flex-col items-center lg:items-start text-center lg:text-left p-8 rounded-[40px] hover:bg-[#45267F]/5 transition-all duration-500"
              >
                <div className="w-20 h-20 bg-white border-2 border-[#45267F]/10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:border-[#FF7A00] group-hover:scale-110 transition-all duration-500 mb-6">
                  <feature.icon className="w-10 h-10 text-[#45267F] group-hover:text-[#FF7A00] transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#1A1A1A] mb-3 group-hover:text-[#45267F] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-500 leading-relaxed font-semibold">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
