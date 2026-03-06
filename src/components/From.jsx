import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import * as htmlToImage from "html-to-image";
import jsPDF from "jspdf";

export default function From({ course, onClose }) {
  const formRef = useRef(null);
  const wrapperRef = useRef(null);
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scale, setScale] = useState(1);

  // ✅ AUTO SCALE FOR SMALL SCREEN (PROPER FIX)
  useEffect(() => {
    const handleResize = () => {
      if (!wrapperRef.current) return;
      const wrapperWidth = wrapperRef.current.offsetWidth;
      const newScale = Math.min(1, wrapperWidth / 820);
      setScale(newScale);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ FORM STATE
  const [formData, setFormData] = useState({
    name: "",
    father: "",
    address: "",
    mobile: "",
    email: "",
    dob: "",
    gender: "",
    source: "",
    education: [
      { exam: "10th", board: "", year: "", percentage: "" },
      { exam: "12th", board: "", year: "", percentage: "" },
      { exam: "Graduation", board: "", year: "", percentage: "" },
    ],
  });

  // ✅ HANDLE NORMAL CHANGE
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ✅ HANDLE EDUCATION CHANGE
  const handleEducationChange = (index, field, value) => {
    const updated = [...formData.education];
    updated[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      education: updated,
    }));
  };

  // ✅ SAVE TO FIREBASE
  const saveToDatabase = async () => {
    const response = await fetch(
      "https://computercenter2026-138c1-default-rtdb.firebaseio.com/admissions.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          course: course?.name || "",
          createdAt: new Date().toISOString(),
        }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error("Firebase Error: " + errorText);
    }

    const result = await response.json();
    console.log("✅ Saved:", result);
  };

  // ✅ PDF + SAVE
  const downloadPDF = async () => {
    try {
      if (!agree) {
        alert("Please accept declaration first");
        return;
      }

      setLoading(true);

      await saveToDatabase();
      await new Promise((resolve) => setTimeout(resolve, 400));

      const element = formRef.current;

      const dataUrl = await htmlToImage.toJpeg(element, {
        quality: 0.95,
        pixelRatio: 2,
        backgroundColor: "#ffffff",
      });

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgProps = pdf.getImageProperties(dataUrl);

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgRatio = imgProps.width / imgProps.height;

      let imgWidth = pdfWidth;
      let imgHeight = pdfWidth / imgRatio;

      if (imgHeight > pdfHeight) {
        imgHeight = pdfHeight;
        imgWidth = pdfHeight * imgRatio;
      }

      const x = (pdfWidth - imgWidth) / 2;

      pdf.addImage(dataUrl, "JPEG", x, 0, imgWidth, imgHeight);
      pdf.save("JNCLD_Admission_Form.pdf");

      alert("✅ Data Saved & PDF Downloaded!");
    } catch (error) {
      console.error("❌ ERROR:", error);
      alert("Data not saved. Check Firebase Rules.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex justify-center items-start overflow-auto p-3 sm:p-6">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl p-1 sm:p-6"
      >
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-900 p-3 text-center text-sm font-semibold rounded mb-4">
          📢 After downloading this form, submit hardcopy with fees at —
          <b> Bhatar, Burdwan Centre</b>.
        </div>

        {/* ✅ RESPONSIVE WRAPPER */}
        <div ref={wrapperRef} className="w-full overflow-auto">
          <div className="flex justify-center">
            <div
              ref={formRef}
              className="border-[3px] border-blue-900 p-6 sm:p-8 bg-white relative origin-top"
              style={{
                width: "794px",
                minHeight: "1123px",
                transform: `scale(${scale})`,
                transformOrigin: "top center",
                fontFamily: '"Times New Roman", serif',
              }}
            >
              {/* PHOTO BOX */}
              <div className="absolute right-6 top-6 text-center">
                <div
                  className="border-2 mt-20 border-blue-900 flex items-center justify-center text-center bg-white"
                  style={{
                    width: "120px",
                    height: "150px",
                    fontSize: "10px",
                    lineHeight: "1.2",
                  }}
                >
                  Paste
                  <br />
                  Passport Size
                  <br />
                  Photograph
                </div>
              </div>

              <div className="text-blue-900 text-[13px]">
                <div className="text-center border-b-2 border-blue-900 pb-2 mb-6">
                  <h2 className="text-lg sm:text-xl font-bold tracking-widest">
                    JAWAHARLAL NEHRU COMPUTER LITERACY DRIVE
                  </h2>
                  <p className="text-xs">
                    (An ISO 9001:2015 Certified Organization)<br></br>Registered Under NCT, Delhi, Govt of India.  Registered Under Planing Commission in Information Technology, Govt of India Registered Under Ministry of HRD (CR Act), Govt of India
                  </p>
                </div>

                <div className="space-y-3">
                  <Field
                    label="Name of the Student"
                    name="name"
                    onChange={handleChange}
                  />
                  <Field
                    label="Father’s / Guardian’s Name"
                    name="father"
                    onChange={handleChange}
                  />
                  <Field
                    label="Present Address"
                    name="address"
                    onChange={handleChange}
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <Field
                      label="Telephone / Mobile"
                      name="mobile"
                      onChange={handleChange}
                    />
                    <Field
                      label="Email ID"
                      name="email"
                      onChange={handleChange}
                    />
                  </div>

                  <Field label="Course" value={course?.name} readOnly />

                  <div className="grid grid-cols-2 gap-3">
                    <Field
                      label="Date of Birth"
                      name="dob"
                      onChange={handleChange}
                    />
                    <Field
                      label="Gender"
                      name="gender"
                      onChange={handleChange}
                    />
                  </div>

                  {/* EDUCATION TABLE */}
                  <div className="mt-4">
                    <p className="font-semibold mb-2">
                      Educational Qualification:
                    </p>

                    <table className="w-full border border-blue-900 text-[12px]">
                      <thead className="bg-blue-100">
                        <tr>
                          <th className="border border-blue-900 p-1">Exam</th>
                          <th className="border border-blue-900 p-1">
                            Board / University
                          </th>
                          <th className="border border-blue-900 p-1">Year</th>
                          <th className="border border-blue-900 p-1">
                            % / Grade
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {formData.education.map((edu, index) => (
                          <tr key={index}>
                            <td className="border border-blue-900 p-1 text-center">
                              {edu.exam}
                            </td>
                            <td className="border border-blue-900 p-1">
                              <input
                                className="w-full outline-none"
                                onChange={(e) =>
                                  handleEducationChange(
                                    index,
                                    "board",
                                    e.target.value,
                                  )
                                }
                              />
                            </td>
                            <td className="border border-blue-900 p-1">
                              <input
                                className="w-full outline-none"
                                onChange={(e) =>
                                  handleEducationChange(
                                    index,
                                    "year",
                                    e.target.value,
                                  )
                                }
                              />
                            </td>
                            <td className="border border-blue-900 p-1">
                              <input
                                className="w-full outline-none"
                                onChange={(e) =>
                                  handleEducationChange(
                                    index,
                                    "percentage",
                                    e.target.value,
                                  )
                                }
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <Field
                    label="Source of Information"
                    name="source"
                    onChange={handleChange}
                  />
                  <Field label="Centre Name" value="Bhatar, Burdwan" readOnly />
                </div>

                {/* BIG DECLARATION */}
                <div className="mt-6 border border-blue-900 p-4 bg-white">
                  <p className="font-bold text-[15px] mb-2">
                    Declaration by Student:
                  </p>
                  <p className="text-[14px] leading-relaxed text-justify mb-4">
                    I hereby declare that the information provided above is true
                    and correct to the best of my knowledge and belief. I agree
                    to abide by the rules and regulations of the institution. I
                    understand that if any information found incorrect, my
                    admission may be cancelled without prior notice.
                  </p>

                  <label className="flex items-center gap-2 font-semibold">
                    <input
                      type="checkbox"
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                    />
                    ✔ I Agree
                  </label>
                </div>

                <div className="mt-16 flex justify-between text-[12px]">
                  <Sign label="Signature of Student" />
                  <Sign label="For Office Use Only" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-2">
          <button
            onClick={downloadPDF}
            disabled={loading}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold shadow"
          >
            {loading ? "Generating..." : "📥 Submit"}
          </button>

          <button
            onClick={onClose}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-bold"
          >
            ✖ Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}

/* helpers */

const Field = ({ label, value, readOnly, name, onChange }) => (
  <div>
    <label className="block text-[12px] font-semibold mb-1">{label}:</label>
    <input
      name={name}
      defaultValue={value}
      readOnly={readOnly}
      onChange={onChange}
      className="w-full border border-blue-900 h-7 px-2 outline-none"
    />
  </div>
);

const Sign = ({ label }) => (
  <div className="text-center">
    <div className="border-b border-blue-900 w-56 mb-1"></div>
    <span>{label}</span>
  </div>
);
