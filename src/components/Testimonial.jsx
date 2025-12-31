import Image from "next/image";

const TestimonialCarousel = () => {
  const grouped = [
    [
      {
        id: "1",
        text: "Remitout made my education loan process seamless. Compared rates from multiple banks and got the best deal in just 24 hours!",
        name: "Priya Sharma",
        rating: 5,
        avatar: {
          url: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg?t=st=1767166528~exp=1767170128~hmac=b65430e583035e54426b82f2935d953c5cbb99850a39b9b5a5c9c70ff7ed8f38",
        },
      },
      {
        id: "2",
        text: "The KYC verification was super fast with their AI OCR. No more waiting weeks for document checks—approved instantly!",
        name: "Rahul Patel",
        rating: 5,
        avatar: {
          url: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg?t=st=1767166528~exp=1767170128~hmac=b65430e583035e54426b82f2935d953c5cbb99850a39b9b5a5c9c70ff7ed8f38",
        },
      },
      {
        id: "3",
        text: "Perfect for sending money abroad for my UK tuition. Lowest fees and real-time tracking—highly recommend!",
        name: "Anita Desai",
        rating: 5,
        avatar: {
          url: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg?t=st=1767166528~exp=1767170128~hmac=b65430e583035e54426b82f2935d953c5cbb99850a39b9b5a5c9c70ff7ed8f38",
        },
      },
    ],
  ];

  const renderStars = (rating) => {
    const numericRating = Number(rating) || 0;
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < numericRating ? "text-orange-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  const getAvatarUrl = (avatarUrl) => {
    if (!avatarUrl || typeof avatarUrl !== "string" || !avatarUrl.trim()) {
      return "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg?t=st=1767166528~exp=1767170128~hmac=b65430e583035e54426b82f2935d953c5cbb99850a39b9b5a5c9c70ff7ed8f38";
    }
    return avatarUrl.startsWith("http") ? avatarUrl : avatarUrl;
  };

  return (
    <section className="w-full relative">
      <div className="relative w-full h-[70vh] md:h-[85vh]">
        <Image
          src="/TestimonialBannerNew.webp"
          alt="Indian students abroad using Remitout for education loans"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60" />

        {/* Main heading - positioned exactly like screenshot */}
        <div className="absolute top-16 md:top-24 left-6 md:left-12 lg:left-20 z-40 px-2">
          <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[0.9] md:leading-[0.88] tracking-[-0.02em] bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            What Our Students
            <br />
            <span className="block">
              Are <span className="text-[#FF7A00]">Saying</span>
            </span>
          </div>
          <p className="text-white/80 text-sm md:text-base mt-2 font-medium tracking-wide">
            Voices of Confidence
          </p>
        </div>

        {/* Testimonials - positioned exactly like screenshot */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] lg:w-[85%] max-w-7xl px-4 md:px-8 z-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {grouped[0].map((testimonial, i) => (
              <div
                key={testimonial.id || i}
                className="group bg-white/90 hover:bg-white backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] border border-white/30 hover:border-white/50 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Quote icon */}
                <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-gray-400 group-hover:text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Testimonial text */}
                <p className="text-gray-800 text-sm md:text-base lg:text-lg leading-relaxed mb-6 font-medium line-clamp-3 md:line-clamp-4 group-hover:line-clamp-none">
                  "{testimonial.text}"
                </p>

                {/* Author + Stars */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={getAvatarUrl(testimonial.avatar?.url)}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-2xl object-cover ring-4 ring-white/50 shadow-xl flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="font-bold text-lg md:text-xl text-gray-900 truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 font-medium">
                        Student
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 flex-shrink-0">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex gap-3 mt-10 md:mt-14 justify-center">
            <div className="h-2.5 w-24 bg-[#FF7A00] rounded-full shadow-lg" />
            <div className="h-2.5 w-6 bg-white/60 rounded-full" />
            <div className="h-2.5 w-6 bg-white/40 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
