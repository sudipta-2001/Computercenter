import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube, // ✅ ADD THIS
  Sparkles,
  Code,
  Database,
  Shield,
  Cpu,
  Cloud,
  Smartphone,
  Terminal,
  Palette,
  MessageCircle,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // ✅ STATE ADDED (NO UI CHANGE)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const categories = [
    {
      name: "Certificate In Computer Application (CCA) ",
      count: "6 Months ",
      icon: Code,
    },
    {
      name: "Diploma In Computer Application (DCA)",
      count: "12 Months",
      icon: Database,
    },
    {
      name: "Certificate In Financial Accounting (Tally with GST)",
      count: "6 Months",
      icon: Shield,
    },
    {
      name: "Diploma In Financial Accounting (Tally with GST)",
      count: "12 Months",
      icon: Cpu,
    },
    {
      name: "Certificate In Desktop Publishing (CDDP)",
      count: "6 Months",
      icon: Cloud,
    },
    {
      name: "Diploma In Desktop Publishing (DDTP)",
      count: "12 Months",
      icon: Smartphone,
    },
    {
      name: "Diploma In Office Management (DOM)",
      count: "12 Months",
      icon: Terminal,
    },
    { name: "E-Learning (EL)", count: "3 Months", icon: Palette },
  ];

  const socialLinks = [
    {
      Icon: Facebook,
      url: "https://www.facebook.com/profile.php?id=61557760446650",
    },
    { Icon: Youtube, url: "https://www.youtube.com/@BHATARJAWAHARLALNEHRU_COMPUTER" },
    { Icon: Instagram, url: "#" },
    { Icon: Linkedin, url: "#" },
  ];

  // ✅ HANDLE INPUT
  const handleChange = (e) => {
    const { placeholder, value } = e.target;

    if (placeholder.includes("Full Name")) {
      setFormData({ ...formData, name: value });
    } else if (placeholder.includes("Email")) {
      setFormData({ ...formData, email: value });
    } else if (placeholder.includes("Phone")) {
      setFormData({ ...formData, phone: value });
    } else {
      setFormData({ ...formData, message: value });
    }
  };

  // ✅ FIREBASE SAVE
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://computercenter2026-138c1-default-rtdb.firebaseio.com/enquary.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            createdAt: new Date().toISOString(),
          }),
        },
      );

      if (res.ok) {
        alert("Message Sent Successfully ✅");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Something went wrong ❌");
      }
    } catch (err) {
      alert("Error sending message ❌");
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white via-sky-500 to-blue-900 text-gray-800">
      {/* ===== PREMIUM HERO ===== */}
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_80%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.25),transparent_45%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white shadow-md border border-sky-200 mb-6">
              <Sparkles size={16} className="text-sky-500" />
              <span className="text-xs sm:text-sm text-sky-700 font-medium">
                Let’s Connect With BHATAR JNCLD
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-blue-900 to-emerald-400 bg-clip-text text-transparent leading-tight">
              We’d Love To Hear From You
            </h2>

            <p className="mt-6 text-black max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Have questions about admissions, courses, or guidance? Our
              counsellors are ready to help you take the next big step toward
              your success.
            </p>

            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10"
            >
              <Link to="/contact">
                {" "}
                <button className="px-8 sm:px-10 py-3 rounded-xl font-semibold bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white shadow-xl hover:opacity-90 transition-all duration-300">
                  Talk To Our Counsellor
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== CATEGORY SECTION ===== */}
      <section className="relative container mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-sky-900 via-blue-900 to-indigo-800 bg-clip-text text-transparent">
            Browse by Category
          </h2>
          <p className="text-black mt-3 text-base sm:text-lg">
            Discover the programs we offer...
          </p>
        </motion.div>

        <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.06, y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="group bg-gray-300 border border-sky-900 rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mx-auto mb-4 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-lg">
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                  {cat.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {cat.count}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="relative mt-12 sm:mt-14 grid lg:grid-cols-3 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(2,6,23,0.08)] rounded-3xl p-6 sm:p-8 border border-sky-100"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-300/70 border border-cyan-300/40 mb-4">
              <MessageCircle size={16} className="text-cyan-700" />
              <span className="text-xl text-cyan-800 font-semibold">
                Quick Enquiry
              </span>
            </div>
            {/* <h3 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-800 px-7 bg-clip-text text-transparent">
                Start Your Learning Journey Today
              </h3> */}
            {/* <h3 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-800 px-7 bg-clip-text text-transparent">
              <Calendar className="text-cyan-300" />
              Book a Free Session
            </h3> */}
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-4 sm:gap-5"
            >
              <input
                type="text"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 outline-none transition"
              />
              <input
                type="email"
                placeholder="Email Address "
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 outline-none transition"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                className="md:col-span-2 w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 outline-none transition"
              />
              <textarea
                rows="4"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                required
                className="md:col-span-2 w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 outline-none transition resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="md:col-span-2 w-full sm:w-auto sm:px-10 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message 🚀
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-sky-100 shadow-[0_20px_60px_rgba(2,6,23,0.06)]"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-5 text-center lg:text-left">
              Follow Us
            </h3>
            <div className="flex lg:flex-col justify-center lg:justify-start gap-4">
              {socialLinks.map(({ Icon, url }, i) => (
                <motion.a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-100 shadow-md hover:shadow-lg transition cursor-pointer flex items-center justify-center"
                >
                  <Icon size={20} className="text-sky-600" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-black mt-6 text-center lg:text-left">
              Stay connected with us on social media for latest updates.
            </p>
          </motion.div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
