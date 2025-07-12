"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Meet The Team", href: "/meet-the-team" },
    { label: "Schedule", href: "/schedule" },
    { label: "Guidelines", href: "/regulations" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-slide-down ${
        isScrolled
          ? "bg-black/70 backdrop-blur-xl shadow-lg py-3 border-b border-white/10 glass-navbar"
          : "bg-black/30 backdrop-blur-lg py-6 glass-navbar"
      } ${className}`}
      style={{
        WebkitBackdropFilter: "blur(18px)",
        backdropFilter: "blur(18px)",
        background: isScrolled ? "rgba(20,20,20,0.7)" : "rgba(20,20,20,0.3)",
        borderBottom: isScrolled
          ? "1px solid rgba(255,255,255,0.10)"
          : "1px solid transparent",
        boxShadow: isScrolled ? undefined : "none",
        transition: "background 0.3s, border-bottom 0.3s, padding 0.3s",
      }}
    >
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="ibm-font text-2xl md:text-3xl transition-all duration-300 group-hover:scale-105">
              <span className="font-bold text-red-500 group-hover:text-red-600 transition-colors duration-500">
                TED
              </span>
              <span
                className="font-bold text-red-500 relative mx-0.5 group-hover:text-red-600 transition-colors duration-500"
                style={{ fontSize: "0.7em", top: "-0.6em" }}
              >
                x
              </span>
              <span className="font-regular text-grey-200 group-hover:text-white transition-colors duration-500">
                Youth@CHIREC
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 inter-font font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 nav-hover flex flex-col items-center justify-center text-center
                  ${
                    pathname === item.href
                      ? "text-red-500 bg-red-500/10 shadow shadow-red-500/10 hover:bg-red-500/20 hover:shadow-red-500/20"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                <span className="w-full break-words leading-tight text-center">
                  {item.label}
                </span>
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="inter-font font-medium group relative overflow-hidden bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 transition-all duration-300"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen
              ? "max-h-[500px] opacity-100 mt-4"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black/90 backdrop-blur-md rounded-2xl p-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-xl transition-all duration-300 ${
                  pathname === item.href
                    ? "text-red-500 bg-red-500/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-xl transition-all duration-300 mt-4">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
