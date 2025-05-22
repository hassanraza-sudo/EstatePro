import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-72 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative h-full flex items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-white z-10">Contact Us</h1>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white shadow rounded-lg">
              <Phone className="mx-auto text-blue-600 mb-4" size={32} />
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-700 mt-2">+92 301 2984495</p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <Mail className="mx-auto text-blue-600 mb-4" size={32} />
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-700 mt-2">bps345@gmail.com</p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <MapPin className="mx-auto text-blue-600 mb-4" size={32} />
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-gray-700 mt-2">
                Beacon Public High School, Bhiria City, Sindh
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea
                  rows="5"
                  placeholder="Type your message here..."
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Location</h2>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Google Map"
                width="100%"
                height="350"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://maps.google.com/maps?q=bhiria%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
