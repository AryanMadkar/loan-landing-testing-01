export default function Contact() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#363636] mb-6">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#45267F] mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Have questions or need assistance? We're here to help. Reach out to us using any of the methods below.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                <a href="mailto:hello@remitout.com" className="text-[#FF7A00] hover:underline">hello@remitout.com</a>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                <a href="tel:+919122125678" className="text-[#FF7A00] hover:underline">+91 91-2212 5678</a>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Location</h3>
                <p className="text-gray-600">Mumbai, India</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-[#45267F] mb-4">Contact Form</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A00]" />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A00]" />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-[#FF7A00] text-white font-semibold py-2 rounded-lg hover:bg-[#E66D00] transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
