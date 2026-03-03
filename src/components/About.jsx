import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lfooter from "./Lfooter";
import { Facebook, Linkedin, Mail } from "lucide-react";

/* ================= COUNTER ================= */

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center">
      <h3 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-violet-400 text-transparent bg-clip-text">
        {count.toLocaleString()}+
      </h3>
      <p className="text-white/70 mt-2 text-sm">{label}</p>
    </div>
  );
};

/* ================= TEAM DATA ================= */

const team = [
  {
    name: "Sk Jamal Hossain ",
    role: "Founder & Lead Mentor",
    experience: "5+ Years Experience",
    bio: "Director of the Computer Center, with over 15 years of experience in computer education and skill development. He is passionate about empowering students with practical knowledge and industry-relevant training. Under his leadership, the institute has successfully trained thousands of students and helped them build successful careers in the IT sector.",
    img: "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/480854976_122178660752258681_1278840696788821818_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=7Q10ku8X2xYQ7kNvwGuRiyy&_nc_oc=AdlOcwUB2v-1p4YEMZBSxgHhcpBzS1ilL6MxPHLcy8gtQNLO9REudNRPv3A93tMWJ7M&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=6OUrnk1JS9Tqo98x4TCewg&_nc_ss=8&oh=00_AfxFD8oudn-9xBgwZstzVYKWHd-86DWJwbhAT-q563KoiA&oe=69ACC651",
  },
  {
    name: "Leena Mukherjee",
    role: "Senior consultants and admission coordinator",
    experience: "2+ Years Experience",
    skills: "Python, Data Science, Web Development",
    bio: "works as the Admission Coordinator and is responsible for guiding students through the admission process smoothly and efficiently. With excellent communication and organizational skills, he/she ensures every student receives proper counseling regarding course selection, career opportunities, and documentation procedures.",
    img: "https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/557475973_759922197042437_7186624035349808425_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=53a332&_nc_ohc=0gXWBfQbOs4Q7kNvwF6axE8&_nc_oc=Adl7HSr1_SrSIZHrvjVPJDyEr2ZL5ZEWpPk506GkWpzzvR6cXU03WJgyhD2kAjEBezQ&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=ccrzfbsZ-dtHzvxEo1oUyA&_nc_ss=8&oh=00_AfyeytaDkL3j63c6OJye4sjvradBdmXOcoxH2eYNZiPa0Q&oe=69ACBF0E",
  },
  {
    name: "Amit Kumar Ghosh ",
    role: "Placement & Career Head",
    experience: "3+ Years Experience",
    skills: "Interview Training, Soft Skills, Resume Building",
    bio: "he Placement & Career Head, responsible for bridging the gap between academic learning and industry requirements. With deep expertise in recruitment processes, corporate communication, and professional skill development, he plays a crucial role in shaping students into job-ready professionals.",
    img: "https://scontent.fccu31-2.fna.fbcdn.net/v/t51.82787-15/605569003_18036673355735808_5268709423517096727_n.webp?stp=c0.104.1080.1080a_dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=a934a8&_nc_ohc=ZwtdVZmQBoYQ7kNvwH-oGaY&_nc_oc=Adlv9XqGx6JhfHi-60twK9ZvwlKWTdoTf1CTCIoUIZ3YYjEnvlIUEB7_8_0C2Wuhiv0&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=jLdLD7R0mRvPg1h0lDkcNQ&_nc_ss=8&oh=00_AfxwqWPlqkTJcuRaY2MIJp9KVhsioPaU0xVGydpdUM2Y7g&oe=69ACDEC6",
  },
];

/* ================= TESTIMONIALS ================= */

const testimonials = [
  {
    name: "Sourav",
    text: "This institute completely transformed my career. Practical learning approach is amazing!",
  },
  {
    name: "Neha",
    text: "Supportive mentors and excellent placement assistance. Highly recommended!",
  },
  {
    name: "Arjun",
    text: "Best computer training institute with real industry projects and guidance.",
  },
];

/* ================= MAIN COMPONENT ================= */

const About = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-blue-900 to-violet-900 text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="pt-28 pb-20 px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <span className="px-4 py-1 text-xs tracking-widest bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
            ISO 9001:2015 Certified Organization
          </span>

          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight">
            About
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-300 to-violet-400 bg-clip-text text-transparent">
              JAWAHARLAL NEHRU COMPUTER LITERACY DRIVE
            </span>
          </h1>

          <p className="mt-6 text-white/75 max-w-3xl mx-auto">
            We empower students with industry-ready computer skills through
            practical training, expert mentorship, and real-world projects. Our
            goal is to build confident, job-ready professionals for the digital
            era.
          </p>
        </motion.div>

        {/* COUNTERS */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Counter end={5000} label="Students Trained" />
          <Counter end={20} label="Professional Courses" />
          <Counter end={15} label="Years Experience" />
          <Counter end={95} label="Placement Rate %" />
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="px-6 py-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {[
          {
            title: "Our Mission",
            text: "To deliver affordable and high-quality computer education with strong practical exposure and career-focused training.",
          },
          {
            title: "Our Vision",
            text: "To become a leading technology training institute recognized for innovation, placement excellence, and student success.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-2xl"
          >
            <h3 className="text-3xl font-bold text-cyan-400 mb-4">
              {item.title}
            </h3>
            <p className="text-white/75">{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="px-6 py-20 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-14">
          Meet Our Expert Mentors
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ rotateY: 8, scale: 1.05 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl text-left"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full border-4 border-cyan-400 object-cover"
              />

              <h4 className="mt-6 text-2xl font-bold text-center">
                {member.name}
              </h4>
              <p className="text-cyan-300 text-center text-sm">{member.role}</p>

              <div className="mt-5 text-sm text-white/75 space-y-2">
                <p>
                  <strong>Experience:</strong> {member.experience}
                </p>

                <p>{member.bio}</p>
              </div>

              <div className="flex justify-center gap-4 mt-6 text-cyan-400">
                <Facebook size={18} />
                <Linkedin size={18} />
                <Mail size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= VIDEO SECTION ================= */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Watch Our Institute</h2>

        <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
          <iframe
            className="w-full h-[250px] sm:h-[350px] md:h-[450px]"
            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/61557760446650/videos/897790846341479/"
            title="Institute Video"
            allowFullScreen
          />
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="px-6 pb-24 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">What Students Say</h2>

        <motion.div
          key={activeTestimonial}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl"
        >
          <p className="text-white/80 italic text-lg">
            “{testimonials[activeTestimonial].text}”
          </p>
          <p className="mt-6 text-cyan-400 font-bold text-lg">
            — {testimonials[activeTestimonial].name}
          </p>
        </motion.div>
      </section>

      <Lfooter />
    </div>
  );
};

export default About;
