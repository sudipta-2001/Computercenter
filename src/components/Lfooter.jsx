import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";


const socialLinks = [
  {
    icon: Facebook,
    url: "https://www.facebook.com/share/18WpgM4auX/?mibextid=wwXIfr",
  },
  {
    icon: Youtube,
    url: "https://www.youtube.com/@BHATARJAWAHARLALNEHRU_COMPUTER", // 👉 put your YouTube link
  },
];



const Lfooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-blue-400/20 bg-gradient-to-br from-[#061427] via-[#081b33] to-[#0a2547] px-6 py-14 text-white">
      {/* subtle glow background */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-40 left-1/4 h-80 w-80 rounded-full bg-cyan-500 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-600 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* ================= GRID ================= */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* ===== BRAND ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent mb-3">
              Bhatar JNCLD
            </h3>

            <p className="text-blue-200 text-sm leading-relaxed">
              Empowering students through modern and effective education. We
              help you achieve academic excellence with expert guidance.
            </p>

            {/* social */}

            <div className="flex gap-3 mt-5">
  {socialLinks.map((item, i) => {
    const Icon = item.icon;
    return (
      <motion.a
        key={i}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="p-2.5 rounded-full bg-blue-500/20 hover:bg-blue-500/40 border border-blue-400/20 backdrop-blur-xl transition"
      >
        <Icon size={18} />
      </motion.a>
    );
  })}
</div>
            {/* <div className="flex gap-3 mt-5">
              {[Facebook, Youtube ].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href=""
                  className="p-2.5 rounded-full bg-blue-500/20 hover:bg-blue-500/40 border border-blue-400/20 backdrop-blur-xl transition"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div> */}
          </motion.div>

          {/* ===== QUICK LINKS ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h4 className="font-semibold text-cyan-300 mb-4 text-lg">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm text-blue-200">
              {["Home", "Courses", "About", "Contact"].map((l) => (
                <li
                  key={l}
                  className="hover:text-cyan-300 cursor-pointer transition"
                >
                  {l}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ===== COURSES ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="font-semibold text-cyan-300 mb-4 text-lg">
              Popular Courses
            </h4>

            <ul className="space-y-2 text-sm text-blue-200">
              {[
                "Certificate In Computer Application",
                "Diploma In Computer Application",
                "Diploma In Financial Accounting",
                "Diploma In Desktop Publishing",
              ].map((l) => (
                <li
                  key={l}
                  className="hover:text-cyan-300 cursor-pointer transition"
                >
                  {l}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ===== CONTACT ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h4 className="font-semibold text-cyan-300 mb-4 text-lg">
              Contact Us
            </h4>

            <div className="space-y-3 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-cyan-300" />
                +91 94748 13016

              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} className="text-cyan-300" />
                Bhatarjncld@gmail.com
              </div>

              <p className="text-blue-300 text-xs pt-2">
               MONDAY - SATURDAY  (09:30 AM - 06:00 PM) SUNDAY  (09:30 AM - 12:30 PM)
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

        {/* ================= BOTTOM ================= */}
        <div className="text-center text-blue-300 text-sm mt-8">
          © {currentYear} Bhatar JNCLD. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Lfooter;
