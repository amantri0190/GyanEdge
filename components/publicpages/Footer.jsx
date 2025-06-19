import React from "react";
import { Poppins } from "next/font/google";
import { Mail, MapPin, Phone } from "lucide-react";

const poppins = Poppins({
  weight: ["700"],
  subsets: ["latin"],
});

const FooterPage = () => {
  const year = new Date().getFullYear();
  return (
    <div
      className="p-4"
      style={{
        backgroundImage: `url('footer.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="max-w-4xl bg-purple-100 border border-gray-200 shadow-md mx-auto mt-36 rounded-4xl p-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className={`${poppins.className} text-4xl`}>Contact Us !</p>
          <p className="text-center font-normal text-lg text-gray-500 hidden sm:block">
            Whether you're looking to enroll in a course, partner with us, or
            just have a question—
            <span className="font-bold">We're here to help</span>. Our team is
            passionate about empowering learners and would love to hear from
            you.
          </p>
          <p className="font-bold text-center text-gray-500">
            Got a Question, Idea, or just want to say Hi?
          </p>

          <div className="flex items-center flex-grow pl-5 pr-2 rounded-4xl focus-within:ring-1 focus-within:ring-purple-700 bg-white mt-6">
            <input
              type="text"
              id="awb-input"
              placeholder="Send Your Mail Id"
              className="w-full mr-1 text-base sm:text-lg focus:outline-none h-14"
            />
            <button
              id="clear-btn"
              className="hidden text-2xl text-gray-400 hover:text-gray-800">
              ×
            </button>
            <button
              id="track-btn"
              className="w-auto px-6 py-3 my-2 ml-5 font-medium text-white bg-purple-700 rounded-4xl md:w-40 hover:bg-purple-800">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 mt-10 sm:mt-20 justify-center space-y-10 lg:ml-24">
        <div>
          <p className={`${poppins.className} text-white text-3xl`}>GyanEdge</p>
          <div className="flex items-center mt-5 sm:mt-10 gap-4">
            <img src="instagram.png" alt="instagram" className="size-10" />
            <img src="linkdin.png" alt="linkdin" className="size-10" />
            <img src="twitter.png" alt="twitter" className="size-10" />
          </div>
        </div>
        <div className="hidden sm:block">
          <p className={`${poppins.className} text-white text-3xl`}>Links</p>
          <div className="text-white space-y-2 mt-5 sm:mt-10">
            <p>Home</p>
            <p>Courses</p>
            <p>Career</p>
            <p>Resources</p>
            <p>About</p>
          </div>
        </div>
        <div>
          <p className={`${poppins.className} text-white text-3xl`}>Support</p>
          <div className="text-white space-y-2 mt-5 sm:mt-10">
            <p>FAQ</p>
            <p>How it works</p>
            <p>Features</p>
            <p>Contact</p>
          </div>
        </div>
        <div>
          <p className={`${poppins.className} text-white text-3xl`}>
            Contact Us
          </p>
          <div className="text-white space-y-2 mt-5 sm:mt-10">
            <span className="flex items-center gap-2">
              <Phone />
              <span className="bg-white text-black text-sm p-2 rounded-full cursor-pointer">
                Request Call
              </span>
            </span>
            <p className="mt-2 flex items-cente gap-2">
              <Mail />
              support@gyanedge.in
            </p>
            <p className="flex gap-2">
              <MapPin />
              Delhi,India
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center w-full text-white mt-10 sm:mt-20 gap-2 sm:px-28">
        <p className="font-normal text-xs md:text-sm">
          &copy; {year}
          <span className="font-bold">GyanEdge Private Limited</span>. All
          rights reserved.
        </p>
        <p>
          <span>Term of use</span> | <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default FooterPage;
