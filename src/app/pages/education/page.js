export default function Education() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#363636] mb-6">Education Financing</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-4">
            Comprehensive financing solutions for your educational aspirations, both domestic and international.
          </p>
          
          <h2 className="text-2xl font-bold text-[#45267F] mt-8 mb-4">Our Education Solutions</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li><strong>Undergraduate Loans:</strong> For bachelor's degree programs</li>
            <li><strong>Postgraduate Loans:</strong> For master's and PhD programs</li>
            <li><strong>Professional Course Loans:</strong> For specialized programs like MBA, Law, Medicine</li>
            <li><strong>Vocational Training Loans:</strong> For skill development programs</li>
            <li><strong>Study Abroad Loans:</strong> For international education</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#45267F] mt-8 mb-4">Why Choose Remitout for Education?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Dedicated education finance experts</li>
            <li>Personalized loan packages</li>
            <li>Fast processing and approval</li>
            <li>Flexible repayment schedules</li>
            <li>Zero processing fees for students</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#45267F] mt-8 mb-4">Get Your Loan Today</h2>
          <p className="text-gray-600">
            Don't let finances stop your education dreams. <a href="/pages/contact-us" className="text-[#FF7A00] hover:underline">Apply now</a> and get approved within 48 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
