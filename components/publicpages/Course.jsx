"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

const courses = [
  {
    title: "Web Development",
    description: "HTML, CSS, JS, React, Node",
    image: "/images/web.jpg",
  },
  {
    title: "AI & ML",
    description: "Neural Networks, Python, TensorFlow",
    image: "/images/ai.jpg",
  },
  {
    title: "Data Science",
    description: "Pandas, NumPy, Data Analysis",
    image: "/images/data.jpg",
  },
  {
    title: "Cybersecurity",
    description: "Ethical Hacking, Networks, Tools",
    image: "/images/cyber.jpg",
  },
  {
    title: "Cloud Computing",
    description: "AWS, Azure, GCP",
    image: "/images/cloud.jpg",
  },
  {
    title: "Blockchain",
    description: "Crypto, Solidity, Web3",
    image: "/images/blockchain.jpg",
  },
  {
    title: "UI/UX Design",
    description: "Figma, Prototyping, Design Thinking",
    image: "/images/uiux.jpg",
  },
];

export default function CourseCarousel() {
  const [centerIndex, setCenterIndex] = useState(0);
  const visibleRange = 2;

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      shift(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [centerIndex]);

  const loopIndex = (i) => {
    const len = courses.length;
    return ((i % len) + len) % len;
  };

  const shift = (dir) => {
    setCenterIndex((prev) => loopIndex(prev + dir));
  };

  const getCardProps = (index) => {
    const offset = loopIndex(index - centerIndex);
    let relativeOffset = index - centerIndex;

    if (relativeOffset > courses.length / 2) relativeOffset -= courses.length;
    if (relativeOffset < -courses.length / 2) relativeOffset += courses.length;

    const absOffset = Math.abs(relativeOffset);
    if (absOffset > visibleRange) return null;

    const zIndex = 100 - absOffset;
    const scale = 1 - absOffset * 0.1;
    const blur = absOffset === 0 ? "0px" : "1px";
    const rotateY = relativeOffset * 15;
    const x = relativeOffset * 220;

    return {
      style: { zIndex, filter: `blur(${blur})` },
      animate: {
        x,
        scale,
        rotateY,
        transition: { duration: 0.5, ease: "easeInOut" },
      },
    };
  };

  return (
    <div className="relative w-full flex items-center justify-center h-[700px] overflow-hidden">
      <h1 className="absolute top-0 text-5xl font-bold">Popular Courses</h1>
      <p className="top-20 absolute text-center text-xl max-w-4xl font-normal text-gray-500">
        "Courses are not just a path to knowledge; they are the bridges that
        connect curiosity to expertise, guiding you step by step towards
        mastering the unknown."
      </p>
      {courses.map((course, index) => {
        const props = getCardProps(index);
        if (!props) return null;

        return (
          <motion.div
            key={index}
            className="absolute w-[260px] h-[360px] bg-white rounded-xl shadow-xl px-5 py-6 text-center mt-36 border"
            initial={false}
            animate={props.animate}
            style={props.style}>
            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>
          </motion.div>
        );
      })}

      <button
        onClick={() => shift(-1)}
        className="absolute left-20 bottom-52 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200 z-50">
        <ChevronsLeft className="text-purple-500" />
      </button>
      <button
        onClick={() => shift(1)}
        className="absolute right-20 bottom-52 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200 z-50">
        <ChevronsRight className="text-purple-500" />
      </button>
    </div>
  );
}
