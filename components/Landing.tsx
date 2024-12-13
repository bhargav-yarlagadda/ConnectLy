import React from "react";

export default function Landing() {
  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen px-6 flex items-center justify-center">
      <section className="text-center animate-fade-in">
        {/* Header Section */}
        <div className="max-w-2xl mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight animate-slide-up">
            One Link
            <br />
            for everything.
          </h1>
          <h2 className="text-gray-400 text-lg md:text-xl mt-6 opacity-80 animate-slide-up">
            Share your links, social profiles, contact info, and more,
            <br />
            all on one customizable page.
          </h2>
        </div>

        {/* Call-to-Action Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mt-8 animate-fade-in">
          <span className=" bg-white rounded-sm text-gray-500 text-sm md:text-lg sm:text-md font-small flex items-center mb-4 sm:mb-0">
            connectly.to/
            <input
              type="text"
              className="py-1 text-sm md:text-lg rounded-md text-gray-800 border-2 focus:outline-none border-none none w-full sm:w-auto"
              placeholder="your unique username"
            />
          </span>
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-lg transition duration-300 ease-in-out w-full sm:w-auto">
          Get Started
          </button>
        </div>
      </section>
    </main>
  );
}
