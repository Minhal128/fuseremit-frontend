"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const languages = [
  { name: "English", code: "ENG", img: "/images/flag.png" },
  { name: "Spanish", code: "ES", img: "/images/flag.png" },
  { name: "French", code: "FR", img: "/images/flag.png" },
];

const navLinks = [
  {
    name: "Products",
    href: "#",
    hasDropdown: true,
    items: [
      { name: "Home", href: "/home" },
      { name: "International Money Transfer", href: "/money-transfer" },
    ],
  },
  {
    name: "Company",
    href: "#",
    hasDropdown: true,
    items: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    name: "Community",
    href: "#",
    hasDropdown: true,
    items: [
      { name: "Community", href: "/community" },
      { name: "Creator", href: "/creator" },
      { name: "Mini Annotation", href: "/mini-annotation" },
    ],
  },
  { name: "Help", href: "/help", hasDropdown: false },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const [langOpen, setLangOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="absolute top-0 w-full z-50 bg-white md:bg-transparent font-manrope">
      <div className="mx-auto md:px-20 px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center cursor-pointer">
              <img
                src="/images/navbar-logo.png"
                alt="Logo"
                className="h-10 w-auto"
              />
            </Link>

            <div className="relative hidden md:block">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-xs font-bold text-black bg-white rounded-full px-3 py-1.5 shadow-sm border border-gray-100 cursor-pointer"
              >
                <img
                  src={currentLang.img}
                  alt=""
                  className="h-4 w-4 rounded-full"
                />
                <span>{currentLang.code}</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`}
                />
              </button>

              {langOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white rounded-xl shadow-xl py-2 border border-gray-50 z-60">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang);
                        setLangOpen(false);
                      }}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 w-full text-left cursor-pointer"
                    >
                      <img src={lang.img} alt="" className="h-4 w-4" />
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-25">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.hasDropdown ? (
                  <button className="flex items-center gap-1 text-sm font-semibold text-gray-900 py-4 cursor-pointer">
                    {link.name}
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:rotate-180 transition-transform" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="block text-sm font-semibold text-gray-900 py-4 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                )}

                {link.hasDropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 w-56 bg-white rounded-2xl shadow-2xl border border-gray-50 py-3 animate-in fade-in slide-in-from-top-2 duration-200">
                    {link.items?.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-5 py-2.5 text-sm text-gray-600 cursor-pointer font-medium hover:text-[#0B3963] hover:bg-gray-50 transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-900 cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-white z-100 overflow-y-auto animate-in slide-in-from-right duration-300">
          <div className="px-6 py-8 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-50 pb-2">
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.name ? null : link.name,
                        )
                      }
                      className="w-full flex items-center justify-between py-1 text-lg font-semibold text-black cursor-pointer"
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {activeDropdown === link.name && (
                      <div className="space-y-2 pb-1 animate-in fade-in duration-300">
                        {link.items?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={handleLinkClick}
                            className="block text-black text-sm cursor-pointer"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block py-1 text-lg font-semibold text-black cursor-pointer"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="mt-10">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                Select Language
              </p>
              <div className="grid grid-cols-3 gap-3">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang);
                      setIsOpen(false);
                    }}
                    className={`flex flex-col items-center gap-2 p-3 rounded-2xl border cursor-pointer ${
                      currentLang.code === lang.code
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-100"
                    }`}
                  >
                    <img
                      src={lang.img}
                      alt=""
                      className="h-6 w-6 rounded-full"
                    />
                    <span className="text-xs font-bold">{lang.code}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}