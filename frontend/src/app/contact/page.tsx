import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <section className="bg-gradient-to-r from-green-600 to-green-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">Contact Us</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">
          Have questions, feedback, or partnership ideas? We’d love to hear from you.
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <Mail className="mx-auto text-green-600 mb-3" size={32} />
          <h3 className="text-lg font-semibold mb-2">Email Us</h3>
          <p className="text-gray-600">support@ablespace.com</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <Phone className="mx-auto text-green-600 mb-3" size={32} />
          <h3 className="text-lg font-semibold mb-2">Call Us</h3>
          <p className="text-gray-600">+91 98765 43210</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <MapPin className="mx-auto text-green-600 mb-3" size={32} />
          <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
          <p className="text-gray-600">Haryana, India</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Send Us a Message</h2>
        <form className="bg-white shadow-lg rounded-2xl p-8 grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 focus:outline-none"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            <Send size={18} className="mr-2" /> Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
