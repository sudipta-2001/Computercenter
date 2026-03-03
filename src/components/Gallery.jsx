import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause } from "lucide-react";
import Lfooter from "./Lfooter";

/* 🎯 IMAGES */
const rawImages = [
  "https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/611208122_122228423756258681_3864029752384383445_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=2a1932&_nc_ohc=LkSYWVV7ZPwQ7kNvwECDBPk&_nc_oc=AdkhnpJVQ8KvDgd3ksyQX2ligwVVX4i5NsDk3q4hVzto78CuCIO-zagvSHCPGXgZY5o&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=5j6AQ2WrgouWKkH5DOt42Q&_nc_ss=8&oh=00_Afy8_4juMCw6iX3v2JJuxoCREgPG27d0Ek1P8-YkEgcolQ&oe=69ACF1E8",
  "https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/644151896_122234835278258681_1927114208068123188_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=dd6889&_nc_ohc=wO2b80DG32cQ7kNvwFkhqmw&_nc_oc=Adkl6hkF3GwT6ol19kOjuEuT5CnyIVOMnG1_FmNihcerW0xxWU8jBf7Y5cznsyaWKLA&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=uJx0mcGwlMzPgoBV4nEVuw&_nc_ss=8&oh=00_AfxCvw3QuTvlvjTKoVq5bC3bMsZ4yyZ0AFN2Imui6APWlg&oe=69ACD2E0",
  "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/608711214_122227452392258681_2876864789936783317_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=dd6889&_nc_ohc=Xa3TA9krHOkQ7kNvwEf0Vsf&_nc_oc=AdmRcz07-E7TmaVU_2M1PxM3VD2fAdgYgVZbRn2DhiDEKcNCTjG8DhewcJLYyqhOrlk&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=pBHwIKBGna8CFUE7SrxamA&_nc_ss=8&oh=00_AfxalIRO2re_SGLKj1lADmJUSMgwLHbLZOkhQF6Uc-Ao_w&oe=69ACD177",
  "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/504618368_122197005788258681_6923228810866389633_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd6889&_nc_ohc=go8QE2m2MmMQ7kNvwHF__M-&_nc_oc=AdlbjQ_Xpw4rEA1H8GgkgU5gtgZo8Aq575KYVGoY1WryZRA8ftiqRdgo64rtYjoA0WA&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=QoJgETlj3ZvySkXk9615qw&_nc_ss=8&oh=00_AfwJAnMKlZsy4cIyThrJZAg0j9zugEALo_sIVEOIk5mglw&oe=69AD0278",
  "hhttps://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/504164962_122197005686258681_7171964612870542355_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd6889&_nc_ohc=wBXaJI_DPeMQ7kNvwE2k8TX&_nc_oc=Adlzrh4sowR2h3Xb6S-BBT3Zf0TFo_oXz1KTmX2Tbjhsd0CsrN1UkcL5uA5zeOzDSk4&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=fkM2qDa25TY-X9q4Gs8viw&_nc_ss=8&oh=00_AfyiyPDVgs0I1-5nMaPZNx5aAzw6OqvfGOoQ_DKEzVE1Zg&oe=69ACF069",
  "https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/472847484_122171138720258681_2834214140056025411_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=KaCXXDiwuqgQ7kNvwHqEdvs&_nc_oc=AdnrSoS7vrnbkK7aRxM6zmak5gPL8can5BRiCR841Ap_TOkt5V-HaqYwNm1IX91GIbw&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=ajx13TL86mZ8hliklAT5xQ&_nc_ss=8&oh=00_Afx3BtAKFtI1-0NFVW0yg3RuRoVMN13CdchcMCvCGzIqBg&oe=69AD06FC",
  "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/472526313_122170396904258681_6079867049881034041_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd6889&_nc_ohc=Ue6O7tHbhLUQ7kNvwGtwo6m&_nc_oc=AdnzPOuNEWF7t3TvvNycSyFZMVM-OkUnsHJRrhQuvWwURwbs6CongrAs50WlmaUAS74&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=IXjCtyaY9pTbyQK-qJQ2gg&_nc_ss=8&oh=00_AfxDUy5i-zHwbUCvUxrZRVneAUJoRtgRn1KinJAdUC8hgg&oe=69ACF48D",
  "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/470596741_122167685522258681_2424393493037367035_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd6889&_nc_ohc=W-M6f-aChNoQ7kNvwGOGIZl&_nc_oc=AdncA2f4zSZY2hqLz57QnLhMzE8HP9swUTeAiF4FMYBpv7hpN_oGWganr5-Xrymlayc&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=1LTujjXspJd9bVh51lZLaQ&_nc_ss=8&oh=00_AfxGLUWJvrDUnnI3JkEQFmFmHhgATKhbQHbrj6b1AH9zMA&oe=69AD005E",
  "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/470612799_122167519706258681_7750567179253271079_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd6889&_nc_ohc=gIkcpKrAbCoQ7kNvwE8Y5zj&_nc_oc=AdmLG2zjDoslbFrR7Uktht9jdvawegEudKYEYhQESeExWxv11Ot8uq228Y_XN61-YOo&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=qrJ1fEENciRlyNvpqRbkXQ&_nc_ss=8&oh=00_Afy5vfHeoZjxdWrgKrWCglY5pmBjkd03dR_XoSmMLcyYAw&oe=69ACDA9B",
  "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/470669919_122167685252258681_7822209222161456960_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd6889&_nc_ohc=WwZPcy0Wvi0Q7kNvwHZfO1l&_nc_oc=Adkv1lF45BRScTDV0E30wJLEZjIF8L0r6Ck-Z8rqugp290EZL1C8n6ydHWeFTd1YDpw&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=cRJrMbJVUoreDTxYRqH0Tw&_nc_ss=8&oh=00_Afwj2N5xa-ZirvKME1KrtDL2oObACfzHy2UjuFT_WB2KPw&oe=69ACE99A",
];

