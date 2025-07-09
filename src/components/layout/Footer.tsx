import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/10 pt-12 pb-6 bg-transparent text-white relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div
          className="absolute left-1/4 top-0 w-40 h-40 bg-red-500/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute right-10 top-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1.2s" }}
        ></div>
        <div
          className="absolute left-8 bottom-0 w-28 h-28 bg-red-400/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute right-1/4 bottom-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2.5s" }}
        ></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-20 text-center md:text-left">
        {/* Logo and description */}
        <div className="flex-1 min-w-[220px] mb-8 md:mb-0 flex flex-col items-center md:items-start">
          <div className="text-2xl font-bold mb-2">
            <span className="text-red-500">TED</span>
            <span className="text-red-500 relative mx-0.5" style={{ fontSize: '0.7em', top: '-0.6em' }}>x</span>
            Youth@CHIREC
          </div>
          <div className="text-gray-300 text-sm leading-relaxed">
            Independently organized TED event.<br></br> © 2025 TEDxYouth@CHIREC,
            under license from TED.
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex-1 min-w-[160px] mb-8 md:mb-0 flex flex-col items-center md:items-start">
          <div className="font-semibold mb-2">Quick Links</div>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/meet-the-team" className="hover:text-white transition">
                Meet The Team
              </Link>
            </li>
            <li>
              <Link href="/schedule" className="hover:text-white transition">
                Schedule
              </Link>
            </li>
            <li>
              <Link href="/regulations" className="hover:text-white transition">
                Regulations
              </Link>
            </li>
          </ul>
        </div>
        {/* Details */}
        <div className="flex-1 min-w-[200px] flex flex-col items-center md:items-start">
          <div className="font-semibold mb-2">Details</div>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-red-500">
                {/* Location SVG */}
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 21s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="11" r="2.5" fill="currentColor" />
                </svg>
              </span>
              <a href="https://www.google.com/maps/dir//CHIREC+International+School+-+IBDP+%26+Cambridge+Campus+F8HM%2B4V5+Spring+Valley+Serilingampalle+(M),+Hyderabad,+Telangana+500133/@17.4777625,78.3347344,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3bcb939445dac8ed:0x8cbe499e963067c5" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              ISRP Campus
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500">
                {/* Calendar SVG */}
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="16"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M16 3v4M8 3v4M3 9h18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              2nd August, 2025
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500">
                {/* Mail SVG */}
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M3 7l9 6 9-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <a
                href="mailto:tedxchirec@gmail.com"
                className="hover:text-white transition"
              >
                tedxchirec@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-4 text-center text-xs text-gray-500">
        &copy; 2025 TEDxYouth@CHIREC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
