import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Github } from "lucide-react";

export default function Footer() {
  // Static footer content
  const footerContent = {
    officeAddress: "Mumbai, India",
    email: "hello@remitout.com",
    phone: "+91 22-1234 5678",
  };

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/remitout", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/remitout", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com/company/remitout", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/remitout", label: "GitHub" },
  ];

  const gmailLink = (email) => `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <footer className="bg-[#1a1428] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 mb-8">
          {/* Company Section */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Company</h3>
            <nav className="space-y-2">
              <Link href="/pages/about" className="block text-sm md:text-base text-gray-300 hover:text-[#FF7A00] transition-colors">
                About Us
              </Link>
              <Link href="/pages/careers" className="block text-sm md:text-base text-gray-300 hover:text-[#FF7A00] transition-colors">
                Careers
              </Link>
              <Link href="/pages/blog" className="block text-sm md:text-base text-gray-300 hover:text-[#FF7A00] transition-colors">
                Blog
              </Link>
              <Link href="/pages/contact" className="block text-sm md:text-base text-gray-300 hover:text-[#FF7A00] transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Products</h3>
            <nav className="space-y-2">
              <Link href="/pages/loans" className="block text-sm md:text-base text-gray-300 hover:text-[#FF7A00] transition-colors">
                Loans
              </Link>
              <Link href="/pages/transfers" className="block text-sm md:text-base text-gray-300 hover:text-[#FF7A00] transition-colors">
                Transfers
              </Link>
              <Link href="/pages/education" className="block text-sm md:text-base text-gray-300 hover:text-[#FF7A00] transition-colors">
                Education
              </Link>
              <Link href="/pages/business" className="block text-sm md:text-base text-gray-300 hover:text-[#FF7A00] transition-colors">
                Business
              </Link>
            </nav>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Support</h3>
            <nav className="space-y-2">
              <Link href="/pages/help" className="block text-sm md:text-base text-gray-300 hover:text-[#FF7A00] transition-colors">
                Help Center
              </Link>
              <Link href="/pages/faq" className="block text-sm md:text-base text-gray-300 hover:text-[#FF7A00] transition-colors">
                FAQ
              </Link>
              <Link href="/privacy-policy" className="block text-sm md:text-base text-gray-300 hover:text-[#FF7A00] transition-colors">
                Privacy
              </Link>
              <Link href="/terms-of-use" className="block text-sm md:text-base text-gray-300 hover:text-[#FF7A00] transition-colors">
                Terms
              </Link>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-2 md:col-span-2">
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 text-sm rounded-lg bg-[#2a2236] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00] border border-gray-700"
              />
              <button
                type="submit"
                className="w-full bg-[#FF7A00] hover:bg-[#e86c30] text-white font-semibold py-2 px-4 text-sm rounded-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Contact & Social Section */}
        <div className="border-t border-gray-700 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* Contact Info */}
            <div className="space-y-2 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#FF7A00] flex-shrink-0" />
                <a href={`mailto:${footerContent.email}`} className="text-gray-300 hover:text-[#FF7A00] transition-colors">
                  {footerContent.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#FF7A00] flex-shrink-0" />
                <a href={`tel:${footerContent.phone}`} className="text-gray-300 hover:text-[#FF7A00] transition-colors">
                  {footerContent.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#FF7A00] flex-shrink-0" />
                <span className="text-gray-300">{footerContent.officeAddress}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 md:justify-end justify-center">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#FF7A00] flex items-center justify-center text-white hover:bg-[#e86c30] transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-xs md:text-sm">
          <p>© 2025 Copyright by Remitout. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
