"use client";
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="px-7 max-md:pl-5">
      <div className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
        <Header />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <BlogSection />
        <TestimonialsSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;
