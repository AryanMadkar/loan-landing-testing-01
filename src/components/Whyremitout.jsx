import React from "react";
import Image from "next/image";
import { FaAward } from "react-icons/fa";
import features1 from "../../public/our-service-4.png";

const WhyRemitoutSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-orange-500 rotate-45 rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 bg-white rotate-45 rounded-sm" />
            </div>
            <h2 className="text-[32px] font-bold text-[#0B090A]">
              Why Remitout?
            </h2>
          </div>
          <p className="text-[#8E8E8E] text-[18px] font-medium">
            See why we are the favourite of thousands
          </p>
        </div>

        {/* Feature Card */}
        <div className="relative rounded-xl overflow-hidden h-[300px] md:h-[403px] group">
          <Image
            src={features1}
            alt="Trusted and Secure"
            fill
            sizes="(width: 768px) 400px, 100vw"
            className="object-cover object-top"
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(0deg, #000 0%, rgba(0,0,0,0) 100%)",
              mixBlendMode: "multiply",
            }}
          />

          {/* Icon */}
          <div className="absolute top-6 left-6 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
            <FaAward className="text-white text-2xl" />
          </div>

          {/* Text */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h3 className="text-[22px] font-semibold mb-2">
              Trusted & Secure
            </h3>
            <p className="text-base text-white/60 leading-[19.2px]">
              We ensure your data is protected with industry-grade security and compliance.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-12">
          <div className="bg-white rounded-2xl py-4 md:py-8 px-3 md:px-10 shadow-sm md:w-[90%] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">

              <div className="flex items-center gap-4 w-full md:w-1/2">
                <div className="w-18 h-18 rounded-xl overflow-hidden flex items-center justify-center bg-white">
                  <Image
                    src="/images/cta-icon.png"
                    alt="CTA Icon"
                    width={48}
                    height={48}
                  />
                </div>

                <div>
                  <h3 className="text-[20px] md:text-2xl font-medium text-[#363636] mb-1 tracking-[-1px]">
                    Get Started with Remitout
                  </h3>
                  <p className="text-[#8E8E8E]">
                    Experience fast, secure, and seamless global transfers today.
                  </p>
                </div>
              </div>

              <a
                href="#"
                className="w-full md:w-auto bg-[#FF7A00] text-white px-8 py-3 rounded-md font-semibold text-lg md:text-2xl text-center"
              >
                Get Started
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

WhyRemitoutSection.displayName = "WhyRemitoutSection";
export default WhyRemitoutSection;