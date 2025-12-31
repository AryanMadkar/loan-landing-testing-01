import Image from "next/image";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="pb-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-[32px] md:text-4xl font-bold mb-2 text-black leading-tight">
            Get In{" "}
            <span className="text-[#4526FF]/60 md:text-black italic md:not-italic">
              Touch
            </span>
          </h2>
          <p className="text-[#8E8E8E] text-lg md:text-xl">
            We have got you covered.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Optimized Image Container - reduced CSS complexity */}
          <div className="w-full lg:w-1/2 hidden md:flex justify-center lg:justify-end">
            <div className="relative w-[500px] h-[600px] mx-auto lg:mx-0">
              {/* Background circles - combined into single div */}
              <div className="absolute inset-0">
                <div className="absolute top-[60%] left-1/3 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-gray-200/80 to-transparent rounded-full blur-xl z-0 animate-pulse" />
                <div className="absolute top-[60%] left-1/3 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/20 to-white/90 rounded-full z-10 pointer-events-none" />
              </div>

              {/* Optimized Image - better priority and sizes */}
              <Image
                src="/contact_Banner.webp"
                alt="Graduate student consulting with advisor"
                fill
                priority={false}
                loading="lazy"
                sizes="(max-width: 1024px) 500px, 500px"
                className="object-cover rounded-2xl shadow-2xl z-20"
              />
            </div>
          </div>

          {/* Optimized Form - semantic labels, better accessibility */}
          <div className="w-full lg:w-1/2 max-w-xl mx-auto lg:mx-0">
            <form className="space-y-6" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold mb-3 text-gray-900"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-4 bg-gray-50/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/50 focus:border-[#FF7A00]/50 transition-all duration-200 text-base placeholder-gray-500 shadow-sm hover:shadow-md"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold mb-3 text-gray-900"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-4 bg-gray-50/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/50 focus:border-[#FF7A00]/50 transition-all duration-200 text-base placeholder-gray-500 shadow-sm hover:shadow-md"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold mb-3 text-gray-900"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your education loan, remittance, or admission needs..."
                  required
                  className="w-full px-4 py-4 bg-gray-50/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/50 focus:border-[#FF7A00]/50 transition-all duration-200 text-base placeholder-gray-500 resize-vertical shadow-sm hover:shadow-md min-h-[120px]"
                />
              </div>

              {/* Optimized Checkbox */}
              <div className="flex items-start gap-3 p-3 bg-gray-50/50 rounded-xl">
                <input
                  id="terms"
                  name="acceptTerms"
                  type="checkbox"
                  required
                  className="w-5 h-5 mt-1 text-[#FF7A00] border-2 border-gray-300 rounded focus:ring-[#FF7A00] focus:ring-2 cursor-pointer transition-all duration-200"
                />
                <label
                  htmlFor="terms"
                  className="text-sm leading-relaxed text-gray-700 cursor-pointer select-none flex-1"
                >
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-[#FF7A00] hover:text-[#FF7A00]/80 font-semibold underline underline-offset-2 transition-colors"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-[#FF7A00] hover:text-[#FF7A00]/80 font-semibold underline underline-offset-2 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Optimized Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FF7A00] to-[#FF8C00] text-white text-xl md:text-[22px] font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-[#FF7A00]/30 transition-all duration-300 uppercase tracking-wide bg-[position:0%_0%] hover:bg-[position:100%_0%] cursor-pointer"
              >
                Get In Touch Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
