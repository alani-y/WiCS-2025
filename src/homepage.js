import React from "react";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Navbar */}
      <nav className="flex justify-end space-x-6 p-4 text-gray-700">
        <a href="#styles" className="hover:underline">Styles</a>
        <a href="#events" className="hover:underline">Events</a>
        <a href="#palettes" className="hover:underline">Palettes</a>
      </nav>
      
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-900">What Are You Looking For?</h1>
      </div>
      
      {/* Categories Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {[
          { title: "Style", desc: "Find outfit styles for any occasion." },
          { title: "Event", desc: "Pick outfits based on events." },
          { title: "Palette", desc: "Match colors for your outfits." }
        ].map((item, index) => (
          <div key={index} className="p-6 bg-white shadow-md rounded-lg">
            <div className="h-24 bg-gray-200 rounded-md mb-4"></div>
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
      
      {/* Styles Section */}
      <div className="max-w-5xl mx-auto mt-16">
        <h2 className="text-xl font-semibold text-gray-800">Styles</h2>
        <p className="text-gray-500 text-sm mb-4">Explore outfit inspirations.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Western", desc: "Classic western-style outfits." },
            { title: "Casual", desc: "Relaxed and stylish everyday wear." },
            { title: "Formal", desc: "Elegant attire for special occasions." }
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg">
              <div className="h-24 bg-gray-200 rounded-md mb-4"></div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;

