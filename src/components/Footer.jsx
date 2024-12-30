import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Contact Section */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-lg font-semibold mb-2">CONTACT US</h2>
          <p>123 ABS Street, Unit 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>

        {/* Follow Us Section */}
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">Follow US</h2>
          <p className="mb-4">Join us on social media</p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="text-center mt-8 text-gray-400 text-sm">
        Copyright © CulinaryCloud. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
