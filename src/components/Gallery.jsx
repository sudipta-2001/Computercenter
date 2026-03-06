import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause } from "lucide-react";
import Lfooter from "./Lfooter";

/* 🚀 Running Batch / New Arrivals */

const runningBatch = [
  {
    img: "https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/645503547_122234937866258681_4781319599461836712_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=dd6889&_nc_ohc=eRjFNkDr8o0Q7kNvwHGSVvn&_nc_oc=Adkk0lK39llfhkeVUFzwz1w-N8cL8HaDMIyknAaST8bmhVCn-5im12TMgwTu7p9EqKw&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=xGLY7v3OFgYOSOrzvvlKmw&_nc_ss=8&oh=00_AfzfHibP9AHy0Lc8N1DWu0CX2_0niZVQ758GnMrBcYYMeA&oe=69B0BC5F",
    title: "Our 2026 new Batches",
    start: "Fev 2026",
    students: "50+ Students",
    mentor: "",
  },
  {
    img: "https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/644151896_122234835278258681_1927114208068123188_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=dd6889&_nc_ohc=RUowF8bKeV4Q7kNvwGo4MQM&_nc_oc=AdmPqrZGlD3LUXXaO6_xoZALSKAgaxnQVChoaDILrE-rAOVz-QIOd3hupsTcFuRu7Bc&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=wHCC9AbUlen7EVfI9URK2A&_nc_ss=8&oh=00_AfybvJ1PpTHrogxUEEbmQ8FbhJSWgOgnpvAjUD7cwdj2Eg&oe=69B0C760",
    title: "Prize distribution for students",
    start: "Fav 2026",
    students: "50+ Students",
    mentor: "Industry Experts",
  },

  {
    img: "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/643763208_122234833652258681_1837731094012027602_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd6889&_nc_ohc=tP7hXqBM0zoQ7kNvwEJ43yK&_nc_oc=AdkRXJjyEcieZ_gzbKS8OwMGNUPD_oVWb6UcIVvvfbHzFXvQrZMkZBy2AVKnsitgLRI&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=QXhjnHmoOkH29JIFpoKUrg&_nc_ss=8&oh=00_AfzDy3q3y6HYQ2dbfh4eq7sZOSf-Ge5eA4DWh9yikQmOiQ&oe=69B0AF60",
    title: "Our desktop winner student",
    start: "Fav 2026",
    students: " Fatima",
    mentor: "AI Professionals",
  },
];

/* 🎯 IMAGES */
const rawImages = [
  "https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/611208122_122228423756258681_3864029752384383445_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=2a1932&_nc_ohc=LkSYWVV7ZPwQ7kNvwECDBPk&_nc_oc=AdkhnpJVQ8KvDgd3ksyQX2ligwVVX4i5NsDk3q4hVzto78CuCIO-zagvSHCPGXgZY5o&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=5j6AQ2WrgouWKkH5DOt42Q&_nc_ss=8&oh=00_Afy8_4juMCw6iX3v2JJuxoCREgPG27d0Ek1P8-YkEgcolQ&oe=69ACF1E8",
  "https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/607083370_122227579868258681_2924136637862751329_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=dd6889&_nc_ohc=EYCfjhCjRQoQ7kNvwFoUvKs&_nc_oc=AdlmB8iZCzjt1yZpCrogBnmdGVCWvRtjVNml-S4uKyBrSCnVPQ6tFeH0goe_CKsc3TY&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=PTXNcLwv8W-MbNN4JJpL4g&_nc_ss=8&oh=00_AfxrzP_t73xQNUyjfYhLrTrfFLXJ446z-2u3f80KxyZmHA&oe=69B0BCAF",
  "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/606256599_122227452566258681_2575108788842423387_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=dd6889&_nc_ohc=DDNt3SYU2sMQ7kNvwGAx4Kg&_nc_oc=AdnIfgkrjOKjqs7kZz8xVMv38GeD1HswtsVGbDPq49gANM3nTprkjsgsc12qV6fVD3Q&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=app85LdEXm79iSJl-19deg&_nc_ss=8&oh=00_AfwPGYhWFJKAhXXV8UPoJhKbHQorVQsTyGofS4W3xM8rOA&oe=69B0BB09",
  "https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/604947674_122227452488258681_4342049330096873892_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=dd6889&_nc_ohc=DlB1p9gLDNIQ7kNvwGSb1-o&_nc_oc=AdnwJCksO1ka1yH0nIrrts25sTQ-151ZzTRVDma-3roX90PFfL3iDjZQx51EMWtUxPs&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=wO-N_FE5MLHcneGwuyegFA&_nc_ss=8&oh=00_Afwlx9tE7efgLqClDRKOvXO4nR39n-dS_ro3KObXVk8uJg&oe=69B0B119",
  "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/540941187_122211131942258681_8603931802066950977_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd6889&_nc_ohc=YYJ1WQ2ODHkQ7kNvwFr39Qn&_nc_oc=Adk-7EabZ2vLbrBGbSse9aWEkKhaRpIrUYJaLbIeAI507q14tSado3vtqj12uUQMuUk&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=agY3bRkuwrOxe1299bccPA&_nc_ss=8&oh=00_AfxZNqAECBSckoodZI-E8Fpvr4EoF30ACJHNbrcr8AsLLg&oe=69B0BC28",
  "https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/542756923_122210963654258681_2371969095710694280_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=dd6889&_nc_ohc=LJZV1j2LcvQQ7kNvwFzxcYI&_nc_oc=Adm9DRpUysWU5tbI--6DEIaB0MO4IwxKAPZJvPgV2HA_4KWdiIQiD8j5SqOYO6G8AQ0&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=pgvEkxg4vBAtkNWEf9004g&_nc_ss=8&oh=00_AfyNwm40FEFSvmc17RBNc0eKKEezWTlN6qKVJkEYoCerjA&oe=69B0BE30",
  "https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/504164962_122197005686258681_7171964612870542355_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd6889&_nc_ohc=DNN7AEgTI9QQ7kNvwHcqYyM&_nc_oc=AdljNKGlHIPkA4dBqOV1UPBeifXSK6CBOUYqj3KkcGkHiKr5gfBLJHeTUNNF64zfsN0&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=2A0WkXhO19DoaKvioSi3qw&_nc_ss=8&oh=00_Afzl8QVWGy1Z-U4dB-w6OOLclld6R52MV8QT-Lx99CyrWQ&oe=69B0ACA9",
  "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/500366293_122195462192258681_2198661820858194140_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd6889&_nc_ohc=eTPoLUXoVUgQ7kNvwHKXGjQ&_nc_oc=AdmcO5H75Em34D1ui3PFtPTwM5tEhtE0uZl0C-gt3EKWShdN7bELQK2E4pNEFuF9dEo&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=l6rLD20KzqDkofoNjK-rVg&_nc_ss=8&oh=00_Afzf2V9CMlUNQVzeRKCrXX33-FSoc5krBB0g315Npu6dTQ&oe=69B0A73A",
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
                  <p className="text-white/80">📅 Start: {batch.start}</p>
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
