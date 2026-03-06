import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Laptop,
  Calculator,
  GraduationCap,
  TrendingUp,
  Star,
  Users,
} from "lucide-react";
import Lfooter from "./Lfooter";
import From from "./From";

const coursesData = [
  {
    id: 1,
    name: "Certificate In Computer Application (CCA) ",
    category: "besic",
    popular: 95,
    icon: Calculator,
  },
  {
    id: 2,
    name: "Diploma In Computer Application (DCA)",
    category: "Accounting",
    popular: 98,
    icon: Laptop,
  },
  {
    id: 3,
    name: "Certificate In Financial Accounting (Tally with GST)",
    category: "Diploma",
    popular: 85,
    icon: GraduationCap,
  },
   {
    id: 4,
    name: "Certificate In Desktop Publishing (CDDP)",
    category: "Accounting",
    popular: 90,
    icon: Calculator,
  },
  {
    id: 5,
    name: "Diploma In Financial Accounting (Tally with GST)",
    category: "Accounting",
    popular: 90,
    icon: Calculator,
  },
  {
    id: 6,
    name: "Diploma In Desktop Publishing (DDTP)",
    category: "Accounting",
    popular: 90,
    icon: Calculator,
  },
   {
    id: 7,
    name: "Diploma In Office Management (DOM)",
    category: "Accounting",
    popular: 90,
    icon: Calculator,
  },
   {
    id: 8,
    name: "E-Learning (EL)",
    category: "Accounting",
    popular: 90,
    icon: Calculator,
  },
];

export default function PremiumCourses() {
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [selectedCourse, setSelectedCourse] = useState(null);

  // FILTER
  let filteredCourses =
    filter === "All"
      ? coursesData
      : coursesData.filter((c) => c.category === filter);

  // SORT
  

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] p-6">
        <div className="max-w-7xl mx-auto mt-30">
          {/* HEADER */}
          <h1 className="text-4xl  md:text-5xl font-extrabold text-white mb-8 text-center">
            🎓 Premium Courses
          </h1>

          {/* FILTER */}
         

          {/* SORT */}
         

          {/* COURSE GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredCourses.map((course) => {
              const Icon = course.icon;

              return (
                <motion.div
                  key={course.id}
                  whileHover={{ rotateX: 8, rotateY: -8, scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="group"
                  style={{ perspective: 1000 }}
                >
                  <div className="p-10 mt-10 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl min-h-[320px]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                        <Icon size={28} />
                      </div>

                      <h3 className="text-xl font-bold text-white">
                        {course.name}
                      </h3>
                    </div>

                    

                    <div className="flex items-center gap-2 mt-10 text-yellow-400 mb-4">
                      <Star size={18} />
                      <span className="text-white">
                        Popularity: {course.popular}%
                      </span>
                    </div>

                    <div className="flex justify-center mt-9  items-center">
                      

                      <button
                        onClick={() => setSelectedCourse(course)}
                        className="px-5 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:scale-110 transition"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* NOTICE BOARD */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-yellow-100 border border-yellow-300 text-center">
              <h2 className="text-2xl font-bold text-yellow-900 mb-2">
                📢 Notice Board
              </h2>
              <p className="text-yellow-800 font-semibold">
                ⚠️ Course fees must be paid at our center.
              </p>
              <p className="text-yellow-800">📍 Bhatar , Nasigram More , Post Office Building, 1st Flooor , Purba Bardhaman</p>
            </div>
          </div>

          {/* STATS */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: Users, label: "Students", value: "1,000+" },
              { icon: TrendingUp, label: "Success Rate", value: "99.99%" },
              { icon: Star, label: "Rating", value: "4.9/5" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white/10 border border-white/20 text-center text-white"
                >
                  <Icon className="mx-auto mb-3 text-cyan-400" size={32} />
                  <p className="text-2xl font-bold">{item.value}</p>
                  <p className="text-gray-300">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FORM MODAL */}
      {selectedCourse && (
        <From course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}

      <Lfooter />
    </>
  );
}
