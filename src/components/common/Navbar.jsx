import Link from "next/link";
import Image from "next/image";
import { IoMenuOutline } from "react-icons/io5";

// FIX: Import logo from public folder for better performance and reliability
import remitoutLogo from "../../../public/remitout_logo.webp";

const Navbar = () => {
  return (
    <nav className="bg-white/35 shadow-[0_2px_8px_0px_#F3F0F7] backdrop-blur-md font-poppins ">
      <div className="flex items-center justify-between md:px-[131px] px-4 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
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
          <Link href="/" className="text-[#1A1A1A] font-medium ">
            Home
          </Link>
          <Link href="/#services" className="text-[#1A1A1A] font-medium">
            Our Services
          </Link>
          <Link href="/#testimonials" className="text-[#1A1A1A] font-medium">
            Testimonials
          </Link>
          <Link href="/#faqs" className="text-[#1A1A1A] font-medium">
            FAQs
          </Link>
          {/* <Link href="#Contact" className="text-[#1A1A1A] font-medium">
            Schedule Call
          </Link> */}
        </div>

        {/* Mobile Hamburger Button - Static/Non-functional */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Open menu"
        >
          <IoMenuOutline className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
