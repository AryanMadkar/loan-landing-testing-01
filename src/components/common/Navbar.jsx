"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMenuOutline } from "react-icons/io5";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLoading } from "../../context/LoadingContext";

// FIX: Import logo from public folder for better performance and reliability
import remitoutLogo from "../../../public/remitout_logo.webp";

const Navbar = () => {
  const container = useRef();
  const { isFinished } = useLoading();

  useGSAP(
    () => {
      if (!isFinished) return;

      const tl = gsap.timeline();

      tl.fromTo(
        ".nav-logo",
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(
          ".nav-link",
          { y: -20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .fromTo(
          ".mobile-menu-btn",
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
          "-=0.4"
        );
    },
    { scope: container, dependencies: [isFinished] }
  );

  return (
    <nav
      ref={container}
      className="bg-white/35 shadow-[0_2px_8px_0px_#F3F0F7] backdrop-blur-md font-poppins "
    >
      <div className="flex items-center justify-between md:px-[131px] px-4 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 nav-logo opacity-0">
          <Link href="/">
            {/* FIX: Using imported logo image for better optimization */}
            <Image
              src={remitoutLogo}
              alt="Remitout education loan and remittance logo"
              width={138}
              height={48}
              className="object-contain cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex text-base items-center space-x-8 leading-[19.6px]">
          <Link
            href="/"
            className="text-[#1A1A1A] font-medium nav-link opacity-0"
          >
            Home
          </Link>
          <Link
            href="/#services"
            className="text-[#1A1A1A] font-medium nav-link opacity-0"
          >
            Our Services
          </Link>
          <Link
            href="/#testimonials"
            className="text-[#1A1A1A] font-medium nav-link opacity-0"
          >
            Testimonials
          </Link>
          <Link
            href="/#faqs"
            className="text-[#1A1A1A] font-medium nav-link opacity-0"
          >
            FAQs
          </Link>
          {/* <Link href="#Contact" className="text-[#1A1A1A] font-medium nav-link opacity-0">
            Schedule Call
          </Link> */}
        </div>

        {/* Mobile Hamburger Button - Static/Non-functional */}
        <button
          className="md:hidden text-gray-700 focus:outline-none mobile-menu-btn opacity-0"
          aria-label="Open menu"
        >
          <IoMenuOutline className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
