// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ChevronsLeft, ChevronsRight } from "lucide-react";
// import { Video, Play, Clock, Users } from "lucide-react";
// import { useRouter } from "next/navigation";

// const courses = [
//   {
//     title: "Web Development",
//     description: "MERN Stack",
//     image: "/webdev.jpg",
//     slug: "webdev",
//     features: [
//       { icon: "video", text: "30 Hr+ Video Lectures" },
//       { icon: "live", text: "Live Classes" },
//       { icon: "project", text: "Real World Projects" },
//       { icon: "doubt", text: "1:1 Doubt Solving" },
//     ],
//     price: 3999,
//     originalPrice: 5000,
//     discount: "20%",
//   },
//   {
//     title: "AI & ML",
//     description: "Neural Networks, Python, TensorFlow",
//     image: "/aiml.png",
//     features: [
//       { icon: "video", text: "40 Hr+ Video Lectures" },
//       { icon: "live", text: "Live AI Labs" },
//       { icon: "project", text: "ML Projects" },
//       { icon: "doubt", text: "1:1 Mentorship" },
//     ],
//     price: 4499,
//     originalPrice: 6000,
//     discount: "25%",
//   },
//   {
//     title: "Data Science",
//     description: "Pandas, NumPy, Data Analysis",
//     image: "/datascience.jpg",
//     features: [
//       { icon: "video", text: "35 Hr+ Content" },
//       { icon: "live", text: "Interactive Classes" },
//       { icon: "project", text: "Real Data Sets" },
//       { icon: "doubt", text: "Doubt Clearing" },
//     ],
//     price: 4299,
//     originalPrice: 5700,
//     discount: "24%",
//   },
//   {
//     title: "Cybersecurity",
//     description: "Ethical Hacking, Networks, Tools",
//     image: "/cybersecurity.jpg",
//     features: [
//       { icon: "video", text: "25 Hr+ Training" },
//       { icon: "live", text: "Live Simulations" },
//       { icon: "project", text: "Hands-on Labs" },
//       { icon: "doubt", text: "Expert Help" },
//     ],
//     price: 3799,
//     originalPrice: 4800,
//     discount: "21%",
//   },
//   {
//     title: "Cloud Computing",
//     description: "AWS, Azure, GCP",
//     image: "/cloudcomputing.webp",
//     features: [
//       { icon: "video", text: "30 Hr+ Sessions" },
//       { icon: "live", text: "Live Demos" },
//       { icon: "project", text: "Cloud Projects" },
//       { icon: "doubt", text: "Support Hours" },
//     ],
//     price: 4599,
//     originalPrice: 6000,
//     discount: "23%",
//   },
// ];

// export default function Course() {
//   const [centerIndex, setCenterIndex] = useState(0);
//   const visibleRange = 2;
//   const router = useRouter();
//   useEffect(() => {
//     const interval = setInterval(() => {
//       shift(1);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [centerIndex]);

//   const loopIndex = (i) => {
//     const len = courses.length;
//     return ((i % len) + len) % len;
//   };

//   const shift = (dir) => {
//     setCenterIndex((prev) => loopIndex(prev + dir));
//   };

//   const getCardProps = (index) => {
//     const offset = loopIndex(index - centerIndex);
//     let relativeOffset = index - centerIndex;

//     if (relativeOffset > courses.length / 2) relativeOffset -= courses.length;
//     if (relativeOffset < -courses.length / 2) relativeOffset += courses.length;

//     const absOffset = Math.abs(relativeOffset);
//     if (absOffset > visibleRange) return null;

//     const zIndex = 100 - absOffset;
//     const scale = 1 - absOffset * 0.1;
//     const blur = absOffset === 0 ? "0px" : "1px";
//     const rotateY = relativeOffset * 15;
//     const x = relativeOffset * 220;

//     return {
//       style: { zIndex, filter: `blur(${blur})` },
//       animate: {
//         x,
//         scale,
//         rotateY,
//         transition: { duration: 0.5, ease: "easeInOut" },
//       },
//     };
//   };
//   const getIcon = (iconName) => {
//     switch (iconName) {
//       case "video":
//         return <Video className="w-4 h-4 text-purple-500" />;
//       case "live":
//         return <Play className="w-4 h-4 text-green-500" />;
//       case "project":
//         return <Users className="w-4 h-4 text-blue-500" />;
//       case "doubt":
//         return <Clock className="w-4 h-4 text-red-500" />;
//       default:
//         return null;
//     }
//   };
//   return (
//     <div className="relative w-full flex items-center justify-center h-[700px] overflow-hidden bg-gradient-to-b from-white via-purple-50 to-white">
//       <h1 className="absolute top-0 text-5xl font-bold">Popular Courses</h1>
//       <p className="top-20 absolute text-center text-xl max-w-4xl font-normal text-gray-500">
//         "Courses are not just a path to knowledge; they are the bridges that
//         connect curiosity to expertise, guiding you step by step towards
//         mastering the unknown."
//       </p>
//       {courses.map((course, index) => {
//         const props = getCardProps(index);
//         if (!props) return null;

