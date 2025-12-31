export default function About() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#363636] mb-6">About Remitout</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-4">
            Remitout is a leading fintech platform dedicated to making education loans and remittances accessible to everyone.
          </p>
          
          <h2 className="text-2xl font-bold text-[#45267F] mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            We aim to simplify the process of securing education loans for students aspiring to study abroad or pursue higher education in India.
          </p>
          
          <h2 className="text-2xl font-bold text-[#45267F] mt-8 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Fast and transparent application process</li>
            <li>Competitive interest rates</li>
            <li>No hidden fees</li>
            <li>Expert guidance throughout the process</li>
            <li>Trusted by 10,000+ students</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#45267F] mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            Have questions? Reach out to our team at <a href="mailto:hello@remitout.com" className="text-[#FF7A00] hover:underline">hello@remitout.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
