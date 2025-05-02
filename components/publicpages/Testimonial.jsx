'use client'
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Shawn Mickel",
    role: "Student - UI/UX",
    image: "/assets/users/user1.jpg",
    quote:
      "Essent vehicula, lacus mollis imperdiet tempor, ante vehicula lorem, dapibus metus nunc non risus. laoreet augue eu, interdum ex.",
  },
  {
    name: "Lana Rose",
    role: "Student - Frontend",
    image: "/assets/users/user2.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla.",
  },
  {
    name: "Jake Smith",
    role: "Student - Backend",
    image: "/assets/users/user3.jpg",
    quote:
      "Praesent vel sem id erat finibus tincidunt. Integer viverra justo non odio varius.",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const next = () => setCurrent((current + 1) % length);
  const prev = () => setCurrent((current - 1 + length) % length);

  const { name, role, image, quote } = testimonials[current];

  return (
    <section className="relative px-4 py-20 bg-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-900">
          Our user reviews
        </h2>
        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          Morbi posuere a neque at porta. Nunc pharetra malesuada justo in
          rhoncus. At tellus tristique, luctus enim at, commodo tellus.
        </p>
      </div>

      {/* Background user avatars */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/.png"
          alt="background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute top-1/4 left-10 w-16 h-16 rounded-full overflow-hidden">
          <img src="/assets/users/user2.jpg" alt="User" />
        </div>
        <div className="absolute top-1/3 right-10 w-16 h-16 rounded-full overflow-hidden">
          <img src="/assets/users/user3.jpg" alt="User" />
        </div>
        <div className="absolute bottom-10 left-20 w-14 h-14 rounded-full overflow-hidden">
          <img src="/assets/users/user4.jpg" alt="User" />
        </div>
        <div className="absolute bottom-10 right-16 w-14 h-14 rounded-full overflow-hidden">
          <img src="/assets/users/user5.jpg" alt="User" />
        </div>
      </div>

      {/* Carousel */}
      <div className="relative z-10 mt-20 flex flex-col items-center">
        <div className="flex items-center justify-between w-full max-w-xl">
          <button
            onClick={prev}
            className="bg-purple-200 text-purple-700 p-4 rounded-full hover:bg-purple-300 transition">
            <ChevronLeft />
          </button>

          <div className="bg-white shadow-lg rounded-2xl p-6 w-full mx-4">
            <div className="flex justify-center -mt-14">
              <img
                src={image}
                alt={name}
                className="w-24 h-24 rounded-full border-4 border-purple-500 object-cover shadow-lg"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-purple-900">
              {name}
            </h3>
            <p className="text-sm text-gray-500">{role}</p>
            <p className="mt-4 text-gray-700 italic text-sm md:text-base">
              “{quote}”
            </p>
          </div>

          <button
            onClick={next}
            className="bg-purple-200 text-purple-700 p-4 rounded-full hover:bg-purple-300 transition">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
