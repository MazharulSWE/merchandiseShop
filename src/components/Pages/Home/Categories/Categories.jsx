import React from "react";
import baby from "../../../../images/sat.jpg";
import man from "../../../../images/man.jpg";
import woman from "../../../../images/woman.jpg";

const Categories = () => {
  return (
    <div className="md:-mt-48 my-container grid grid-cols-1 gap-8 md:grid-cols-3">
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transform transition hover:-translate-y-5"
      >
        <div className="h-80 overflow-hidden">
          <img
            className="w-full object-cover"
            src={man}
            alt="Sunset in the mountains"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-700">
            Man's Style
          </div>
          <p className="text-gray-700 text-base"></p>
        </div>
      </div>

      <div
        data-aos="flip-left"
        data-aos-duration="1500"
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transform transition hover:-translate-y-5"
      >
        <div className="h-80 overflow-hidden">
          <img className="w-full" src={woman} alt="Sunset in the mountains" />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-700">
            Women's Style
          </div>
          <p className="text-gray-700 text-base"></p>
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transform transition hover:-translate-y-5"
      >
        <div className="h-80 overflow-hidden">
          <img className="w-full" src={baby} alt="Sunset in the mountains" />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-700">
            Stationeries
          </div>
          <p className="text-gray-700 text-base"></p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