/* 🎵 music */
const MUSIC_URL =
  "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=romantic-background-112661.mp3";

const Gallery = () => {
  /* 🪄 smart shuffle once */
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

  /* 🚀 page smooth entry */
  useEffect(() => {
    const t = setTimeout(() => setPageReady(true), 120);
    return () => clearTimeout(t);
  }, []);

  /* 🎬 slideshow smoother */
  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(
      () => setSlideIndex((p) => (p + 1) % images.length),
      3200,
    );
    return () => clearInterval(t);
  }, [autoPlay, images.length]);

  /* 🔊 autoplay on first interaction */
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

  /* ❤️ optimized hearts (lighter) */
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

  /* 🎆 optimized particles */
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

  /* 🔊 toggle */
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

  /* 📱 swipe */
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
        style={{ willChange: "opacity, transform" }}
      >
        {/* 🎵 audio */}
        <audio ref={audioRef} src={MUSIC_URL} loop preload="auto" />

        {/* 🎆 particles */}
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

        {/* ❤️ hearts */}
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

        {/* 🔊 music button */}
        {/* <button
        onClick={toggleMusic}
        className="fixed z-50 bottom-6 right-6 bg-white/20 backdrop-blur-xl border border-white/30 text-white px-4 py-3 rounded-full shadow-xl hover:bg-white/30 transition"
      >
        {musicOn ? "🔊 Music On" : "🔇 Music Off"}
      </button> */}

        {/* ✨ title */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: pageReady ? 0 : 40, opacity: pageReady ? 1 : 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-14 mt-20"
        >
          <h2 className="text-4xl  sm:text-6xl font-extrabold text-white mb-4">
            🌟 Premium Memory Gallery
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Dive into a world of beautiful captured moments. Swipe, explore, and
            feel the magic ✨
          </p>
        </motion.div>

        {/* 🎬 slideshow */}
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

        {/* 🧱 masonry */}
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

        {/* 🔍 lightbox */}
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
