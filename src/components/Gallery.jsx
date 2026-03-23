import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause } from "lucide-react";
import Lfooter from "./Lfooter";
import cover from "../assets/cover.jpg";
import cover2 from "../assets/cover2.jpg";
import cover3 from "../assets/cover3.jpg";
import batch from "../assets/batch.jpg";
import batch2 from "../assets/batch2.jpg";
import winner from "../assets/winner.jpg";







/* 🚀 Running Batch / New Arrivals */

const runningBatch = [
  {
    img: batch2,
    title: "Session 2026-27 Batches",
    start: "Fev 2026",
    students: "150+ Students",
    mentor: "",
  },
  {
    img: batch,
    title: "Prize distribution ",
    start: "Fav 2026",
    students: "150+ Students",
    mentor: "Industry Experts",
  },

  {
    img: winner,
    title: " Desktop winner student",
    start: "Fav 2026",
    students: " Sahina Parveen",
    mentor: "AI Professionals",
  },
];

/* 🎯 IMAGES */
const rawImages = [
cover,
cover2,
cover3,
];

/* 🎵 music */
const MUSIC_URL =
  "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=romantic-background-112661.mp3";

const Gallery = () => {
  const images = useMemo(
    () => [...rawImages].sort(() => Math.random() - 0.5),
    [],
  );

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [musicOn, setMusicOn] = useState(false);
  const [loaded, setLoaded] = useState({});
  const [pageReady, setPageReady] = useState(false);

  const audioRef = useRef(null);
  const hasStartedRef = useRef(false);
  const touchStartX = useRef(0);

  useEffect(() => {
    const t = setTimeout(() => setPageReady(true), 120);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(
      () => setSlideIndex((p) => (p + 1) % images.length),
      3200,
    );
    return () => clearInterval(t);
  }, [autoPlay, images.length]);

  useEffect(() => {
    const startMusicOnce = async () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;

      try {
        await audioRef.current?.play();
        setMusicOn(true);
      } catch {}
    };

    window.addEventListener("click", startMusicOnce);
    window.addEventListener("touchstart", startMusicOnce);

    return () => {
      window.removeEventListener("click", startMusicOnce);
      window.removeEventListener("touchstart", startMusicOnce);
    };
  }, []);

  const hearts = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 8 + Math.random() * 6,
        delay: Math.random() * 5,
      })),
    [],
  );

  const particles = useMemo(
    () =>
      Array.from({ length: 16 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 3,
        duration: 14 + Math.random() * 10,
      })),
    [],
  );

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (musicOn) {
      audioRef.current.pause();
      setMusicOn(false);
    } else {
      await audioRef.current.play().catch(() => {});
      setMusicOn(true);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 50) return;

    setSelectedIndex((prev) =>
      diff > 0
        ? (prev + 1) % images.length
        : (prev - 1 + images.length) % images.length,
    );
  };

  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: pageReady ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] px-4 sm:px-6 py-16 font-[Patrick_Hand,cursive]"
      >
        <audio ref={audioRef} src={MUSIC_URL} loop preload="auto" />

        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-white/30 rounded-full pointer-events-none"
            style={{ left: `${p.left}%`, width: p.size, height: p.size }}
            animate={{ y: ["100vh", "-10vh"] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {hearts.map((h) => (
          <motion.div
            key={h.id}
            className="absolute text-pink-400 pointer-events-none"
            style={{ left: `${h.left}%` }}
            animate={{ y: ["100vh", "-10vh"], opacity: [0, 1, 0] }}
            transition={{
              duration: h.duration,
              repeat: Infinity,
              delay: h.delay,
              ease: "linear",
            }}
          >
            ❤️
          </motion.div>
        ))}

        {/* Title */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: pageReady ? 0 : 40, opacity: pageReady ? 1 : 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-14 mt-20"
        >
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-4">
            🌟 Premium Memory Gallery
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Dive into a world of beautiful captured moments. Swipe, explore, and
            feel the magic ✨
          </p>
        </motion.div>

        {/* Slideshow */}

        <div className="max-w-5xl mx-auto mb-12 text-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={slideIndex}
              src={images[slideIndex]}
              initial={{ opacity: 0.4, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.4 }}
              transition={{ duration: 0.6 }}
              className="w-full h-[260px] sm:h-[420px] object-cover rounded-3xl shadow-2xl"
            />
          </AnimatePresence>

          <button
            onClick={() => setAutoPlay((p) => !p)}
            className="mt-4 px-6 py-2 rounded-full bg-white/20 text-white backdrop-blur-xl border border-white/30 hover:bg-white/30 transition flex items-center gap-2 mx-auto"
          >
            {autoPlay ? <Pause size={18} /> : <Play size={18} />}
            {autoPlay ? "Pause Slideshow" : "Play Slideshow"}
          </button>
        </div>

        {/* 🚀 Running Batches */}
        <div className="max-w-4xl  mx-auto mt-26 mb-20">
          <h3 className="text-center text-3xl sm:text-4xl font-bold text-white mb-10">
            🚀 Running Batches / New Arrivals
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {runningBatch.map((batch, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: pageReady ? 1 : 0, y: pageReady ? 0 : 40 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-xl"
              >
                <img src={batch.img} className="w-full h-48 object-cover" />

                <div className="p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">{batch.title}</h4>
                  
                  <p className="text-white/80">👨‍🎓 Students: {batch.students}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Masonry Gallery */}
        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: pageReady ? 1 : 0, y: pageReady ? 0 : 40 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ rotateX: 5, rotateY: -5, scale: 1.03 }}
              className="break-inside-avoid cursor-pointer"
              onClick={() => setSelectedIndex(i)}
            >
              <img
                src={img}
                loading="lazy"
                onLoad={() => setLoaded((p) => ({ ...p, [i]: true }))}
                className={`w-full rounded-2xl shadow-xl transition duration-700 ${
                  loaded[i] ? "blur-0 scale-100" : "blur-xl scale-110"
                }`}
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
            >
              <motion.img
                key={selectedIndex}
                src={images[selectedIndex]}
                className="max-h-[85vh] w-auto rounded-2xl"
                onClick={(e) => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
              />
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-6 right-6 text-white"
              >
                <X size={32} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-center text-white/70 mt-16 text-lg">
          ✨ Ultra smooth cinematic experience
        </p>
      </motion.section>

      <Lfooter />
    </div>
  );
};

export default Gallery;
