import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  Info,
  BookOpen,
  Image,
  Contact,
  Phone,
  MapPin,
} from "lucide-react";

import loginImg from "../assets/download.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/home", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Courses", href: "/courses", icon: BookOpen },
    { name: "Gallery", href: "/gallery", icon: Image },
    { name: "Contact", href: "/contact", icon: Contact },
  ];

  const logoUrl =
    "https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/487311853_1264986255223764_7879440499568885030_n.jpg";

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 shadow-lg">
        {/* ===== TOP BAR ===== */}
        <div className="bg-blue-950 text-white">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            {/* LOGO + NAME */}
            <div className="flex items-center gap-4">
              <img
                src={
                  "https://content.jdmagicbox.com/comp/bardhaman/v4/9999px342.x342.181117231508.f8v4/catalogue/bardhaman-ygzrtbczgc-250.jpg"
                }
                alt="JNCLD Logo"
                className="h-14 w-14 rounded-full border-2 border-white/70 object-cover"
              />

              <div className="leading-tight">
                <h1 className="font-extrabold text-2xl md:text-2xl tracking-wide">
                  BHATAR JAWAHARLAL NEHRU
                </h1>
                <h2 className="text-blue-300 font-extrabold text-2xl md:text-2xl tracking-wider">
                  COMPUTER LITERACY DRIVE
                </h2>
              </div>
            </div>

            {/* LOGIN */}

            <div className="hidden md:flex gap-15">
              <button
                onClick={() => window.open("/From", "_blank")}
                className="relative overflow-hidden px-3 py-3 rounded-full font-bold text-white text-sm md:text-base
             bg-gradient-to-r from-yellow-600 via-indigo-600 to-green-600
             shadow-lg shadow-blue-500/40
             animate-pulse
             transition-all duration-300
             hover:scale-110 hover:shadow-purple-500/60"
              >
                <span className="relative z-10">🚀 Admission Now</span>

                {/* Shining effect */}
                <span className="absolute inset-0 bg-white opacity-20 blur-xl animate-ping"></span>
              </button>
              <button
                onClick={() =>
                  window.open("https://jncld.co.in/student_login.php", "_blank")
                }
                className="bg-yellow-400 text-black px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-200 transition"
              >
                Student Login
              </button>
            </div>

            {/* MOBILE MENU */}
            <button onClick={toggleMenu} className="md:hidden text-white">
              <Menu size={28} />
            </button>
          </div>
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="bg-blue-800 text-white border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-3 relative">
            {/* CENTER NAV ITEMS */}
            <ul className="hidden md:flex px-10  gap-14 font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="relative hover:text-blue-200 transition group"
                  >
                    {link.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-200 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            {/* RIGHT INFO */}
            <div className="hidden lg:flex items-center gap-6 text-lime-300 font-semibold text-blue-100 absolute right-4 top-1/2 -translate-y-1/2">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Bhatar, Purba Barddhaman</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 94748 13016</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-[70px]" />

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-blue-950 z-50 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-white/20">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button onClick={toggleMenu} className="text-white">
            <X size={26} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 p-6 text-white">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={toggleMenu}
                  className="flex items-center gap-3 text-lg hover:translate-x-1 transition"
                >
                  <Icon size={20} /> {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="p-4 sm:p-6 border-t border-white/20 space-y-4">
          {/* Admission Button */}
          <button
            onClick={() => window.open("/From", "_blank")}
            className="w-full relative overflow-hidden 
               py-3 px-4 
               rounded-full 
               font-semibold 
               text-white 
               text-sm sm:text-base
               bg-gradient-to-r from-yellow-500 via-indigo-600 to-green-500
               shadow-md
               transition-all duration-300
               active:scale-95
               hover:scale-105"
          >
            <span className="relative z-10 tracking-wide">
              🚀 Admission Now
            </span>

            {/* Soft Glow Effect (lighter for mobile) */}
            <span className="absolute inset-0 bg-white opacity-10 blur-lg"></span>
          </button>

          {/* Student Login Button */}
          <button
            onClick={() =>
              window.open("https://jncld.co.in/student_login.php", "_blank")
            }
            className="w-full 
               py-3 
               rounded-full 
               font-semibold 
               text-blue-950 
               text-sm sm:text-base
               bg-white 
               transition-all duration-300
               active:scale-95
               hover:bg-blue-100"
          >
            🎓 Student Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
