import Image from "next/image";
import Link from "next/link";

// Import images from public folder for better performance and reliability
import serviceImage1 from "../../public/service_section01.webp";
import serviceImage2 from "../../public/service_section02.webp";
import serviceImage3 from "../../public/service_section03.webp";
import serviceImage4 from "../../public/service_section04.webp";

const ServicesSection = () => {
  // Hardcoded processed services (no API/fetch/state)
  const processedServices = [
    {
      id: "1",
      title: "Education Loans",
      subtitle: "For Indian Students",
      description: [
        { text: "Compare rates from top 20+ banks in India instantly." },
        { text: "AI-powered approval in 24 hours with minimal documentation." },
      ],
      fullImageUrl: serviceImage1,
      imageAlt: "Education Loans",
      isEvenRow: true,
      buttonLink: "/contact-us",
      buttonText: "Contact to Know more",
    },
    {
      id: "2",
      title: "Overseas Remittance",
      subtitle: "Zero Hidden Fees",
      description: [
        { text: "Send money abroad at lowest FX rates, RBI compliant." },
        { text: "Real-time tracking and instant delivery to 100+ countries." },
      ],
      fullImageUrl: serviceImage2,
      imageAlt: "Overseas Remittance",
      isEvenRow: true,
      buttonLink: "/remittance",
      buttonText: "Contact to Know more",
    },
    {
      id: "3",
      title: "KYC Verification",
      subtitle: "AI-Powered OCR",
      description: [
        { text: "Secure document upload and verification in seconds." },
        {
          text: "99% accuracy with multi-document support (Aadhaar, PAN, etc.).",
        },
      ],
      fullImageUrl: serviceImage3,
      imageAlt: "KYC Verification",
      isEvenRow: false,
      buttonLink: "/kyc",
      buttonText: "Contact to Know more",
    },
    {
      id: "4",
      title: "Loan Disbursement",
      subtitle: "Direct to Account",
      description: [
        { text: "Funds transferred directly to your bank or university." },
        { text: "Flexible repayment options tailored for students." },
      ],
      fullImageUrl: serviceImage4,
      imageAlt: "Loan Disbursement",
      isEvenRow: false,
      buttonLink: "/disbursement",
      buttonText: "Contact to Know more",
    },
  ];

  return (
    <div className="bg-white w-full pb-0 md:pb-39">
      <section className="py-5 md:py-16 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[36px] font-semibold md:text-4xl text-[#363636] mb-4">
            Our{" "}
            <span className="hidden text-[#45267f99] italic">Remittance</span>{" "}
            Services
          </h2>
          <p className="text-[#8E8E8E] text-[18px] max-w-2xl mx-auto">
            Send money abroad for education, travel, medical, and more — 100%
            RBI-compliant and hassle-free.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto">
          {processedServices.map((service) => (
            <div
              key={service.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {/* Image */}
              <div
                className={`${
                  service.isEvenRow
                    ? "order-1 md:order-1"
                    : "order-1 md:order-2"
                } bg-white rounded-[6px] shadow-sm border border-gray-100 flex items-center justify-center min-h-[300px]`}
              >
                <Image
                  src={service.fullImageUrl}
                  alt={service.imageAlt}
                  width={200}
                  height={250}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>

              {/* Content */}
              <div
                className={`${
                  service.isEvenRow
                    ? "order-2 md:order-2"
                    : "order-2 md:order-1"
                } bg-[#F7F7FB] rounded-[10px] p-[20px] shadow-sm border border-gray-100 flex flex-col justify-center min-h-[300px]`}
              >
                <h3 className="text-2xl font-semibold text-[#363636] mb-4">
                  {service.title}{" "}
                  {service.subtitle && (
                    <span className="text-[#45267f]/60 italic font-medium">
                      {service.subtitle}
                    </span>
                  )}
                </h3>
                <div className="space-y-1 mb-6 flex-1">
                  {service.description.map((desc, i) => (
                    <p
                      key={i}
                      className="text-[#8E8E8E] text-base leading-relaxed"
                    >
                      {desc.text}
                    </p>
                  ))}
                </div>
                <Link
                  href={service.buttonLink}
                  className="flex items-center gap-2 text-[#FF7A00] font-medium text-base hover:text-[#FF7A00]/80 transition-colors cursor-pointer"
                >
                  {service.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
