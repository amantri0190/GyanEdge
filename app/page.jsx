"use client";
import { useRef } from "react";
import Header from "../components/publicpages/Header";
import Footer from "../components/publicpages/Footer";
import Hero from "../components/publicpages/Hero";
import Course from "../components/publicpages/Course";
import About from "../components/publicpages/About";

export default function Home() {
  const courseRef = useRef(null);

  const scrollToCourse = () => {
    courseRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      {/* <Header /> */}
      <Hero onScrollClick={scrollToCourse} />
      <div ref={courseRef}>
        <Course />
      </div>
      <About />
      <Footer />
    </div>
  );
}
