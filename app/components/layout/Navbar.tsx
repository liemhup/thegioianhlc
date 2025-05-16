"use client";
import React, { useState } from "react";
import AuthButton from "./AuthButton";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <a href="/">Logo</a>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-gray-800">
            Trang chủ
          </a>
          <a href="/" className="text-gray-600 hover:text-gray-800">
            Trang chủ
          </a>
          <a href="/" className="text-gray-600 hover:text-gray-800">
            Trang chủ
          </a>
          <a href="/" className="text-gray-600 hover:text-gray-800">
            Trang chủ
          </a>
          <a href="/" className="text-gray-600 hover:text-gray-800">
            Trang chủ
          </a>
        </div>

        {/* Desktop Right Section with Search and Login */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-64 px-4 py-2 border-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
            />
          </div>
          <AuthButton></AuthButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t px-4 py-2 space-y-3">
          <a href="/" className="block text-gray-600 hover:text-gray-800">
            Trang chủ
          </a>
          <div className="py-2">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <a
            href="/login"
            className="block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-center"
          >
            Đăng nhập
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
