import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lfooter from "../components/Lfooter";

/* ─── CONSTANTS ───────────────────────────────────────── */

const WHATSAPP_NUMBER = "919474813016";

const contactCards = [
  {
    icon: "📍",
    title: "Visit Us",
    lines: [
      "Bhatar , Nasigram More , Post Office Building, 1st Flooor , Purba Bardhaman",
    ],
  },
  {
    icon: "📞",
    title: "Call Us",
    lines: ["+91 94748 13016"],
    action: { href: "tel:+919474813016", label: "Call Now" },
  },
  {
    icon: "✉️",
    title: "Email Us",
    lines: ["Bhatarjncld@gmail.com"],
    action: { href: "mailto:info@jncld.com", label: "Send Email" },
  },
  {
    icon: "🕐",
    title: "Open Hours",
    lines: ["MONDAY - SATURDAY (09:30AM - 06:00 PM) ,  SUNDAY (9.30 AM - 12.30 PM)  "],
  },
];

/* ─── MAIN COMPONENT ─────────────────────────────────── */

const Contact = () => {
  const [openWA, setOpenWA] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    setIsOnline(hour >= 9 && hour <= 19);
  }, []);

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi, I'm ${userName || "a student"}.\nI want information about courses and admission.`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <div
      className="relative min-h-screen overflow-x-hidden text-blue-50 mt-10"
      style={{ background: "#060d1f", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ─── HERO SECTION ─────────────────────────────── */}
      <motion.section
        className="max-w-4xl mx-auto px-6 pt-28 pb-20 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1
          className="text-4xl sm:text-6xl font-extrabold mb-6"
          style={{
            background:
              "linear-gradient(135deg,#fff 0%,#00d4ff 50%,#00ffe0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Bhatar JNCLD 
        </h1>

        <p className="text-blue-300/80 max-w-xl mx-auto mb-8">
          Professional computer training institute providing job-oriented
          courses with practical learning and career guidance. estd-2021
        </p>

        <div
          className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold border ${
            isOnline
              ? "bg-green-500/10 border-green-500/30 text-green-400"
              : "bg-red-500/10 border-red-500/30 text-red-400"
          }`}
        >
          {isOnline ? "🟢 We Are Online" : "🔴 Currently Offline"}
        </div>
      </motion.section>

      {/* ─── CONTACT CARDS ─────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto px-6 pb-16">
        {contactCards.map((card, i) => (
          <motion.div
            key={i}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-lg
            hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="text-3xl mb-3">{card.icon}</div>
            <div className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">
              {card.title}
            </div>
            {card.lines.map((l, j) => (
              <p key={j} className="text-xs text-blue-300/80">
                {l}
              </p>
            ))}
            {card.action && (
              <a
                href={card.action.href}
                className="inline-block mt-3 px-4 py-1.5 rounded-full text-xs font-bold text-[#060d1f]
                bg-gradient-to-r from-cyan-400 to-teal-300 hover:scale-105 transition-all"
              >
                {card.action.label}
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {/* ─── NEW PREMIUM SECTION (REPLACED FORM) ─────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Why Choose JNCLD?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🎓",
              title: "Certified Courses",
              text: "Government-recognized certificates with ISO quality standards.",
            },
            {
              icon: "💼",
              title: "Job-Oriented Training",
              text: "Practical classes designed to make students industry-ready.",
            },
            {
              icon: "👨‍🏫",
              title: "Expert Mentors",
              text: "Experienced instructors with real-world technical knowledge.",
            },
            {
              icon: "📚",
              title: "Modern Curriculum",
              text: "Updated syllabus covering latest technologies and tools.",
            },
            {
              icon: "🤝",
              title: "Career Guidance",
              text: "Placement assistance and professional career support.",
            },
            {
              icon: "💻",
              title: "Hands-On Practice",
              text: "Fully practical computer lab with real project training.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-lg
              hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-cyan-300">
                {item.title}
              </h3>
              <p className="text-sm text-blue-300/70">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── WHATSAPP FLOATING BUTTON ───────────────────── */}
      <div className="fixed bottom-8 right-6 z-50">
        <button
          onClick={() => setOpenWA(true)}
          className="w-16 h-16 rounded-full bg-[#25d366]
          shadow-[0_4px_24px_rgba(37,211,102,0.5)]
          hover:scale-110 transition-transform flex items-center justify-center"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-9 h-9"
          />
        </button>
      </div>

      {/* ─── WHATSAPP POPUP ─────────────────────────────── */}
      <AnimatePresence>
        {openWA && (
          <motion.div
            className="fixed bottom-28 right-6 w-80 bg-white text-gray-800 rounded-2xl overflow-hidden z-[200]
            shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
          >
            <div className="px-5 py-4 bg-[#128c7e] text-white font-bold flex justify-between">
              JNCLD Support
              <button onClick={() => setOpenWA(false)}>✕</button>
            </div>

            <div className="p-5">
              <input
                className="w-full border rounded-xl px-4 py-2 mb-3 text-sm"
                placeholder="Your name (optional)"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <button
                onClick={openWhatsApp}
                className="w-full bg-[#25d366] text-white py-3 rounded-xl font-bold text-sm"
              >
                Continue on WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── FOOTER ───────────────────────────── */}
      <Lfooter />
    </div>
  );
};

export default Contact;
