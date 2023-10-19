import React from "react";
import Error404 from "../components/Error404/Error404";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Error = () => {
  return (
    <div>
      <Navbar />
      <Error404 />
      <Footer />
    </div>
  );
};

export default Error;
