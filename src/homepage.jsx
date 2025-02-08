import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-6">What Are You Looking For?</h1>
      
      <div className="grid grid-cols-2 gap-6">
        <Link to="/style" className="border rounded-lg p-6 shadow-sm hover:shadow-lg block">
          <h3 className="text-lg font-medium">Style</h3>
          <p>Explore different outfit styles</p>
        </Link>
        
        <Link to="/colorpalette" className="border rounded-lg p-6 shadow-sm hover:shadow-lg block">
          <h3 className="text-lg font-medium">Palette</h3>
          <p>Match colors for your outfits</p>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;

