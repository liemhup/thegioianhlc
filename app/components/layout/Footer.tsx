import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Thế Giới Ảnh LC</h3>
            <p className="mb-2">Địa chỉ: 123 Đường ABC, Quận XYZ</p>
            <p className="mb-2">Điện thoại: (84) 123-456-789</p>
            <p>Email: contact@thegioianhlc.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-300">
                  Dịch vụ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kết Nối</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                Facebook
              </a>
              <a href="#" className="hover:text-gray-300">
                Instagram
              </a>
              <a href="#" className="hover:text-gray-300">
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
      </div>
    </footer>
  );
};

export default Footer;
