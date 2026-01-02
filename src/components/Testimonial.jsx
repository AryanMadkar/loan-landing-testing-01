"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TestimonialCarousel = () => {
  const sectionRef = useRef();

  const testimonials = [
    {
      id: "1",
      text: "Remitout made my education loan process seamless. Compared rates from multiple banks and got the best deal in just 24 hours!",
      name: "Priya Sharma",
      role: "MS Student, USA",
      rating: 5,
      avatar:
        "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg",
    },
    {
      id: "2",
      text: "The KYC verification was super fast with their AI OCR. No more waiting weeks for document checks—approved instantly!",
      name: "Rahul Patel",
      role: "MBA Student, UK",
      rating: 5,
      avatar:
        "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg",
    },
    {
      id: "3",
      text: "Perfect for sending money abroad for my UK tuition. Lowest fees and real-time tracking—highly recommend!",
      name: "Anita Desai",
      role: "Engineering Student, Canada",
      rating: 5,
      avatar:
        "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg",
    },
  ];

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Heading animation
      gsap.fromTo(
        ".testimonial-heading",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Cards stagger animation
      gsap.fromTo(
        ".testimonial-card",
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonials-grid",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? "text-[#FFB800]" : "text-gray-300"}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section ref={sectionRef} id="testimonials" className="w-full relative">
      <div className="relative w-full min-h-[70vh] md:min-h-[85vh]">
        <Image
          src="/TestimonialBannerNew.webp"
          alt="Indian students abroad using Remitout for education loans"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />

        {/* Main heading */}
        <div className="testimonial-heading opacity-0 absolute top-12 md:top-20 left-6 md:left-12 lg:left-20 z-40 px-2">
          <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-[-0.02em]">
            What Our Students
            <br />
            <span className="block mt-2">
              Are <span className="text-[#FF7A00]">Saying</span>
            </span>
          </div>
          <p className="text-white/80 text-sm md:text-base mt-4 font-medium tracking-wide">
            Voices of Confidence
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] lg:w-[85%] max-w-7xl px-4 md:px-8 z-40">
          <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial-card opacity-0 group bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-white/30 hover:bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)]"
              >
                {/* Quote icon */}
                <div className="mb-5 opacity-60 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="w-8 h-8 text-[#45267F]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Testimonial text */}
                <p className="text-[#1A1A1A] text-sm md:text-base leading-relaxed mb-6 font-medium">
                  "{testimonial.text}"
                </p>

                {/* Author + Stars */}
                <div className="flex items-center justify-between pt-4 border-t border-[#E8E8E8]">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-xl object-cover ring-2 ring-[#45267F]/10 flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-bold text-[#1A1A1A] text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-[#666] font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex gap-3 mt-8 md:mt-12 justify-center">
            <div className="h-2 w-20 bg-[#FF7A00] rounded-full shadow-lg" />
            <div className="h-2 w-4 bg-white/60 rounded-full" />
            <div className="h-2 w-4 bg-white/40 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
