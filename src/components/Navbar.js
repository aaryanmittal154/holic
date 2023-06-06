"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-black shadow-md overflow-hidden">
      <nav className="container mx-auto flex items-center justify-between py-1 px-4 md:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="mr-6 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Image src="/logo.png" alt="Holic AI" width={60} height={60} />
          </div>
          <div className="font-semibold text-3xl tracking-tight text-white">
            Holic AI
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 6a1 1 0 100 2h12a1 1 0 100-2H4z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`md:flex items-center space-x-1 text-white ${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex-row`}
        >
          <a
            href="/"
            className="mx-4 py-2 px-3 rounded hover:bg-gray-800 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/about"
            className="mx-4 py-2 px-3 rounded hover:bg-gray-800 transition-colors duration-300"
          >
            About Us
          </a>
          <a
            href="/services"
            className="mx-4 py-2 px-3 rounded hover:bg-gray-800 transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="/contact"
            className="mx-4 py-2 px-3 rounded hover:bg-gray-800 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
}