//         return (
//           <motion.div
//             key={index}
//             className="w-[260px] min-h-[430px] bg-white rounded-xl shadow-xl overflow-hidden flex flex-col absolute border border-gray-200 mt-24"
//             initial={false}
//             animate={props.animate}
//             style={props.style}>
//             <div className="text-center p-3">
//               <h2 className="text-lg font-bold mb-1">{course.title}</h2>
//               <p className="text-sm text-gray-600">{course.description}</p>
//             </div>
//             <img
//               src={course.image}
//               alt={course.title}
//               className="h-36 w-full object-cover"
//             />
//             <div className="p-3 flex-1 text-left text-sm text-gray-700 space-y-2">
//               {course.features.map((item, i) => (
//                 <div key={i} className="flex items-center gap-2">
//                   {getIcon(item.icon)}
//                   <span>{item.text}</span>
//                 </div>
//               ))}
//             </div>
//             <div className="px-4 pb-4 mt-auto flex items-center justify-between">
//               <div>
//                 <p className="text-md font-bold">₹{course.price}</p>
//                 <p className="text-xs text-gray-500">
//                   <span className="line-through">₹{course.originalPrice}</span>
//                   <span className="text-green-600">
//                     ({course.discount} off)
//                   </span>
//                 </p>
//               </div>
//               <button
//                 onClick={() => router.push(`/courses/${course.slug}`)}
//                 className="bg-[#5BC0EB] text-white px-3 py-1 rounded hover:bg-purple-400 text-sm cursor-pointer">
//                 BUY
//               </button>
//             </div>
//           </motion.div>
//         );
//       })}

