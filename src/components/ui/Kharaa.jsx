import React from "react";
import { FaUser, FaGraduationCap, FaLightbulb, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function WhatWeGive() {
  return (
    <div className="flex items-center justify-between px-20 py-20 bg-white">

      {/* left text */}
      <div className="max-w-sm">
        <p className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
          WHAT WE GIVE
        </p>

        <h2 className="text-4xl font-bold text-gray-900 leading-snug mt-3">
          What do You <br /> Get From Us
        </h2>

        <p className="text-gray-400 mt-4 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Etiam dignissim, sem non convallis molestie.
        </p>
      </div>


      {/* cards */}
      <div className="flex gap-6">

        {/* card 1 */}
        <div className="w-64 p-8 rounded-xl bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-lg">

          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-yellow-400 mb-5">
            <FaUser />
          </div>

          <h3 className="font-semibold text-lg mb-2">
            Professional Teacher
          </h3>

          <p className="text-sm text-blue-100 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam dignissim sem non convallis molestie.
          </p>

        </div>


        {/* card 2 */}
        <div className="w-64 p-8 rounded-xl bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-lg">

          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-yellow-400 mb-5">
            <FaGraduationCap />
          </div>

          <h3 className="font-semibold text-lg mb-2">
            Course Certificate
          </h3>

          <p className="text-sm text-blue-100 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam dignissim sem non convallis molestie.
          </p>

        </div>


        {/* card 3 */}
        <div className="w-64 p-8 rounded-xl bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-lg">

          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-yellow-400 mb-5">
            <FaLightbulb />
          </div>

          <h3 className="font-semibold text-lg mb-2">
            interesting learning
          </h3>

          <p className="text-sm text-blue-100 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam dignissim sem non convallis molestie.
          </p>

        </div>

      </div>


   


    </div>
  );
}

export default WhatWeGive;