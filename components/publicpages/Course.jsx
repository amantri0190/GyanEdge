"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { Video, Play, Clock, Users } from "lucide-react";
import { useRouter } from "next/navigation";

const courses = [
  {
    title: "Web Development",
    description: "MERN Stack",
    image: "/webdev.jpg",
    slug: "webdev",
    features: [
      { icon: "video", text: "30 Hr+ Video Lectures" },
      { icon: "live", text: "Live Classes" },
      { icon: "project", text: "Real World Projects" },
      { icon: "doubt", text: "1:1 Doubt Solving" },
    ],
    price: 3999,
    originalPrice: 5000,
    discount: "20%",
  },
  {
    title: "AI & ML",
    description: "Neural Networks, Python, TensorFlow",
    image: "/aiml.png",
    features: [
      { icon: "video", text: "40 Hr+ Video Lectures" },
      { icon: "live", text: "Live AI Labs" },
      { icon: "project", text: "ML Projects" },
      { icon: "doubt", text: "1:1 Mentorship" },
    ],
    price: 4499,
    originalPrice: 6000,
    discount: "25%",
  },
  {
    title: "Data Science",
    description: "Pandas, NumPy, Data Analysis",
    image: "/datascience.jpg",
    features: [
      { icon: "video", text: "35 Hr+ Content" },
      { icon: "live", text: "Interactive Classes" },
      { icon: "project", text: "Real Data Sets" },
      { icon: "doubt", text: "Doubt Clearing" },
    ],
    price: 4299,
    originalPrice: 5700,
    discount: "24%",
  },
  {
    title: "Cybersecurity",
    description: "Ethical Hacking, Networks, Tools",
    image: "/cybersecurity.jpg",
    features: [
      { icon: "video", text: "25 Hr+ Training" },
      { icon: "live", text: "Live Simulations" },
      { icon: "project", text: "Hands-on Labs" },
      { icon: "doubt", text: "Expert Help" },
    ],
    price: 3799,
    originalPrice: 4800,
    discount: "21%",
  },
  {
    title: "Cloud Computing",
    description: "AWS, Azure, GCP",
    image: "/cloudcomputing.webp",
    features: [
      { icon: "video", text: "30 Hr+ Sessions" },
      { icon: "live", text: "Live Demos" },
      { icon: "project", text: "Cloud Projects" },
      { icon: "doubt", text: "Support Hours" },
    ],
    price: 4599,
    originalPrice: 6000,
    discount: "23%",
  },
];

export default function Course() {
  const [centerIndex, setCenterIndex] = useState(0);
  const visibleRange = 2;
  const router = useRouter();
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
  const getIcon = (iconName) => {
    switch (iconName) {
      case "video":
        return <Video className="w-4 h-4 text-purple-500" />;
      case "live":
        return <Play className="w-4 h-4 text-green-500" />;
      case "project":
        return <Users className="w-4 h-4 text-blue-500" />;
      case "doubt":
        return <Clock className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
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
            className="w-[260px] min-h-[430px] bg-white rounded-xl shadow-xl overflow-hidden flex flex-col absolute border mt-24"
            initial={false}
            animate={props.animate}
            style={props.style}>
            <div className="text-center p-3">
              <h2 className="text-lg font-bold mb-1">{course.title}</h2>
              <p className="text-sm text-gray-600">{course.description}</p>
            </div>
            <img
              src={course.image}
              alt={course.title}
              className="h-36 w-full object-cover"
            />
            <div className="p-3 flex-1 text-left text-sm text-gray-700 space-y-2">
              {course.features.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  {getIcon(item.icon)}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="px-4 pb-4 mt-auto flex items-center justify-between">
              <div>
                <p className="text-md font-bold">₹{course.price}</p>
                <p className="text-xs text-gray-500">
                  <span className="line-through">₹{course.originalPrice}</span>
                  <span className="text-green-600">
                    ({course.discount} off)
                  </span>
                </p>
              </div>
              <button
                onClick={() => router.push(`/courses/${course.slug}`)}
                className="bg-purple-300 text-white px-3 py-1 rounded hover:bg-purple-400 text-sm cursor-pointer">
                BUY
              </button>
            </div>
          </motion.div>
        );
      })}

      <button
        onClick={() => shift(-1)}
        className="absolute left-20 bottom-52 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200 z-40">
        <ChevronsLeft className="text-purple-500" />
      </button>
      <button
        onClick={() => shift(1)}
        className="absolute right-20 bottom-52 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200 z-40">
        <ChevronsRight className="text-purple-500" />
      </button>
    </div>
  );
}
