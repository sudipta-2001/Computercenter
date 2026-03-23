import React, { useEffect, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import cover from "../assets/cover.jpg";
import cover2 from "../assets/cover2.jpg";
import cover3 from "../assets/cover3.jpg";


const Banner = () => {
  // 🔥 background scrolling images
  const bgImages = [
    cover,
    cover2,
    cover3,
  ];

  const [bgIndex, setBgIndex] = useState(0);

  // 🔁 auto background scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* ================= BACKGROUND IMAGE SLIDER ================= */}
      <div className="absolute inset-0">
        {bgImages.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt="bg"
            className={`absolute inset-0 w-full h-full  object-cover transition-all duration-[2000ms] ${
              index === bgIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          />
        ))}
      </div>

      {/* ================= PREMIUM COLOR OVERLAY ================= */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/90 via-[#0f172a]/80 to-[#020617]/95" />

      {/* ================= FLOATING LIGHTS ================= */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* ================= CONTENT ================= */}
      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {/* badge */}
          {/* <div className="inline-flex mt-14 items-center gap-2 px-5 py-2 rounded-full bg-cyan-400/10 border border-cyan-300/30 text-cyan-300 text-sm font-semibold backdrop-blur-md">
            <span className="w-2 h-2   rounded-full bg-cyan-300 animate-pulse" />
            🚀 New: AI & Machine Learning Track
          </div> */}

          {/* heading */}
          <h3 className=" mt-12 sm:text-lg lg:text-xl font-extrabold leading-tight text-white">
            ভারত সরকার ও পশ্চিমবঙ্গ সরকার অনুমোদিত
          </h3>
          <h1 className="text-4xl  mt-9 sm:text-5xl lg:text-7xl font-extrabold leading-tight text-whitetext-4xl  mt-9 sm:text-5xl lg:text-7xl font-extrabold leading-tight text-white">
            কম্পিউটার
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.6)]">
              প্রশিক্ষণ কেন্দ্র
            </span>
          </h1>

          {/* description */}
          <p className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto">
            Industry-leading computer courses taught by experts ~ launch your
            tech career today.
          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/courses">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-base px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold shadow-[0_10px_40px_rgba(34,211,238,0.5)]"
              >
                Explore Courses <ArrowRight size={18} />
              </motion.button>
            </Link>

            <Link to="/gallery">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-base px-8 py-3 rounded-xl border border-white/30 text-white backdrop-blur-md hover:bg-white/10"
              >
                <Play size={18} /> Watch Demo
              </motion.button>
            </Link>
          </div>

          {/* stats */}
          <div className="grid grid-cols-3 py-7 gap-8 pt-12 border-t border-white/10">
            {[
              { value: "20+", label: "Expert Courses" },
              { value: "1000+", label: "Students Enrolled" },
              { value: "99.99%", label: "Success Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-300">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
