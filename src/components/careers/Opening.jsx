import React from "react";
import { FiChevronRight } from "react-icons/fi";

const Opening = () => {
  const jobs = Array.from({ length: 10 });

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-teal-600 text-xl font-bold uppercase mb-6">
          Job Openings
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <select className="border rounded-md px-4 py-2 text-sm text-gray-600">
            <option>Category</option>
          </select>
          <select className="border rounded-md px-4 py-2 text-sm text-gray-600">
            <option>Job type</option>
          </select>
          <select className="border rounded-md px-4 py-2 text-sm text-gray-600">
            <option>Job location</option>
          </select>
        </div>

        {/* Job List */}
        <div className="space-y-3">
          {jobs.map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-4 hover:bg-gray-200 transition"
            >
              <div className="flex-1 font-medium text-gray-800">
                Job Title
              </div>

              <div className="flex-1 text-sm text-gray-600 hidden sm:block">
                Department
              </div>

              <div className="flex-1 text-sm text-gray-600 hidden sm:block">
                Location
              </div>

              <FiChevronRight className="text-gray-500 text-xl" />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-end mt-6 gap-2 text-sm">
          <button className="px-2 py-1 bg-teal-600 text-white rounded">1</button>
          <button className="px-2 py-1 text-gray-600">2</button>
          <button className="px-2 py-1 text-gray-600">3</button>
          <button className="px-2 py-1 text-gray-600">4</button>
          <button className="px-2 py-1 text-gray-600">5</button>
        </div>

      </div>
    </section>
  );
};

export default Opening;
