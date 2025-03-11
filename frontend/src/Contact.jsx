import { Instagram, Mail, Phone } from "lucide-react"; // Icons for contact details
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      
      {/* Hero Section */}
      <section className="bg-pink text-white py-16 text-center">
        <h1 className="text-5xl font-extrabold">Contact Us</h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          We’d love to hear from you! Reach out for any inquiries or support.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left Side - Contact Details */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-700">Feel free to reach out to us through any of the following channels:</p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-600" size={24} />
                <span className="text-gray-800">Matrix_9NIN@gmail.com</span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="text-green-600" size={24} />
                <span className="text-gray-800">+91 8595827426</span>
              </div>

              <div className="flex items-center space-x-3">
                <Instagram className="text-red-600" size={24} />
                <span className="text-gray-800">Matrix_9NIN</span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <input 
                type="text" 
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />

              <input 
                type="email" 
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />

              <textarea 
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />

              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