//       <button
//         onClick={() => shift(-1)}
//         className="absolute left-20 bottom-52 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200 z-40">
//         <ChevronsLeft className="text-purple-500" />
//       </button>
//       <button
//         onClick={() => shift(1)}
//         className="absolute right-20 bottom-52 -translate-y-1/2 mt- bg-white p-3 rounded-full shadow hover:bg-gray-200 z-40">
//         <ChevronsRight className="text-purple-500" />
//       </button>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { Video, Play, Clock, Users } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Course() {
  const cards = [
    { id: 1, color: "bg-red-400" },
    { id: 2, color: "bg-green-400" },
    { id: 3, color: "bg-blue-400" },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center gap-3 space-y-6 py-10 bg-[#f8f5fc]">
      <h1 className="text-6xl font-bold">Popular Courses</h1>
      <p className="text-center text-xl max-w-4xl font-normal text-gray-500">
        "Courses are not just a path to knowledge; they are the bridges that
        connect curiosity to expertise, guiding you step by step towards
        mastering the unknown."
      </p>

      <div className="w-full flex flex-wrap justify-center gap-20 p-6 mt-2">
        {/* Card 1 */}
        <div className="relative group max-w-[350px] h-[500px] rounded-xl overflow-hidden">
          {/* Animated Gradient Border */}
          <div className="absolute -inset-[2px] rounded-xl bg-[conic-gradient(from_0deg,var(--tw-gradient-stops))] from-purple-400 via-pink-500 to-red-500 animate-spin-slow z-0" />

          {/* Inner Content Card */}
          <div className="relative z-10 h-full w-full rounded-xl shadow-lg overflow-hidden border border-slate-200 bg-white transition-transform transform hover:scale-100 hover:shadow-2xl">
            {/* Top 45% Highlight */}
            <div className="relative h-[45%]">
              <img
                src="webdev.jpg"
                alt="Web Development"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />
            </div>

            {/* Bottom 55% Content */}
            <div className="h-[60%] p-4 bg-white">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Web Development</h2>
                <div className="flex items-center bg-yellow-100 text-yellow-700 text-sm font-semibold px-2 py-1 rounded-full shadow">
                  4.8
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-4 h-4 ml-1 text-yellow-500">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-2">
                Learn frontend and backend skills to build powerful web apps
                using the MERN stack.
              </p>

              <div className="flex items-center gap-2 mt-5">
                {/* Network Loading Icon */}
                <div className="flex gap-[2px] items-end h-4">
                  <div className="w-[3px] h-1 bg-purple-500 animate-pulse delay-[0ms] rounded-sm"></div>
                  <div className="w-[3px] h-2 bg-purple-500 animate-pulse delay-[100ms] rounded-sm"></div>
                  <div className="w-[3px] h-3 bg-purple-500 animate-pulse delay-[200ms] rounded-sm"></div>
                  <div className="w-[3px] h-4 bg-purple-500 animate-pulse delay-[300ms] rounded-sm"></div>
                </div>

                {/* Heading Text */}
                <h3 className="text-lg text-gray-700 font-medium">
                  Beginner to Advanced
                </h3>
              </div>

              <div className="flex items-center gap-2 mt-2 text-lg text-gray-700 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 fill-purple-500"
                  viewBox="0 0 24 24">
                  <path d="M17 10.5V6c0-1.1-.9-2-2-2H5C3.9 4 3 4.9 3 6v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4.5l4 4v-11l-4 4z" />
                </svg>
                <span>Live Mentorship</span>
              </div>

              <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div></div>
                <button className="w-full md:w-auto py-2 px-6 bg-purple-950 hover:bg-purple-900 text-white font-semibold rounded-lg shadow transition">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-[350px] h-[500px] rounded-xl shadow-lg overflow-hidden border border-slate-200 transition-transform transform hover:scale-100 hover:shadow-2xl">
          {/* Top 40% Highlight */}
          <div className="relative h-[45%]">
            <img
              src="datascience.jpg"
              alt="Data Science"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />
          </div>

          {/* Bottom 60% Content */}
          <div className="h-[60%] p-4 bg-white">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Data Science</h2>

              <div className="flex items-center bg-yellow-100 text-yellow-700 text-sm font-semibold px-2 py-1 rounded-full shadow">
                4.7
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-4 h-4 ml-1 text-yellow-500">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-2">
              Dive into data analysis, machine learning, and real-world projects
              with Python.
            </p>

            <div className="flex items-center gap-2 mt-5">
              {/* Network Loading Icon */}
              <div className="flex gap-[2px] items-end h-4">
                <div className="w-[3px] h-1 bg-purple-500 animate-pulse delay-[0ms] rounded-sm"></div>
                <div className="w-[3px] h-2 bg-purple-500 animate-pulse delay-[100ms] rounded-sm"></div>
                <div className="w-[3px] h-3 bg-purple-500 animate-pulse delay-[200ms] rounded-sm"></div>
                <div className="w-[3px] h-4 bg-purple-500 animate-pulse delay-[300ms] rounded-sm"></div>
              </div>

              {/* Heading Text */}
              <h3 className="text-lg text-gray-700 font-medium">
                Beginner to Advanced
              </h3>
            </div>

            {/* Live Mentorship Row */}

            <div className="flex items-center gap-2 mt-2 text-lg text-gray-700 font-medium">
              {/* Icon (Live / Video / Mic / Mentor Style) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-purple-500"
                viewBox="0 0 24 24">
                <path d="M17 10.5V6c0-1.1-.9-2-2-2H5C3.9 4 3 4.9 3 6v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4.5l4 4v-11l-4 4z" />
              </svg>
              <span>Live Mentorship</span>
            </div>

            <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              {/* Badge */}
              <div></div>

              {/* Button */}
              <button className="w-full md:w-auto py-2 px-6  bg-purple-950 hover:bg-purple-900 text-white font-semibold rounded-lg shadow  transition">
                Explore Now
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="max-w-[350px] h-[500px] rounded-xl shadow-lg overflow-hidden border border-slate-200 transition-transform transform hover:scale-100 hover:shadow-2xl">
          {/* Top 40% Highlight */}
          <div className="relative h-[45%]">
            <img
              src="manage.jpg"
              alt="Management"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />
          </div>

          {/* Bottom 60% Content */}
          <div className="h-[60%] p-4 bg-white">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Management</h2>

              <div className="flex items-center bg-yellow-100 text-yellow-700 text-sm font-semibold px-2 py-1 rounded-full shadow">
                4.7
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-4 h-4 ml-1 text-yellow-500">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-2">
              Master essential business and leadership skills to boost your
              career growth.
            </p>

            <div className="flex items-center gap-2 mt-5">
              {/* Heading Text */}
              <h3 className="text-lg text-gray-700 font-medium">
                Beginner to Advanced
              </h3>
            </div>

            {/* Live Mentorship Row */}

            <div className="flex items-center gap-2 mt-2 text-lg text-gray-700 font-medium">
              {/* Icon (Live / Video / Mic / Mentor Style) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-purple-500"
                viewBox="0 0 24 24">
                <path d="M17 10.5V6c0-1.1-.9-2-2-2H5C3.9 4 3 4.9 3 6v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4.5l4 4v-11l-4 4z" />
              </svg>
              <span>Live Mentorship</span>
            </div>

            <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              {/* Badge */}
              <div></div>

              {/* Button */}
              <button className="w-full md:w-auto py-2 px-6 text-white bg-purple-950 hover:bg-purple-900 font-semibold rounded-lg shadow transition">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
