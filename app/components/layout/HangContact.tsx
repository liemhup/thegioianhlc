import React from "react";
import { FaPhone, FaFacebook, FaEnvelope } from "react-icons/fa";

const HangContact = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-2">
        {/* Phone Button */}
        <a
          href="tel:+84123456789"
          className="bg-green-500 text-white p-3 rounded-l-lg hover:bg-green-600 transition-colors duration-300 flex items-center"
        >
          <FaPhone className="mr-2" />
          <span className="hidden group-hover:block">Gọi ngay</span>
        </a>

        {/* Facebook Button */}
        <a
          href="https://facebook.com/your-page"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white p-3 rounded-l-lg hover:bg-blue-600 transition-colors duration-300 flex items-center"
        >
          <FaFacebook className="mr-2" />
          <span className="hidden group-hover:block">Facebook</span>
        </a>

        {/* Email Button */}
        <a
          href="mailto:contact@thegioianhlc.com"
          className="bg-red-500 text-white p-3 rounded-l-lg hover:bg-red-600 transition-colors duration-300 flex items-center"
        >
          <FaEnvelope className="mr-2" />
          <span className="hidden group-hover:block">Email</span>
        </a>
      </div>
    </div>
  );
};

export default HangContact;
