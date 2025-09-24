import React from "react";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white">Product Data Explorer</h2>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            Explore, analyze, and manage product data with ease. Built for
            modern businesses.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/categories" className="hover:text-green-400 transition">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/faq" className="hover:text-green-400 transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-green-400 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-green-400 transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-green-400 transition">
              <Facebook size={22} />
            </Link>
            <Link href="#" className="hover:text-green-400 transition">
              <Instagram size={22} />
            </Link>
            <Link href="#" className="hover:text-green-400 transition">
              <Twitter size={22} />
            </Link>
            <Link href="mailto:support@example.com" className="hover:text-green-400 transition">
              <Mail size={22} />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Product Data Explorer. All rights reserved.
      </div>
    </footer>
  );
};
