"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMenuOutline } from "react-icons/io5";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLoading } from "../../context/LoadingContext";

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

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navLinks = [
    { label: "Home", href: "/", isScroll: false },
    { label: "Our Services", href: "services", isScroll: true },
    { label: "Testimonials", href: "testimonials", isScroll: true },
    { label: "FAQs", href: "faqs", isScroll: true },
  ];

  return (
    <nav
      ref={container}
      className="bg-white/80 shadow-[0_2px_8px_0px_#F3F0F7] backdrop-blur-md font-poppins sticky top-0 z-50"
    >
      <div className="flex items-center justify-between md:px-[131px] px-4 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 nav-logo opacity-0">
          <Link href="/">
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
          {navLinks.map((link, idx) =>
            link.isScroll ? (
              <button
                key={idx}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-[#1A1A1A] font-medium nav-link opacity-0 hover:text-[#45267F] transition-colors duration-300 cursor-pointer"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={idx}
                href={link.href}
                className="text-[#1A1A1A] font-medium nav-link opacity-0 hover:text-[#45267F] transition-colors duration-300"
              >
                {link.label}
              </Link>
            )
          )}
          <Link href="/pages/contact-us">
            <button className="nav-link opacity-0 px-6 py-2.5 bg-[#FF7A00] text-white font-semibold rounded-lg hover:bg-[#E66D00] transition-colors duration-300 shadow-md hover:shadow-lg">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
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
