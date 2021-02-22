import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";

const header = () => {
  return (
    <header className="header bg-primary">
      <Navbar />
      <Hero />
    </header>
  );
};

export default header;
