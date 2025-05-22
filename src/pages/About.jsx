import React from "react";
import { Building, Users, ShieldCheck, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-80 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative h-full flex items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white z-10">
            About Us
          </h1>
        </div>
      </section>

      {/* About Company */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-gray-700 text-lg">
            We are a dedicated team of real estate professionals committed to
            helping you find the perfect property. Whether you're looking to
            buy, sell, or rent, we bring experience, technology, and care to
            every step of your journey.
          </p>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
              <ShieldCheck className="mx-auto h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trusted Experts</h3>
              <p className="text-gray-600">
                We are known for transparency and professionalism in every
                transaction.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
              <Globe className="mx-auto h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">
                We connect buyers and sellers across cities, countries, and
                borders.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
              <Users className="mx-auto h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer Focused</h3>
              <p className="text-gray-600">
                We listen, advise, and support to ensure a stress-free property
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Achievements */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-4xl font-bold text-blue-600">500+</h3>
              <p className="text-gray-700 mt-2">Properties Sold</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">300+</h3>
              <p className="text-gray-700 mt-2">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">15</h3>
              <p className="text-gray-700 mt-2">Years Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">24/7</h3>
              <p className="text-gray-700 mt-2">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Real Estate Journey?
          </h2>
          <p className="text-lg mb-6">
            Get in touch with us today and let our experienced team help you
            take the next step.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
