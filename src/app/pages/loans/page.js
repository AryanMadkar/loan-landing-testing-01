export default function Loans() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#363636] mb-6">Education Loans</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-4">
            Get access to flexible and affordable education loans tailored to your needs.
          </p>
          
          <h2 className="text-2xl font-bold text-[#45267F] mt-8 mb-4">Loan Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Competitive interest rates starting from 7.5% p.a.</li>
            <li>Loan amount up to ₹50 lakhs</li>
            <li>Flexible repayment options</li>
            <li>Minimal documentation required</li>
            <li>Fast approval process (24-48 hours)</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#45267F] mt-8 mb-4">Eligibility Criteria</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Age between 18-35 years</li>
            <li>Valid admission letter from recognized university</li>
            <li>Good credit history</li>
            <li>Annual family income above ₹4 lakhs</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#45267F] mt-8 mb-4">Apply Now</h2>
          <p className="text-gray-600">
            Ready to apply? <a href="/pages/contact-us" className="text-[#FF7A00] hover:underline">Click here</a> to start your application or contact us for more information.
          </p>
        </div>
      </div>
    </div>
  );
}
