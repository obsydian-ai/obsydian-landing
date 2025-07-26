import React from "react";

const PinnedHeroSection: React.FC = () => {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      aria-label="Pinned Hero Section"
    >
      <div
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center z-10"
      >
        <h2
          className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg transition-opacity duration-700 ease-in-out animate-fade-in"
        >
          Welcome to the Next Level
        </h2>
        <p
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl text-center transition-opacity duration-700 delay-200 ease-in-out animate-fade-in"
        >
          Experience a new dimension of innovation. This section stays with you as you scroll, creating a memorable impact.
        </p>
        <a
          href="#contact"
          className="px-8 py-4 rounded-full bg-white text-gray-900 font-semibold shadow-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300 animate-fade-in"
          tabIndex={0}
          aria-label="Contact Us"
        >
          Contact Us
        </a>
      </div>
      {/* Optional animated background shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 opacity-10 rounded-full blur-2xl animate-pulse" />
      </div>
    </section>
  );
};

export default PinnedHeroSection; 