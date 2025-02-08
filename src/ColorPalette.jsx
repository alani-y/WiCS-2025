import React from "react";

const ColorPalette = () => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F4A261", "#E76F51"];
  
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">Color Palette</h1>
      <p className="text-gray-500 mb-4">Select a color that matches your outfit</p>
      
      <div className="grid grid-cols-5 gap-4">
        {colors.map((color) => (
          <div
            key={color}
            className="h-16 w-16 rounded-lg shadow-sm"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;

