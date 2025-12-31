"use client";
import React from "react";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { FaBook } from "react-icons/fa";
import { MdOutlineFlight } from "react-icons/md";
import { TbPigMoney } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCheck, FaStar } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";

import Link from "next/link";
import Navbar from "./common/Navbar";
const HeroSection = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <div className="bg-[#3B1D6E] text-white text-sm border-b border-white/20 py-4">
        <div className="max-w-8xl flex justify-between md:items-center h-10 p-4 md:px-[131px]">
          <div className="flex gap-4 font-poppins text-sm md:text-lg">
            <div className="flex gap-1">
              <FaPhone />
              <a href={`tel:${""}`} className="hover:underline">
                {""}
              </a>
            </div>
            <span className="hidden sm:inline-block text-white/40">|</span>
            <div className="hidden sm:flex items-center gap-1">
              <IoMdMail />
              <a
                href={`https://mail.google.com/mail/?view=cm&to=${""}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {""}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <div className="hidden sm:flex items-center gap-2 font-poppins text-lg">
              <a href="/contact-us" className="underline hover:text-gray-200">
                Contact Us
              </a>

              <span className="text-white/40">|</span>
              <div className="flex items-center gap-3">
                <a href="#" className="hover:text-gray-300">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />

      <section className="px-4 py-5 md:px-[131px]">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Hero Text */}
          <div className="space-y-8">
            <div className="bg-[#45267F]/9 w-fit p-3 flex items-center space-x-2">
              <FaCheck className="w-4 h-4 text-[#45267F] flex-shrink-0" />
              <span className="text-[#45267F] text-[21px] font-bold">
                Trusted by 10,000+ Students
              </span>
            </div>

            <div className="space-y-4">
              <div className="text-[32px] md:text-[50px] font-bold text-[#363636] tracking-[-1px] leading-tight md:leading-[60px] space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Secure Education Loans for Your Dream University
                </h1>
                <span className="block text-[18px] md:text-[20px] font-normal text-[#45267F] mt-4">
                  Compare rates from top banks in India
                </span>
              </div>

              <p className="text-[#8E8E8E] text-base md:text-lg max-w-lg">
                Fast approval, low interest, no hidden fees. Start your
                application in 2 minutes and get funded for your studies abroad
                or in India.
              </p>
            </div>

            <Link href="/contact-us">
              <button className="bg-[#FF7A00] text-white text-lg font-semibold px-20 py-5 cursor-pointer hover:bg-[#FF7A00]/90 md:rounded-none w-full md:w-[60%] shadow-lg transition-all duration-200">
                Get Started
              </button>
            </Link>
          </div>

          {/* Hero Image + CTAs */}
          <div className="relative h-[48vh] md:h-[92vh]">
            <div className="w-full h-full relative">
              <Image
                src="/hero_section_banner.webp"
                alt="Education loan comparison"
                width={600}
                height={400}
                quality={75}
                loading="eager"
                style={{ maxWidth: "100%", height: "auto" }}
                className="object-cover w-full h-full"
              />
              <Image
                loading="lazy"
                src="/layer-5.webp"
                alt="Gray Overlay"
                width={800}
                height={800}
                className="absolute top-40 left-0 pointer-events-none"
              />
            </div>

            <button className="absolute top-[50%] right-[6%] bg-[#45267F] text-white px-6 py-5 rounded-full z-[21] shadow-lg font-semibold hover:bg-[#45267F]/90 transition-all duration-200">
              Join Us Today
            </button>

            <button className="absolute top-[32%] right-[60%] bg-white text-[#45267F] px-6 py-5 rounded-full shadow-lg font-semibold hover:shadow-xl transition-all duration-200 flex items-center space-x-2">
              <FaCheck className="w-5 h-5" />
              <span>Expert Advisors</span>
            </button>

            {/* Testimonial Card */}
            <div className="hidden md:block absolute bottom-[16%] right-[50%] p-4 bg-white shadow-lg rounded-lg max-w-sm z-[21]">
              <div className="space-y-3">
                <p className="text-gray-700 text-xl font-medium">
                  {
                    '"Amazing service! Got my loan approved in 24 hours with the best rates."'
                  }
                </p>
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    PS
                  </div>
                  <span className="font-semibold text-[#2B2B2B]">
                    Priya Sharma
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#45267F] text-white py-12 relative z-[20]">
        <div className="max-w-7xl mx-auto px-6 lg:px-32">
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-3 gap-4 sm:space-y-0 sm:space-x-4">
              {/* Icon */}
              <div className="w-14 h-14 bg-[#2E175A] rounded-xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                <FaChartSimple className="w-7 h-7 text-white" />
              </div>
              {/* Text */}
              <div className="max-w-xs sm:max-w-none mt-3 sm:mt-0">
                <h3 className="text-xl font-semibold mb-1 sm:mb-2">
                  Loan Comparison
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Compare rates from 20+ banks instantly and find the best
                  education loan for your needs.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col gap-4  sm:flex-row items-center sm:items-start text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4">
              {/* Icon */}
              <div className="w-14 h-14 bg-[#2E175A] rounded-xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                <FaClock className="w-7 h-7 text-white" />
              </div>
              {/* Text */}
              <div className="max-w-xs sm:max-w-none mt-3 sm:mt-0">
                <h3 className="text-xl font-semibold mb-1 sm:mb-2">
                  Instant Approval
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Get loan approval in under 24 hours with our AI-powered
                  processing system.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col gap-4 sm:flex-row items-center sm:items-start text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4">
              {/* Icon */}
              <div className="w-14 h-14 bg-[#2E175A] rounded-xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                <FaShieldAlt className="w-7 h-7 text-white" />
              </div>
              {/* Text */}
              <div className="max-w-xs sm:max-w-none mt-3 sm:mt-0">
                <h3 className="text-xl font-semibold mb-1 sm:mb-2">
                  Secure KYC
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Fast and secure document verification using OCR and AI for 99%
                  accuracy.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col gap-4 sm:flex-row items-center sm:items-start text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4">
              {/* Icon */}
              <div className="w-14 h-14 bg-[#2E175A] rounded-xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                <FaExchangeAlt className="w-7 h-7 text-white" />
              </div>
              {/* Text */}
              <div className="max-w-xs sm:max-w-none mt-3 sm:mt-0">
                <h3 className="text-xl font-semibold mb-1 sm:mb-2">
                  Remittance
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Seamless international money transfers at lowest rates for
                  your study abroad expenses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
