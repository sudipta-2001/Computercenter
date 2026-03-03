import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Courses from "../components/Courses";
import Lfooter from "../components/Lfooter";
const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      {/* <Courses /> */}
      <Footer />
      <Lfooter/>
    </>
  );
};

export default Home;
