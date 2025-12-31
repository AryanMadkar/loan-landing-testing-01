export default function Transfers() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#363636] mb-6">Money Transfers</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-4">
            Fast, secure, and affordable international money transfers to over 150 countries.
          </p>
          
          <h2 className="text-2xl font-bold text-[#45267F] mt-8 mb-4">Transfer Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Competitive exchange rates</li>
            <li>Low transaction fees</li>
            <li>Real-time transfer tracking</li>
            <li>Bank-to-bank transfers</li>
            <li>24/7 customer support</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#45267F] mt-8 mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Sign up for a free account</li>
            <li>Provide recipient details</li>
            <li>Enter transfer amount</li>
            <li>Confirm exchange rate and fees</li>
            <li>Complete the transfer</li>
          </ol>
          
          <h2 className="text-2xl font-bold text-[#45267F] mt-8 mb-4">Send Money Today</h2>
          <p className="text-gray-600">
            Start your transfer now or <a href="/pages/contact-us" className="text-[#FF7A00] hover:underline">contact us</a> for assistance.
          </p>
        </div>
      </div>
    </div>
  );
}
