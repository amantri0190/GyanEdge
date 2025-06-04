"use client";
import React, { useState } from "react";

// Course Modules Data
const courseModules = [
  {
    title: "Introduction to Web Development & MERN Stack",
    points: [
      "Understand modern web app architecture.",
      "Overview of MERN components.",
      "How frontend and backend communicate.",
    ],
  },
  {
    title: "Frontend Fundamentals with HTML, CSS & JavaScript",
    points: [
      "Create responsive layouts using Flexbox and Grid.",
      "Use JavaScript to make pages interactive.",
      "Design accessible web interfaces.",
    ],
  },
  {
    title: "Building Dynamic Interfaces with React.js",
    points: [
      "Use hooks for managing state and side effects.",
      "Break UI into reusable components.",
      "Build scalable, maintainable frontends.",
    ],
  },
  {
    title: "Backend Development with Node.js & Express.js",
    points: [
      "Create RESTful APIs using Express.",
      "Understand middleware and routing.",
      "Connect backend with frontend apps.",
    ],
  },
  {
    title: "Working with Databases: MongoDB & Mongoose",
    points: [
      "Design database schemas using Mongoose.",
      "Perform CRUD operations.",
      "Connect MongoDB with Express backend.",
    ],
  },
  {
    title: "User Authentication & Authorization (JWT, Roles)",
    points: [
      "Implement login/signup with JWT.",
      "Secure routes using middleware.",
      "Role-based access control.",
    ],
  },
  {
    title: "Deployment & DevOps Basics (GitHub, CI/CD, Hosting)",
    points: [
      "Use GitHub for version control.",
      "Automate deployments with CI/CD tools.",
      "Deploy to platforms like Vercel or Render.",
    ],
  },
  {
    title: "Capstone Project: Build & Deploy a Full-Stack App",
    points: [
      "Create a project using all learned concepts.",
      "Deploy the app and test functionality.",
      "Write documentation and host it.",
    ],
  },
  {
    title:
      "Interview Preparation & Career Support (Portfolio, Resume, Mock Interviews)",
    points: [
      "Build an impressive portfolio and resume.",
      "Practice coding and system design problems.",
      "Get guidance for mock interviews.",
    ],
  },
];

export default function WebdevCoursePage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 text-gray-900 font-sans min-h-screen mt-20">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Sidebar - Course Structure */}
        <div className="md:col-span-1">
          <div className="sticky top-8 rounded-xl p-4 bg-white">
            <h2 className="text-lg font-semibold mb-4">Course Structure</h2>
            <ul className="text-sm text-gray-800 space-y-2">
              {courseModules.map((module, index) => (
                <li
                  key={index}
                  onClick={() => toggleDropdown(index)}
                  className={`transition-all duration-200 cursor-pointer bg-purple-100 rounded-md p-3 border border-white`}>
                  <div className="font-semibold">{module.title}</div>
                  {activeIndex === index && (
                    <ul className="mt-2 text-xs list-disc list-inside text-gray-700">
                      {module.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Center Section - Video Preview and Description */}
        <div className="md:col-span-2">
          <video
            className="aspect-video bg-gray-200 rounded-xl w-full"
            controls
            src="/23354-334950206_small.mp4">
            Your browser does not support the video tag.
          </video>

          <h1 className="text-3xl font-bold mt-4">
            MERN Stack Development Course
          </h1>
          <p className="text-gray-600 mt-2">
            Learn MERN Stack Step-by-Step with Real Projects – Perfect for
            Beginners!
          </p>

          <div className="flex items-center gap-2 mt-4">
            <div className="w-8 h-8 rounded-full bg-black" />
            <p className="text-sm font-medium">Harsh Pathak</p>
          </div>

          <div className="flex gap-6 mt-4">
            <p>🖤 892</p>
            <p>🔗 Share</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="text-gray-700 mt-2">
              Unlock Your Web Dev Potential with the MERN Stack! <br />
              Master MongoDB, Express.js, React, and Node.js in this hands-on
              course designed to take you from zero to full-stack hero. Whether
              you're just starting out or looking to level up, we’ll guide you
              through building real-world, production-ready web apps—step by
              step.
            </p>
          </div>

          <div className="grid grid-cols-3 mt-6 gap-4">
            <div>
              <p className="text-sm text-gray-500">Duration</p>
              <p className="font-medium">22h 28m</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Skill level</p>
              <p className="font-medium">Beginner</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Views</p>
              <p className="font-medium">12,620</p>
            </div>
          </div>

          {/* Enroll Now Section */}
          <div className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-bold mb-4">Enroll Now</h2>
            <p className="text-gray-600 mb-4">
              Join thousands of students and start your MERN stack journey
              today!
            </p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold hover:bg-purple-700 transition duration-300 transform hover:scale-105">
                  Get Started Now
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Sidebar - Purchase and Info */}
        <div className="md:col-span-1">
          <div className="rounded-xl p-6 shadow-md bg-white">
            <p className="text-lg font-bold text-purple-600 animate-pulse">
              ₹3499{" "}
              <span className="line-through text-gray-400 text-base ml-2">
                ₹5000
              </span>
            </p>
            <p className="text-sm text-green-600 font-semibold mt-1">30% OFF</p>

            <div className="mt-4 text-sm text-gray-700 space-y-2">
              <p>✅ 22 hours on-demand video</p>
              <p>✅ 9 Articles</p>
              <p>✅ 8 Downloadable resources</p>
              <p>✅ Mobile version</p>
            </div>

            <button className="w-full bg-purple-600 text-white py-2 mt-6 rounded-md font-semibold hover:bg-purple-700 transition animate-bounce">
              Add to cart
            </button>
            <button className="w-full border border-purple-600 text-purple-600 py-2 mt-2 rounded-md font-semibold duration-300 transform hover:scale-105">
              Buy now
            </button>
          </div>

          <div className="flex items-center mt-6 gap-3">
            <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
            <div>
              <p className="text-sm font-semibold">Rating</p>
              <p className="text-xs text-gray-600">
                2,492 Students (4.88 rating)
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">Publisher</h3>
            <div className="flex items-center mt-2 gap-3">
              <div className="w-10 h-10 bg-black rounded-full" />
              <div>
                <p className="font-medium text-sm">Harsh Pathak</p>
                <p className="text-xs text-gray-500">MERN DEVELOPER</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              Hey! My name is Harsh Pathak, I’m 26 and I’m a freelance MERN
              stack developer with around four years of experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
